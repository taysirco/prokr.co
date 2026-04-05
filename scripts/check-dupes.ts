import * as fs from 'fs';
import * as path from 'path';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';
const SA = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../serviceAccountKey.json'), 'utf-8'));
if (getApps().length === 0) initializeApp({ credential: cert(SA) });
const db = getFirestore();

async function main() {
    const snap = await db.collection('advertisers').where('is_premium', '==', true).get();
    const all = snap.docs.map(d => ({ id: d.id, ...d.data() })) as any[];

    // Find duplicates
    const nameMap: Record<string, any[]> = {};
    all.forEach(d => {
        const n = d.business_name.trim();
        if (!nameMap[n]) nameMap[n] = [];
        nameMap[n].push(d);
    });
    const dupes = Object.entries(nameMap).filter(([, arr]) => arr.length > 1);

    console.log('══ تفاصيل الشركات المكررة ══\n');
    for (const [name, matches] of dupes) {
        console.log('📌', name.substring(0, 60) + (name.length > 60 ? '...' : ''));
        matches.forEach(d => {
            const created = d.created_at instanceof Timestamp ? d.created_at.toDate().toISOString().split('T')[0] : '?';
            console.log('   ID:', d.id);
            console.log('   Created:', created);
            console.log('   Phone:', d.phone_number);
            console.log('   Cities:', (d.targeted_cities || []).join(', '));
            console.log('   Services:', (d.targeted_services || []).join(', '));
            console.log('   Score:', d.priority_score);
            console.log('   ---');
        });
        console.log();
    }

    // Companies with missing description
    const noDesc = all.filter(d => {
        const c = d.created_at instanceof Timestamp ? d.created_at.toDate() : new Date(0);
        return c >= new Date('2026-04-04') && (!d.description || d.description.length < 10);
    });
    console.log('══ شركات بدون وصف ══');
    noDesc.forEach(d => console.log('  ❌', d.business_name, '| وصف:', JSON.stringify(d.description)));

    // The expired jsj company
    const jsj = all.find(d => d.short_code === 'jsj' || d.business_name === 'jsj');
    if (jsj) {
        console.log('\n══ شركة jsj التجريبية ══');
        console.log('  ID:', jsj.id);
        console.log('  is_active:', jsj.is_active);
        const exp = jsj.subscription_expiry instanceof Timestamp ? jsj.subscription_expiry.toDate().toISOString() : jsj.subscription_expiry;
        console.log('  subscription_expiry:', exp);
    }

    process.exit(0);
}
main().catch(e => { console.error(e); process.exit(1); });
