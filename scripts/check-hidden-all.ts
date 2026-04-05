import * as fs from 'fs';
import * as path from 'path';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';

const SA = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../serviceAccountKey.json'), 'utf-8'));
if (getApps().length === 0) initializeApp({ credential: cert(SA) });
const db = getFirestore();

async function main() {
    // Get ALL premium companies to analyze the impact
    const snap = await db.collection('advertisers')
        .where('is_premium', '==', true)
        .get();
    
    const all = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    })) as any[];

    // Group by city
    const byCity: Record<string, any[]> = {};
    for (const d of all) {
        for (const city of (d.targeted_cities || [])) {
            if (!byCity[city]) byCity[city] = [];
            byCity[city].push(d);
        }
    }

    // For each city with >15, sort by priority_score desc + docId and check
    console.log('=== HIDDEN NEW COMPANIES PER CITY ===\n');
    
    let totalHidden = 0;
    const hiddenCompanies = new Set<string>();

    for (const [city, companies] of Object.entries(byCity)) {
        if (companies.length <= 15) continue;

        // Sort like Firestore: priority_score DESC, then doc ID ASC (default tiebreaker)
        companies.sort((a: any, b: any) => {
            if (b.priority_score !== a.priority_score) return b.priority_score - a.priority_score;
            return a.id < b.id ? -1 : 1;
        });

        const top15 = companies.slice(0, 15);
        const hidden = companies.slice(15);
        
        const hiddenNew = hidden.filter((d: any) => {
            const created = d.created_at instanceof Timestamp ? d.created_at.toDate() : new Date(0);
            return created >= new Date('2026-04-04');
        });

        if (hiddenNew.length > 0) {
            const cityName = city;
            console.log(`🔴 ${cityName}: ${hiddenNew.length} NEW companies hidden (${companies.length} total, limit 15)`);
            hiddenNew.forEach((d: any) => {
                console.log(`   ❌ ${d.business_name}`);
                console.log(`      services: ${(d.targeted_services||[]).join(', ')}`);
                hiddenCompanies.add(d.id);
                totalHidden++;
            });
            console.log('');
        }
    }

    console.log(`\n═══════════════════════════════════════`);
    console.log(`TOTAL HIDDEN NEW COMPANIES: ${hiddenCompanies.size} unique`);
    console.log(`TOTAL HIDDEN INSTANCES: ${totalHidden} (across cities)`);
    console.log(`═══════════════════════════════════════`);

    // What limit would be needed?
    const maxCity = Object.entries(byCity).sort((a, b) => b[1].length - a[1].length)[0];
    console.log(`\nLargest city: ${maxCity[0]} with ${maxCity[1].length} premium`);
    console.log(`Recommended limit: ${Math.max(maxCity[1].length, 100)} (to show all)`);
}

main().catch(e => { console.error(e); process.exit(1); });
