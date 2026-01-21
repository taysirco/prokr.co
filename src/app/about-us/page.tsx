import { Metadata } from 'next';
import Link from 'next/link';
import { Home, ChevronLeft, Shield, Users, Target, Award, CheckCircle } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'من نحن | بروكر - دليل الخدمات السعودي',
    description: 'تعرف على بروكر، دليل الخدمات السعودي الشامل الذي يربط بين مقدمي الخدمات والعملاء في جميع أنحاء المملكة.',
    keywords: ['عن بروكر', 'دليل الخدمات', 'السعودية', 'نقل عفش', 'تنظيف', 'مكافحة حشرات'],
    openGraph: {
        title: 'من نحن | بروكر',
        description: 'تعرف على بروكر، دليل الخدمات السعودي الشامل',
        locale: 'ar_SA',
        type: 'website',
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

    return (
        <>
            <BreadcrumbJsonLd items={breadcrumbs} />

            <main className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-bl from-emerald-600 via-emerald-700 to-emerald-900 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                        <nav className="flex items-center gap-2 text-emerald-100 text-sm mb-6">
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
                        <p className="text-lg text-emerald-100 max-w-2xl">
                            بروكر هو دليل الخدمات السعودي الشامل الذي يربط بين مقدمي الخدمات المحترفين
                            والعملاء الباحثين عن أفضل الخدمات في مدنهم.
                        </p>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                                <Target className="w-7 h-7 text-emerald-600" />
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
                                <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                    <Shield className="w-8 h-8 text-emerald-600" />
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
                                    نغطي أكثر من 24 مدينة و50 خدمة في جميع أنحاء المملكة.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="bg-gradient-to-l from-emerald-600 to-emerald-700 py-16 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <p className="text-4xl font-bold">+500</p>
                                <p className="text-emerald-200">شركة مسجلة</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold">24</p>
                                <p className="text-emerald-200">مدينة</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold">+50</p>
                                <p className="text-emerald-200">خدمة</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold">+10K</p>
                                <p className="text-emerald-200">عميل راضٍ</p>
                            </div>
                        </div>
                    </div>
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
                        className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 shadow-lg transition-colors"
                    >
                        سجل شركتك الآن
                    </Link>
                </section>

                <Footer />
            </main>
        </>
    );
}
