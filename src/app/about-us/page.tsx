import { Metadata } from 'next';
import Link from 'next/link';
import { Home, ChevronLeft, Shield, Users, Target, Award, CheckCircle } from 'lucide-react';
import { BreadcrumbJsonLd, WebPageJsonLd } from '@/components/JsonLd';
import FaqAccordion from '@/components/FaqAccordion';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'من نحن | بروكر - أكبر دليل خدمات في السعودية',
    description: 'تعرف على بروكر، أكبر دليل للخدمات المنزلية في المملكة العربية السعودية. نربط بين أكثر من 500 شركة معتمدة والعملاء في 30 مدينة سعودية.',
    keywords: ['عن بروكر', 'من نحن بروكر', 'دليل الخدمات السعودية', 'منصة خدمات منزلية', 'شركات خدمات معتمدة'],
    openGraph: {
        title: 'من نحن | بروكر',
        description: 'تعرف على بروكر - أكبر دليل للخدمات المنزلية في السعودية',
        locale: 'ar_SA',
        type: 'website',
        siteName: 'بروكر',
        url: 'https://prokr.co/about-us',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'من نحن | بروكر',
        description: 'أكبر دليل للخدمات المنزلية في السعودية',
    },
    alternates: {
        canonical: 'https://prokr.co/about-us',
    },
};

export default function AboutPage() {
    const breadcrumbs = [
        { name: 'الرئيسية', url: 'https://prokr.co' },
        { name: 'من نحن', url: 'https://prokr.co/about-us' },
    ];

    const aboutFaqItems = [
        {
            question: 'متى تأسس بروكر؟',
            answer: 'تأسس بروكر عام 2024 كأكبر دليل إلكتروني للخدمات المنزلية في المملكة العربية السعودية. يهدف إلى ربط العملاء بأفضل الشركات المعتمدة في 30 مدينة سعودية.'
        },
        {
            question: 'كيف يتم اختيار الشركات في بروكر؟',
            answer: 'يتم التحقق من كل شركة وفقاً لمعايير صارمة تشمل الترخيص من وزارة التجارة، جودة الخدمة، تقييمات العملاء الحقيقيين، والالتزام بتقديم ضمان مكتوب على الخدمات.'
        },
        {
            question: 'هل بروكر مرتبط بأي شركة خدمات؟',
            answer: 'لا، بروكر منصة مستقلة ومحايدة. لا نقدم خدمات مباشرة ولسنا مرتبطين بأي شركة. نحن دليل إلكتروني يسهل التواصل بين العملاء ومقدمي الخدمات المعتمدين.'
        },
        {
            question: 'هل استخدام بروكر مجاني للعملاء؟',
            answer: 'نعم، بروكر مجاني 100% للعملاء الباحثين عن خدمات. يمكنك البحث والمقارنة والتواصل مع الشركات بدون أي رسوم.'
        },
    ];

    return (
        <>
            <BreadcrumbJsonLd items={breadcrumbs} />
            <WebPageJsonLd
                title="من نحن - بروكر"
                description="تعرف على بروكر، أكبر دليل للخدمات المنزلية في المملكة العربية السعودية"
                url="https://prokr.co/about-us"
                breadcrumbs={breadcrumbs}
            />
            {/* FAQPage Schema — about-us */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": aboutFaqItems.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                    }))
                }) }}
            />

            <main className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="hero-gradient relative text-white overflow-hidden" data-hero-gradient style={{ background: 'linear-gradient(to bottom left, #0369a1, #0c4a6e, #082f49)' }}>
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                        <nav className="flex items-center gap-2 text-sky-100 text-sm mb-6">
                            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                                <Home className="w-4 h-4" />
                                الرئيسية
                            </Link>
                            <ChevronLeft className="w-4 h-4" />
                            <span className="text-white font-medium">من نحن</span>
                        </nav>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            من نحن
                        </h1>
                        <p className="text-lg text-sky-100 max-w-2xl">
                            بروكر هو دليل الخدمات السعودي الشامل الذي يربط بين مقدمي الخدمات المحترفين
                            والعملاء الباحثين عن أفضل الخدمات في مدنهم.
                        </p>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                            <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
                                <Target className="w-7 h-7 text-sky-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">رسالتنا</h2>
                            <p className="text-gray-600 leading-relaxed">
                                نسعى لتسهيل الوصول إلى أفضل مقدمي الخدمات في المملكة العربية السعودية
                                من خلال منصة موثوقة وسهلة الاستخدام تمكن العملاء من المقارنة والاختيار بثقة.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                                <Award className="w-7 h-7 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">رؤيتنا</h2>
                            <p className="text-gray-600 leading-relaxed">
                                أن نكون المنصة الأولى والأكثر موثوقية في المملكة للربط بين
                                مقدمي الخدمات والعملاء، مع ضمان أعلى معايير الجودة والشفافية.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="bg-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
                            لماذا تختار بروكر؟
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center p-6">
                                <div className="w-16 h-16 mx-auto bg-sky-100 rounded-full flex items-center justify-center mb-4">
                                    <Shield className="w-8 h-8 text-sky-600" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">شركات معتمدة</h3>
                                <p className="text-gray-600">
                                    جميع الشركات المعروضة تم التحقق منها وتقييمها لضمان جودة الخدمة المقدمة.
                                </p>
                            </div>

                            <div className="text-center p-6">
                                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                    <Users className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">تقييمات حقيقية</h3>
                                <p className="text-gray-600">
                                    آراء وتقييمات من عملاء حقيقيين تساعدك في اتخاذ القرار الصحيح.
                                </p>
                            </div>

                            <div className="text-center p-6">
                                <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle className="w-8 h-8 text-amber-600" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">تغطية شاملة</h3>
                                <p className="text-gray-600">
                                    نغطي أكثر من 30 مدينة و54 خدمة في جميع أنحاء المملكة.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="bg-gradient-to-l from-sky-600 to-sky-700 py-16 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <p className="text-4xl font-bold">+500</p>
                                <p className="text-sky-200">شركة مسجلة</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold">30</p>
                                <p className="text-sky-200">مدينة</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold">+50</p>
                                <p className="text-sky-200">خدمة</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold">+10K</p>
                                <p className="text-sky-200">عميل راضٍ</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About FAQ */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">أسئلة شائعة عن بروكر</h2>
                    <FaqAccordion
                        items={aboutFaqItems}
                        cityName="السعودية"
                        serviceName="بروكر"
                    />
                </section>

                {/* CTA */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        هل لديك شركة خدمات؟
                    </h2>
                    <p className="text-gray-600 mb-8">
                        انضم إلى بروكر واحصل على عملاء جدد. سجل شركتك مجاناً الآن.
                    </p>
                    <Link
                        href="/advertise"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 text-white font-bold rounded-xl hover:bg-sky-700 shadow-lg transition-colors"
                    >
                        سجل شركتك الآن
                    </Link>
                </section>

                <Footer />
            </main>
        </>
    );
}
