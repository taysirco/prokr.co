import Link from 'next/link';

interface FraudAlertBannerProps {
    serviceName: string;
    serviceSlug: string;
    cityName: string;
}

// ==========================================================
// 🛡️ مؤشر بروكر لكشف الاحتيال والشركات الوهمية
// Anti-Scam YMYL Trap — يلتقط negative intent searches
// "هل شركة X نصابين؟" — "خدعة الفريون" — "سرقة أثاث النقل"
// ==========================================================

const SCAM_WARNINGS: Record<string, { title: string; warning: string; link: string }[]> = {
    moving: [
        { title: 'احتجاز الأثاث والفدية', warning: '"شالوا أثاثي وقالوا ادفع 3,800 بدل 500 والا ما ننزّل" — هالقصة تتكرر يومياً في الرياض وجدة.', link: '/blog/furniture-theft-ransom-scam' },
        { title: 'أسعار أقل من السوق بالنص', warning: 'نقل شقة 3 غرف بـ 400 ريال؟ السعر الحقيقي 1,200-1,800. السعر الرخيص = فخ 90% من الحالات.', link: '/blog/scam-companies-warning-signs' },
    ],
    cleaning: [
        { title: 'مواد تنظيف مغشوشة', warning: 'شركات تجيب مواد من الباطن — لا معتمدة من SFDA ولا آمنة على أطفالك. أم سعود اكتشفت بعد ما بنتها تحسست.', link: '/blog/scam-companies-warning-signs' },
        { title: 'عمالة بدون تصاريح', warning: 'شركات ترسل عمّال ما هم مسجلين في منصة قوى — لو ضبطتهم الشرطة أنت اللي تتحمل المسؤولية.', link: '/blog/scam-companies-warning-signs' },
    ],
    'pest-control': [
        { title: 'خدعة "الرش المجاني"', warning: '"اتصلوا وقالوا عندنا رش مجاني — جو وقالوا عندك نمل أبيض يبي 8,000 ريال!" هذي قصة أبو فيصل من الياسمين.', link: '/blog/scam-companies-warning-signs' },
        { title: 'مبيدات بدون ترخيص SFDA', warning: 'شركات تستخدم مبيدات ممنوعة أو منتهية — خطر على صحة عائلتك. اسأل عن رقم تسجيل SFDA.', link: '/blog/scam-companies-warning-signs' },
    ],
    'leak-detection': [
        { title: 'تضخيم نقاط التسريب', warning: '"قال عندك 7 تسريبات والبيت في خطر!" أبو تركي من جدة اكتشف إنها نقطتين بس لما جرّب شركة ثانية.', link: '/blog/scam-companies-warning-signs' },
        { title: 'تقارير ما تقبلها المياه الوطنية', warning: 'شركات تصدر تقارير كشف مزيفة — شركة المياه الوطنية ما تقبلها ولا تعدّل فاتورتك.', link: '/blog/scam-companies-warning-signs' },
    ],
    insulation: [
        { title: 'مواد عزل رخيصة', warning: 'شركات تستخدم فوم رخيص يفقد فعاليته خلال شهور مو سنوات — وأنت ما تدري إلا لما يرجع الرطوبة.', link: '/blog/scam-companies-warning-signs' },
        { title: 'ضمان 10 سنوات على ورق بس', warning: 'شركات تعطيك ورقة ضمان 10 سنوات — وبعد 6 شهور تتصل عليهم: الرقم مقفل والشركة ما لها وجود.', link: '/blog/scam-companies-warning-signs' },
    ],
    sewage: [
        { title: 'تفريغ غير نظامي', warning: 'صهاريج تفرّغ في أراضي فضاء بدل محطة المعالجة — مخالفة بيئية غرامتها 50,000 ريال عليك أنت مو عليهم.', link: '/blog/scam-companies-warning-signs' },
        { title: 'مضاعفة السعر بعد الوصول', warning: '"وصل السائق وقال البيارة أكبر من المتوقع — يبي ضعف السعر." لا تدفع. خذ رأي ثاني.', link: '/blog/scam-companies-warning-signs' },
    ],
    ac: [
        { title: 'خدعة الفريون — أشهر نصبة', warning: '"الفريون فاضي يبي تعبئة كاملة بـ 850 ريال" — والمشكلة فلتر متسخ تنظيفه 80 ريال بس. هالخدعة تتكرر كل صيف.', link: '/blog/freon-scam-air-conditioning' },
        { title: 'فنيين بدون ترخيص', warning: 'فني جاك من إعلان في حراج ما عنده سجل تجاري ولا فاتورة ZATCA — لو سرقك ما تقدر تبلغ.', link: '/blog/scam-companies-warning-signs' },
    ],
};

// Map service slug to category
function getServiceCategory(slug: string): string {
    if (slug.includes('moving') || slug.includes('furniture') || slug.includes('dyna') || slug.includes('storage')) return 'moving';
    if (slug.includes('ac-') || slug.includes('air-conditioner') || slug.includes('ac_')) return 'ac';
    if (slug.includes('pest') || slug.includes('termite') || slug.includes('cockroach') || slug.includes('bedbug') || slug.includes('insect') || slug.includes('spray') || slug.includes('snake') || slug.includes('pigeon')) return 'pest-control';
    if (slug.includes('insulation') || slug.includes('foam') || slug.includes('thermal') || (slug.includes('roof') && slug.includes('insul'))) return 'insulation';
    if (slug.includes('leak') || (slug.includes('water') && slug.includes('detection'))) return 'leak-detection';
    if (slug.includes('sewage') || slug.includes('sewer') || slug.includes('drain')) return 'sewage';
    if (slug.includes('cleaning') || slug.includes('tank') || slug.includes('sofa') || slug.includes('carpet') || slug.includes('steam') || slug.includes('villa') || slug.includes('apartment') || slug.includes('mosque') || slug.includes('swimming') || slug.includes('facade')) return 'cleaning';
    return 'moving'; // fallback
}

export default function FraudAlertBanner({ serviceName, serviceSlug, cityName }: FraudAlertBannerProps) {
    const category = getServiceCategory(serviceSlug);
    const warnings = SCAM_WARNINGS[category] || SCAM_WARNINGS.moving;

    return (
        <section className="bg-gradient-to-br from-rose-50 via-white to-amber-50 border-2 border-rose-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            {/* Header */}
            <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                    🛡️
                </div>
                <div>
                    <h3 className="text-lg sm:text-xl font-bold text-rose-900">
                        مؤشر بروكر لكشف الاحتيال — {serviceName} في {cityName}
                    </h3>
                    <p className="text-rose-600 text-sm mt-1">
                        نحذّرك من أشهر عمليات النصب في هذا المجال
                    </p>
                </div>
            </div>

            {/* Warning Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {warnings.map((w, i) => (
                    <Link
                        key={i}
                        href={w.link}
                        className="group bg-white border border-rose-100 rounded-xl p-4 hover:border-rose-300 hover:shadow-md transition-all"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-rose-500 text-lg">⚠️</span>
                            <h4 className="font-bold text-gray-900 group-hover:text-rose-700 transition-colors">
                                {w.title}
                            </h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {w.warning}
                        </p>
                        <span className="text-rose-500 text-xs font-medium mt-2 inline-block group-hover:underline">
                            اقرأ التفاصيل ←
                        </span>
                    </Link>
                ))}
            </div>

            {/* Trust CTA */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 text-lg">
                    ✅
                </div>
                <div className="flex-1">
                    <p className="text-emerald-900 font-bold text-sm">
                        لحمايتك، احجز فقط عبر الشركات الموثقة في prokr.co
                    </p>
                    <p className="text-emerald-700 text-xs mt-0.5">
                        نتحقق من السجل التجاري والتراخيص والفوترة الإلكترونية (ZATCA) وتسجيل العمالة في منصة قوى ونطاقات
                    </p>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        '@id': `https://prokr.co/${serviceSlug}#fraud-alert`,
                        name: `تحذيرات الاحتيال في ${serviceName} في ${cityName}`,
                        description: `مؤشر بروكر لكشف الاحتيال والشركات الوهمية في ${serviceName} في ${cityName} — تحذيرات حماية المستهلك`,
                        about: {
                            '@type': 'Thing',
                            name: 'حماية المستهلك في الخدمات المنزلية',
                            sameAs: 'https://mc.gov.sa',
                        },
                        mainEntity: {
                            '@type': 'ItemList',
                            name: `تحذيرات احتيال ${serviceName}`,
                            numberOfItems: warnings.length,
                            itemListElement: warnings.map((w, i) => ({
                                '@type': 'ListItem',
                                position: i + 1,
                                name: w.title,
                                description: w.warning,
                                url: `https://prokr.co${w.link}`,
                            })),
                        },
                        publisher: {
                            '@type': 'Organization',
                            name: 'بروكر',
                            url: 'https://prokr.co',
                            logo: { '@type': 'ImageObject', url: 'https://prokr.co/logo.png' },
                        },
                    }),
                }}
            />
        </section>
    );
}
