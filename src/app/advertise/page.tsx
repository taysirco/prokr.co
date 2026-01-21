'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Home, ChevronLeft, CheckCircle, Star, Phone, Shield, Users, Zap, ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export default function AdvertisePage() {
    const [selectedPlan, setSelectedPlan] = useState<'free' | 'premium'>('premium');

    return (
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
                        <span className="text-white font-medium">أضف إعلانك</span>
                    </nav>

                    <div className="max-w-3xl">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            أضف شركتك في بروكر
                        </h1>
                        <p className="text-lg text-emerald-100 mb-8">
                            انضم إلى أكثر من 500 شركة خدمات في المملكة واحصل على عملاء جدد يومياً.
                            سجل مجاناً أو اختر الباقة المميزة لتصدر نتائج البحث.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-emerald-300" />
                                <span>تسجيل مجاني</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-emerald-300" />
                                <span>ظهور في 24 مدينة</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-emerald-300" />
                                <span>تواصل مباشر مع العملاء</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
                    لماذا تعلن معنا؟
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <div className="w-14 h-14 mx-auto bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                            <Users className="w-7 h-7 text-emerald-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">آلاف العملاء</h3>
                        <p className="text-sm text-gray-600">وصول لآلاف العملاء الباحثين عن خدماتك</p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <div className="w-14 h-14 mx-auto bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                            <Star className="w-7 h-7 text-amber-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">تقييمات حقيقية</h3>
                        <p className="text-sm text-gray-600">اجمع تقييمات العملاء وابنِ سمعتك</p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <div className="w-14 h-14 mx-auto bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                            <Zap className="w-7 h-7 text-blue-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">نتائج فورية</h3>
                        <p className="text-sm text-gray-600">ابدأ باستقبال الاتصالات فور التسجيل</p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <div className="w-14 h-14 mx-auto bg-green-100 rounded-xl flex items-center justify-center mb-4">
                            <Shield className="w-7 h-7 text-green-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">شارة معتمد</h3>
                        <p className="text-sm text-gray-600">احصل على شارة التوثيق وزد ثقة العملاء</p>
                    </div>
                </div>
            </section>

            {/* Pricing Plans */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                        اختر خطتك
                    </h2>
                    <p className="text-gray-600 text-center mb-12">
                        ابدأ مجاناً أو اختر الباقة المميزة لمزيد من الظهور
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Free Plan */}
                        <div
                            className={`bg-white rounded-2xl p-8 border-2 transition-all cursor-pointer ${selectedPlan === 'free'
                                    ? 'border-emerald-500 shadow-lg'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                            onClick={() => setSelectedPlan('free')}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-gray-900">الباقة المجانية</h3>
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedPlan === 'free' ? 'border-emerald-500 bg-emerald-500' : 'border-gray-300'
                                    }`}>
                                    {selectedPlan === 'free' && <CheckCircle className="w-4 h-4 text-white" />}
                                </div>
                            </div>

                            <div className="mb-6">
                                <span className="text-4xl font-bold text-gray-900">مجاناً</span>
                                <span className="text-gray-500"> / للأبد</span>
                            </div>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-2 text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                                    ظهور في قائمة الشركات
                                </li>
                                <li className="flex items-center gap-2 text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                                    صفحة تعريفية لشركتك
                                </li>
                                <li className="flex items-center gap-2 text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                                    عرض رقم الهاتف
                                </li>
                                <li className="flex items-center gap-2 text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                                    إضافة 3 مدن
                                </li>
                                <li className="flex items-center gap-2 text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                                    إضافة 2 خدمات
                                </li>
                            </ul>
                        </div>

                        {/* Premium Plan */}
                        <div
                            className={`relative bg-white rounded-2xl p-8 border-2 transition-all cursor-pointer ${selectedPlan === 'premium'
                                    ? 'border-amber-400 shadow-xl'
                                    : 'border-gray-200 hover:border-amber-300'
                                }`}
                            onClick={() => setSelectedPlan('premium')}
                        >
                            <div className="absolute -top-4 right-4 bg-gradient-to-l from-amber-400 to-amber-500 text-amber-900 text-sm font-bold px-4 py-1 rounded-full">
                                الأكثر طلباً
                            </div>

                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-gray-900">الباقة المميزة</h3>
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedPlan === 'premium' ? 'border-amber-500 bg-amber-500' : 'border-gray-300'
                                    }`}>
                                    {selectedPlan === 'premium' && <CheckCircle className="w-4 h-4 text-white" />}
                                </div>
                            </div>

                            <div className="mb-6">
                                <span className="text-4xl font-bold text-gray-900">299</span>
                                <span className="text-gray-500"> ر.س / شهرياً</span>
                            </div>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-2 text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-amber-500" />
                                    <strong>تصدر نتائج البحث</strong>
                                </li>
                                <li className="flex items-center gap-2 text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-amber-500" />
                                    شارة "معتمد" الذهبية
                                </li>
                                <li className="flex items-center gap-2 text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-amber-500" />
                                    إطار ذهبي مميز
                                </li>
                                <li className="flex items-center gap-2 text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-amber-500" />
                                    جميع المدن (24 مدينة)
                                </li>
                                <li className="flex items-center gap-2 text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-amber-500" />
                                    جميع الخدمات (+50 خدمة)
                                </li>
                                <li className="flex items-center gap-2 text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-amber-500" />
                                    معرض صور (حتى 10 صور)
                                </li>
                                <li className="flex items-center gap-2 text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-amber-500" />
                                    أولوية الظهور في البحث
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center mt-12">
                        <Link
                            href="/admin"
                            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-l from-emerald-500 to-emerald-600 text-white font-bold text-lg rounded-xl hover:from-emerald-600 hover:to-emerald-700 shadow-xl shadow-emerald-500/30 transition-all"
                        >
                            ابدأ الآن
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <p className="text-sm text-gray-500 mt-4">
                            التسجيل يستغرق أقل من 5 دقائق
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
                    الأسئلة الشائعة
                </h2>

                <div className="space-y-4">
                    {[
                        {
                            q: 'كيف أضيف شركتي في بروكر؟',
                            a: 'يمكنك التسجيل مجاناً من خلال الضغط على "ابدأ الآن" وتعبئة نموذج التسجيل بمعلومات شركتك.'
                        },
                        {
                            q: 'ما الفرق بين الباقة المجانية والمميزة؟',
                            a: 'الباقة المميزة تمنحك ظهوراً في أعلى نتائج البحث، شارة التوثيق الذهبية، وإمكانية إضافة جميع المدن والخدمات.'
                        },
                        {
                            q: 'هل يمكنني تغيير خطتي لاحقاً؟',
                            a: 'نعم، يمكنك الترقية إلى الباقة المميزة في أي وقت من لوحة التحكم.'
                        },
                        {
                            q: 'كيف يتواصل العملاء معي؟',
                            a: 'يمكن للعملاء التواصل معك مباشرة عبر الهاتف أو الواتساب المسجل في ملفك الشخصي.'
                        },
                        {
                            q: 'هل يوجد عقد طويل الأجل؟',
                            a: 'لا، الباقة المميزة تُجدد شهرياً ويمكنك إلغاؤها في أي وقت.'
                        },
                    ].map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
                        >
                            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                                <span className="font-medium text-gray-900">{faq.q}</span>
                                <ChevronLeft className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                            </summary>
                            <div className="px-6 pb-6 text-gray-600">
                                {faq.a}
                            </div>
                        </details>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-gradient-to-l from-emerald-600 to-emerald-700 py-16 text-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                        جاهز للحصول على عملاء جدد؟
                    </h2>
                    <p className="text-emerald-100 mb-8">
                        انضم الآن وابدأ باستقبال طلبات العملاء اليوم
                    </p>
                    <Link
                        href="/admin"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 shadow-xl transition-all"
                    >
                        سجل شركتك مجاناً
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
