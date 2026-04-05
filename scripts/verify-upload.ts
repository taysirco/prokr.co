/**
 * Deep Comparison: New (Part 2) vs Old companies
 * Checks every field, every rule, every constraint
 */

import * as fs from 'fs';
import * as path from 'path';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';

const SA = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../serviceAccountKey.json'), 'utf-8'));
if (getApps().length === 0) initializeApp({ credential: cert(SA) });
const db = getFirestore();

const VALID_CITIES = new Set([
    'riyadh','al-kharj','qassim','buraidah','onizah','ar-rass','diriyah','majmaah',
    'jeddah','makkah','madinah','taif','yanbu','rabigh',
    'dammam','al-khobar','dhahran','jubail','al-ahsa','qatif','hafr-albatin','ras-tanura',
    'tabuk','hail','neom',
    'abha','khamis-mushait','najran','jazan','al-baha'
]);

const VALID_SERVICES = new Set([
    'furniture-moving','furniture-storage','cleaning','tanks-cleaning',
    'sofa-cleaning','carpet-cleaning','steam-cleaning','air-conditioner-cleaning',
    'swimming-pool-cleaning','glass-facades-cleaning','office-cleaning',
    'villas-cleaning','apartments-cleaning','furniture-cleaning','auto-cleaning',
    'oven-cleaning','councils-cleaning','hourly-cleaning','restaurant-chimney-cleaning',
    'pest-control','pesticide-spraying','termite-control','bed-bugs-control',
    'pigeon-control','cockroach-control','snake-control','rat-control',
    'water-leak-detection','roof-insulation','polyurethane-insulation',
    'epoxy-waterproofing','water-tank-insulation','thermal-insulation',
    'sewage-unblocking','sewage-suction',
]);

async function main() {
    const snap = await db.collection('advertisers').get();
    const allDocs = snap.docs.map(doc => ({ _id: doc.id, ...doc.data() })) as any[];

    // Classify
    const newCompanies = allDocs.filter(d => {
        const createdAt = d.created_at instanceof Timestamp ? d.created_at.toDate() : new Date(d.created_at);
        return d.priority_score === 95 && createdAt >= new Date('2026-04-04T00:00:00Z');
    });
    const oldCompanies = allDocs.filter(d => !newCompanies.includes(d));

    console.log(`\n📊 TOTAL: ${allDocs.length} (Old: ${oldCompanies.length}, New: ${newCompanies.length})\n`);

    // ===== TEST 1: Every new company field matches Advertiser interface =====
    console.log('═══════════════════════════════════════');
    console.log('TEST 1: FIELD SCHEMA COMPLIANCE');
    console.log('═══════════════════════════════════════');

    const requiredFields = ['short_code','business_name','phone_number','whatsapp_number',
        'logo_url','is_premium','priority_score','subscription_expiry',
        'targeted_cities','targeted_services','description','gallery','reviews',
        'is_active','created_at','updated_at'];

    let t1Pass = 0, t1Fail = 0;
    const t1Errors: string[] = [];

    for (const d of newCompanies) {
        let ok = true;
        for (const f of requiredFields) {
            if (d[f] === undefined) {
                t1Errors.push(`${d.business_name}: missing "${f}"`);
                ok = false;
            }
        }
        // Type validation
        if (typeof d.is_premium !== 'boolean') { t1Errors.push(`${d.business_name}: is_premium not boolean`); ok = false; }
        if (typeof d.is_active !== 'boolean') { t1Errors.push(`${d.business_name}: is_active not boolean`); ok = false; }
        if (typeof d.priority_score !== 'number') { t1Errors.push(`${d.business_name}: priority_score not number`); ok = false; }
        if (!Array.isArray(d.targeted_cities)) { t1Errors.push(`${d.business_name}: targeted_cities not array`); ok = false; }
        if (!Array.isArray(d.targeted_services)) { t1Errors.push(`${d.business_name}: targeted_services not array`); ok = false; }
        if (!Array.isArray(d.reviews)) { t1Errors.push(`${d.business_name}: reviews not array`); ok = false; }
        if (!Array.isArray(d.gallery)) { t1Errors.push(`${d.business_name}: gallery not array`); ok = false; }
        if (!(d.created_at instanceof Timestamp)) { t1Errors.push(`${d.business_name}: created_at not Timestamp`); ok = false; }
        if (!(d.updated_at instanceof Timestamp)) { t1Errors.push(`${d.business_name}: updated_at not Timestamp`); ok = false; }
        if (ok) t1Pass++; else t1Fail++;
    }
    console.log(`  ✅ Pass: ${t1Pass}/${newCompanies.length}  ❌ Fail: ${t1Fail}`);
    if (t1Errors.length > 0) t1Errors.slice(0, 5).forEach(e => console.log(`    → ${e}`));

    // ===== TEST 2: Premium/Active/Subscription =====
    console.log('\n═══════════════════════════════════════');
    console.log('TEST 2: PREMIUM STATUS & SUBSCRIPTION');
    console.log('═══════════════════════════════════════');

    const notPremium = newCompanies.filter(d => d.is_premium !== true);
    const notActive = newCompanies.filter(d => d.is_active !== true);
    const wrongPriority = newCompanies.filter(d => d.priority_score !== 95);
    const noExpiry = newCompanies.filter(d => !(d.subscription_expiry instanceof Timestamp));
    const expiredSubs = newCompanies.filter(d => {
        if (d.subscription_expiry instanceof Timestamp) {
            return d.subscription_expiry.toDate() < new Date();
        }
        return true;
    });

    console.log(`  is_premium=true:      ${newCompanies.length - notPremium.length}/${newCompanies.length} ${notPremium.length === 0 ? '✅' : '❌'}`);
    console.log(`  is_active=true:       ${newCompanies.length - notActive.length}/${newCompanies.length} ${notActive.length === 0 ? '✅' : '❌'}`);
    console.log(`  priority_score=95:    ${newCompanies.length - wrongPriority.length}/${newCompanies.length} ${wrongPriority.length === 0 ? '✅' : '❌'}`);
    console.log(`  subscription valid:   ${newCompanies.length - expiredSubs.length}/${newCompanies.length} ${expiredSubs.length === 0 ? '✅' : '❌'}`);
    console.log(`  subscription type ok: ${newCompanies.length - noExpiry.length}/${newCompanies.length} ${noExpiry.length === 0 ? '✅' : '❌'}`);

    if (notPremium.length) notPremium.forEach(d => console.log(`    ❌ NOT premium: ${d.business_name}`));
    if (notActive.length) notActive.forEach(d => console.log(`    ❌ NOT active: ${d.business_name}`));

    // ===== TEST 3: Phone/WhatsApp Validity =====
    console.log('\n═══════════════════════════════════════');
    console.log('TEST 3: PHONE & WHATSAPP VALIDITY');
    console.log('═══════════════════════════════════════');

    let validPhones = 0, invalidPhones = 0;
    let validWA = 0, invalidWA = 0;
    const phoneIssues: string[] = [];

    for (const d of newCompanies) {
        const phone = String(d.phone_number || '');
        const wa = String(d.whatsapp_number || '');

        // Phone should be non-empty and have digits
        if (phone && phone.replace(/\D/g, '').length >= 9) {
            validPhones++;
        } else {
            invalidPhones++;
            phoneIssues.push(`${d.business_name}: phone="${phone}"`);
        }

        // WhatsApp should be non-empty and have digits
        if (wa && wa.replace(/\D/g, '').length >= 9) {
            validWA++;
        } else {
            invalidWA++;
            phoneIssues.push(`${d.business_name}: whatsapp="${wa}"`);
        }
    }

    console.log(`  Valid phones:    ${validPhones}/${newCompanies.length} ${invalidPhones === 0 ? '✅' : '❌'}`);
    console.log(`  Valid WhatsApp:  ${validWA}/${newCompanies.length} ${invalidWA === 0 ? '✅' : '❌'}`);
    if (phoneIssues.length) phoneIssues.slice(0, 5).forEach(e => console.log(`    → ${e}`));

    // Also check: will the AdvertiserCard render working links?
    let emptyPhoneLinks = 0;
    let emptyWALinks = 0;
    for (const d of newCompanies) {
        const phoneLink = `tel:${d.phone_number || ''}`;
        const waNum = (d.whatsapp_number || '').replace(/\D/g, '');
        const waLink = `https://wa.me/${waNum}`;
        if (phoneLink === 'tel:' || phoneLink === 'tel:0') emptyPhoneLinks++;
        if (waLink === 'https://wa.me/' || waLink === 'https://wa.me/0') emptyWALinks++;
    }
    console.log(`  Phone links functional: ${newCompanies.length - emptyPhoneLinks}/${newCompanies.length} ${emptyPhoneLinks === 0 ? '✅' : '❌'}`);
    console.log(`  WA links functional:    ${newCompanies.length - emptyWALinks}/${newCompanies.length} ${emptyWALinks === 0 ? '✅' : '❌'}`);

    // ===== TEST 4: City & Service Slugs Validity =====
    console.log('\n═══════════════════════════════════════');
    console.log('TEST 4: CITY & SERVICE SLUG VALIDITY');
    console.log('═══════════════════════════════════════');

    let invalidCitySlugs = 0;
    let invalidServiceSlugs = 0;
    let emptyCities = 0;
    let emptyServices = 0;
    const slugIssues: string[] = [];

    for (const d of newCompanies) {
        const cities = d.targeted_cities || [];
        const services = d.targeted_services || [];

        if (cities.length === 0) { emptyCities++; slugIssues.push(`${d.business_name}: 0 cities`); }
        if (services.length === 0) { emptyServices++; slugIssues.push(`${d.business_name}: 0 services`); }

        for (const c of cities) {
            if (!VALID_CITIES.has(c)) {
                invalidCitySlugs++;
                slugIssues.push(`${d.business_name}: invalid city "${c}"`);
            }
        }
        for (const s of services) {
            if (!VALID_SERVICES.has(s)) {
                invalidServiceSlugs++;
                slugIssues.push(`${d.business_name}: invalid service "${s}"`);
            }
        }
    }

    console.log(`  Valid city slugs:    ${invalidCitySlugs === 0 ? '✅' : `❌ ${invalidCitySlugs} invalid`}`);
    console.log(`  Valid service slugs: ${invalidServiceSlugs === 0 ? '✅' : `❌ ${invalidServiceSlugs} invalid`}`);
    console.log(`  Empty cities:        ${emptyCities} ${emptyCities === 0 ? '✅' : '❌'}`);
    console.log(`  Empty services:      ${emptyServices} ${emptyServices === 0 ? '✅' : '❌'}`);
    if (slugIssues.length) slugIssues.slice(0, 5).forEach(e => console.log(`    → ${e}`));

    // ===== TEST 5: Short Code Uniqueness =====
    console.log('\n═══════════════════════════════════════');
    console.log('TEST 5: SHORT CODE UNIQUENESS');
    console.log('═══════════════════════════════════════');

    const allCodes = allDocs.map(d => d.short_code).filter(Boolean);
    const uniqueCodes = new Set(allCodes);
    const dupeCount = allCodes.length - uniqueCodes.size;
    console.log(`  Codes: ${allCodes.length}, Unique: ${uniqueCodes.size}, Dupes: ${dupeCount} ${dupeCount === 0 ? '✅' : '❌'}`);

    // ===== TEST 6: Logo File Verification =====
    console.log('\n═══════════════════════════════════════');
    console.log('TEST 6: LOGO FILES VERIFICATION');
    console.log('═══════════════════════════════════════');

    let localOK = 0, localMissing = 0, remoteURLs = 0, noLogo = 0;
    const logoIssues: string[] = [];

    for (const d of newCompanies) {
        const logo = d.logo_url || '';
        if (!logo) {
            noLogo++;
        } else if (logo.startsWith('/images/')) {
            const filePath = path.resolve(__dirname, '../public', logo.replace(/^\//, ''));
            if (fs.existsSync(filePath)) {
                const stat = fs.statSync(filePath);
                if (stat.size < 500) {
                    logoIssues.push(`${d.business_name}: logo too small (${stat.size} bytes)`);
                    localMissing++;
                } else {
                    localOK++;
                }
            } else {
                localMissing++;
                logoIssues.push(`${d.business_name}: FILE NOT FOUND ${logo}`);
            }
        } else if (logo.startsWith('http')) {
            remoteURLs++;
        }
    }

    console.log(`  Local logos exist:  ${localOK} ✅`);
    console.log(`  Local logos MISSING: ${localMissing} ${localMissing === 0 ? '✅' : '❌'}`);
    console.log(`  Remote URLs:        ${remoteURLs} ${remoteURLs === 0 ? '✅' : '⚠️ should be local'}`);
    console.log(`  No logo at all:     ${noLogo}`);
    if (logoIssues.length) logoIssues.slice(0, 5).forEach(e => console.log(`    → ${e}`));

    // ===== TEST 7: Duplicate Business Names =====
    console.log('\n═══════════════════════════════════════');
    console.log('TEST 7: DUPLICATE BUSINESS NAMES');
    console.log('═══════════════════════════════════════');

    const nameMap = new Map<string, string[]>();
    allDocs.forEach(d => {
        const name = (d.business_name || '').trim();
        const arr = nameMap.get(name) || [];
        arr.push(d._id);
        nameMap.set(name, arr);
    });
    const dupeNames = [...nameMap.entries()].filter(([, ids]) => ids.length > 1);
    console.log(`  Unique names: ${nameMap.size}/${allDocs.length}`);
    console.log(`  Duplicated names: ${dupeNames.length} ${dupeNames.length === 0 ? '✅' : '⚠️'}`);
    dupeNames.forEach(([name, ids]) => console.log(`    "${name}" → ${ids.length} copies`));

    // ===== TEST 8: Silo Page Coverage =====
    console.log('\n═══════════════════════════════════════');
    console.log('TEST 8: SILO PAGE COVERAGE (OVERRIDE CHECK)');
    console.log('═══════════════════════════════════════');

    // Build the set of city+service combos from new companies
    const combos = new Set<string>();
    for (const d of newCompanies) {
        for (const c of (d.targeted_cities || [])) {
            for (const s of (d.targeted_services || [])) {
                combos.add(`${c}/${s}`);
            }
        }
    }

    // Check if override files exist
    const overridesDir = path.resolve(__dirname, '../src/lib/overrides');
    let overridesExist = 0;
    let overridesMissing = 0;
    const missingOverrides: string[] = [];

    for (const combo of combos) {
        const [city, service] = combo.split('/');
        // Check if override file exists: try common patterns
        const possiblePaths = [
            path.join(overridesDir, city, `${service}.ts`),
            path.join(overridesDir, city, `${service}.tsx`),
        ];
        const exists = possiblePaths.some(p => fs.existsSync(p));
        if (exists) {
            overridesExist++;
        } else {
            overridesMissing++;
            missingOverrides.push(combo);
        }
    }

    console.log(`  City+Service combos from new companies: ${combos.size}`);
    console.log(`  With override files:    ${overridesExist} ✅`);
    console.log(`  WITHOUT override files: ${overridesMissing} ${overridesMissing === 0 ? '✅' : '❌ (will 404!)'}`);
    if (missingOverrides.length) {
        console.log('  Missing overrides:');
        missingOverrides.forEach(m => console.log(`    ❌ /${m}`));
    }

    // ===== TEST 9: Old vs New — Same Rules Applied =====
    console.log('\n═══════════════════════════════════════');
    console.log('TEST 9: RULE PARITY (OLD vs NEW)');
    console.log('═══════════════════════════════════════');

    // Compare old premium companies vs new
    const oldPremium = oldCompanies.filter(d => d.is_premium === true);

    // Check that new has all fields old premium has
    const fieldsInOldPremium = new Set<string>();
    oldPremium.forEach(d => Object.keys(d).forEach(k => fieldsInOldPremium.add(k)));

    const fieldsInNew = new Set<string>();
    newCompanies.forEach(d => Object.keys(d).forEach(k => fieldsInNew.add(k)));

    const inOldNotNew = [...fieldsInOldPremium].filter(f => !fieldsInNew.has(f) && f !== '_id');
    const inNewNotOld = [...fieldsInNew].filter(f => !fieldsInOldPremium.has(f) && f !== '_id');

    console.log(`  Fields in old premium: ${fieldsInOldPremium.size}`);
    console.log(`  Fields in new:         ${fieldsInNew.size}`);
    if (inOldNotNew.length) console.log(`  ⚠️ In old but NOT in new: ${inOldNotNew.join(', ')}`);
    if (inNewNotOld.length) console.log(`  ℹ️ In new but NOT in old: ${inNewNotOld.join(', ')}`);
    if (inOldNotNew.length === 0 && inNewNotOld.length === 0) console.log('  ✅ Field parity is exact');

    // Check rendering rules: the silo page queries by city + is_premium
    // getAdvertisersBySilo filters: 
    //   premium: is_premium=true, targeted_cities contains citySlug, order by priority_score DESC, limit 15
    //   standard: is_premium=false, targeted_cities contains citySlug, limit 50
    //   Then filters in JS by targeted_services.includes(serviceSlug)

    // For riyadh/furniture-moving: how many new companies match?
    const riyadhFurnitureNew = newCompanies.filter(
        d => (d.targeted_cities || []).includes('riyadh') && (d.targeted_services || []).includes('furniture-moving')
    );
    const riyadhFurnitureOld = oldCompanies.filter(
        d => (d.targeted_cities || []).includes('riyadh') && (d.targeted_services || []).includes('furniture-moving') && d.is_premium
    );

    console.log(`\n  Sample: /riyadh/furniture-moving`);
    console.log(`    Old premium matching: ${riyadhFurnitureOld.length}`);
    console.log(`    New matching:         ${riyadhFurnitureNew.length}`);
    console.log(`    Total premium:        ${riyadhFurnitureOld.length + riyadhFurnitureNew.length} (limit 15 shown)`);

    // For jeddah/furniture-moving
    const jeddahFurnitureNew = newCompanies.filter(
        d => (d.targeted_cities || []).includes('jeddah') && (d.targeted_services || []).includes('furniture-moving')
    );
    const jeddahFurnitureOld = oldCompanies.filter(
        d => (d.targeted_cities || []).includes('jeddah') && (d.targeted_services || []).includes('furniture-moving') && d.is_premium
    );

    console.log(`  Sample: /jeddah/furniture-moving`);
    console.log(`    Old premium matching: ${jeddahFurnitureOld.length}`);
    console.log(`    New matching:         ${jeddahFurnitureNew.length}`);
    console.log(`    Total premium:        ${jeddahFurnitureOld.length + jeddahFurnitureNew.length} (limit 15 shown)`);

    // riyadh/pest-control
    const riyadhPestNew = newCompanies.filter(
        d => (d.targeted_cities || []).includes('riyadh') && (d.targeted_services || []).includes('pest-control')
    );
    const riyadhPestOld = oldCompanies.filter(
        d => (d.targeted_cities || []).includes('riyadh') && (d.targeted_services || []).includes('pest-control') && d.is_premium
    );

    console.log(`  Sample: /riyadh/pest-control`);
    console.log(`    Old premium matching: ${riyadhPestOld.length}`);
    console.log(`    New matching:         ${riyadhPestNew.length}`);
    console.log(`    Total premium:        ${riyadhPestOld.length + riyadhPestNew.length} (limit 15 shown)`);

    // ===== FINAL SCORE =====
    console.log('\n═══════════════════════════════════════');
    console.log('FINAL SCORE');
    console.log('═══════════════════════════════════════');

    const tests = [
        { name: 'Schema Compliance', pass: t1Fail === 0 },
        { name: 'Premium/Active Status', pass: notPremium.length === 0 && notActive.length === 0 },
        { name: 'Phone/WA Valid', pass: invalidPhones === 0 && invalidWA === 0 },
        { name: 'City Slugs Valid', pass: invalidCitySlugs === 0 && emptyCities === 0 },
        { name: 'Service Slugs Valid', pass: invalidServiceSlugs === 0 && emptyServices === 0 },
        { name: 'Short Code Unique', pass: dupeCount === 0 },
        { name: 'Logo Files Present', pass: localMissing === 0 },
        { name: 'No Duplicate Names', pass: dupeNames.length === 0 },
        { name: 'Silo Overrides', pass: overridesMissing === 0 },
    ];

    let totalPass = 0;
    for (const t of tests) {
        console.log(`  ${t.pass ? '✅' : '❌'} ${t.name}`);
        if (t.pass) totalPass++;
    }
    console.log(`\n  SCORE: ${totalPass}/${tests.length} tests passed`);
}

main().catch(e => { console.error(e); process.exit(1); });
