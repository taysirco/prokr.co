// ============================================
// 🔐 Firebase Auth — Passwordless Email Link
// For B2B Entity Claiming + Reviewer Verification
// ============================================

import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink, type ActionCodeSettings } from 'firebase/auth';
import { auth } from './firebase';

const BASE_URL = typeof window !== 'undefined' ? window.location.origin : 'https://prokr.co';

/**
 * Action code settings for Firebase email link auth
 */
function getActionCodeSettings(mode: 'claim' | 'review', companyCode: string): ActionCodeSettings {
    return {
        url: `${BASE_URL}/verify?mode=${mode}&code=${companyCode}`,
        handleCodeInApp: true,
    };
}

/**
 * Send verification email for business claim
 */
export async function sendClaimVerificationEmail(email: string, companyCode: string): Promise<void> {
    const settings = getActionCodeSettings('claim', companyCode);
    await sendSignInLinkToEmail(auth, email, settings);
    // Store email in localStorage for later verification
    if (typeof window !== 'undefined') {
        window.localStorage.setItem('claimEmail', email);
        window.localStorage.setItem('claimCompanyCode', companyCode);
    }
}

/**
 * Send verification email for reviewer
 */
export async function sendReviewerVerificationEmail(email: string, companyCode: string): Promise<void> {
    const settings = getActionCodeSettings('review', companyCode);
    await sendSignInLinkToEmail(auth, email, settings);
    if (typeof window !== 'undefined') {
        window.localStorage.setItem('reviewerEmail', email);
        window.localStorage.setItem('reviewCompanyCode', companyCode);
    }
}

/**
 * Check if current URL is a sign-in email link
 */
export function isEmailSignInLink(link: string): boolean {
    return isSignInWithEmailLink(auth, link);
}

/**
 * Complete sign-in with email link
 */
export async function completeEmailSignIn(email: string, link: string) {
    const result = await signInWithEmailLink(auth, email, link);
    // Clean up localStorage
    if (typeof window !== 'undefined') {
        window.localStorage.removeItem('claimEmail');
        window.localStorage.removeItem('reviewerEmail');
    }
    return result;
}
