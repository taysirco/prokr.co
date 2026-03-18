'use client';

// ============================================
// ⭐ VerifiedReviewForm — تقييم مُوثّق بالبريد
// Review submission with email verification
// ============================================

import { useState } from 'react';
import { Star, Mail, Loader2, CheckCircle, Shield } from 'lucide-react';
import { sendReviewerVerificationEmail } from '@/lib/firebase-auth';

interface VerifiedReviewFormProps {
    companyCode: string;
    businessName: string;
}

type ReviewState = 'form' | 'sending' | 'sent' | 'error';

export default function VerifiedReviewForm({ companyCode, businessName }: VerifiedReviewFormProps) {
    const [state, setState] = useState<ReviewState>('form');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [comment, setComment] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            setErrorMsg('يرجى إدخال بريد إلكتروني صحيح');
            return;
        }
        if (rating === 0) {
            setErrorMsg('يرجى اختيار تقييم');
            return;
        }

        setState('sending');
        setErrorMsg('');

        try {
            // 1. Submit review to API
            const res = await fetch('/api/review-verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    companyCode,
                    rating,
                    comment,
                    userName: name || 'عميل بروكر',
                }),
            });
            const data = await res.json();

            if (!res.ok) {
                setErrorMsg(data.error || 'حدث خطأ');
                setState('form');
                return;
            }

            // 2. Send Firebase email verification link
            await sendReviewerVerificationEmail(email, companyCode);
            setState('sent');
        } catch {
            setErrorMsg('حدث خطأ. حاول مرة أخرى.');
            setState('form');
        }
    }

    // Sent state
    if (state === 'sent') {
        return (
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-center">
                <CheckCircle className="w-10 h-10 text-blue-500 mx-auto mb-2" />
                <h4 className="text-blue-900 font-bold text-base mb-1">تحقق من بريدك 📧</h4>
                <p className="text-blue-700 text-sm">
                    أرسلنا رابط تأكيد إلى <strong className="text-blue-900">{email}</strong>
                </p>
                <p className="text-blue-500 text-xs mt-2">
                    بعد التأكيد سيظهر تقييمك بشارة ✅ مُوثّق
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-emerald-600" />
                <h3 className="text-base font-bold text-gray-900">
                    أضف تقييمك المُوثّق لـ {businessName}
                </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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

                {/* Name */}
                <div>
                    <label className="block text-gray-700 text-xs font-bold mb-1">الاسم (اختياري)</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="اسمك"
                        className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-gray-700 text-xs font-bold mb-1">
                        البريد الإلكتروني <span className="text-red-400">*</span>
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@gmail.com"
                        dir="ltr"
                        className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none"
                        required
                    />
                    <p className="text-gray-400 text-[10px] mt-1">
                        نرسل رابط تأكيد لضمان مصداقية التقييمات — لن ننشر بريدك
                    </p>
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

                {errorMsg && (
                    <p className="text-red-600 text-xs bg-red-50 p-2 rounded-lg">⚠️ {errorMsg}</p>
                )}

                <button
                    type="submit"
                    disabled={state === 'sending'}
                    className="w-full py-3 bg-gradient-to-l from-emerald-500 to-teal-500 text-white font-bold text-sm rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                    {state === 'sending' ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            جاري الإرسال...
                        </>
                    ) : (
                        <>
                            <Mail className="w-4 h-4" />
                            إرسال التقييم وتأكيد البريد
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
