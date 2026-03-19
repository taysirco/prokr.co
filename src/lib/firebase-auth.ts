import {
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    signInWithEmailLink,
    signInWithPopup,
    signInWithRedirect,
    getRedirectResult,
    GoogleAuthProvider,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    initializeRecaptchaConfig,
    onAuthStateChanged,
    signOut,
    type ActionCodeSettings,
    type ConfirmationResult,
    type User,
} from 'firebase/auth';
import { auth } from './firebase';

// Force-fetch reCAPTCHA Enterprise config on module load.
// Required after enabling reCAPTCHA Enterprise in Firebase Console.
// Without this, the SDK may not have the correct Enterprise site keys,
// causing INVALID_APP_CREDENTIAL errors on phone auth.
if (typeof window !== 'undefined') {
    initializeRecaptchaConfig(auth).catch(() => {
        // Silent fallback — AUDIT mode will use v2 if Enterprise fails
    });
}

// ============================================
// State
// ============================================
let phoneConfirmationResult: ConfirmationResult | null = null;
const googleProvider = new GoogleAuthProvider();
const BASE_URL = typeof window !== 'undefined' ? window.location.origin : 'https://prokr.co';

// ============================================
// 1. Google Sign-In (Popup → Redirect fallback)
// ============================================

/**
 * Detect Safari on iOS/iPadOS.
 * Safari blocks popups from async calls, and signInWithPopup fails silently.
 * We use signInWithRedirect as fallback for these browsers.
 */
function isSafariIOS(): boolean {
    if (typeof navigator === 'undefined') return false;
    const ua = navigator.userAgent;
    // iOS Safari (not Chrome/Firefox/Edge on iOS)
    const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isSafari = /^((?!CriOS|FxiOS|EdgiOS|OPiOS|chrome|android).)*safari/i.test(ua);
    return isIOS && isSafari;
}

/**
 * Detect in-app WebViews (Instagram, Twitter/X, Facebook, TikTok, etc.)
 * These block ALL popup windows.
 */
function isInAppWebView(): boolean {
    if (typeof navigator === 'undefined') return false;
    const ua = navigator.userAgent;
    return /FBAN|FBAV|Instagram|Twitter|Line\/|Snapchat|TikTok|BytedanceWebview|GSA\//.test(ua);
}

/**
 * Check for a pending Google redirect result on page load.
 * Must be called early to catch the user returning from the Google sign-in page.
 */
export async function checkGoogleRedirectResult(): Promise<User | null> {
    try {
        const result = await getRedirectResult(auth);
        return result?.user ?? null;
    } catch {
        return null;
    }
}

/**
 * Sign in with Google.
 *
 * Strategy:
 * 1. In-app WebViews → throw POPUP_BLOCKED (user must open in real browser)
 * 2. Safari iOS → use signInWithRedirect (popups don't work)
 * 3. All others → use signInWithPopup (best UX)
 */
export async function signInWithGoogle(): Promise<User> {
    // In-app WebViews can't do popups or redirects properly
    if (isInAppWebView()) {
        throw new Error('POPUP_BLOCKED');
    }

    // Safari iOS: redirect flow (popups blocked by default)
    if (isSafariIOS()) {
        await signInWithRedirect(auth, googleProvider);
        // This line won't execute — the browser navigates away.
        // When it returns, checkGoogleRedirectResult() picks up the result.
        throw new Error('REDIRECT_STARTED');
    }

    // All other browsers: popup flow (best UX)
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (err: unknown) {
        if (err && typeof err === 'object' && 'code' in err) {
            const firebaseErr = err as { code: string };
            if (
                firebaseErr.code === 'auth/popup-blocked' ||
                firebaseErr.code === 'auth/popup-closed-by-user' ||
                firebaseErr.code === 'auth/cancelled-popup-request'
            ) {
                // Popup blocked — try redirect as last resort
                try {
                    await signInWithRedirect(auth, googleProvider);
                    throw new Error('REDIRECT_STARTED');
                } catch (redirectErr) {
                    if (redirectErr instanceof Error && redirectErr.message === 'REDIRECT_STARTED') {
                        throw redirectErr;
                    }
                    throw new Error('POPUP_BLOCKED');
                }
            }
        }
        throw err;
    }
}

// ============================================
// 2. Phone Authentication (SMS OTP)
// ============================================

/**
 * Setup invisible reCAPTCHA on a button element
 * Must be called before sendPhoneOTP
 */
export function setupRecaptcha(buttonId: string): RecaptchaVerifier {
    const verifier = new RecaptchaVerifier(auth, buttonId, {
        size: 'invisible',
        callback: () => {
            // reCAPTCHA solved — allow signInWithPhoneNumber
        },
    });
    return verifier;
}

/**
 * Send SMS OTP to phone number
 * Phone number must be in E.164 format: +966XXXXXXXXX
 */
export async function sendPhoneOTP(phoneNumber: string, recaptchaVerifier: RecaptchaVerifier): Promise<void> {
    // Ensure Saudi format
    const formatted = formatSaudiPhone(phoneNumber);

    // Explicitly render the invisible reCAPTCHA widget before use.
    // Without this, the v2 fallback (after Enterprise init failure) produces
    // an invalid/missing token → 400 Bad Request from sendVerificationCode API.
    await recaptchaVerifier.render();

    phoneConfirmationResult = await signInWithPhoneNumber(auth, formatted, recaptchaVerifier);
}

/**
 * Verify the SMS OTP code
 */
export async function verifyPhoneOTP(code: string): Promise<User> {
    if (!phoneConfirmationResult) {
        throw new Error('لم يتم إرسال رمز التحقق بعد');
    }
    const result = await phoneConfirmationResult.confirm(code);
    phoneConfirmationResult = null;
    return result.user;
}

/**
 * Format Saudi phone number to E.164
 * Handles: 05XXXXXXXX, 5XXXXXXXX, +9665XXXXXXXX, 9665XXXXXXXX
 */
export function formatSaudiPhone(phone: string): string {
    // Remove all non-digit characters
    const digits = phone.replace(/\D/g, '');

    if (digits.startsWith('966')) {
        return `+${digits}`;
    }
    if (digits.startsWith('05')) {
        return `+966${digits.slice(1)}`;
    }
    if (digits.startsWith('5') && digits.length === 9) {
        return `+966${digits}`;
    }
    // Already formatted or international
    return `+${digits}`;
}

// ============================================
// 3. Email Link Authentication (Passwordless)
// ============================================

function getActionCodeSettings(mode: 'claim' | 'review', companyCode: string): ActionCodeSettings {
    return {
        url: `${BASE_URL}/verify?mode=${mode}&code=${companyCode}`,
        handleCodeInApp: true,
    };
}

export async function sendClaimVerificationEmail(email: string, companyCode: string): Promise<void> {
    const settings = getActionCodeSettings('claim', companyCode);
    // Use Arabic email template
    auth.languageCode = 'ar';
    await sendSignInLinkToEmail(auth, email, settings);
    if (typeof window !== 'undefined') {
        window.localStorage.setItem('claimEmail', email);
        window.localStorage.setItem('claimCompanyCode', companyCode);
    }
}

export function isEmailSignInLink(link: string): boolean {
    return isSignInWithEmailLink(auth, link);
}

export async function completeEmailSignIn(email: string, link: string) {
    const result = await signInWithEmailLink(auth, email, link);
    // NOTE: Do NOT remove claimEmail here — the verify page manages
    // localStorage cleanup based on mode (claim keeps it for phone step)
    return result;
}

// ============================================
// 4. Auth State Helpers
// ============================================

/**
 * Get current authenticated user
 */
export function getCurrentUser(): User | null {
    return auth.currentUser;
}

/**
 * Listen for auth state changes
 */
export function onAuthChange(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
}

/**
 * Sign out current user
 */
export async function signOutUser(): Promise<void> {
    await signOut(auth);
}
