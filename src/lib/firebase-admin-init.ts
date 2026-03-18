// ============================================
// 🔐 Firebase Admin SDK — Server-side token validation
// Used by API routes to verify Firebase ID tokens
// ============================================

import { initializeApp, getApps, cert, type App } from 'firebase-admin/app';
import { getAuth, type Auth } from 'firebase-admin/auth';

let adminApp: App;
let adminAuth: Auth;

function getAdminAuth(): Auth {
    if (!adminAuth) {
        if (getApps().length === 0) {
            // If GOOGLE_APPLICATION_CREDENTIALS is set, cert will auto-detect
            // Otherwise, use project-level defaults (works in Cloud Run, GCF, etc.)
            const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

            if (process.env.FIREBASE_ADMIN_PRIVATE_KEY && process.env.FIREBASE_ADMIN_CLIENT_EMAIL) {
                adminApp = initializeApp({
                    credential: cert({
                        projectId,
                        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
                        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n'),
                    }),
                });
            } else {
                // Fallback: initialize without credentials (works in Firebase-hosted environments)
                adminApp = initializeApp({ projectId });
            }
        } else {
            adminApp = getApps()[0];
        }
        adminAuth = getAuth(adminApp);
    }
    return adminAuth;
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
