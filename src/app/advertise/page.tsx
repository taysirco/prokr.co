import { Metadata } from 'next';
import Link from 'next/link';
import { Home, ChevronLeft, CheckCircle, Star, Shield, Users, Zap, ArrowDown, Sparkles, Clock } from 'lucide-react';
import Footer from '@/components/Footer';
import CompanyRegistrationWizard from '@/components/CompanyRegistrationWizard';

export const metadata: Metadata = {
    title: 'أضف شركتك | بروكر - منصة الخدمات المعتمدة',
    description: 'سجّل شركتك المتخصصة في تقديم الخدمات ببروكر وابدأ باستقبال طلبات العملاء فوراً وبشكل مجاني تماماً.',
    openGraph: {
        title: 'أضف شركتك | بروكر - منصة الخدمات المعتمدة',
        description: 'سجّل شركتك المتخصصة في تقديم الخدمات المنوع في المملكة ببروكر وابدأ باستقبال طلبات العملاء فوراً.',
        url: 'https://prokr.co/advertise',
    }
};

export default function AdvertisePage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative text-white overflow-hidden bg-gradient-to-br from-sky-900 via-sky-800 to-sky-600">
                {/* Decorative blobs */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.2)_0%,transparent_70%)]" />
                    <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.15)_0%,transparent_70%)]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.08)_0%,transparent_60%)]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <nav className="flex items-center gap-2 text-sky-200 text-sm mb-8">
                        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            الرئيسية
                        </Link>
                        <ChevronLeft className="w-4 h-4" />
                        <span className="text-white font-medium">أضف شركتك</span>
                    </nav>

                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium bg-sky-500/20 border border-sky-300/30">
                            <Sparkles className="w-4 h-4 text-sky-300" />
                            <span className="text-sky-100">تسجيل سريع في 5 خطوات</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            أضف شركتك في بروكر
                            <br />
                            <span className="text-sky-300">واحصل على عملاء جدد يومياً</span>
                        </h1>
                        <p className="text-lg text-sky-100 mb-10 leading-relaxed max-w-2xl">
                            انضم إلى مئات شركات الخدمات في المملكة. سجّل معلوماتك بسهولة
                            وابدأ باستقبال طلبات العملاء مباشرة.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-sky-500/30">
                                    <CheckCircle className="w-4 h-4 text-sky-300" />
                                </div>
                                <span className="text-sky-50">أسعار تنافسية</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-sky-500/30">
                                    <CheckCircle className="w-4 h-4 text-sky-300" />
                                </div>
                                <span className="text-sky-50">ظهور في 29 مدينة</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-sky-500/30">
                                    <CheckCircle className="w-4 h-4 text-sky-300" />
                                </div>
                                <span className="text-sky-50">تواصل مباشر</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                    لماذا تسجل في بروكر؟
                </h2>
                <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
                    منصة متخصصة تربطك بالعملاء الباحثين عن خدماتك
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {[
                        { icon: Users, colorClass: 'text-sky-500', bgClass: 'bg-sky-100', title: 'آلاف العملاء', desc: 'وصول لعملاء يبحثون عن خدماتك' },
                        { icon: Star, colorClass: 'text-amber-500', bgClass: 'bg-amber-100', title: 'تقييمات حقيقية', desc: 'اجمع تقييمات وابنِ سمعتك' },
                        { icon: Zap, colorClass: 'text-violet-500', bgClass: 'bg-violet-100', title: 'نتائج فورية', desc: 'استقبل اتصالات فور التسجيل' },
                        { icon: Shield, colorClass: 'text-emerald-500', bgClass: 'bg-emerald-100', title: 'شارة معتمد', desc: 'احصل على توثيق وزد الثقة' },
                    ].map((benefit, idx) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={idx}
                                className="text-center p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:translate-y-[-4px] bg-white border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                            >
                                <div
                                    className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl flex items-center justify-center mb-4 ${benefit.bgClass}`}
                                >
                                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${benefit.colorClass}`} />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">{benefit.title}</h3>
                                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{benefit.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* How it works */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
                        كيف تسجل؟
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6">
                        {[
                            { step: '1', title: 'اختر خدماتك', desc: 'حدد نوع الخدمات التي تقدمها', colorClass: 'bg-blue-500 shadow-[0_4px_16px_rgba(59,130,246,0.3)]' },
                            { step: '2', title: 'حدد موقعك', desc: 'اختر مدنك وأحياءك', colorClass: 'bg-emerald-500 shadow-[0_4px_16px_rgba(16,185,129,0.3)]' },
                            { step: '3', title: 'اختر المدة', desc: 'حدد مدة باقتك الإعلانية', colorClass: 'bg-cyan-500 shadow-[0_4px_16px_rgba(6,182,212,0.3)]' },
                            { step: '4', title: 'أدخل بياناتك', desc: 'معلومات الشركة والتواصل', colorClass: 'bg-amber-500 shadow-[0_4px_16px_rgba(245,158,11,0.3)]' },
                            { step: '5', title: 'أرسل الطلب', desc: 'نراجعه ونفعّله خلال 24 ساعة', colorClass: 'bg-violet-500 shadow-[0_4px_16px_rgba(139,92,246,0.3)]' },
                        ].map((item, idx) => (
                            <div key={idx} className="text-center">
                                <div
                                    className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4 ${item.colorClass}`}
                                >
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                                <p className="text-xs sm:text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="#wizard-section"
                            className="inline-flex items-center gap-2 px-10 py-4 font-bold text-lg text-white rounded-xl transition-all hover:scale-105 bg-gradient-to-br from-sky-500 to-sky-700 shadow-[0_4px_20px_rgba(14,165,233,0.3)]"
                        >
                            ابدأ التسجيل الآن
                            <ArrowDown className="w-5 h-5" />
                        </a>
                        <p className="text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
                            <Clock className="w-4 h-4" />
                            التسجيل يستغرق أقل من 3 دقائق
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
                            a: 'يمكنك التسجيل من خلال تعبئة النموذج أدناه في 5 خطوات بسيطة: اختيار الخدمات، تحديد الموقع، اختيار مدة الباقة، إدخال بيانات الشركة، ورفع الصور.'
                        },
                        {
                            q: 'كم تكلفة الإعلان؟',
                            a: 'يعتمد التسعير على عدد المدن والأحياء والخدمات المختارة، بالإضافة لمدة الباقة. يظهر لك السعر التقديري بشكل لحظي أثناء التسجيل. تبدأ الباقات من 15 يوماً مع خصومات تصل لـ 20% على الباقات الأطول.'
                        },
                        {
                            q: 'ما هي طرق الدفع المتاحة؟',
                            a: 'حالياً يتم الدفع عبر التحويل البنكي أو من خلال مناديب بروكر. بعد إرسال طلبك، سيتواصل معك فريقنا لإتمام عملية الدفع والتفعيل.'
                        },
                        {
                            q: 'كم يستغرق تفعيل حسابي؟',
                            a: 'يتم مراجعة طلب التسجيل والتواصل معك خلال 24 ساعة من الإرسال. يتم التفعيل فور تأكيد الدفع.'
                        },
                        {
                            q: 'كيف يتواصل العملاء معي؟',
                            a: 'يمكن للعملاء التواصل معك مباشرة عبر الهاتف أو الواتساب المسجل في ملفك الشخصي.'
                        },
                        {
                            q: 'هل يمكنني إضافة أكثر من مدينة؟',
                            a: 'نعم، يمكنك اختيار جميع المدن التي تقدم فيها خدماتك في أي منطقة بالمملكة. يتم احتساب تكلفة كل مدينة بناءً على تصنيفها.'
                        },
                    ].map((faq, index) => (
                        <details
                            key={index}
                            className="group overflow-hidden rounded-xl transition-all bg-white border border-gray-200"
                        >
                            <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                                <span className="font-medium text-gray-900">{faq.q}</span>
                                <ChevronLeft className="w-5 h-5 text-gray-400 group-open:rotate-[-90deg] transition-transform duration-300 flex-shrink-0 mr-2" />
                            </summary>
                            <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 leading-relaxed">
                                {faq.a}
                            </div>
                        </details>
                    ))}
                </div>
            </section>

            {/* Registration Wizard Section */}
            <section id="wizard-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-medium bg-sky-100 text-sky-700">
                        <Sparkles className="w-4 h-4" />
                        نموذج تسجيل ذكي
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        سجّل شركتك الآن
                    </h2>
                    <p className="text-gray-500 max-w-lg mx-auto">
                        أكمل الخطوات التالية وسيتم مراجعة طلبك والتواصل معك خلال 24 ساعة
                    </p>
                </div>

                <div className="rounded-3xl p-6 sm:p-8 md:p-10 bg-white border border-gray-200 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                    <CompanyRegistrationWizard />
                </div>
            </section>

            <Footer />
        </main>
    );
}
