/**
 * Firestore Seeding Script
 * 
 * This script seeds the Firestore database with initial data:
 * 1. Cities and Services to static_data collection
 * 2. Sample advertisers for testing
 * 
 * Run with: npx ts-node --esm src/scripts/seed-firestore.ts
 */

import * as admin from 'firebase-admin';
import * as path from 'path';

// Load service account from project root
const serviceAccountPath = path.join(process.cwd(), 'serviceAccountKey.json');

// Cities data
const CITIES = [
    { slug: 'riyadh', name_ar: 'الرياض', name_en: 'Riyadh', region: 'central' },
    { slug: 'al-kharj', name_ar: 'الخرج', name_en: 'Al Kharj', region: 'central' },
    { slug: 'qassim', name_ar: 'القصيم', name_en: 'Al Qassim', region: 'central' },
    { slug: 'buraidah', name_ar: 'بريدة', name_en: 'Buraidah', region: 'central' },
    { slug: 'onizah', name_ar: 'عنيزة', name_en: 'Onizah', region: 'central' },
    { slug: 'jeddah', name_ar: 'جدة', name_en: 'Jeddah', region: 'western' },
    { slug: 'makkah', name_ar: 'مكة المكرمة', name_en: 'Makkah', region: 'western' },
    { slug: 'madinah', name_ar: 'المدينة المنورة', name_en: 'Madinah', region: 'western' },
    { slug: 'taif', name_ar: 'الطائف', name_en: 'Taif', region: 'western' },
    { slug: 'yanbu', name_ar: 'ينبع', name_en: 'Yanbu', region: 'western' },
    { slug: 'dammam', name_ar: 'الدمام', name_en: 'Dammam', region: 'eastern' },
    { slug: 'al-khobar', name_ar: 'الخبر', name_en: 'Al Khobar', region: 'eastern' },
    { slug: 'dhahran', name_ar: 'الظهران', name_en: 'Dhahran', region: 'eastern' },
    { slug: 'jubail', name_ar: 'الجبيل', name_en: 'Jubail', region: 'eastern' },
    { slug: 'al-ahsa', name_ar: 'الاحساء', name_en: 'Al Ahsa', region: 'eastern' },
    { slug: 'qatif', name_ar: 'القطيف', name_en: 'Qatif', region: 'eastern' },
    { slug: 'hafr-albatin', name_ar: 'حفر الباطن', name_en: 'Hafr Al Batin', region: 'eastern' },
    { slug: 'tabuk', name_ar: 'تبوك', name_en: 'Tabuk', region: 'northern' },
    { slug: 'hail', name_ar: 'حائل', name_en: 'Hail', region: 'northern' },
    { slug: 'abha', name_ar: 'أبها', name_en: 'Abha', region: 'southern' },
    { slug: 'khamis-mushait', name_ar: 'خميس مشيط', name_en: 'Khamis Mushait', region: 'southern' },
    { slug: 'najran', name_ar: 'نجران', name_en: 'Najran', region: 'southern' },
    { slug: 'jazan', name_ar: 'جازان', name_en: 'Jazan', region: 'southern' },
    { slug: 'al-baha', name_ar: 'الباحة', name_en: 'Al Baha', region: 'southern' },
];

// Services data (subset for brevity)
const SERVICES = [
    { slug: 'furniture-moving', name_ar: 'نقل عفش', name_en: 'Furniture Moving', category: 'moving' },
    { slug: 'furniture-storage', name_ar: 'تخزين اثاث', name_en: 'Furniture Storage', category: 'moving' },
    { slug: 'cleaning', name_ar: 'تنظيف منازل', name_en: 'Home Cleaning', category: 'cleaning' },
    { slug: 'tanks-cleaning', name_ar: 'تنظيف خزانات', name_en: 'Tank Cleaning', category: 'cleaning' },
    { slug: 'sofa-cleaning', name_ar: 'تنظيف كنب', name_en: 'Sofa Cleaning', category: 'cleaning' },
    { slug: 'carpet-cleaning', name_ar: 'تنظيف سجاد', name_en: 'Carpet Cleaning', category: 'cleaning' },
    { slug: 'pest-control', name_ar: 'مكافحة حشرات', name_en: 'Pest Control', category: 'pest-control' },
    { slug: 'termite-control', name_ar: 'مكافحة النمل الابيض', name_en: 'Termite Control', category: 'pest-control' },
    { slug: 'water-leak-detection', name_ar: 'كشف تسربات المياه', name_en: 'Water Leak Detection', category: 'leak-detection' },
    { slug: 'tank-insulation', name_ar: 'عزل خزانات', name_en: 'Tank Insulation', category: 'insulation' },
    { slug: 'roof-insulation', name_ar: 'عزل اسطح', name_en: 'Roof Insulation', category: 'insulation' },
    { slug: 'sewer-cleaning', name_ar: 'تسليك مجاري', name_en: 'Sewer Cleaning', category: 'sewage' },
];

// Sample advertisers
const SAMPLE_ADVERTISERS = [
    {
        business_name: 'شركة النخبة للنقل',
        phone_number: '+966500000001',
        whatsapp_number: '+966500000001',
        logo_url: '',
        is_premium: true,
        priority_score: 95,
        targeted_cities: ['riyadh', 'jeddah', 'dammam'],
        targeted_services: ['furniture-moving', 'furniture-storage'],
        description: 'شركة متخصصة في نقل العفش بأحدث السيارات المجهزة وفريق عمل محترف. نقدم خدمات التغليف والتركيب.',
        gallery: [],
    },
    {
        business_name: 'مؤسسة الأمان للتنظيف',
        phone_number: '+966500000002',
        whatsapp_number: '+966500000002',
        logo_url: '',
        is_premium: true,
        priority_score: 90,
        targeted_cities: ['riyadh', 'al-kharj'],
        targeted_services: ['cleaning', 'sofa-cleaning', 'carpet-cleaning'],
        description: 'خدمات تنظيف احترافية للمنازل والفلل والشقق. نستخدم أحدث المعدات والمنظفات الآمنة.',
        gallery: [],
    },
    {
        business_name: 'شركة البيئة لمكافحة الحشرات',
        phone_number: '+966500000003',
        whatsapp_number: '+966500000003',
        logo_url: '',
        is_premium: true,
        priority_score: 88,
        targeted_cities: ['riyadh', 'jeddah', 'dammam', 'makkah'],
        targeted_services: ['pest-control', 'termite-control'],
        description: 'مكافحة جميع أنواع الحشرات والقوارض بمبيدات آمنة ومعتمدة. ضمان على الخدمة.',
        gallery: [],
    },
];

// Generate short code
function generateShortCode(length = 6): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

async function seedDatabase() {
    // Initialize Firebase Admin
    try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const serviceAccount = require(serviceAccountPath);

        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
    } catch (error) {
        console.error('❌ Error loading service account:', error);
        console.log('\nMake sure serviceAccountKey.json exists in the project root.');
        return;
    }

    const db = admin.firestore();

    try {
        console.log('🚀 Starting database seeding...\n');

        // Seed cities
        console.log('📍 Seeding cities...');
        await db.collection('static_data').doc('cities').set({
            list: CITIES,
            updated_at: admin.firestore.FieldValue.serverTimestamp(),
        });
        console.log(`   ✅ Added ${CITIES.length} cities\n`);

        // Seed services
        console.log('🔧 Seeding services...');
        await db.collection('static_data').doc('services').set({
            list: SERVICES,
            updated_at: admin.firestore.FieldValue.serverTimestamp(),
        });
        console.log(`   ✅ Added ${SERVICES.length} services\n`);

        // Seed sample advertisers
        console.log('🏢 Seeding sample advertisers...');
        const batch = db.batch();

        for (const advertiser of SAMPLE_ADVERTISERS) {
            const docRef = db.collection('advertisers').doc();
            batch.set(docRef, {
                ...advertiser,
                short_code: generateShortCode(),
                subscription_expiry: admin.firestore.Timestamp.fromDate(
                    new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
                ), // 1 year
                created_at: admin.firestore.FieldValue.serverTimestamp(),
                updated_at: admin.firestore.FieldValue.serverTimestamp(),
            });
        }

        await batch.commit();
        console.log(`   ✅ Added ${SAMPLE_ADVERTISERS.length} sample advertisers\n`);

        console.log('🎉 Database seeding completed successfully!');
        console.log('\nYou can now:');
        console.log('1. View the data in Firebase Console');
        console.log('2. Add more advertisers via the Admin Dashboard at /admin');

    } catch (error) {
        console.error('❌ Error seeding database:', error);
        throw error;
    }
}

// Run the seeding
seedDatabase().catch(console.error);
