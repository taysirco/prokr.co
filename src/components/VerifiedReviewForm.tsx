'use client';

// ============================================
// ⭐ VerifiedReviewForm — تقييم مُوثّق
// Gate: Google Sign-In or Phone SMS → Review Form
// ============================================

import { useState, useEffect, useRef, useCallback } from 'react';
import { Star, Loader2, CheckCircle, Shield, Phone, Smartphone, ExternalLink, Copy } from 'lucide-react';
import { signInWithGoogle, checkGoogleRedirectResult, setupRecaptcha, sendPhoneOTP, verifyPhoneOTP, getCurrentUser, onAuthChange, formatSaudiPhone } from '@/lib/firebase-auth';
import type { RecaptchaVerifier } from 'firebase/auth';

interface VerifiedReviewFormProps {
    companyCode: string;
    businessName: string;
}

type AuthMethod = null | 'choosing' | 'phone-input' | 'phone-otp' | 'authenticated';
type ReviewState = 'form' | 'sending' | 'sent';

export default function VerifiedReviewForm({ companyCode, businessName }: VerifiedReviewFormProps) {
    const [authMethod, setAuthMethod] = useState<AuthMethod>(null);
    const [reviewState, setReviewState] = useState<ReviewState>('form');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userName, setUserName] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [otpCode, setOtpCode] = useState('');
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [comment, setComment] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const recaptchaRef = useRef<RecaptchaVerifier | null>(null);

    // Cleanup RecaptchaVerifier on unmount
    useEffect(() => {
        return () => {
            if (recaptchaRef.current) {
                recaptchaRef.current.clear();
                recaptchaRef.current = null;
            }
        };
    }, []);

    // Check existing auth state
    useEffect(() => {
        const unsubscribe = onAuthChange((user) => {
            if (user) {
                setAuthMethod('authenticated');
                setUserEmail(user.email || '');
                setUserPhone(user.phoneNumber || '');
                setUserName(user.displayName || '');
                setLoading(false);
            }
        });
        return () => unsubscribe();
    }, []);

    // Handle Google redirect result (Safari iOS returns here after sign-in)
    useEffect(() => {
        checkGoogleRedirectResult().then((user) => {
            if (user) {
                setAuthMethod('authenticated');
                setUserEmail(user.email || '');
                setUserName(user.displayName || '');
            }
        });
    }, []);

    // Google Sign-In (popup, with redirect fallback on mobile)
    const handleGoogleSignIn = useCallback(async () => {
        setLoading(true);
        setErrorMsg('');
        try {
            const user = await signInWithGoogle();
            setAuthMethod('authenticated');
            setUserEmail(user.email || '');
            setUserName(user.displayName || '');
        } catch (err: unknown) {
            if (err instanceof Error) {
                if (err.message === 'POPUP_BLOCKED') {
                    // In-app WebView (Instagram/Twitter/Facebook) — show guidance
                    setErrorMsg('WEBVIEW_BLOCKED');
                    setLoading(false);
                    return;
                }
                if (err.message === 'REDIRECT_STARTED') {
                    // Mobile fallback — browser navigating to Google sign-in.
                    // Keep loading state. checkGoogleRedirectResult() handles return.
                    return;
                }
                if (err.message === 'POPUP_CLOSED') {
                    // User intentionally closed the popup — silently dismiss
                    setLoading(false);
                    return;
                }
            }
            setErrorMsg('حدث خطأ في تسجيل الدخول بجوجل');
            setLoading(false);
        }
    }, []);

    // Phone: Send OTP
    async function handleSendOTP() {
        if (!phoneInput || phoneInput.length < 9) {
            setErrorMsg('يرجى إدخال رقم هاتف صحيح');
            return;
        }
        setLoading(true);
        setErrorMsg('');
        try {
            // Clear old RecaptchaVerifier before creating new
            if (recaptchaRef.current) {
                recaptchaRef.current.clear();
                recaptchaRef.current = null;
            }
            recaptchaRef.current = setupRecaptcha('phone-send-btn');

            await sendPhoneOTP(phoneInput, recaptchaRef.current);
            setAuthMethod('phone-otp');
        } catch {
            setErrorMsg('حدث خطأ في إرسال رمز التحقق. تأكد من الرقم.');
            // Reset on failure for retry
            if (recaptchaRef.current) {
                recaptchaRef.current.clear();
                recaptchaRef.current = null;
            }
        } finally {
            setLoading(false);
        }
    }

    // Phone: Verify OTP
    async function handleVerifyOTP() {
        if (!otpCode || otpCode.length < 6) {
            setErrorMsg('يرجى إدخال الرمز المكون من 6 أرقام');
            return;
        }
        setLoading(true);
        setErrorMsg('');
        try {
            const user = await verifyPhoneOTP(otpCode);
            setAuthMethod('authenticated');
            setUserPhone(user.phoneNumber || formatSaudiPhone(phoneInput));
        } catch {
            setErrorMsg('رمز التحقق غير صحيح. حاول مرة أخرى.');
        } finally {
            setLoading(false);
        }
    }

    // Submit review
    async function handleSubmitReview(e: React.FormEvent) {
        e.preventDefault();
        if (rating === 0) {
            setErrorMsg('يرجى اختيار تقييم');
            return;
        }

        setReviewState('sending');
        setErrorMsg('');
        try {
            // Get Firebase ID token for server-side validation
            const currentUser = getCurrentUser();
            const idToken = currentUser ? await currentUser.getIdToken() : null;

            const headers: Record<string, string> = { 'Content-Type': 'application/json' };
            if (idToken) {
                headers['Authorization'] = `Bearer ${idToken}`;
            }

            const res = await fetch('/api/review-verify', {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    email: userEmail,
                    phone: userPhone,
                    companyCode,
                    rating,
                    comment,
                    userName: userName || 'عميل بروكر',
                }),
            });
            const data = await res.json();
            if (!res.ok) {
                setErrorMsg(data.error || 'حدث خطأ');
                setReviewState('form');
                return;
            }
            setReviewState('sent');
        } catch {
            setErrorMsg('حدث خطأ. حاول مرة أخرى.');
            setReviewState('form');
        }
    }

    // ============================================
    // RENDER: Sent state
    // ============================================
    if (reviewState === 'sent') {
        return (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center">
                <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
                <h4 className="text-emerald-900 font-bold text-base mb-1">تم إرسال تقييمك بنجاح ✅</h4>
                <p className="text-emerald-700 text-sm">شكراً لمشاركتك تجربتك. تقييمك موثّق ومعتمد.</p>
            </div>
        );
    }

    // ============================================
    // RENDER: Auth Gate (not authenticated yet)
    // ============================================
    if (authMethod !== 'authenticated') {
        return (
            <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-5 h-5 text-emerald-600" />
                    <h3 className="text-base font-bold text-gray-900">
                        أضف تقييمك المُوثّق لـ {businessName}
                    </h3>
                </div>

                {/* Choosing: Google or Phone */}
                {(!authMethod || authMethod === 'choosing') && (
                    <div className="space-y-3">
                        <p className="text-gray-500 text-xs mb-3">
                            سجّل دخولك أولاً لضمان مصداقية التقييمات
                        </p>

                        {/* WebView blocked guidance */}
                        {errorMsg === 'WEBVIEW_BLOCKED' && (
                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 space-y-2">
                                <p className="text-amber-800 text-xs font-bold flex items-center gap-1.5">
                                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                                    المتصفح الحالي لا يدعم تسجيل الدخول بجوجل
                                </p>
                                <p className="text-amber-700 text-[11px]">
                                    افتح الرابط في Safari أو Chrome من القائمة أعلاه ⬆️
                                </p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        try {
                                            navigator.clipboard.writeText(window.location.href);
                                        } catch {
                                            // Fallback for WebViews without Clipboard API
                                            const input = document.createElement('input');
                                            input.value = window.location.href;
                                            document.body.appendChild(input);
                                            input.select();
                                            document.execCommand('copy');
                                            document.body.removeChild(input);
                                        }
                                        setErrorMsg('تم نسخ الرابط ✅');
                                        setTimeout(() => setErrorMsg(''), 2000);
                                    }}
                                    className="w-full py-2 bg-amber-100 text-amber-800 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 hover:bg-amber-200 transition-colors"
                                >
                                    <Copy className="w-3.5 h-3.5" />
                                    نسخ الرابط
                                </button>
                            </div>
                        )}

                        {/* General error */}
                        {errorMsg && errorMsg !== 'WEBVIEW_BLOCKED' && (
                            <p className="text-red-600 text-xs bg-red-50 p-2 rounded-lg">⚠️ {errorMsg}</p>
                        )}

                        {/* Google Sign-In */}
                        <button
                            onClick={handleGoogleSignIn}
                            disabled={loading}
                            className="w-full py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all flex items-center justify-center gap-3 text-sm font-bold text-gray-700 disabled:opacity-60"
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                            )}
                            تسجيل الدخول بحساب Google
                        </button>

                        {/* Divider */}
                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-px bg-gray-200" />
                            <span className="text-gray-400 text-xs">أو</span>
                            <div className="flex-1 h-px bg-gray-200" />
                        </div>

                        {/* Phone option */}
                        <button
                            onClick={() => { setAuthMethod('phone-input'); setErrorMsg(''); }}
                            className="w-full py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-emerald-400 hover:bg-emerald-50 transition-all flex items-center justify-center gap-2 text-sm font-bold text-gray-700"
                        >
                            <Smartphone className="w-5 h-5 text-emerald-600" />
                            التحقق برقم الهاتف (SMS)
                        </button>
                    </div>
                )}

                {/* Phone: Enter number */}
                {authMethod === 'phone-input' && (
                    <div className="space-y-3">
                        <div className="flex items-center justify-between mb-1">
                            <label className="block text-gray-700 text-xs font-bold">رقم الهاتف</label>
                            <button
                                onClick={() => { setAuthMethod('choosing'); setErrorMsg(''); setPhoneInput(''); }}
                                className="text-gray-400 text-[11px] hover:text-gray-600 transition-colors"
                            >
                                ← رجوع
                            </button>
                        </div>
                        <input
                            type="tel"
                            value={phoneInput}
                            onChange={(e) => setPhoneInput(e.target.value)}
                            placeholder="05XXXXXXXX"
                            dir="ltr"
                            inputMode="tel"
                            className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none"
                            autoFocus
                        />
                        {errorMsg && <p className="text-red-600 text-xs bg-red-50 p-2 rounded-lg">⚠️ {errorMsg}</p>}
                        <button
                            id="phone-send-btn"
                            onClick={handleSendOTP}
                            disabled={loading}
                            className="w-full py-3 bg-gradient-to-l from-emerald-500 to-teal-500 text-white font-bold text-sm rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                        >
                            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Phone className="w-4 h-4" />}
                            إرسال رمز التحقق
                        </button>
                    </div>
                )}

                {/* Phone: Enter OTP */}
                {authMethod === 'phone-otp' && (
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <p className="text-emerald-700 text-sm">
                                تم إرسال رمز التحقق إلى <strong dir="ltr">{formatSaudiPhone(phoneInput)}</strong>
                            </p>
                            <button
                                onClick={() => { setAuthMethod('phone-input'); setErrorMsg(''); setOtpCode(''); }}
                                className="text-gray-400 text-[11px] hover:text-gray-600 transition-colors flex-shrink-0"
                            >
                                ← تغيير الرقم
                            </button>
                        </div>
                        <input
                            type="text"
                            value={otpCode}
                            onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                            placeholder="أدخل الرمز المكون من 6 أرقام"
                            dir="ltr"
                            maxLength={6}
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-center text-lg tracking-[0.3em] font-mono focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none"
                            autoFocus
                        />
                        {errorMsg && <p className="text-red-600 text-xs bg-red-50 p-2 rounded-lg">⚠️ {errorMsg}</p>}
                        <button
                            onClick={handleVerifyOTP}
                            disabled={loading}
                            className="w-full py-3 bg-gradient-to-l from-emerald-500 to-teal-500 text-white font-bold text-sm rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                        >
                            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle className="w-4 h-4" />}
                            تأكيد الرمز
                        </button>
                    </div>
                )}
            </div>
        );
    }

    // ============================================
    // RENDER: Review Form (authenticated)
    // ============================================
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-600" />
                    <h3 className="text-base font-bold text-gray-900">تقييمك المُوثّق</h3>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1 rounded-full">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 text-[10px] font-bold">
                        {userEmail || userPhone}
                    </span>
                </div>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-4">
                {/* Star Rating */}
                <div>
                    <label className="block text-gray-700 text-xs font-bold mb-2">التقييم</label>
                    <div className="flex gap-1" dir="ltr">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                                className="transition-transform hover:scale-110"
                            >
                                <Star
                                    className={`w-8 h-8 ${
                                        star <= (hoverRating || rating)
                                            ? 'text-amber-400 fill-amber-400'
                                            : 'text-gray-300'
                                    } transition-colors`}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Comment */}
                <div>
                    <label className="block text-gray-700 text-xs font-bold mb-1">تعليقك</label>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="شاركنا تجربتك مع هذه الشركة..."
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none resize-none"
                    />
                </div>

                {errorMsg && <p className="text-red-600 text-xs bg-red-50 p-2 rounded-lg">⚠️ {errorMsg}</p>}

                <button
                    type="submit"
                    disabled={reviewState === 'sending'}
                    className="w-full py-3 bg-gradient-to-l from-emerald-500 to-teal-500 text-white font-bold text-sm rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                    {reviewState === 'sending' ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> جاري الإرسال...</>
                    ) : (
                        <><Star className="w-4 h-4" /> إرسال التقييم المُوثّق</>
                    )}
                </button>
            </form>
        </div>
    );
}
