import * as fs from 'fs';
import * as path from 'path';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';

const SA = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../serviceAccountKey.json'), 'utf-8'));
if (getApps().length === 0) initializeApp({ credential: cert(SA) });
const db = getFirestore();

async function main() {
    // Get the actual top 15 for riyadh — what does the query return?
    const snap = await db.collection('advertisers')
        .where('is_premium', '==', true)
        .where('targeted_cities', 'array-contains', 'riyadh')
        .orderBy('priority_score', 'desc')
        .limit(15)
        .get();
    
    console.log('=== TOP 15 PREMIUM FOR RIYADH (what silo page gets) ===');
    snap.docs.forEach((doc, i) => {
        const d = doc.data();
        const created = d.created_at instanceof Timestamp ? d.created_at.toDate() : new Date(0);
        const isNew = created >= new Date('2026-04-04');
        console.log(`${i+1}. [${isNew ? 'NEW' : 'OLD'}] ${d.business_name} (score:${d.priority_score}, services:${(d.targeted_services||[]).length})`);
    });

    // After JS filter by 'furniture-moving', how many remain?
    const furnitureMoving = snap.docs.filter(doc => 
        (doc.data().targeted_services || []).includes('furniture-moving')
    );
    console.log(`\nAfter filter furniture-moving: ${furnitureMoving.length} companies`);
    furnitureMoving.forEach(doc => {
        const d = doc.data();
        const created = d.created_at instanceof Timestamp ? d.created_at.toDate() : new Date(0);
        const isNew = created >= new Date('2026-04-04');
        console.log(`  [${isNew ? 'NEW' : 'OLD'}] ${d.business_name}`);
    });

    // Check total riyadh premium 
    const allRiyadh = await db.collection('advertisers')
        .where('is_premium', '==', true)
        .where('targeted_cities', 'array-contains', 'riyadh')
        .get();
    
    const newRiyadhFM = allRiyadh.docs.filter(doc => {
        const d = doc.data();
        const created = d.created_at instanceof Timestamp ? d.created_at.toDate() : new Date(0);
        return created >= new Date('2026-04-04') && (d.targeted_services || []).includes('furniture-moving');
    });
    
    console.log(`\nTotal riyadh premium: ${allRiyadh.size}`);
    console.log(`New riyadh furniture-moving premium: ${newRiyadhFM.length}`);
    newRiyadhFM.forEach(doc => console.log(`  → ${doc.data().business_name} (ID: ${doc.id})`));
    
    // Are they in the top 15?
    const top15Ids = new Set(snap.docs.map(d => d.id));
    const hiddenNew = newRiyadhFM.filter(d => !top15Ids.has(d.id));
    console.log(`Hidden new companies (not in top 15): ${hiddenNew.length}`);
    hiddenNew.forEach(doc => console.log(`  ❌ HIDDEN: ${doc.data().business_name}`));

    // Also check for cities with smaller premium counts (jeddah cleaning)
    console.log('\n=== JEDDAH CLEANING: NEW COMPANIES ===');
    const jeddahSnap = await db.collection('advertisers')
        .where('is_premium', '==', true)
        .where('targeted_cities', 'array-contains', 'jeddah')
        .orderBy('priority_score', 'desc')
        .limit(15)
        .get();
    
    const jeddahCleaning = jeddahSnap.docs.filter(doc => 
        (doc.data().targeted_services || []).includes('cleaning')
    );
    console.log(`Jeddah top 15 → cleaning filter: ${jeddahCleaning.length}`);
    jeddahCleaning.forEach(doc => {
        const d = doc.data();
        const created = d.created_at instanceof Timestamp ? d.created_at.toDate() : new Date(0);
        const isNew = created >= new Date('2026-04-04');
        console.log(`  [${isNew ? 'NEW' : 'OLD'}] ${d.business_name}`);
    });
}

main().catch(e => { console.error(e); process.exit(1); });
