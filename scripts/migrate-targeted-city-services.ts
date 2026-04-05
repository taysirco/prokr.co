import * as fs from 'fs';
import * as path from 'path';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const SA = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../serviceAccountKey.json'), 'utf-8'));
if (getApps().length === 0) initializeApp({ credential: cert(SA) });
const db = getFirestore();

async function main() {
    console.log('Fetching all advertisers...');
    const snap = await db.collection('advertisers').get();
    
    let updatedCount = 0;
    
    console.log(`Found ${snap.docs.length} total advertisers.`);
    
    const batch = db.batch();
    
    for (const doc of snap.docs) {
        const data = doc.data();
        
        // Skip if already migrated and no mismatch (but maybe safely overwrite anyway)
        const targeted_cities: string[] = data.targeted_cities || [];
        const targeted_services: string[] = data.targeted_services || [];
        
        const targetedCityServices = targeted_cities.flatMap(city => 
            targeted_services.map(service => `${city}_${service}`)
        );
        
        batch.update(doc.ref, {
            targeted_city_services: targetedCityServices
        });
        
        updatedCount++;
    }
    
    console.log(`Committing updates for ${updatedCount} advertisers...`);
    await batch.commit();
    
    console.log('✅ Migration complete! Added targeted_city_services to all advertisers.');
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
