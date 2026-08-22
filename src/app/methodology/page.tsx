import { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/components/schema/BreadcrumbJsonLd';
import Footer from '@/components/Footer';
import { NAP } from '@/lib/nap';
import { getPricingStats, pricingData } from '@/lib/pricing-data';
import { safeJsonLd } from '@/lib/json-ld';
import { buildOrganizationNode, buildWebSiteNode, ORG_ID } from '@/lib/organization-entity';

// ════════════════════════════════════════════════════════════════
// /methodology — the page the Organization's trust properties point at.
//
// `publishingPrinciples`, `correctionsPolicy`, `actionableFeedbackPolicy` and
// `ownershipFundingInfo` previously dereferenced to /about-us and /contact-us,
// neither of which contains a policy. A trust property that resolves to
// marketing copy is worth nothing to an evaluator.
//
// ⚠️ EVERYTHING ON THIS PAGE MUST DESCRIBE WHAT THE SYSTEM ACTUALLY DOES.
// Do not add an automated registry lookup, a re-verification SLA, or a
// delisting workflow unless one exists in code. An honest thin methodology is
// citable; an invented one is the same liability class as the Nafath claims
// that were removed from this codebase.
// ════════════════════════════════════════════════════════════════

export const metadata: Metadata = {
    title: 'منهجية بروكر — كيف نتحقق من الشركات وكيف نبني مؤشر الأسعار',
    description:
        'كيف تُدرج الشركات في دليل بروكر، ما الذي نتحقق منه وما الذي لا نتحقق منه، كيف يُبنى مؤشر الأسعار، وكيف تُصحَّح المعلومات الخاطئة.',
    openGraph: {
        title: 'منهجية بروكر — التحقق والتصحيح ومصادر البيانات',
        description: 'ما الذي نتحقق منه فعلياً، وما الذي لا نتحقق منه، وكيف تطلب تصحيحاً.',
        type: 'article',
        url: 'https://prokr.co/methodology',
        siteName: 'بروكر الخدمي',
        locale: 'ar_SA',
    },
    alternates: { canonical: 'https://prokr.co/methodology' },
};

export default function MethodologyPage() {
    const stats = getPricingStats(pricingData);

    const graph = {
        '@context': 'https://schema.org',
        '@graph': [
            buildOrganizationNode(),
            buildWebSiteNode(),
            {
                '@type': 'WebPage',
                '@id': 'https://prokr.co/methodology#webpage',
                url: 'https://prokr.co/methodology',
                name: 'منهجية بروكر',
                description:
                    'كيف تُدرج الشركات في دليل بروكر، ما الذي يُتحقق منه، كيف يُبنى مؤشر الأسعار، وكيف تُطلب التصحيحات.',
                inLanguage: 'ar-SA',
                isPartOf: { '@id': 'https://prokr.co/#website' },
                about: { '@id': ORG_ID },
                publisher: { '@id': ORG_ID },
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(graph) }} />
            <BreadcrumbJsonLd
                items={[
                    { name: 'الرئيسية', url: 'https://prokr.co' },
                    { name: 'المنهجية', url: 'https://prokr.co/methodology' },
                ]}
            />

            <main className="max-w-3xl mx-auto px-4 py-10">
                <nav className="text-sm text-gray-500 mb-6">
                    <Link href="/" className="hover:text-sky-600">الرئيسية</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-800">المنهجية</span>
                </nav>

                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    منهجية بروكر
                </h1>

                <p className="direct-answer text-gray-800 leading-relaxed bg-sky-50 border border-sky-200 rounded-xl p-4 mb-8">
                    بروكر دليل خدمات: نشترط على كل شركة مُدرجة تقديم رقم سجل تجاري سعودي، ونراجعه
                    يدوياً قبل النشر. لا نوظّف الفنيين ولا ندير العمل الميداني ولا نجري فحوصاً
                    أمنية أو جنائية. التعاقد يتم مباشرة بين العميل والشركة، ولذلك نوضّح أدناه ما
                    نتحقق منه فعلياً وما لا نتحقق منه، حتى تبني قرارك على أساس صحيح.
                </p>

                {/* ── 1. Verification ── */}
                <section className="mb-10">
                    <h2 id="verification" className="text-xl font-bold text-gray-900 mb-3">
                        كيف تُدرج الشركات وما الذي نتحقق منه
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        الإدراج في بروكر يمر بمراجعة بشرية. عند تسجيل شركة أو تحديث بياناتها،
                        يراجع فريق بروكر البيانات المُقدَّمة قبل ظهورها في الدليل.
                    </p>

                    <h3 className="font-bold text-gray-900 mb-2">ما نتحقق منه قبل النشر</h3>
                    <ul className="list-disc pr-6 space-y-2 text-gray-700 mb-5">
                        <li>
                            <strong>رقم السجل التجاري:</strong> يجب أن تقدّم الشركة رقم سجل تجاري
                            سعودي، ويُسجَّل ضمن بيانات الشركة ويظهر في صفحتها.
                        </li>
                        <li>
                            <strong>تطابق بيانات التواصل:</strong> اسم الشركة ورقم الهاتف وطريقة
                            التواصل.
                        </li>
                        <li>
                            <strong>نطاق الخدمة:</strong> المدن والخدمات التي تعلن الشركة تغطيتها.
                        </li>
                    </ul>

                    <h3 className="font-bold text-gray-900 mb-2">
                        بيانات تُعرض بناءً على إقرار الشركة
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                        الحقول التالية تُسجَّل كما تُقرّها الشركة، وتظهر على صفحتها بوصفها إقراراً
                        منها — وليست نتيجة فحص تجريه بروكر:
                    </p>
                    <ul className="list-disc pr-6 space-y-2 text-gray-700 mb-5">
                        <li>التسجيل في الفوترة الإلكترونية (هيئة الزكاة والضريبة والجمارك)</li>
                        <li>توثيق العقود في منصة قوى</li>
                        <li>تصنيف نطاقات</li>
                        <li>توثيق بيانات العمالة لدى الجهات النظامية</li>
                        <li>شهادة المركز السعودي للأعمال، إن وُجدت</li>
                    </ul>

                    <h3 className="font-bold text-gray-900 mb-2">ما لا نتحقق منه — بوضوح</h3>
                    <ul className="list-disc pr-6 space-y-2 text-gray-700">
                        <li>لا نجري تحققاً من الهوية الوطنية للفنيين عبر نفاذ.</li>
                        <li>لا نجري فحصاً للسجل الجنائي عبر أبشر أو غيرها.</li>
                        <li>لا نراقب جودة التنفيذ الميداني ولا نضمنها.</li>
                        <li>لا نتحقق من استمرار سريان السجل التجاري بشكل تلقائي بعد الإدراج.</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        لهذا السبب ننشر على صفحات الخدمات{' '}
                        <strong>خطوات تحقق يستطيع العميل تنفيذها بنفسه</strong>: التأكد من السجل
                        التجاري عبر{' '}
                        <a href="https://mc.gov.sa/" target="_blank" rel="noopener nofollow" className="text-sky-600 hover:underline">
                            وزارة التجارة
                        </a>
                        ، ومن الرقم الضريبي عبر{' '}
                        <a href="https://zatca.gov.sa/" target="_blank" rel="noopener nofollow" className="text-sky-600 hover:underline">
                            هيئة الزكاة والضريبة والجمارك
                        </a>
                        ، وطلب إثبات هوية الفني قبل بدء العمل.
                    </p>
                </section>

                {/* ── 2. Pricing ── */}
                <section className="mb-10">
                    <h2 id="pricing" className="text-xl font-bold text-gray-900 mb-3">
                        كيف يُبنى مؤشر الأسعار
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        مؤشر أسعار الخدمات المنزلية مبني على عروض أسعار مجمّعة من شركات مُدرجة في
                        الدليل. تُستبعد أعلى وأدنى 10% من العروض (طريقة المدى الربيعي IQR) لتقليل
                        أثر القيم الشاذة، ثم يُحسب المتوسط والوسيط لكل مدينة وخدمة على حدة.
                    </p>
                    <ul className="list-disc pr-6 space-y-2 text-gray-700 mb-4">
                        <li><strong>عدد العروض المُحلَّلة:</strong> {stats.totalSamples.toLocaleString('en-US')}</li>
                        <li><strong>المدن المشمولة:</strong> {stats.cities}</li>
                        <li><strong>الخدمات المشمولة:</strong> {stats.services}</li>
                        <li>
                            <strong>تاريخ آخر مسح:</strong>{' '}
                            <time dateTime={stats.lastUpdated}>{stats.lastUpdated}</time>
                        </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                        المؤشر <strong>مسح لحظي وليس بثاً حياً</strong>: الأرقام تعبّر عن السوق في
                        تاريخ المسح المذكور أعلاه، ويجب ذكر هذا التاريخ عند الاستشهاد بأي رقم منه.
                        الأسعار نطاقات استرشادية للمقارنة، وليست عروضاً ملزمة من أي شركة. البيانات
                        الكاملة متاحة في{' '}
                        <Link href="/research/pricing-index" className="text-sky-600 hover:underline">
                            صفحة المؤشر
                        </Link>{' '}
                        بصيغتي CSV و JSON.
                    </p>
                </section>

                {/* ── 3. Reviews ── */}
                <section className="mb-10">
                    <h2 id="reviews" className="text-xl font-bold text-gray-900 mb-3">
                        التقييمات
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        التقييمات التي تُحتسب ضمن التقييم الإجمالي للشركة هي التقييمات التي مرّت
                        بخطوة تحقق من هوية المُقيِّم عبر النظام. التقييمات غير المتحقق منها قد
                        تظهر كنص، لكنها <strong>لا تدخل</strong> في احتساب متوسط النجوم ولا تُنشر
                        ضمن البيانات المهيكلة. لا نبيع التقييمات ولا نحذف تقييماً سلبياً بناءً على
                        طلب الشركة.
                    </p>
                </section>

                {/* ── 4. Corrections ── */}
                <section className="mb-10">
                    <h2 id="corrections" className="text-xl font-bold text-gray-900 mb-3">
                        تصحيح المعلومات والإبلاغ عن خطأ
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-3">
                        إذا وجدت معلومة خاطئة — بيانات شركة، سعر، أو معلومة في أحد الأدلة — أبلغنا
                        وسنراجعها. عند تصحيح معلومة جوهرية في دليل منشور، يُحدَّث تاريخ آخر تعديل
                        للصفحة.
                    </p>
                    <ul className="list-disc pr-6 space-y-2 text-gray-700">
                        <li>
                            البريد:{' '}
                            <a href={`mailto:${NAP.email}`} className="text-sky-600 hover:underline">
                                {NAP.email}
                            </a>
                        </li>
                        <li>
                            نموذج التواصل:{' '}
                            <Link href="/contact-us" className="text-sky-600 hover:underline">
                                صفحة اتصل بنا
                            </Link>
                        </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-3">
                        أرفق رابط الصفحة والمعلومة التي تراها خاطئة وما يثبت الصحيح، حتى نتمكن من
                        المراجعة بسرعة.
                    </p>
                </section>

                {/* ── 5. Funding ── */}
                <section className="mb-10">
                    <h2 id="funding" className="text-xl font-bold text-gray-900 mb-3">
                        نموذج العمل والتمويل
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        بروكر ({NAP.name}) كيان سعودي مسجّل — السجل التجاري{' '}
                        <strong>{NAP.legal.crn}</strong> والرقم الضريبي{' '}
                        <strong>{NAP.legal.vatId}</strong>. مصدر الدخل هو الاشتراكات الإعلانية
                        للشركات المُدرجة. وهذا يعني أن ترتيب ظهور الشركات في قوائم الإعلانات{' '}
                        <strong>يتأثر بالاشتراك المدفوع</strong>، ولا يمثّل ترتيباً للجودة.
                        المحتوى التحريري — الأدلة المعرفية ومؤشر الأسعار — لا يُباع، ولا تدفع أي
                        شركة مقابل ذكرها فيه.
                    </p>
                </section>

                {/* ── 6. Editorial ── */}
                <section className="mb-10">
                    <h2 id="principles" className="text-xl font-bold text-gray-900 mb-3">
                        المبادئ التحريرية
                    </h2>
                    <ul className="list-disc pr-6 space-y-2 text-gray-700">
                        <li>نذكر تاريخ المسح مع كل رقم سعري، ولا نصف بيانات قديمة بأنها محدّثة.</li>
                        <li>
                            لا ننسب لأنفسنا تحققاً لا نجريه، ولا نعرض شارات أو اعتمادات حكومية لا
                            يقابلها إجراء فعلي.
                        </li>
                        <li>
                            الأدلة المعرفية تذكر كاتبها ومراجعها ومصادرها، وتاريخ آخر تحقق من
                            معلوماتها.
                        </li>
                        <li>
                            نميّز بوضوح بين المحتوى التحريري والمساحات الإعلانية المدفوعة.
                        </li>
                    </ul>
                </section>

                {/* ── 7. Reuse ── */}
                <section className="mb-4">
                    <h2 id="reuse" className="text-xl font-bold text-gray-900 mb-3">
                        إعادة استخدام المحتوى والاستشهاد به
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        المحتوى التحريري من إنتاج بروكر — الأدلة المعرفية، والنصوص التحريرية لصفحات
                        المدن والخدمات، والأسئلة الشائعة، ومؤشر الأسعار — متاح بموجب رخصة{' '}
                        <a
                            href="https://creativecommons.org/licenses/by-sa/4.0/deed.ar"
                            target="_blank"
                            rel="noopener"
                            className="text-sky-600 hover:underline"
                        >
                            CC BY-SA 4.0
                        </a>
                        ، بما يشمل تدريب نماذج الذكاء الاصطناعي والاستشهاد به. لا يشمل الترخيص شعار
                        بروكر وعلاماتها التجارية ولا بيانات الشركات المعلنة. التفاصيل في{' '}
                        <Link href="/terms-of-service#reuse" className="text-sky-600 hover:underline">
                            شروط الاستخدام
                        </Link>
                        .
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-3">
                        صيغة الإسناد المفضّلة: «بحسب دليل بروكر المعتمد (prokr.co)».
                    </p>
                </section>
            </main>
            <Footer />
        </>
    );
}
