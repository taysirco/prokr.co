'use client';

// ============================================
// 🔐 ClaimBusinessCTA — زر توثيق المنشأة
// Prominent CTA for business owners to claim their listing
// ============================================

import { useState, useEffect } from 'react';
import { Shield, Mail, CheckCircle, Loader2, Building2 } from 'lucide-react';
import { sendClaimVerificationEmail } from '@/lib/firebase-auth';

interface ClaimBusinessCTAProps {
    companyCode: string;
    businessName: string;
    variant?: 'full' | 'compact';
}

type ClaimState = 'idle' | 'form' | 'sending' | 'sent' | 'claimed' | 'error';

export default function ClaimBusinessCTA({ companyCode, businessName, variant = 'full' }: ClaimBusinessCTAProps) {
    const [state, setState] = useState<ClaimState>('idle');
    const [email, setEmail] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    // Check if already claimed
    useEffect(() => {
        fetch(`/api/claim?code=${companyCode}`)
            .then(res => res.json())
            .then(data => {
                if (data.claimed) setState('claimed');
            })
            .catch(() => { /* silent */ });
    }, [companyCode]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!email || !email.includes('@')) {
            setErrorMsg('يرجى إدخال بريد إلكتروني صحيح');
            return;
        }

        setState('sending');
        setErrorMsg('');

        try {
            // 1. Register claim in Firestore
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
                setState('form');
                return;
            }

            // 2. Send Firebase email link
            await sendClaimVerificationEmail(email, companyCode);
            setState('sent');
        } catch {
            setErrorMsg('حدث خطأ في إرسال رابط التأكيد. حاول مرة أخرى.');
            setState('form');
        }
    }

    // Already claimed
    if (state === 'claimed') {
        return (
            <div className={`bg-emerald-50 border border-emerald-200 rounded-2xl p-4 ${variant === 'compact' ? 'p-3' : 'p-5'}`}>
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <p className="text-emerald-800 font-bold text-sm">✅ منشأة مُوثّقة ومُعتمدة</p>
                </div>
                {variant === 'full' && (
                    <p className="text-emerald-600 text-xs mt-1 mr-7">
                        تم التحقق من ملكية {businessName} عبر البريد الإلكتروني للمالك
                    </p>
                )}
            </div>
        );
    }

    // Compact variant — mini button for service pages
    if (variant === 'compact') {
        if (state === 'idle') {
            return (
                <button
                    onClick={() => setState('form')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-800 text-xs font-bold rounded-full border border-amber-300 hover:bg-amber-100 hover:border-amber-400 transition-all"
                >
                    <Shield className="w-3.5 h-3.5" />
                    هل تملك هذه المنشأة؟
                </button>
            );
        }
    }

    // Sent state
    if (state === 'sent') {
        return (
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-blue-900 font-bold text-base mb-1">تحقق من بريدك الإلكتروني 📧</h4>
                <p className="text-blue-700 text-sm">
                    أرسلنا رابط تأكيد إلى <strong className="text-blue-900">{email}</strong>
                </p>
                <p className="text-blue-500 text-xs mt-2">
                    افتح الرابط في البريد لإتمام توثيق {businessName}
                </p>
            </div>
        );
    }

    // Full CTA — idle or form state
    return (
        <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 border-2 border-amber-300 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 border border-amber-200">
                    <Building2 className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                    <h3 className="text-base sm:text-lg font-bold text-amber-900">
                        🔐 هل تملك هذه المنشأة؟
                    </h3>
                    <p className="text-amber-700 text-xs sm:text-sm mt-0.5">
                        وثّق حسابك الآن واحصل على شارة التوثيق الرسمية
                    </p>
                </div>
            </div>

            {state === 'idle' ? (
                <>
                    {/* Benefits */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        {[
                            { icon: '✅', text: 'شارة "منشأة مُوثّقة" على صفحتك' },
                            { icon: '📊', text: 'أولوية في نتائج البحث' },
                            { icon: '🛡️', text: 'ثقة أعلى من العملاء' },
                            { icon: '📧', text: 'إشعارات بالتقييمات الجديدة' },
                        ].map((b) => (
                            <div key={b.text} className="flex items-center gap-2 text-gray-700 text-xs">
                                <span>{b.icon}</span>
                                <span>{b.text}</span>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => setState('form')}
                        className="w-full py-3 bg-gradient-to-l from-amber-500 to-yellow-500 text-white font-bold text-sm rounded-xl hover:from-amber-600 hover:to-yellow-600 transition-all shadow-lg shadow-amber-200 flex items-center justify-center gap-2"
                    >
                        <Shield className="w-4 h-4" />
                        وثّق حسابك الآن — مجاناً
                    </button>
                </>
            ) : (
                /* Email form */
                <form onSubmit={handleSubmit} className="space-y-3">
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
                            className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all"
                            required
                            autoFocus
                        />
                    </div>

                    {errorMsg && (
                        <p className="text-red-600 text-xs bg-red-50 p-2 rounded-lg">⚠️ {errorMsg}</p>
                    )}

                    <button
                        type="submit"
                        disabled={state === 'sending'}
                        className="w-full py-3 bg-gradient-to-l from-amber-500 to-yellow-500 text-white font-bold text-sm rounded-xl hover:from-amber-600 hover:to-yellow-600 transition-all shadow-lg shadow-amber-200 flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                        {state === 'sending' ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                جاري الإرسال...
                            </>
                        ) : (
                            <>
                                <Mail className="w-4 h-4" />
                                إرسال رابط التأكيد
                            </>
                        )}
                    </button>

                    <p className="text-gray-400 text-[10px] text-center">
                        سنرسل رابط تأكيد إلى بريدك — بدون كلمة مرور
                    </p>
                </form>
            )}
        </div>
    );
}
