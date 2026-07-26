#!/usr/bin/env npx tsx
/**
 * Weekly company intake — validate & upload a small batch of REAL companies.
 * ══════════════════════════════════════════════════════════════════════════
 *
 * Built for the recurring "4 new Jeddah companies a week" cadence (one per
 * service). bulk-upload.ts exists for one-off 150-row Excel imports; this is
 * the small, repeatable, safe path: strict validation, duplicate detection
 * against live Firestore, and a dry run by default.
 *
 * USAGE
 *   npx tsx scripts/add-companies.ts data/companies-jeddah-2026-w31.json            # validate only
 *   npx tsx scripts/add-companies.ts data/companies-jeddah-2026-w31.json --execute  # write
 *
 * The input is a JSON array — see data/companies.template.json for the schema
 * and a filled example.
 *
 * ⚠️ EVERY FIELD MUST BE REAL AND VERIFIED.
 *    crn / sbc_number / zatca_registered / qiwa_registered / nitaqat_band are
 *    trust signals shown to consumers and emitted into LocalBusiness schema.
 *    Leave them out when you have not verified them — an absent field is
 *    honest, a guessed one is a false claim about a real business.
 *    Verify a CRN at https://mc.gov.sa (وزارة التجارة) before entering it.
 */

import * as fs from 'fs';
import * as path from 'path';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';
import { CITIES, SERVICES } from '../src/lib/seed';

const COLLECTION = 'advertisers';
const EXECUTE = process.argv.includes('--execute');
const INPUT = process.argv.find(a => a.endsWith('.json') && !a.includes('serviceAccount'));

if (!INPUT) {
    console.error('Usage: npx tsx scripts/add-companies.ts <file.json> [--execute]');
    process.exit(1);
}

const citySlugs = new Set(CITIES.map(c => c.slug));
const serviceSlugs = new Set(SERVICES.map(s => s.slug));

interface CompanyInput {
    business_name: string;
    phone_number: string;
    whatsapp_number?: string;
    description: string;
    targeted_cities: string[];
    targeted_services: string[];
    targeted_neighborhoods?: string[];
    logo_url?: string;
    gallery?: string[];
    is_premium?: boolean;
    priority_score?: number;
    crn?: string;
    sbc_number?: string;
    street_address?: string;
    postal_code?: string;
    google_maps_url?: string;
    google_maps_place_id?: string;
    payment_methods?: string[];
    has_verified_employees?: boolean;
    zatca_registered?: boolean;
    qiwa_registered?: boolean;
    nitaqat_band?: 'green' | 'platinum' | 'low-green';
}

// ── Validation ──────────────────────────────────────────────────────────
// Saudi numbers in E.164, all four shapes a real business actually publishes:
//   +9665XXXXXXXX   mobile
//   +9661XXXXXXXX   landline (Riyadh 11, Jeddah/Makkah 12, …)
//   +966920XXXXXX   unified business number (very common on corporate sites)
//   +966800XXXXXXX  toll-free
const SA_PHONE = /^\+966(5\d{8}|1[2-7]\d{7}|920\d{6}|800\d{7})$/;
const CRN = /^\d{10}$/;               // Saudi commercial registration
const POSTAL = /^\d{5}$/;

function validate(c: CompanyInput, i: number): string[] {
    const e: string[] = [];
    const at = `[${i}] ${c.business_name || '(no name)'}`;

    if (!c.business_name?.trim()) e.push(`${at}: business_name is required`);
    else if (c.business_name.length > 90) e.push(`${at}: business_name is ${c.business_name.length} chars — keyword-stuffed names read as spam and break the <title>; use the registered trade name`);

    if (!SA_PHONE.test(c.phone_number || '')) e.push(`${at}: phone_number must be E.164 Saudi, e.g. +966512345678 (got "${c.phone_number}")`);
    if (c.whatsapp_number && !SA_PHONE.test(c.whatsapp_number)) e.push(`${at}: whatsapp_number must be E.164 Saudi (got "${c.whatsapp_number}")`);

    if (!c.description?.trim()) e.push(`${at}: description is required`);
    else if (c.description.trim().length < 80) e.push(`${at}: description is ${c.description.trim().length} chars — under 80 reads as thin/boilerplate`);

    if (!c.targeted_cities?.length) e.push(`${at}: targeted_cities is required`);
    for (const s of c.targeted_cities || []) if (!citySlugs.has(s)) e.push(`${at}: unknown city slug "${s}"`);

    if (!c.targeted_services?.length) e.push(`${at}: targeted_services is required`);
    for (const s of c.targeted_services || []) if (!serviceSlugs.has(s)) e.push(`${at}: unknown service slug "${s}"`);

    if (c.crn !== undefined && !CRN.test(c.crn)) e.push(`${at}: crn must be exactly 10 digits (got "${c.crn}") — omit it rather than guessing`);
    if (c.postal_code !== undefined && !POSTAL.test(c.postal_code)) e.push(`${at}: postal_code must be 5 digits (got "${c.postal_code}")`);
    if (c.priority_score !== undefined && (c.priority_score < 1 || c.priority_score > 99)) {
        e.push(`${at}: priority_score must be 1–99 (100 is reserved for the featured company)`);
    }
    if (c.google_maps_url && !/^https:\/\//.test(c.google_maps_url)) e.push(`${at}: google_maps_url must be an https URL`);

    // Trust signals imply a verified CRN — refuse the combination that would
    // render a "معتمدة وموثقة" badge with nothing behind it.
    const claimsTrust = c.zatca_registered || c.qiwa_registered || c.has_verified_employees || c.nitaqat_band || c.sbc_number;
    if (claimsTrust && !c.crn) {
        e.push(`${at}: trust flags (zatca/qiwa/nitaqat/sbc/verified_employees) set without a crn — verify the CR at mc.gov.sa or drop the flags`);
    }
    return e;
}

// ── Short code ──────────────────────────────────────────────────────────
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
function randomCode(): string {
    let s = '';
    for (let i = 0; i < 6; i++) s += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
    return s;
}

// ── Main ────────────────────────────────────────────────────────────────
(async () => {
    const file = path.resolve(process.cwd(), INPUT);
    if (!fs.existsSync(file)) {
        console.error(`✗ input not found: ${file}`);
        process.exit(1);
    }

    let rows: CompanyInput[];
    try {
        rows = JSON.parse(fs.readFileSync(file, 'utf-8'));
    } catch (err) {
        console.error(`✗ invalid JSON: ${(err as Error).message}`);
        process.exit(1);
    }
    if (!Array.isArray(rows)) {
        console.error('✗ input must be a JSON array of company objects');
        process.exit(1);
    }

    console.log(`\n📦 ${path.relative(process.cwd(), file)} — ${rows.length} record(s)`);
    console.log(`   mode: ${EXECUTE ? '\x1b[31mEXECUTE (writes to Firestore)\x1b[0m' : '\x1b[32mdry run\x1b[0m'}\n`);

    // 1. Field validation
    const errors = rows.flatMap((c, i) => validate(c, i));
    if (errors.length) {
        console.error('✗ validation failed:\n');
        errors.forEach(e => console.error('   ' + e));
        console.error(`\n${errors.length} error(s). Nothing written.\n`);
        process.exit(1);
    }
    console.log('  ✓ all records pass field validation');

    // 2. Firestore duplicate detection
    const sa = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'serviceAccountKey.json'), 'utf-8'));
    if (!getApps().length) initializeApp({ credential: cert(sa) });
    const db = getFirestore();

    const snap = await db.collection(COLLECTION).get();
    const existingNames = new Map<string, string>();
    const existingPhones = new Map<string, string>();
    const existingCrns = new Map<string, string>();
    const takenCodes = new Set<string>();
    snap.forEach(d => {
        const a = d.data();
        if (a.business_name) existingNames.set(String(a.business_name).trim(), a.business_name);
        if (a.phone_number) existingPhones.set(String(a.phone_number).replace(/\s/g, ''), a.business_name);
        if (a.crn) existingCrns.set(String(a.crn), a.business_name);
        if (a.short_code) takenCodes.add(a.short_code);
    });
    console.log(`  ✓ loaded ${snap.size} existing advertisers for duplicate checks`);

    const dupes: string[] = [];
    const seenInBatch = new Set<string>();
    rows.forEach((c, i) => {
        const at = `[${i}] ${c.business_name}`;
        const name = c.business_name.trim();
        const phone = c.phone_number.replace(/\s/g, '');
        if (existingNames.has(name)) dupes.push(`${at}: name already in Firestore`);
        if (existingPhones.has(phone)) dupes.push(`${at}: phone already used by "${existingPhones.get(phone)}"`);
        if (c.crn && existingCrns.has(c.crn)) dupes.push(`${at}: CRN already used by "${existingCrns.get(c.crn)}"`);
        if (seenInBatch.has(phone)) dupes.push(`${at}: phone duplicated within this batch`);
        seenInBatch.add(phone);
    });
    if (dupes.length) {
        console.error('\n✗ duplicates:\n');
        dupes.forEach(d => console.error('   ' + d));
        console.error('\nNothing written.\n');
        process.exit(1);
    }
    console.log('  ✓ no duplicates against Firestore or within the batch');

    // 3. Coverage summary — what this batch changes per service
    console.log('\n  Coverage added:');
    const byService: Record<string, number> = {};
    for (const c of rows) for (const s of c.targeted_services) byService[s] = (byService[s] || 0) + 1;
    Object.entries(byService).sort().forEach(([s, n]) => console.log(`    ${s.padEnd(26)} +${n}`));

    if (!EXECUTE) {
        console.log('\n\x1b[32m✓ dry run clean.\x1b[0m Re-run with --execute to write.\n');
        return;
    }

    // 4. Write
    const now = new Date();
    const batch = db.batch();
    const written: string[] = [];

    for (const c of rows) {
        let code = randomCode();
        while (takenCodes.has(code)) code = randomCode();
        takenCodes.add(code);

        const ref = db.collection(COLLECTION).doc();
        batch.set(ref, {
            short_code: code,
            business_name: c.business_name.trim(),
            phone_number: c.phone_number,
            whatsapp_number: c.whatsapp_number || c.phone_number,
            logo_url: c.logo_url || '',
            is_premium: c.is_premium ?? false,
            priority_score: c.priority_score ?? 50,
            subscription_expiry: null,
            targeted_cities: c.targeted_cities,
            targeted_services: c.targeted_services,
            targeted_neighborhoods: c.targeted_neighborhoods || [],
            description: c.description.trim(),
            gallery: c.gallery || [],
            reviews: [],
            is_active: true,
            created_at: Timestamp.fromDate(now),
            updated_at: Timestamp.fromDate(now),
            // Optional trust fields — only written when actually supplied.
            ...(c.crn && { crn: c.crn }),
            ...(c.sbc_number && { sbc_number: c.sbc_number }),
            ...(c.street_address && { street_address: c.street_address }),
            ...(c.postal_code && { postal_code: c.postal_code }),
            ...(c.google_maps_url && { google_maps_url: c.google_maps_url }),
            ...(c.google_maps_place_id && { google_maps_place_id: c.google_maps_place_id }),
            ...(c.payment_methods?.length && { payment_methods: c.payment_methods }),
            ...(c.has_verified_employees !== undefined && { has_verified_employees: c.has_verified_employees }),
            ...(c.zatca_registered !== undefined && { zatca_registered: c.zatca_registered }),
            ...(c.qiwa_registered !== undefined && { qiwa_registered: c.qiwa_registered }),
            ...(c.nitaqat_band && { nitaqat_band: c.nitaqat_band }),
        });
        written.push(`${code}  ${c.business_name}  → /company/${code}`);
    }

    await batch.commit();
    console.log(`\n\x1b[32m✓ wrote ${written.length} advertiser(s)\x1b[0m\n`);
    written.forEach(w => console.log('   ' + w));
    console.log('\n  Next: bump EDGE_CACHE_VERSION so cached listing pages pick them up.\n');
})().catch(err => {
    console.error('✗ ' + err.message);
    process.exit(1);
});
