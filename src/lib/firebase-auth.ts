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

// reCAPTCHA Enterprise config is initialized lazily inside setupRecaptcha()
// to avoid 401 errors on every page load when the key's domain list
// hasn't been configured in Google Cloud Console.

// ============================================
// State
// ============================================
let phoneConfirmationResult: ConfirmationResult | null = null;
const googleProvider = new GoogleAuthProvider();
const BASE_URL = typeof window !== 'undefined' ? window.location.origin : 'https://prokr.co';

// ============================================
// 1. Google Sign-In — Device-Aware Strategy
// ============================================
//
// How it works:
// ─────────────────────────────────────────────
// DESKTOP (Windows/Mac/Linux):
//   → signInWithPopup → opens floating popup window
//   → User signs in with Google in the popup
//   → Popup closes, auth result returned instantly
//
// MOBILE (iPhone/Android, any browser):
//   → signInWithPopup → opens new tab (iOS/Android treat popups as tabs)
//   → User signs in with Google in the new tab
//   → Tab closes, auth result returned to original tab
//   → If popup/tab is blocked → falls back to signInWithRedirect
//   → signInWithRedirect navigates the page to Google sign-in
//   → After sign-in, redirects back to company page with session saved
//
// IN-APP WEBVIEWS (Instagram/Twitter/Facebook/TikTok):
//   → Throws POPUP_BLOCKED immediately
//   → UI shows guidance to open in Safari/Chrome
//
// Why authDomain = window.location.host?
// ─────────────────────────────────────────────
// Firebase SDK opens the auth handler at https://{authDomain}/__/auth/handler
// If authDomain ≠ hosting domain → Safari ITP blocks cross-origin cookies/storage
// We set authDomain = current hostname and proxy /__/auth/* via Next.js rewrites
// This makes EVERYTHING same-origin → Safari ITP won't block anything
// ============================================

/**
 * Detect mobile devices (phones and tablets).
 * On mobile, signInWithPopup opens a new tab (visual redirect).
 */
function isMobileDevice(): boolean {
    if (typeof navigator === 'undefined') return false;
    const ua = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
        || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1); // iPadOS
}

/**
 * Detect in-app WebViews (Instagram, Twitter/X, Facebook, TikTok, etc.)
 * These block ALL popup windows — no workaround possible.
 */
function isInAppWebView(): boolean {
    if (typeof navigator === 'undefined') return false;
    const ua = navigator.userAgent;
    return /FBAN|FBAV|Instagram|Twitter|Line\/|Snapchat|TikTok|BytedanceWebview|GSA\//.test(ua);
}

/**
 * Check for a pending Google redirect result on page load.
 * This catches mobile users returning after signInWithRedirect.
 * MUST be called on component mount (useEffect) before any other auth action.
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
 * Sign in with Google — device-aware strategy.
 *
 * @returns Promise<User> on successful popup sign-in
 * @throws Error('POPUP_BLOCKED') if WebView or popup genuinely blocked
 * @throws Error('REDIRECT_STARTED') if falling back to redirect (mobile)
 */
export async function signInWithGoogle(): Promise<User> {
    // ─── WebView Detection ──────────────────────────
    // In-app WebViews (Instagram/Twitter/Facebook) block ALL auth methods.
    // Show guidance to open in Safari/Chrome instead.
    if (isInAppWebView()) {
        throw new Error('POPUP_BLOCKED');
    }

    // ─── Primary: Try signInWithPopup ──────────────
    // Works on:
    //   Desktop → opens popup window (best UX)
    //   Mobile  → opens new tab (feels like redirect, but more reliable)
    // With authDomain = same origin, Safari ITP doesn't interfere.
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (err: unknown) {
        if (err && typeof err === 'object' && 'code' in err) {
            const firebaseErr = err as { code: string };

            // Popup was blocked or user closed it
            if (firebaseErr.code === 'auth/popup-closed-by-user') {
                // User intentionally closed the popup — don't show error, just dismiss
                throw new Error('POPUP_CLOSED');
            }

            if (
                firebaseErr.code === 'auth/popup-blocked' ||
                firebaseErr.code === 'auth/cancelled-popup-request'
            ) {
                // ─── Fallback: signInWithRedirect (mobile only) ──────
                // On mobile, if the new tab was blocked by the browser,
                // we fall back to signInWithRedirect which navigates
                // the current page to Google sign-in.
                // On desktop, we just show the POPUP_BLOCKED error.
                if (isMobileDevice()) {
                    try {
                        await signInWithRedirect(auth, googleProvider);
                        // Browser navigates away — this line won't execute.
                        // When it returns, checkGoogleRedirectResult() picks up the result.
                        throw new Error('REDIRECT_STARTED');
                    } catch (redirectErr) {
                        if (redirectErr instanceof Error && redirectErr.message === 'REDIRECT_STARTED') {
                            throw redirectErr;
                        }
                        // Redirect also failed — nothing we can do
                        throw new Error('POPUP_BLOCKED');
                    }
                }

                throw new Error('POPUP_BLOCKED');
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
 * Lazily initializes reCAPTCHA Enterprise config on first use
 */
let recaptchaConfigInitialized = false;
export async function setupRecaptcha(buttonId: string): Promise<RecaptchaVerifier> {
    // Lazy init: only fetch Enterprise config when phone auth is actually needed
    if (!recaptchaConfigInitialized) {
        recaptchaConfigInitialized = true;
        await initializeRecaptchaConfig(auth).catch(() => {
            // Silent fallback — AUDIT mode will use v2 if Enterprise fails
        });
    }
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
