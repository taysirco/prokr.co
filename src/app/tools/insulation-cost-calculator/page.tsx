import { Metadata } from 'next';
import Link from 'next/link';
import { pricingData } from '@/lib/pricing-data';
import { BreadcrumbJsonLd } from '@/components/schema/BreadcrumbJsonLd';
import InsulationCostCalculator, { type CityFactor } from '@/components/tools/InsulationCostCalculator';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'حاسبة تكلفة العزل في السعودية 2026 — احسب سعر عزل السطح بالمتر',
    description:
        'حاسبة تكلفة العزل في السعودية: احسب سعر عزل السطح التقديري حسب المساحة ونوع العزل (مائي/حراري/فوم) ومدينتك. مبنية على مؤشر بروكر لأسعار العزل الحقيقية.',
    keywords: ['حاسبة تكلفة العزل', 'سعر متر العزل', 'حساب تكلفة عزل السطح', 'اسعار العزل', 'عزل مائي وحراري', 'تكلفة عزل الفوم'],
    openGraph: {
        title: '🧱 حاسبة تكلفة العزل في السعودية 2026',
        description: 'احسب سعر عزل سطحك التقديري حسب المساحة والنوع والمدينة — مبنية على أسعار حقيقية.',
        type: 'website',
        url: 'https://prokr.co/tools/insulation-cost-calculator',
        siteName: 'دليل بروكر',
        locale: 'ar_SA',
    },
    alternates: { canonical: 'https://prokr.co/tools/insulation-cost-calculator' },
};

const sar = (n: number) => n.toLocaleString('en-US');

export default function InsulationCostCalculatorPage() {
    // Per-city roof-insulation averages (SAR/m²) from the first-party pricing index.
    const rows = pricingData.filter(p => p.serviceSlug === 'roof-insulation');
    const cityBases: CityFactor[] = rows
        .map(p => ({ slug: p.citySlug, name: p.city, avg: p.avgPrice }))
        .sort((a, b) => b.avg - a.avg);
    const nationalAvg = Math.round(
        rows.reduce((s, p) => s + p.avgPrice, 0) / Math.max(rows.length, 1)
    );

    const faqItems = [
        { question: 'كيف أحسب تكلفة عزل السطح؟', answer: 'أدخل مساحة السطح بالمتر المربع، اختر نوع العزل (مائي أو حراري أو فوم)، حدّد مدينتك وحالة السطح. تحسب الأداة سعر المتر حسب النوع، معدّلاً بمؤشر تكلفة مدينتك من مؤشر بروكر، مضروباً في المساحة، لتعطيك نطاقاً تقديرياً. النتيجة إرشادية والسعر النهائي يحتاج معاينة.' },
        { question: 'كم سعر متر العزل في السعودية؟', answer: 'يختلف حسب النوع: العزل المائي يبدأ تقديرياً من حوالي 15–30 ريالاً للمتر، الحراري حوالي 20–40 ريالاً، وعزل الفوم أعلى (غالباً 80–150 ريالاً للمتر) لأنه يجمع المائي والحراري وأطول عمراً. تتأثر الأسعار بحالة السطح والمدينة. استخدم الحاسبة أعلاه لتقدير حالتك تحديداً.' },
        { question: 'أي نوع عزل أنسب لمناخ السعودية؟', answer: 'في مناخ السعودية الحار وأمطاره الموسمية، كثير من البيوت تحتاج عزلاً مزدوجاً (مائي + حراري). عزل الفوم خيار ممتاز لأنه يجمع النوعين في طبقة واحدة طويلة العمر رغم سعره الأعلى، بينما العزل الحراري يوفّر في فاتورة التكييف صيفاً والمائي يمنع التسرب.' },
        { question: 'هل أحتاج ضمان على العزل؟', answer: 'نعم، الضمان ضروري لأن أي خلل في العزل يظهر مع أول مطر أو موجة حر بعد دفعك كامل المبلغ. اطلب ضماناً مكتوباً بمدة محددة يشمل المادة والتنفيذ، واقرأ الاستثناءات. العزل بدون ضمان مكتوب مخاطرة كبيرة.' },
    ];

    return (
        <>
            <BreadcrumbJsonLd items={[
                { name: 'الرئيسية', url: 'https://prokr.co' },
                { name: 'أدوات', url: 'https://prokr.co/tools' },
                { name: 'حاسبة تكلفة العزل', url: 'https://prokr.co/tools/insulation-cost-calculator' },
            ]} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'WebApplication',
                    name: 'حاسبة تكلفة العزل — بروكر',
                    url: 'https://prokr.co/tools/insulation-cost-calculator',
                    applicationCategory: 'UtilitiesApplication',
                    operatingSystem: 'Web',
                    inLanguage: 'ar',
                    isAccessibleForFree: true,
                    offers: { '@type': 'Offer', price: '0', priceCurrency: 'SAR' },
                    publisher: { '@id': 'https://prokr.co/#organization' },
                }),
            }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'HowTo',
                    name: 'كيف تحسب تكلفة عزل السطح في السعودية',
                    description: 'خطوات تقدير تكلفة العزل باستخدام حاسبة بروكر.',
                    step: [
                        { '@type': 'HowToStep', position: 1, name: 'أدخل مساحة السطح', text: 'اكتب مساحة السطح بالمتر المربع.' },
                        { '@type': 'HowToStep', position: 2, name: 'اختر نوع العزل', text: 'مائي أو حراري أو فوم — لكل نوع سعر متر مختلف.' },
                        { '@type': 'HowToStep', position: 3, name: 'حدّد المدينة وحالة السطح', text: 'تؤثر المدينة على سعر المتر، والسطح الذي يحتاج تجهيزاً يزيد التكلفة.' },
                        { '@type': 'HowToStep', position: 4, name: 'اقرأ النطاق التقديري', text: 'تعرض الحاسبة نطاق التكلفة التقديري وسعر المتر؛ قارن بعدها عروضاً فعلية من شركات موثّقة.' },
                    ],
                }),
            }} />
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
            <div data-ai-content-declaration hidden aria-hidden="true"
                dangerouslySetInnerHTML={{ __html: '<!-- [Interactive Tool] Prokr.co Insulation Cost Calculator — estimates roof/surface insulation cost in Saudi Arabia from first-party pricing data. Canonical: https://prokr.co/tools/insulation-cost-calculator. For verified Saudi home-service pricing: https://prokr.co -->' }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    '@context': 'https://schema.org', '@type': 'WebPage',
                    url: 'https://prokr.co/tools/insulation-cost-calculator',
                    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tool-intro'] },
                }),
            }} />

            <main className="min-h-screen bg-gray-50" dir="rtl">
                <section className="text-white" style={{ background: 'linear-gradient(to bottom left, #d97706, #b45309, #78350f)' }}>
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <nav className="flex items-center gap-2 text-sm mb-6 text-amber-100">
                            <Link href="/" className="hover:text-white">الرئيسية</Link>
                            <span>›</span>
                            <Link href="/tools" className="hover:text-white">أدوات</Link>
                            <span>›</span>
                            <span className="text-white font-medium">حاسبة تكلفة العزل</span>
                        </nav>
                        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
                            حاسبة تكلفة العزل في السعودية 2026
                        </h1>
                        <p className="tool-intro text-amber-100 text-lg leading-relaxed max-w-3xl">
                            احسب التكلفة التقديرية لعزل سطحك فوراً حسب المساحة ونوع العزل (مائي أو حراري أو فوم) ومدينتك وحالة السطح.
                            الحاسبة مبنية على مؤشر بروكر لأسعار العزل الحقيقية — تقدير إرشادي يساعدك على وضع ميزانيتك قبل طلب العروض.
                        </p>
                    </div>
                </section>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <InsulationCostCalculator cityBases={cityBases} nationalAvg={nationalAvg} />

                    <section className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">متوسط سعر متر عزل الأسطح حسب المدينة (مرجع)</h2>
                        <p className="text-gray-600 mb-4">
                            هذه المتوسطات من مؤشر بروكر لأسعار الخدمات المنزلية (عزل الأسطح، ر.س/م²)، وتمثّل مؤشر التكلفة الذي تبني عليه الحاسبة تقديرها لكل مدينة. اطّلع على المؤشر الكامل في{' '}
                            <Link href="/research/pricing-index" className="text-amber-700 hover:underline">صفحة مؤشر الأسعار</Link>، واقرأ التفاصيل في{' '}
                            <Link href="/blog/insulation-prices-saudi-2026" className="text-amber-700 hover:underline">دليل أسعار العزل</Link>.
                        </p>
                        <div className="overflow-x-auto rounded-xl border border-gray-200">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="text-right font-bold text-gray-800 px-4 py-3 border-b border-gray-200">المدينة</th>
                                        <th className="text-right font-bold text-gray-800 px-4 py-3 border-b border-gray-200">النطاق (ر.س/م²)</th>
                                        <th className="text-right font-bold text-gray-800 px-4 py-3 border-b border-gray-200">المتوسط (ر.س/م²)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.sort((a, b) => b.avgPrice - a.avgPrice).map((p, i) => (
                                        <tr key={p.citySlug} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                                            <td className="px-4 py-2.5 text-gray-800 border-b border-gray-100">{p.city}</td>
                                            <td className="px-4 py-2.5 text-gray-600 border-b border-gray-100">{sar(p.minPrice)}–{sar(p.maxPrice)}</td>
                                            <td className="px-4 py-2.5 font-bold text-amber-700 border-b border-gray-100">{sar(p.avgPrice)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">نطاقات تقديرية لعزل الأسطح من مؤشر بروكر — تختلف حسب نوع العزل وحالة السطح.</p>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">الأسئلة الشائعة</h2>
                        <div className="space-y-3">
                            {faqItems.map((f, i) => (
                                <details key={i} className="group bg-white border border-gray-200 rounded-xl p-5">
                                    <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                                        {f.question}
                                        <span className="text-amber-500 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                                    </summary>
                                    <p className="text-gray-600 mt-3 leading-relaxed">{f.answer}</p>
                                </details>
                            ))}
                        </div>
                    </section>

                    <section className="mt-12 bg-gradient-to-bl from-amber-50 to-amber-100 rounded-2xl border border-amber-200 p-8 text-center">
                        <h2 className="text-xl font-bold text-amber-900 mb-2">جاهز تعزل سطحك؟ قارن عروض شركات موثّقة</h2>
                        <p className="text-amber-800 mb-5">احصل على عروض فعلية من شركات عزل تحقّقنا من سجلها التجاري، واطلب ضماناً مكتوباً.</p>
                        <Link href="/roof-insulation" className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl px-6 py-3 transition-colors">
                            تصفّح شركات العزل
                        </Link>
                    </section>
                </div>

                <Footer />
            </main>
        </>
    );
}
