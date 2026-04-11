/**
 * Script: Find and fix broken logo_url and gallery URLs in Firestore
 * Usage: node scripts/fix-broken-logos.mjs
 */

import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

// Initialize Firebase Admin
const serviceAccount = JSON.parse(readFileSync('./serviceAccountKey.json', 'utf-8'));
initializeApp({
    credential: cert(serviceAccount),
});

const db = getFirestore();

async function checkUrl(url) {
    try {
        const response = await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(5000) });
        return response.ok;
    } catch {
        return false;
    }
}

async function main() {
    console.log('🔍 Scanning all advertisers for broken URLs...\n');

    const snap = await db.collection('advertisers').get();
    console.log(`Found ${snap.size} advertisers\n`);

    let fixedCount = 0;

    for (const doc of snap.docs) {
        const data = doc.data();
        const name = data.business_name || doc.id;
        const updates = {};

        // Check logo_url — only check external URLs (not local /images/ paths)
        if (data.logo_url && !data.logo_url.startsWith('/images/')) {
            const ok = await checkUrl(data.logo_url);
            if (!ok) {
                console.log(`❌ BROKEN logo: ${name}`);
                console.log(`   URL: ${data.logo_url}`);
                updates.logo_url = '';
            }
        }

        // Check gallery URLs
        if (data.gallery && Array.isArray(data.gallery) && data.gallery.length > 0) {
            const validGallery = [];
            let hasRemoved = false;
            for (const imgUrl of data.gallery) {
                if (imgUrl.startsWith('/images/')) {
                    validGallery.push(imgUrl);
                    continue;
                }
                const ok = await checkUrl(imgUrl);
                if (ok) {
                    validGallery.push(imgUrl);
                } else {
                    console.log(`❌ BROKEN gallery: ${name}`);
                    console.log(`   URL: ${imgUrl}`);
                    hasRemoved = true;
                }
            }
            if (hasRemoved) {
                updates.gallery = validGallery;
            }
        }

        // Apply updates
        if (Object.keys(updates).length > 0) {
            await doc.ref.update(updates);
            console.log(`   ✅ Fixed ${name}\n`);
            fixedCount++;
        }
    }

    console.log(`\n🏁 Done! Fixed ${fixedCount} advertisers.`);
}

main().catch(console.error);
