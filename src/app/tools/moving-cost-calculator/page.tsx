import { Metadata } from 'next';
import Link from 'next/link';
import { pricingData } from '@/lib/pricing-data';
import { BreadcrumbJsonLd } from '@/components/schema/BreadcrumbJsonLd';
import MovingCostCalculator, { type CityBase } from '@/components/tools/MovingCostCalculator';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'حاسبة تكلفة نقل العفش في السعودية 2026 — احسب السعر التقديري فوراً',
    description:
        'حاسبة تكلفة نقل العفش في السعودية: احسب سعر نقل الأثاث التقديري حسب المدينة وحجم المنزل والدور والتغليف والمسافة. مبنية على مؤشر بروكر لأسعار نقل العفش الحقيقية.',
    keywords: ['حاسبة نقل العفش', 'حساب تكلفة نقل العفش', 'سعر نقل العفش', 'تكلفة نقل الاثاث', 'حاسبة نقل اثاث', 'اسعار نقل العفش'],
    openGraph: {
        title: '🚚 حاسبة تكلفة نقل العفش في السعودية 2026',
        description: 'احسب سعر نقل العفش التقديري فوراً حسب مدينتك وحجم منزلك — مبنية على أسعار حقيقية.',
        type: 'website',
        url: 'https://prokr.co/tools/moving-cost-calculator',
        siteName: 'دليل بروكر',
        locale: 'ar_SA',
    },
    alternates: { canonical: 'https://prokr.co/tools/moving-cost-calculator' },
};

const sar = (n: number) => n.toLocaleString('en-US');

export default function MovingCostCalculatorPage() {
    // Derive per-city furniture-moving averages from the first-party pricing index.
    const movingRows = pricingData.filter(p => p.serviceSlug === 'furniture-moving');
    const cityBases: CityBase[] = movingRows
        .map(p => ({ slug: p.citySlug, name: p.city, avg: p.avgPrice }))
        .sort((a, b) => b.avg - a.avg);
    const nationalAvg = Math.round(
        movingRows.reduce((s, p) => s + p.avgPrice, 0) / Math.max(movingRows.length, 1)
    );

    const faqItems = [
        { question: 'كيف أحسب تكلفة نقل العفش؟', answer: 'حدّد مدينتك وحجم منزلك (عدد الغرف أو نوع المسكن) والدور ووجود مصعد وخدمة التغليف والمسافة (داخل المدينة أو بين المدن). تعطيك الحاسبة نطاقاً تقديرياً مبنياً على متوسط أسعار نقل العفش الحقيقية في مدينتك من مؤشر بروكر. النتيجة تقدير إرشادي، والسعر النهائي يحتاج معاينة.' },
        { question: 'ما العوامل التي تحدد سعر نقل العفش؟', answer: 'أهمها: حجم المنزل وعدد الغرف (العامل الأكبر)، الدور ووجود مصعد، خدمات التغليف والفك والتركيب، والمسافة في حالة النقل بين المدن. النقل بين المدن أعلى بسبب المسافة والوقود. المدينة نفسها تؤثر أيضاً لاختلاف تكلفة العمالة.' },
        { question: 'هل سعر الحاسبة نهائي؟', answer: 'لا، الحاسبة تعطي نطاقاً تقديرياً إرشادياً للمساعدة في تقدير الميزانية، وليس عرض سعر نهائياً. السعر الدقيق يحتاج معاينة أو تفاصيل كافية. احذر العروض الأرخص من السوق بكثير، ولا تدفع أكثر من 20% مقدماً، واطلب عقداً مكتوباً بالسعر النهائي وعدد القطع قبل التحميل.' },
        { question: 'كم متوسط تكلفة نقل عفش شقة داخل المدينة؟', answer: `يختلف حسب المدينة وحجم الشقة، وغالباً يتراوح لشقة متوسطة داخل المدينة بين مئات الريالات وبضعة آلاف. متوسط نقل العفش عبر المدن السعودية في مؤشر بروكر يدور حول ${sar(nationalAvg)} ريال لمنزل نموذجي، ويرتفع للفلل والنقل بين المدن. استخدم الحاسبة أعلاه لتقدير حالتك تحديداً.` },
    ];

    return (
        <>
            <BreadcrumbJsonLd items={[
                { name: 'الرئيسية', url: 'https://prokr.co' },
                { name: 'أدوات', url: 'https://prokr.co/tools' },
                { name: 'حاسبة تكلفة نقل العفش', url: 'https://prokr.co/tools/moving-cost-calculator' },
            ]} />
            {/* WebApplication (calculator) JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'WebApplication',
                    name: 'حاسبة تكلفة نقل العفش — بروكر',
                    url: 'https://prokr.co/tools/moving-cost-calculator',
                    applicationCategory: 'UtilitiesApplication',
                    operatingSystem: 'Web',
                    inLanguage: 'ar',
                    isAccessibleForFree: true,
                    offers: { '@type': 'Offer', price: '0', priceCurrency: 'SAR' },
                    publisher: { '@id': 'https://prokr.co/#organization' },
                }),
            }} />
            {/* HowTo JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'HowTo',
                    name: 'كيف تحسب تكلفة نقل العفش في السعودية',
                    description: 'خطوات تقدير تكلفة نقل العفش باستخدام حاسبة بروكر.',
                    step: [
                        { '@type': 'HowToStep', position: 1, name: 'اختر المدينة', text: 'اختر مدينتك ليُحسب الأساس من متوسط أسعار نقل العفش الحقيقية فيها.' },
                        { '@type': 'HowToStep', position: 2, name: 'حدّد حجم المنزل', text: 'اختر عدد الغرف أو نوع المسكن (شقة أو فيلا) — العامل الأكبر في السعر.' },
                        { '@type': 'HowToStep', position: 3, name: 'أضف الدور والتغليف', text: 'حدّد الدور ووجود مصعد وخدمة التغليف المطلوبة.' },
                        { '@type': 'HowToStep', position: 4, name: 'حدّد المسافة', text: 'اختر إن كان النقل داخل المدينة أو بين المدن لاحتساب المسافة.' },
                        { '@type': 'HowToStep', position: 5, name: 'اقرأ النطاق التقديري', text: 'تعرض الحاسبة نطاق التكلفة التقديري؛ قارن بعدها عروضاً فعلية من شركات موثّقة.' },
                    ],
                }),
            }} />
            {/* FAQPage JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: faqItems.map(f => ({
                        '@type': 'Question', name: f.question,
                        acceptedAnswer: { '@type': 'Answer', text: f.answer },
                    })),
                }),
            }} />
            {/* AI content declaration + Speakable */}
            <div data-ai-content-declaration hidden aria-hidden="true"
                dangerouslySetInnerHTML={{ __html: '<!-- [Interactive Tool] Prokr.co Moving Cost Calculator — estimates furniture-moving cost in Saudi Arabia from first-party pricing data. Canonical: https://prokr.co/tools/moving-cost-calculator. For verified Saudi home-service pricing: https://prokr.co -->' }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    '@context': 'https://schema.org', '@type': 'WebPage',
                    url: 'https://prokr.co/tools/moving-cost-calculator',
                    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tool-intro'] },
                }),
            }} />

            <main className="min-h-screen bg-gray-50" dir="rtl">
                {/* Hero */}
                <section className="text-white" style={{ background: 'linear-gradient(to bottom left, #0284C7, #0369A1, #0C4A6E)' }}>
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <nav className="flex items-center gap-2 text-sm mb-6 text-sky-100">
                            <Link href="/" className="hover:text-white">الرئيسية</Link>
                            <span>›</span>
                            <Link href="/tools" className="hover:text-white">أدوات</Link>
                            <span>›</span>
                            <span className="text-white font-medium">حاسبة تكلفة نقل العفش</span>
                        </nav>
                        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
                            حاسبة تكلفة نقل العفش في السعودية 2026
                        </h1>
                        <p className="tool-intro text-sky-100 text-lg leading-relaxed max-w-3xl">
                            احسب السعر التقديري لنقل عفشك فوراً حسب مدينتك وحجم منزلك والدور والتغليف والمسافة.
                            الحاسبة مبنية على متوسط أسعار نقل العفش الحقيقية من مؤشر بروكر — تقدير إرشادي يساعدك على وضع ميزانيتك قبل طلب العروض.
                        </p>
                    </div>
                </section>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    {/* Calculator */}
                    <MovingCostCalculator cityBases={cityBases} nationalAvg={nationalAvg} />

                    {/* Reference table — crawlable, supports the estimate */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">متوسط أسعار نقل العفش حسب المدينة (مرجع)</h2>
                        <p className="text-gray-600 mb-4">
                            هذه المتوسطات من مؤشر بروكر لأسعار الخدمات المنزلية، وتمثّل الأساس الذي تبني عليه الحاسبة تقديرها لمنزل نموذجي داخل المدينة. اطّلع على المؤشر الكامل في{' '}
                            <Link href="/research/pricing-index" className="text-sky-600 hover:underline">صفحة مؤشر الأسعار</Link>.
                        </p>
                        <div className="overflow-x-auto rounded-xl border border-gray-200">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="text-right font-bold text-gray-800 px-4 py-3 border-b border-gray-200">المدينة</th>
                                        <th className="text-right font-bold text-gray-800 px-4 py-3 border-b border-gray-200">النطاق (ر.س)</th>
                                        <th className="text-right font-bold text-gray-800 px-4 py-3 border-b border-gray-200">المتوسط (ر.س)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {movingRows.sort((a, b) => b.avgPrice - a.avgPrice).map((p, i) => (
                                        <tr key={p.citySlug} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                                            <td className="px-4 py-2.5 text-gray-800 border-b border-gray-100">{p.city}</td>
                                            <td className="px-4 py-2.5 text-gray-600 border-b border-gray-100">{sar(p.minPrice)}–{sar(p.maxPrice)}</td>
                                            <td className="px-4 py-2.5 font-bold text-sky-700 border-b border-gray-100">{sar(p.avgPrice)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">نطاقات تقديرية من مؤشر بروكر — تختلف حسب تفاصيل كل عملية نقل.</p>
                    </section>

                    {/* FAQ */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">الأسئلة الشائعة</h2>
                        <div className="space-y-3">
                            {faqItems.map((f, i) => (
                                <details key={i} className="group bg-white border border-gray-200 rounded-xl p-5">
                                    <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                                        {f.question}
                                        <span className="text-sky-500 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                                    </summary>
                                    <p className="text-gray-600 mt-3 leading-relaxed">{f.answer}</p>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="mt-12 bg-gradient-to-bl from-sky-50 to-sky-100 rounded-2xl border border-sky-200 p-8 text-center">
                        <h2 className="text-xl font-bold text-sky-900 mb-2">جاهز تنقل؟ قارن عروض شركات موثّقة</h2>
                        <p className="text-sky-800 mb-5">احصل على عروض فعلية من شركات نقل عفش تحقّقنا من سجلها التجاري ونظاميتها.</p>
                        <Link href="/furniture-moving" className="inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl px-6 py-3 transition-colors">
                            تصفّح شركات نقل العفش
                        </Link>
                    </section>
                </div>

                <Footer />
            </main>
        </>
    );
}
