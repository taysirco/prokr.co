/**
 * Prokr Bulk Upload Script — Part 2
 * ===================================
 * Reads Companies Part 2.xlsx and uploads 145 companies to Firestore
 * ALL companies are set as PREMIUM with high priority (featured/verified)
 * 
 * Usage:
 *   npx tsx scripts/bulk-upload-part2.ts --dry-run     # Validate only
 *   npx tsx scripts/bulk-upload-part2.ts --execute      # Actually upload
 */

import * as XLSX from 'xlsx';
import * as path from 'path';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';
import * as fs from 'fs';

// ============================================
// CONFIG
// ============================================
const EXCEL_PATH = path.resolve(__dirname, '../Companies Part 2.xlsx');
const SERVICE_ACCOUNT_PATH = path.resolve(__dirname, '../serviceAccountKey.json');
const COLLECTION = 'advertisers';
const DRY_RUN = process.argv.includes('--dry-run');
const EXECUTE = process.argv.includes('--execute');

if (!DRY_RUN && !EXECUTE) {
    console.error('Usage: npx tsx scripts/bulk-upload-part2.ts [--dry-run | --execute]');
    process.exit(1);
}

// ============================================
// FIREBASE ADMIN INIT
// ============================================
const serviceAccount = JSON.parse(fs.readFileSync(SERVICE_ACCOUNT_PATH, 'utf-8'));

if (getApps().length === 0) {
    initializeApp({
        credential: cert(serviceAccount),
    });
}

const db = getFirestore();

// ============================================
// LOOKUP TABLES
// ============================================

// City slug mapping: Arabic → slug
const CITY_SLUG_MAP: Record<string, string> = {
    // Direct slugs
    'riyadh': 'riyadh',
    'jeddah': 'jeddah',
    'dammam': 'dammam',
    'makkah': 'makkah',
    'madinah': 'madinah',
    'al-khobar': 'al-khobar',
    'taif': 'taif',
    'tabuk': 'tabuk',
    'abha': 'abha',
    'khamis-mushait': 'khamis-mushait',
    'hail': 'hail',
    'najran': 'najran',
    'jazan': 'jazan',
    'jubail': 'jubail',
    'khobar': 'al-khobar',
    'alkharj': 'al-kharj',
    'ahsa': 'al-ahsa',
    'unaizah': 'onizah',
    'yanbu': 'yanbu',
    'al-ahsa': 'al-ahsa',
    'qatif': 'qatif',
    'al-kharj': 'al-kharj',
    'qassim': 'qassim',
    'buraidah': 'buraidah',
    'onizah': 'onizah',
    'dhahran': 'dhahran',
    'hafr-albatin': 'hafr-albatin',
    'al-baha': 'al-baha',
    'ar-rass': 'ar-rass',
    'neom': 'neom',
    'diriyah': 'diriyah',
    'majmaah': 'majmaah',
    'ras-tanura': 'ras-tanura',
    'rabigh': 'rabigh',

    // Arabic names → slugs
    'الرياض': 'riyadh',
    'جدة': 'jeddah',
    'الدمام': 'dammam',
    'مكة المكرمة': 'makkah',
    'مكة': 'makkah',
    'المدينة المنورة': 'madinah',
    'المدينة': 'madinah',
    'الخبر': 'al-khobar',
    'الطائف': 'taif',
    'تبوك': 'tabuk',
    'أبها': 'abha',
    'ابها': 'abha',       // ← بدون همزة (الصيغة المستخدمة في الملف)
    'خميس مشيط': 'khamis-mushait',
    'حائل': 'hail',
    'نجران': 'najran',
    'جازان': 'jazan',
    'الجبيل': 'jubail',
    'ينبع': 'yanbu',
    'الاحساء': 'al-ahsa',
    'الأحساء': 'al-ahsa',
    'القطيف': 'qatif',
    'الخرج': 'al-kharj',
    'القصيم': 'qassim',
    'بريدة': 'buraidah',
    'عنيزة': 'onizah',
    'الظهران': 'dhahran',
    'حفر الباطن': 'hafr-albatin',
    'الباحة': 'al-baha',
    'الرس': 'ar-rass',    // ← مدينة جديدة
    'نيوم': 'neom',
    'الدرعية': 'diriyah',
    'المجمعة': 'majmaah',
    'رأس تنورة': 'ras-tanura',
    'رابغ': 'rabigh',
};

// Service CATEGORY labels → service slugs
const SERVICE_CATEGORY_MAP: Record<string, string[]> = {
    'نقل الأثاث والعفش': ['furniture-moving'],
    'خدمات نقل وتخزين': ['furniture-moving', 'furniture-storage'],
    'خدمات التنظيف': ['cleaning'],
    'خدمات مكافحة الحشرات': ['pest-control'],
    'خدمات كشف التسربات والعزل': ['water-leak-detection', 'roof-insulation'],
    'تسليك المجاري والبيارات': ['sewage-unblocking', 'sewage-suction'],
    'خدمات الصرف الصحي': ['sewage-unblocking', 'sewage-suction'],
};

// Payment method normalization
const PAYMENT_MAP: Record<string, string> = {
    'cash': 'cash',
    'نقد': 'cash',
    'نقدي': 'cash',
    'كاش': 'cash',
    'bank_transfer': 'bank_transfer',
    'تحويل بنكي': 'bank_transfer',
    'تحويل': 'bank_transfer',
    'credit_card': 'credit_card',
    'بطاقة ائتمان': 'credit_card',
    'فيزا': 'credit_card',
    'visa': 'credit_card',
    'visa_mastercard': 'credit_card',
    'mada': 'mada',
    'مدى': 'mada',
};

// Nitaqat band normalization
const NITAQAT_MAP: Record<string, 'green' | 'platinum' | 'low-green'> = {
    'green': 'green',
    'أخضر': 'green',
    'high_green': 'green',
    'اخضر مرتفع': 'green',
    'platinum': 'platinum',
    'بلاتيني': 'platinum',
    'low-green': 'low-green',
    'low_green': 'low-green',
    'أخضر منخفض': 'low-green',
};

// ============================================
// SHORT CODE GENERATOR
// ============================================
function generateShortCode(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

const usedShortCodes = new Set<string>();

function getUniqueShortCode(): string {
    let code = generateShortCode();
    let attempts = 0;
    while (usedShortCodes.has(code) && attempts < 100) {
        code = generateShortCode();
        attempts++;
    }
    usedShortCodes.add(code);
    return code;
}

// ============================================
// NORMALIZERS
// ============================================
function normalizePhone(val: any): string {
    if (!val || val === 0 || val === '0' || String(val).trim() === '0') return '';
    const str = String(val).trim();
    const cleaned = str.replace(/[\s\-]/g, '');
    if (/^\+?\d{9,15}$/.test(cleaned)) return cleaned;
    return '';
}

function normalizeBoolean(val: any): boolean {
    if (typeof val === 'boolean') return val;
    if (val === undefined || val === null) return false;
    const str = String(val).toLowerCase().trim();
    return ['true', 'yes', 'نعم', '1'].includes(str);
}

function normalizeLogo(val: any): string {
    if (!val) return '';
    const str = String(val).trim();
    if (/^https?:\/\//i.test(str)) return str;
    return '';
}

function normalizeCities(val: any): string[] {
    if (!val) return [];
    const raw = String(val).trim();
    const parts = raw.split(/[,;،]+/).map(s => s.trim()).filter(Boolean);
    const slugs: string[] = [];
    for (const part of parts) {
        const slug = CITY_SLUG_MAP[part.toLowerCase()] || CITY_SLUG_MAP[part];
        if (slug) {
            slugs.push(slug);
        } else {
            console.warn(`  ⚠️  Unknown city: "${part}"`);
        }
    }
    return [...new Set(slugs)];
}

function normalizeServices(val: any): string[] {
    if (!val) return [];
    const raw = String(val).trim();

    // Check if this is a category label
    const categoryServices = SERVICE_CATEGORY_MAP[raw];
    if (categoryServices) return [...categoryServices];

    // Otherwise split and map
    const parts = raw.split(/[,;،]+/).map(s => s.trim()).filter(Boolean);
    const slugs: string[] = [];
    for (const part of parts) {
        const catSlugs = SERVICE_CATEGORY_MAP[part];
        if (catSlugs) {
            slugs.push(...catSlugs);
            continue;
        }
        if (/^[a-z][a-z\-]*$/.test(part)) {
            slugs.push(part);
        } else {
            console.warn(`  ⚠️  Unknown service: "${part}"`);
        }
    }
    return [...new Set(slugs)];
}

function normalizePaymentMethods(val: any): string[] {
    if (!val) return [];
    const raw = String(val).trim();
    const parts = raw.split(/[,;،]+/).map(s => s.trim()).filter(Boolean);
    const methods: string[] = [];
    for (const part of parts) {
        const method = PAYMENT_MAP[part.toLowerCase()] || PAYMENT_MAP[part];
        if (method) methods.push(method);
    }
    return [...new Set(methods)];
}

function normalizeNitaqat(val: any): 'green' | 'platinum' | 'low-green' | undefined {
    if (!val) return undefined;
    const str = String(val).trim().toLowerCase();
    return NITAQAT_MAP[str] || NITAQAT_MAP[String(val).trim()] || undefined;
}

function normalizeCRN(val: any): string {
    if (!val) return '';
    const str = String(val).trim();
    if (!str || str.length < 3) return '';
    return str;
}

// ============================================
// ROW TRANSFORMER — PART 2 SPECIAL
// All companies → is_premium: true, priority_score: 95
// ============================================
function transformRow(row: Record<string, any>, rowIndex: number): Record<string, any> | null {
    if (!row || Object.keys(row).length === 0) return null;

    const businessName = String(row['business_name'] || '').trim();
    if (!businessName) {
        console.warn(`  ⚠️  Row ${rowIndex}: Empty business_name, skipping`);
        return null;
    }

    const phone         = normalizePhone(row['phone_number']);
    const whatsapp      = normalizePhone(row['whatsapp_number']);
    const description   = String(row['description'] || '').trim();
    const cities        = normalizeCities(row['targeted_cities']);
    const services      = normalizeServices(row['targeted_services']);
    const paymentMethods = normalizePaymentMethods(row['payment_methods']);
    const nitaqatBand   = normalizeNitaqat(row['nitaqat_band']);
    const googleMapsPlaceId = String(row['google_maps_place_id'] || '').trim();
    const logo          = normalizeLogo(row['logo_url']);
    const crn           = normalizeCRN(row['crn']);
    const zatcaRegistered = row['zatca_registered'] !== undefined ? normalizeBoolean(row['zatca_registered']) : undefined;
    const qiwaRegistered  = row['qiwa_registered'] !== undefined ? normalizeBoolean(row['qiwa_registered']) : undefined;
    const googleMapsUrl   = String(row['google_maps_url'] || '').trim();
    const sbcNumber       = String(row['sbc_number'] || '').trim();
    const streetAddress   = String(row['street_address'] || '').trim();
    const postalCode      = String(row['postal_code'] || '').trim();
    const gallery = row['gallery']
        ? String(row['gallery']).split(/[,;]+/).map(s => s.trim()).filter(s => /^https?:\/\//i.test(s))
        : [];
    const hasVerifiedEmployees = row['has_verified_employees'] !== undefined ? normalizeBoolean(row['has_verified_employees']) : undefined;

    // ★ PART 2 OVERRIDE: All companies are PREMIUM with high priority
    const isPremium = true;
    const priorityScore = 95;
    const subscriptionExpiry = new Date('2027-04-05T00:00:00Z'); // 1 year from now

    if (cities.length === 0) {
        console.warn(`  ⚠️  Row ${rowIndex} (${businessName}): No valid cities`);
    }
    if (services.length === 0) {
        console.warn(`  ⚠️  Row ${rowIndex} (${businessName}): No valid services`);
    }

    const shortCode = getUniqueShortCode();
    const now = new Date();

    const doc: Record<string, any> = {
        short_code: shortCode,
        business_name: businessName,
        phone_number: phone,
        whatsapp_number: whatsapp,
        logo_url: logo,
        is_premium: isPremium,
        priority_score: priorityScore,
        subscription_expiry: Timestamp.fromDate(subscriptionExpiry),
        targeted_cities: cities,
        targeted_services: services,
        description: description,
        gallery: gallery,
        reviews: [],
        is_active: true,
        created_at: Timestamp.fromDate(now),
        updated_at: Timestamp.fromDate(now),
    };

    // Optional fields — only add if non-empty
    if (crn) doc.crn = crn;
    if (sbcNumber) doc.sbc_number = sbcNumber;
    if (streetAddress) doc.street_address = streetAddress;
    if (postalCode) doc.postal_code = postalCode;
    if (googleMapsUrl && /^https?:\/\//i.test(googleMapsUrl)) doc.google_maps_url = googleMapsUrl;
    if (googleMapsPlaceId) doc.google_maps_place_id = googleMapsPlaceId;
    if (paymentMethods.length > 0) doc.payment_methods = paymentMethods;
    if (hasVerifiedEmployees !== undefined) doc.has_verified_employees = hasVerifiedEmployees;
    if (zatcaRegistered !== undefined) doc.zatca_registered = zatcaRegistered;
    if (qiwaRegistered !== undefined) doc.qiwa_registered = qiwaRegistered;
    if (nitaqatBand) doc.nitaqat_band = nitaqatBand;

    return doc;
}

// ============================================
// MAIN
// ============================================
async function main() {
    console.log('====================================');
    console.log(`Prokr Bulk Upload PART 2 — ${DRY_RUN ? '🧪 DRY RUN' : '🚀 EXECUTE'}`);
    console.log('★ ALL companies → is_premium: true, priority_score: 95');
    console.log('====================================\n');

    if (!fs.existsSync(EXCEL_PATH)) {
        console.error(`❌ Excel file not found: ${EXCEL_PATH}`);
        process.exit(1);
    }

    const workbook = XLSX.readFile(EXCEL_PATH);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const rawData: Record<string, any>[] = XLSX.utils.sheet_to_json(sheet);

    console.log(`📊 Found ${rawData.length} rows in sheet "${sheetName}"\n`);

    // Transform all rows
    const documents: Record<string, any>[] = [];
    const errors: string[] = [];
    let skipped = 0;

    for (let i = 0; i < rawData.length; i++) {
        const rowNum = i + 2;
        try {
            const doc = transformRow(rawData[i], rowNum);
            if (doc) {
                documents.push(doc);
            } else {
                skipped++;
            }
        } catch (err: any) {
            errors.push(`Row ${rowNum}: ${err.message}`);
        }
    }

    // Stats
    console.log('\n====================================');
    console.log('📈 TRANSFORMATION SUMMARY');
    console.log('====================================');
    console.log(`✅ Valid documents:  ${documents.length}`);
    console.log(`⏭️  Skipped:         ${skipped}`);
    console.log(`❌ Errors:          ${errors.length}`);

    if (errors.length > 0) {
        console.log('\n--- Errors ---');
        errors.forEach(e => console.log(`  ${e}`));
    }

    const premiumCount = documents.filter(d => d.is_premium).length;
    const noPhoneCount = documents.filter(d => !d.phone_number && !d.whatsapp_number).length;
    const noLogoCount = documents.filter(d => !d.logo_url).length;
    const noCityCount = documents.filter(d => d.targeted_cities.length === 0).length;
    const noServiceCount = documents.filter(d => d.targeted_services.length === 0).length;

    console.log(`\n📊 Breakdown:`);
    console.log(`   ★ Premium (all):    ${premiumCount}`);
    console.log(`   No phone/whatsapp: ${noPhoneCount}`);
    console.log(`   No logo:           ${noLogoCount}`);
    console.log(`   No cities:         ${noCityCount}`);
    console.log(`   No services:       ${noServiceCount}`);

    const allCities = new Set<string>();
    const allServices = new Set<string>();
    documents.forEach(d => {
        d.targeted_cities.forEach((c: string) => allCities.add(c));
        d.targeted_services.forEach((s: string) => allServices.add(s));
    });
    console.log(`\n🌍 Unique cities:   ${allCities.size} → [${[...allCities].sort().join(', ')}]`);
    console.log(`🔧 Unique services: ${allServices.size} → [${[...allServices].sort().join(', ')}]`);

    if (DRY_RUN) {
        console.log('\n🧪 DRY RUN complete. No data was written to Firestore.');
        console.log('   Run with --execute to upload.');

        // Print sample docs
        console.log('\n--- Sample Documents (first 3) ---');
        documents.slice(0, 3).forEach((doc, i) => {
            console.log(`\n📄 Document ${i + 1}: ${doc.business_name}`);
            console.log(`   short_code:  ${doc.short_code}`);
            console.log(`   cities:      [${doc.targeted_cities.join(', ')}]`);
            console.log(`   services:    [${doc.targeted_services.join(', ')}]`);
            console.log(`   ★ is_premium: ${doc.is_premium}`);
            console.log(`   ★ priority:   ${doc.priority_score}`);
            console.log(`   phone:       ${doc.phone_number || '(empty)'}`);
            console.log(`   whatsapp:    ${doc.whatsapp_number || '(empty)'}`);
            console.log(`   logo:        ${doc.logo_url ? 'YES' : '(empty)'}`);
            console.log(`   description: ${(doc.description || '').substring(0, 80)}...`);
            console.log(`   maps_url:    ${doc.google_maps_url ? 'YES' : '(empty)'}`);
            console.log(`   address:     ${doc.street_address || '(empty)'}`);
        });

        process.exit(0);
    }

    // EXECUTE MODE
    if (noCityCount > 0 || noServiceCount > 0) {
        console.log(`\n⚠️  WARNING: ${noCityCount} docs have no cities, ${noServiceCount} have no services.`);
        console.log('   These will be uploaded but won\'t appear in any silo pages.');
    }

    console.log('\n🚀 Writing to Firestore...');
    const BATCH_SIZE = 450;
    let totalWritten = 0;

    for (let i = 0; i < documents.length; i += BATCH_SIZE) {
        const batch = db.batch();
        const chunk = documents.slice(i, i + BATCH_SIZE);

        for (const doc of chunk) {
            const ref = db.collection(COLLECTION).doc();
            batch.set(ref, doc);
        }

        await batch.commit();
        totalWritten += chunk.length;
        console.log(`   Batch ${Math.floor(i / BATCH_SIZE) + 1}: wrote ${chunk.length} docs (total: ${totalWritten}/${documents.length})`);
    }

    console.log('\n====================================');
    console.log(`✅ UPLOAD COMPLETE: ${totalWritten} PREMIUM companies added to Firestore`);
    console.log('====================================');
    console.log('Next steps:');
    console.log('1. Run: npx tsx scripts/download-logos.ts --execute');
    console.log('2. Check /admin dashboard for all companies');
    console.log('3. Verify a sample company page: /company/[short_code]');
    console.log('4. Check silo pages for city+service combinations');
}

main().catch(err => {
    console.error('❌ Fatal error:', err);
    process.exit(1);
});
