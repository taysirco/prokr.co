// ============================================
// 🛡️ NafathTrustShield — درع نفاذ وأبشر
// Visual trust badge showing government verification
// Server Component — no 'use client' needed
// ============================================

interface NafathTrustShieldProps {
    serviceNameAr: string;
    cityNameAr: string;
}

const TRUST_PILLARS = [
    {
        icon: '🪪',
        title: 'تحقق نفاذ',
        description: 'هوية وطنية مُوثّقة عبر منصة نفاذ — مركز المعلومات الوطني',
        org: 'Nafath (IAM)',
    },
    {
        icon: '🔍',
        title: 'سجل جنائي نظيف',
        description: 'فحص أمني شامل — لا سوابق جنائية عبر منصة أبشر',
        org: 'Absher',
    },
    {
        icon: '📋',
        title: 'عقود قوى موثّقة',
        description: 'عمالة نظامية بعقود موثقة في منصة قوى وأجير',
        org: 'Qiwa',
    },
] as const;

export function NafathTrustShield({ serviceNameAr, cityNameAr }: NafathTrustShieldProps) {
    return (
        <section
            className="bg-gradient-to-br from-sky-50 via-white to-teal-50 border border-sky-200 rounded-2xl p-5 sm:p-7 shadow-sm"
            aria-label="شارة التحقق الأمني — نفاذ وأبشر"
        >
            {/* Header */}
            <div className="flex items-start gap-3 mb-5">
                <div className="w-11 h-11 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0 text-xl border border-sky-200">
                    🛡️
                </div>
                <div>
                    <h3 className="text-base sm:text-lg font-bold text-sky-900">
                        درع نفاذ — فرق {serviceNameAr} بتحقق أمني حكومي
                    </h3>
                    <p className="text-sky-600 text-xs sm:text-sm mt-0.5">
                        جميع الفرق العاملة عبر بروكر {cityNameAr.startsWith('ب') ? cityNameAr : `في ${cityNameAr}`} تمر بتحقق هوية وطنية
                    </p>
                </div>
            </div>

            {/* Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                {TRUST_PILLARS.map((pillar) => (
                    <div
                        key={pillar.title}
                        className="bg-white border border-sky-100 rounded-xl p-3.5 hover:border-sky-300 hover:shadow-sm transition-all group"
                    >
                        <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-lg group-hover:scale-110 transition-transform">{pillar.icon}</span>
                            <span className="font-bold text-gray-900 text-sm">{pillar.title}</span>
                        </div>
                        <p className="text-gray-500 text-xs leading-relaxed">
                            {pillar.description}
                        </p>
                        <span className="text-sky-500 text-[10px] font-bold mt-1.5 inline-block uppercase tracking-wide">
                            {pillar.org}
                        </span>
                    </div>
                ))}
            </div>

            {/* Bottom assurance */}
            <div className="flex items-center gap-2 bg-sky-50 border border-sky-100 rounded-lg px-3 py-2">
                <span className="text-sky-500 text-sm">✅</span>
                <p className="text-sky-800 text-xs font-medium">
                    بروكر يتحقق من هوية كل فني قبل إرساله لمنزلك — لأن أمان عائلتك أولاً
                </p>
            </div>
        </section>
    );
}
