// ============================================
// 🔐 Firebase Admin SDK — Server-side operations
// Used by API routes: bypasses Firestore rules
// ============================================

import { initializeApp, getApps, cert, type App } from 'firebase-admin/app';
import { getAuth, type Auth } from 'firebase-admin/auth';
import { getFirestore, type Firestore } from 'firebase-admin/firestore';

let adminApp: App;
let adminAuth: Auth;
let adminFirestore: Firestore;

function ensureAdminApp(): App {
    if (getApps().length === 0) {
        const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
        const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || `${projectId}.firebasestorage.app`;

        if (process.env.FIREBASE_ADMIN_PRIVATE_KEY && process.env.FIREBASE_ADMIN_CLIENT_EMAIL) {
            adminApp = initializeApp({
                credential: cert({
                    projectId,
                    clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
                    privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n'),
                }),
                storageBucket,
            });
        } else {
            // Firebase App Hosting: auto-detects credentials
            adminApp = initializeApp({ projectId, storageBucket });
        }
    } else {
        adminApp = getApps()[0];
    }
    return adminApp;
}

function getAdminAuth(): Auth {
    if (!adminAuth) {
        ensureAdminApp();
        adminAuth = getAuth(adminApp);
    }
    return adminAuth;
}

/**
 * Get Admin Firestore — bypasses security rules
 * Use this in API routes instead of client SDK
 */
export function getAdminDb(): Firestore {
    if (!adminFirestore) {
        ensureAdminApp();
        adminFirestore = getFirestore(adminApp);
    }
    return adminFirestore;
}

/**
 * Verify a Firebase ID token from the Authorization header
 * Returns the decoded token (with uid, email, phone_number) or null
 */
export async function verifyAuthToken(authHeader: string | null): Promise<{
    uid: string;
    email?: string;
    phone_number?: string;
} | null> {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }

    const token = authHeader.replace('Bearer ', '');

    try {
        const auth = getAdminAuth();
        const decoded = await auth.verifyIdToken(token);
        return {
            uid: decoded.uid,
            email: decoded.email,
            phone_number: decoded.phone_number,
        };
    } catch {
        return null;
    }
}

