/**
 * Download Company Logos Script
 * =============================
 * Downloads all company logos from external URLs to public/images/logos/
 * Then updates Firestore documents to reference the local paths.
 * 
 * Usage:
 *   npx tsx scripts/download-logos.ts --dry-run    # Preview only
 *   npx tsx scripts/download-logos.ts --execute     # Download + update Firestore
 */

import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as http from 'http';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const SA = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../serviceAccountKey.json'), 'utf-8'));
if (getApps().length === 0) initializeApp({ credential: cert(SA) });
const db = getFirestore();

const LOGOS_DIR = path.resolve(__dirname, '../public/images/logos');
const DRY_RUN = process.argv.includes('--dry-run');
const EXECUTE = process.argv.includes('--execute');

if (!DRY_RUN && !EXECUTE) {
    console.error('Usage: npx tsx scripts/download-logos.ts [--dry-run | --execute]');
    process.exit(1);
}

// Ensure logos directory exists
if (!fs.existsSync(LOGOS_DIR)) {
    fs.mkdirSync(LOGOS_DIR, { recursive: true });
}

// Sanitize business name to create a safe filename
function slugify(name: string): string {
    return name
        .toLowerCase()
        .replace(/[^\w\u0600-\u06FF\s-]/g, '') // keep alphanumeric, Arabic, spaces, hyphens
        .replace(/[\s]+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
        .substring(0, 60);
}

// Get file extension from URL or content-type
function getExtension(url: string, contentType?: string): string {
    // Try from URL first
    const urlPath = new URL(url).pathname;
    const ext = path.extname(urlPath).toLowerCase();
    if (['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif', '.avif'].includes(ext)) {
        return ext;
    }
    // Try from content-type
    if (contentType) {
        if (contentType.includes('jpeg') || contentType.includes('jpg')) return '.jpg';
        if (contentType.includes('png')) return '.png';
        if (contentType.includes('webp')) return '.webp';
        if (contentType.includes('svg')) return '.svg';
        if (contentType.includes('gif')) return '.gif';
    }
    return '.jpg'; // default
}

// Download a file with redirect following
function downloadFile(url: string, destPath: string, maxRedirects = 5): Promise<string> {
    return new Promise((resolve, reject) => {
        if (maxRedirects <= 0) {
            return reject(new Error('Too many redirects'));
        }

        const client = url.startsWith('https') ? https : http;
        const req = client.get(url, { timeout: 15000 }, (res) => {
            // Handle redirects
            if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                let redirectUrl = res.headers.location;
                if (redirectUrl.startsWith('/')) {
                    const parsed = new URL(url);
                    redirectUrl = `${parsed.protocol}//${parsed.host}${redirectUrl}`;
                }
                return downloadFile(redirectUrl, destPath, maxRedirects - 1).then(resolve).catch(reject);
            }

            if (res.statusCode !== 200) {
                return reject(new Error(`HTTP ${res.statusCode}`));
            }

            const contentType = res.headers['content-type'] || '';
            const ext = getExtension(url, contentType);
            // Update destPath with correct extension if needed
            const finalPath = destPath.replace(/\.[^.]+$/, ext);

            const file = fs.createWriteStream(finalPath);
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                // Verify file is not empty
                const stats = fs.statSync(finalPath);
                if (stats.size < 100) {
                    fs.unlinkSync(finalPath);
                    return reject(new Error('Downloaded file too small (likely error page)'));
                }
                resolve(finalPath);
            });
            file.on('error', (err) => {
                fs.unlinkSync(finalPath);
                reject(err);
            });
        });

        req.on('timeout', () => {
            req.destroy();
            reject(new Error('Request timeout'));
        });

        req.on('error', reject);
    });
}

async function main() {
    console.log('====================================');
    console.log(`Logo Download — ${DRY_RUN ? 'DRY RUN' : 'EXECUTE'}`);
    console.log('====================================\n');

    // Get all advertisers with logo URLs
    const snap = await db.collection('advertisers').get();
    console.log(`Total advertisers: ${snap.size}`);

    const toDownload: { docId: string; name: string; logoUrl: string; shortCode: string }[] = [];

    snap.docs.forEach(doc => {
        const d = doc.data();
        const logoUrl = d.logo_url || '';
        if (logoUrl && logoUrl.startsWith('http')) {
            // Skip if already a local path
            if (logoUrl.startsWith('/images/')) return;
            toDownload.push({
                docId: doc.id,
                name: d.business_name || 'unknown',
                logoUrl: logoUrl,
                shortCode: d.short_code || doc.id.substring(0, 6),
            });
        }
    });

    console.log(`Logos to download: ${toDownload.length}\n`);

    if (DRY_RUN) {
        toDownload.forEach((item, i) => {
            console.log(`${i + 1}. ${item.name}`);
            console.log(`   URL: ${item.logoUrl}`);
            console.log(`   File: ${item.shortCode}.jpg`);
        });
        console.log('\nDRY RUN complete. Run with --execute to download.');
        process.exit(0);
    }

    // EXECUTE: Download and update Firestore
    let success = 0;
    let failed = 0;
    const failedItems: string[] = [];

    for (let i = 0; i < toDownload.length; i++) {
        const item = toDownload[i];
        const tempDest = path.join(LOGOS_DIR, `${item.shortCode}.jpg`);
        const progress = `[${i + 1}/${toDownload.length}]`;

        try {
            const finalPath = await downloadFile(item.logoUrl, tempDest);
            const filename = path.basename(finalPath);
            const localUrl = `/images/logos/${filename}`;

            // Update Firestore
            await db.collection('advertisers').doc(item.docId).update({
                logo_url: localUrl,
            });

            success++;
            console.log(`${progress} OK: ${item.name} -> ${filename}`);
        } catch (err: any) {
            failed++;
            failedItems.push(`${item.name}: ${err.message}`);
            console.log(`${progress} FAIL: ${item.name} — ${err.message}`);
        }

        // Small delay to avoid rate limiting
        if (i % 10 === 9) {
            await new Promise(r => setTimeout(r, 500));
        }
    }

    console.log('\n====================================');
    console.log('DOWNLOAD SUMMARY');
    console.log('====================================');
    console.log(`Success: ${success}`);
    console.log(`Failed:  ${failed}`);
    if (failedItems.length > 0) {
        console.log('\nFailed items:');
        failedItems.forEach(f => console.log(`  - ${f}`));
    }
    console.log('\nDone!');
}

main().catch(e => { console.error(e); process.exit(1); });
