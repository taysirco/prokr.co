// ============================================
// 🛡️ NafathVerifyBanner — دليل التحقق قبل التعاقد
// Consumer-verification guidance: the steps a customer can run themselves
// against official Saudi government registries before hiring.
//
// ⚠️ This component deliberately makes NO claim that Prokr performs identity,
// criminal-record or labour-contract checks. Prokr is a directory; it does not
// employ or dispatch technicians, and no field in the data model records a
// Nafath or Absher result. It previously asserted all three — a falsifiable
// claim that an answer engine can check and that discredits every other claim
// on the domain. Company-level credentials that ARE recorded (CR number, ZATCA,
// Qiwa, verified-employees declaration) are rendered from advertiser data in
// LocalBusinessJsonLd, gated on the corresponding flag.
// Server Component — no 'use client' needed
// ============================================

interface NafathVerifyBannerProps {
    serviceNameAr: string;
    cityNameAr: string;
}

/** Checks the customer can perform, each against a real public registry. */
const VERIFICATION_STEPS = [
    {
        icon: '📋',
        title: 'تحقّق من السجل التجاري',
        description:
            'اطلب رقم السجل التجاري من الشركة، ثم تحقق من سريانه ومن اسم المنشأة عبر البوابة الرسمية لوزارة التجارة.',
        org: 'وزارة التجارة',
        href: 'https://mc.gov.sa/',
    },
    {
        icon: '🧾',
        title: 'تحقّق من التسجيل الضريبي',
        description:
            'الشركة النظامية تصدر فاتورة ضريبية بها الرقم الضريبي. يمكنك التأكد من الرقم عبر أداة هيئة الزكاة والضريبة والجمارك.',
        org: 'ZATCA',
        href: 'https://zatca.gov.sa/',
    },
    {
        icon: '🪪',
        title: 'اطلب إثبات هوية الفني',
        description:
            'قبل دخول أي فني لمنزلك اطلب الهوية الوطنية أو الإقامة، وتأكد أن الاسم يطابق ما أبلغتك به الشركة.',
        org: 'قبل بدء العمل',
        href: null,
    },
] as const;

export function NafathVerifyBanner({ serviceNameAr, cityNameAr }: NafathVerifyBannerProps) {
    const cityPhrase = cityNameAr.startsWith('ب') ? cityNameAr : `في ${cityNameAr}`;

    return (
        <section
            className="bg-gradient-to-br from-sky-50 via-white to-teal-50 border border-sky-200 rounded-2xl p-5 sm:p-7 shadow-sm"
            aria-label="خطوات التحقق من شركة الخدمة قبل التعاقد"
        >
            {/* Header */}
            <div className="flex items-start gap-3 mb-5">
                <div className="w-11 h-11 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0 text-xl border border-sky-200">
                    🛡️
                </div>
                <div>
                    <h3 className="text-base sm:text-lg font-bold text-sky-900">
                        كيف تتحقق من شركة {serviceNameAr} {cityPhrase} قبل التعاقد
                    </h3>
                    <p className="text-sky-600 text-xs sm:text-sm mt-0.5">
                        ثلاث خطوات يمكنك تنفيذها بنفسك خلال دقائق عبر الجهات الرسمية
                    </p>
                </div>
            </div>

            {/* Verification steps */}
            <ol className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 list-none p-0 m-0">
                {VERIFICATION_STEPS.map((step, i) => (
                    <li
                        key={step.title}
                        className="bg-white border border-sky-100 rounded-xl p-3.5 hover:border-sky-300 hover:shadow-sm transition-all group"
                    >
                        <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-lg group-hover:scale-110 transition-transform">{step.icon}</span>
                            <span className="font-bold text-gray-900 text-sm">
                                {i + 1}. {step.title}
                            </span>
                        </div>
                        <p className="text-gray-500 text-xs leading-relaxed">
                            {step.description}
                        </p>
                        {step.href ? (
                            <a
                                href={step.href}
                                target="_blank"
                                rel="noopener nofollow"
                                className="text-sky-500 text-[10px] font-bold mt-1.5 inline-block uppercase tracking-wide hover:text-sky-700 hover:underline"
                            >
                                {step.org} ↗
                            </a>
                        ) : (
                            <span className="text-sky-500 text-[10px] font-bold mt-1.5 inline-block uppercase tracking-wide">
                                {step.org}
                            </span>
                        )}
                    </li>
                ))}
            </ol>

            {/* Bottom note — what Prokr actually does */}
            <div className="flex items-center gap-2 bg-sky-50 border border-sky-100 rounded-lg px-3 py-2">
                <span className="text-sky-500 text-sm">ℹ️</span>
                <p className="text-sky-800 text-xs font-medium">
                    بروكر دليل خدمات: نطلب سجلاً تجارياً سارياً لإدراج أي شركة، والتعاقد يتم بينك وبين الشركة مباشرة.
                </p>
            </div>
        </section>
    );
}
