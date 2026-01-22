#!/usr/bin/env node
/**
 * Firebase Data Cleanup Script
 * Deletes all advertisers and advertiser_requests from Firestore
 * Run with: node scripts/cleanup-firebase.js
 */

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { getStorage } = require('firebase-admin/storage');

// Initialize Firebase Admin
// Note: Requires GOOGLE_APPLICATION_CREDENTIALS env variable or service account
let app;
try {
    app = initializeApp({
        storageBucket: 'prokr-84ca8.firebasestorage.app'
    });
} catch (error) {
    console.error('Firebase initialization error:', error.message);
    console.log('\nMake sure you have set up Firebase Admin credentials.');
    console.log('You can run: export GOOGLE_APPLICATION_CREDENTIALS="/path/to/serviceAccountKey.json"');
    process.exit(1);
}

const db = getFirestore(app);
const storage = getStorage(app);

async function deleteCollection(collectionName) {
    console.log(`\n🗑️  Deleting collection: ${collectionName}`);

    const collectionRef = db.collection(collectionName);
    const snapshot = await collectionRef.get();

    if (snapshot.empty) {
        console.log(`   ✅ Collection "${collectionName}" is already empty`);
        return 0;
    }

    const batch = db.batch();
    let count = 0;

    snapshot.docs.forEach((doc) => {
        batch.delete(doc.ref);
        count++;
    });

    await batch.commit();
    console.log(`   ✅ Deleted ${count} documents from "${collectionName}"`);
    return count;
}

async function deleteStorageFolder(folderPath) {
    console.log(`\n🗑️  Deleting storage folder: ${folderPath}`);

    try {
        const bucket = storage.bucket();
        const [files] = await bucket.getFiles({ prefix: folderPath });

        if (files.length === 0) {
            console.log(`   ✅ Folder "${folderPath}" is already empty`);
            return 0;
        }

        for (const file of files) {
            await file.delete();
        }

        console.log(`   ✅ Deleted ${files.length} files from "${folderPath}"`);
        return files.length;
    } catch (error) {
        console.log(`   ⚠️  Could not delete folder "${folderPath}": ${error.message}`);
        return 0;
    }
}

async function main() {
    console.log('🧹 Firebase Data Cleanup Script');
    console.log('================================');
    console.log('This will delete ALL advertisers and requests data.\n');

    let totalDocs = 0;
    let totalFiles = 0;

    // Delete Firestore collections
    totalDocs += await deleteCollection('advertisers');
    totalDocs += await deleteCollection('advertiser_requests');

    // Delete Storage folders
    totalFiles += await deleteStorageFolder('requests/');
    totalFiles += await deleteStorageFolder('advertisers/');

    console.log('\n================================');
    console.log('🎉 Cleanup Complete!');
    console.log(`   📄 Documents deleted: ${totalDocs}`);
    console.log(`   📁 Files deleted: ${totalFiles}`);
    console.log('\n✅ Project is now clean and ready for new advertisers!');
}

main().catch(console.error);
