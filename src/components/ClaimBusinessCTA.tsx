'use client';

// ============================================
// 🔐 ClaimBusinessCTA — توثيق المنشأة بخطوتين
// Step 1: Email verification
// Step 2: Phone OTP (must match registered number)
// ============================================

import { useState, useEffect, useRef } from 'react';
import { Shield, Mail, CheckCircle, Loader2, Building2, Phone, Smartphone } from 'lucide-react';
import { sendClaimVerificationEmail, setupRecaptcha, sendPhoneOTP, verifyPhoneOTP, formatSaudiPhone } from '@/lib/firebase-auth';
import type { RecaptchaVerifier } from 'firebase/auth';

interface ClaimBusinessCTAProps {
    companyCode: string;
    businessName: string;
    businessPhone: string; // Phone number registered on the platform
    variant?: 'full' | 'compact';
}

type ClaimState =
    | 'idle'
    | 'email-form'       // Step 1: enter email
    | 'email-sending'
    | 'email-sent'       // Waiting for email confirmation
    | 'email-verified'   // Email confirmed, now phone step
    | 'phone-form'       // Step 2: enter phone
    | 'phone-sending'
    | 'phone-otp'        // Enter OTP
    | 'phone-verifying'
    | 'claimed'          // ✅ Both verified
    | 'error';

export default function ClaimBusinessCTA({ companyCode, businessName, businessPhone, variant = 'full' }: ClaimBusinessCTAProps) {
    const [state, setState] = useState<ClaimState>('idle');
    const [email, setEmail] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [otpCode, setOtpCode] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const recaptchaRef = useRef<RecaptchaVerifier | null>(null);

    // Check if already claimed
    useEffect(() => {
        fetch(`/api/claim?code=${companyCode}`)
            .then(res => res.json())
            .then(data => {
                if (data.claimed) setState('claimed');
                // If email verified but phone not yet
                if (data.email_verified && !data.phone_verified) {
                    setState('phone-form');
                }
            })
            .catch(() => { /* silent */ });
    }, [companyCode]);

    // ============================================
    // Step 1: Email Verification
    // ============================================
    async function handleEmailSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!email || !email.includes('@')) {
            setErrorMsg('يرجى إدخال بريد إلكتروني صحيح');
            return;
        }

        setState('email-sending');
        setErrorMsg('');

        try {
            const res = await fetch('/api/claim', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, companyCode, businessName }),
            });
            const data = await res.json();

            if (!res.ok && res.status === 409) {
                setState('claimed');
                return;
            }
            if (!res.ok) {
                setErrorMsg(data.error || 'حدث خطأ');
                setState('email-form');
                return;
            }

            await sendClaimVerificationEmail(email, companyCode);
            setState('email-sent');
        } catch {
            setErrorMsg('حدث خطأ في إرسال رابط التأكيد.');
            setState('email-form');
        }
    }

    // ============================================
    // Step 2: Phone Verification
    // ============================================
    async function handlePhoneSendOTP() {
        if (!phoneInput || phoneInput.length < 9) {
            setErrorMsg('يرجى إدخال رقم هاتف صحيح');
            return;
        }

        // Check if phone matches the registered number
        const inputFormatted = formatSaudiPhone(phoneInput);
        const registeredFormatted = formatSaudiPhone(businessPhone);

        if (inputFormatted !== registeredFormatted) {
            setErrorMsg('رقم الهاتف لا يتطابق مع الرقم المسجل لهذه المنشأة. تأكد من إدخال نفس الرقم.');
            return;
        }

        setState('phone-sending');
        setErrorMsg('');

        try {
            if (!recaptchaRef.current) {
                recaptchaRef.current = setupRecaptcha('claim-phone-btn');
            }
            await sendPhoneOTP(phoneInput, recaptchaRef.current);
            setState('phone-otp');
        } catch {
            setErrorMsg('حدث خطأ في إرسال رمز التحقق.');
            setState('phone-form');
        }
    }

    async function handlePhoneVerifyOTP() {
        if (!otpCode || otpCode.length < 6) {
            setErrorMsg('يرجى إدخال الرمز المكون من 6 أرقام');
            return;
        }

        setState('phone-verifying');
        setErrorMsg('');

        try {
            await verifyPhoneOTP(otpCode);

            // Mark claim as phone-verified
            await fetch('/api/claim/verify-phone', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, companyCode, phone: phoneInput }),
            });

            setState('claimed');
        } catch {
            setErrorMsg('رمز التحقق غير صحيح.');
            setState('phone-otp');
        }
    }

    // ============================================
    // RENDER: Already Claimed
    // ============================================
    if (state === 'claimed') {
        return (
            <div className={`bg-emerald-50 border border-emerald-200 rounded-2xl ${variant === 'compact' ? 'p-3' : 'p-5'}`}>
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <p className="text-emerald-800 font-bold text-sm">✅ منشأة مُوثّقة ومُعتمدة</p>
                </div>
                {variant === 'full' && (
                    <p className="text-emerald-600 text-xs mt-1 mr-7">
                        تم التحقق من ملكية {businessName} عبر البريد الإلكتروني ورقم الهاتف
                    </p>
                )}
            </div>
        );
    }

    // ============================================
    // RENDER: Compact variant
    // ============================================
    if (variant === 'compact' && state === 'idle') {
        return (
            <button
                onClick={() => setState('email-form')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-800 text-xs font-bold rounded-full border border-amber-300 hover:bg-amber-100 hover:border-amber-400 transition-all"
            >
                <Shield className="w-3.5 h-3.5" />
                هل تملك هذه المنشأة؟
            </button>
        );
    }

    // ============================================
    // RENDER: Email Sent (waiting for confirmation)
    // ============================================
    if (state === 'email-sent') {
        return (
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-blue-900 font-bold text-base mb-1">📧 الخطوة 1 من 2: تحقق من بريدك</h4>
                <p className="text-blue-700 text-sm">
                    أرسلنا رابط تأكيد إلى <strong className="text-blue-900">{email}</strong>
                </p>
                <p className="text-blue-500 text-xs mt-2">
                    بعد تأكيد البريد، ستحتاج لتأكيد رقم هاتفك المسجل
                </p>

                {/* Progress bar */}
                <div className="flex items-center gap-2 mt-4 justify-center">
                    <div className="flex items-center gap-1">
                        <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                        <span className="text-blue-700 text-xs font-bold">البريد</span>
                    </div>
                    <div className="w-8 h-0.5 bg-gray-300" />
                    <div className="flex items-center gap-1">
                        <div className="w-6 h-6 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                        <span className="text-gray-400 text-xs">الهاتف</span>
                    </div>
                </div>
            </div>
        );
    }

    // ============================================
    // RENDER: Phone Form (Step 2)
    // ============================================
    if (state === 'phone-form' || state === 'phone-sending' || state === 'email-verified') {
        return (
            <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 border-2 border-emerald-300 rounded-2xl p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-1">
                    <Smartphone className="w-5 h-5 text-emerald-600" />
                    <h4 className="text-emerald-900 font-bold text-base">📱 الخطوة 2 من 2: تأكيد رقم الهاتف</h4>
                </div>
                <p className="text-emerald-600 text-xs mb-4">
                    أدخل رقم الهاتف المسجل لهذه المنشأة على بروكر للتحقق
                </p>

                {/* Progress bar */}
                <div className="flex items-center gap-2 mb-4 justify-center">
                    <div className="flex items-center gap-1">
                        <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs">✓</div>
                        <span className="text-emerald-600 text-xs font-bold">البريد ✓</span>
                    </div>
                    <div className="w-8 h-0.5 bg-emerald-400" />
                    <div className="flex items-center gap-1">
                        <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                        <span className="text-emerald-700 text-xs font-bold">الهاتف</span>
                    </div>
                </div>

                <div className="space-y-3">
                    <input
                        type="tel"
                        value={phoneInput}
                        onChange={(e) => setPhoneInput(e.target.value)}
                        placeholder="05XXXXXXXX"
                        dir="ltr"
                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none"
                        autoFocus
                    />
                    {errorMsg && <p className="text-red-600 text-xs bg-red-50 p-2 rounded-lg">⚠️ {errorMsg}</p>}
                    <button
                        id="claim-phone-btn"
                        onClick={handlePhoneSendOTP}
                        disabled={state === 'phone-sending'}
                        className="w-full py-3 bg-gradient-to-l from-emerald-500 to-teal-500 text-white font-bold text-sm rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                        {state === 'phone-sending' ? (
                            <><Loader2 className="w-4 h-4 animate-spin" /> جاري الإرسال...</>
                        ) : (
                            <><Phone className="w-4 h-4" /> إرسال رمز التحقق</>
                        )}
                    </button>
                </div>
            </div>
        );
    }

    // ============================================
    // RENDER: Phone OTP (Step 2b)
    // ============================================
    if (state === 'phone-otp' || state === 'phone-verifying') {
        return (
            <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 border-2 border-emerald-300 rounded-2xl p-5 sm:p-6 text-center">
                <Phone className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <h4 className="text-emerald-900 font-bold text-base mb-1">أدخل رمز التحقق</h4>
                <p className="text-emerald-700 text-sm mb-4">
                    تم إرسال رمز SMS إلى <strong dir="ltr">{formatSaudiPhone(phoneInput)}</strong>
                </p>

                <input
                    type="text"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    placeholder="______"
                    dir="ltr"
                    maxLength={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-center text-xl tracking-[0.4em] font-mono focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none mb-3"
                    autoFocus
                />

                {errorMsg && <p className="text-red-600 text-xs bg-red-50 p-2 rounded-lg mb-3">⚠️ {errorMsg}</p>}

                <button
                    onClick={handlePhoneVerifyOTP}
                    disabled={state === 'phone-verifying'}
                    className="w-full py-3 bg-gradient-to-l from-emerald-500 to-teal-500 text-white font-bold text-sm rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                >
                    {state === 'phone-verifying' ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> جاري التحقق...</>
                    ) : (
                        <><CheckCircle className="w-4 h-4" /> تأكيد الرمز وتوثيق المنشأة</>
                    )}
                </button>
            </div>
        );
    }

    // ============================================
    // RENDER: Initial CTA (idle or email-form)
    // ============================================
    return (
        <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 border-2 border-amber-300 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 border border-amber-200">
                    <Building2 className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                    <h3 className="text-base sm:text-lg font-bold text-amber-900">
                        🔐 هل تملك هذه المنشأة؟
                    </h3>
                    <p className="text-amber-700 text-xs sm:text-sm mt-0.5">
                        وثّق حسابك بخطوتين: البريد + رقم الهاتف المسجل
                    </p>
                </div>
            </div>

            {state === 'idle' ? (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        {[
                            { icon: '1️⃣', text: 'تأكيد البريد الإلكتروني' },
                            { icon: '2️⃣', text: 'تأكيد رقم الهاتف المسجل' },
                            { icon: '✅', text: 'شارة "منشأة مُوثّقة"' },
                            { icon: '🛡️', text: 'تحكم كامل بصفحة شركتك' },
                        ].map((b) => (
                            <div key={b.text} className="flex items-center gap-2 text-gray-700 text-xs">
                                <span>{b.icon}</span>
                                <span>{b.text}</span>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => setState('email-form')}
                        className="w-full py-3 bg-gradient-to-l from-amber-500 to-yellow-500 text-white font-bold text-sm rounded-xl hover:from-amber-600 hover:to-yellow-600 transition-all shadow-lg shadow-amber-200 flex items-center justify-center gap-2"
                    >
                        <Shield className="w-4 h-4" />
                        ابدأ التوثيق — مجاناً
                    </button>
                </>
            ) : (
                <form onSubmit={handleEmailSubmit} className="space-y-3">
                    {/* Progress bar */}
                    <div className="flex items-center gap-2 justify-center mb-2">
                        <div className="flex items-center gap-1">
                            <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                            <span className="text-amber-700 text-xs font-bold">البريد</span>
                        </div>
                        <div className="w-8 h-0.5 bg-gray-300" />
                        <div className="flex items-center gap-1">
                            <div className="w-6 h-6 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                            <span className="text-gray-400 text-xs">الهاتف</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 text-xs font-bold mb-1">
                            البريد الإلكتروني الرسمي للمنشأة
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="owner@company.com"
                            dir="ltr"
                            className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none"
                            required
                            autoFocus
                        />
                    </div>

                    {errorMsg && <p className="text-red-600 text-xs bg-red-50 p-2 rounded-lg">⚠️ {errorMsg}</p>}

                    <button
                        type="submit"
                        disabled={state === 'email-sending'}
                        className="w-full py-3 bg-gradient-to-l from-amber-500 to-yellow-500 text-white font-bold text-sm rounded-xl hover:from-amber-600 hover:to-yellow-600 transition-all shadow-lg shadow-amber-200 flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                        {state === 'email-sending' ? (
                            <><Loader2 className="w-4 h-4 animate-spin" /> جاري الإرسال...</>
                        ) : (
                            <><Mail className="w-4 h-4" /> إرسال رابط التأكيد</>
                        )}
                    </button>

                    <p className="text-gray-400 text-[10px] text-center">
                        الخطوة 1 من 2 — بعد تأكيد البريد ستحتاج لتأكيد رقم الهاتف
                    </p>
                </form>
            )}
        </div>
    );
}
