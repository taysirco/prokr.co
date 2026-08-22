'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Home, ChevronLeft, Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import Footer from '@/components/Footer';
import FaqAccordion from '@/components/FaqAccordion';
import { BrandEntityJsonLd } from '@/components/schema/BrandEntityJsonLd';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission (replace with actual Firebase/API call)
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <>
            <BrandEntityJsonLd />
            {/* BreadcrumbList JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://prokr.co' },
                    { '@type': 'ListItem', position: 2, name: 'اتصل بنا', item: 'https://prokr.co/contact-us' },
                ],
            }) }} />
            {/* ContactPage WebPage JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'ContactPage',
                name: 'اتصل بنا — بروكر',
                description: 'تواصل مع فريق بروكر للاستفسارات، الشكاوى، أو تسجيل شركتك في الدليل',
                url: 'https://prokr.co/contact-us',
                mainEntity: {
                    '@type': 'Organization',
                    '@id': 'https://prokr.co/#organization',
                    name: 'بروكر الخدمي',
                    telephone: '+966542317431',
                    email: 'info@prokr.co',
                },
                speakable: {
                    '@type': 'SpeakableSpecification',
                    cssSelector: ['h1', 'h2', '.prose p:first-of-type'],
                },
            }) }} />
            {/* FAQPage JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                    { '@type': 'Question', name: 'كيف أتواصل مع بروكر؟', acceptedAnswer: { '@type': 'Answer', text: 'يمكنك التواصل معنا عبر واتساب على الرقم +966542317431، أو البريد الإلكتروني info@prokr.co، أو ملء نموذج الاتصال. متوسط وقت الاستجابة 15 دقيقة.' } },
                    { '@type': 'Question', name: 'كيف أسجل شركتي في بروكر؟', acceptedAnswer: { '@type': 'Answer', text: 'التسجيل مجاني — تواصل معنا عبر نموذج الاتصال أو واتساب مع بيانات شركتك (الاسم التجاري، السجل التجاري، الخدمات، المدن المغطاة) وسيتم تفعيل حسابك خلال 24 ساعة.' } },
                    { '@type': 'Question', name: 'هل خدمة بروكر مجانية للعملاء؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم، خدمة التصفح والمقارنة والاتصال بالشركات مجانية تماماً للعملاء. بروكر لا يأخذ أي عمولة من العملاء.' } },
                ],
            }) }} />
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="hero-gradient relative text-white overflow-hidden" data-hero-gradient style={{ background: 'linear-gradient(to bottom left, #0369a1, #0c4a6e, #082f49)' }}>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                    <nav className="flex items-center gap-2 text-sky-100 text-sm mb-6">
                        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            الرئيسية
                        </Link>
                        <ChevronLeft className="w-4 h-4" />
                        <span className="text-white font-medium">اتصل بنا</span>
                    </nav>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        اتصل بنا
                    </h1>
                    <p className="text-lg text-sky-100 max-w-2xl">
                        نحن هنا لمساعدتك. تواصل معنا لأي استفسار أو اقتراح.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-sky-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">الهاتف</h3>
                                    <a href="tel:+966542317431" className="text-sky-600 hover:underline" dir="ltr">
                                        +966 54 231 7431
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                    <MessageCircle className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">واتساب</h3>
                                    <a
                                        href="https://wa.me/966542317431"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-600 hover:underline"
                                        dir="ltr"
                                    >
                                        +966 54 231 7431
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">البريد الإلكتروني</h3>
                                    <a href="mailto:info@prokr.co" className="text-blue-600 hover:underline">
                                        info@prokr.co
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">العنوان</h3>
                                    <p className="text-gray-600">
                                        الرياض، المملكة العربية السعودية
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">أرسل لنا رسالة</h2>

                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 mx-auto bg-sky-100 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle className="w-10 h-10 text-sky-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">تم إرسال رسالتك بنجاح!</h3>
                                    <p className="text-gray-600 mb-6">سنتواصل معك في أقرب وقت ممكن.</p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-sky-600 hover:underline"
                                    >
                                        إرسال رسالة أخرى
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                الاسم الكامل <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                                                placeholder="أدخل اسمك"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                البريد الإلكتروني <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                                                placeholder="example@email.com"
                                                dir="ltr"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                رقم الجوال
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                value={formData.phone}
                                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                                                placeholder="+966 5X XXX XXXX"
                                                dir="ltr"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                                الموضوع <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                id="subject"
                                                required
                                                value={formData.subject}
                                                onChange={e => setFormData({ ...formData, subject: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-white"
                                            >
                                                <option value="">اختر الموضوع</option>
                                                <option value="inquiry">استفسار عام</option>
                                                <option value="advertise">الإعلان معنا</option>
                                                <option value="complaint">شكوى</option>
                                                <option value="suggestion">اقتراح</option>
                                                <option value="partnership">شراكة</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            الرسالة <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all resize-none"
                                            placeholder="اكتب رسالتك هنا..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-sky-600 text-white font-bold rounded-xl hover:bg-sky-700 shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                جاري الإرسال...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                إرسال الرسالة
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Content — Enriches the page from 142w to 400+w */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        تواصل مع فريق بروكر — خدمة عملاء على مدار الساعة
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        فريق بروكر متاح للرد على استفساراتكم وتقديم المساعدة في اختيار أفضل شركات الخدمات المنزلية في المملكة العربية السعودية.
                        سواء كنت تبحث عن شركة نقل عفش، تنظيف منازل، مكافحة حشرات، كشف تسربات مياه، أو أي خدمة منزلية أخرى — نحن هنا لمساعدتك مجاناً.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 my-6 not-prose">
                        <div className="bg-sky-50 rounded-xl p-4 text-center border border-sky-100">
                            <p className="text-3xl font-bold text-sky-700 mb-1">⚡ 15 دقيقة</p>
                            <p className="text-sm text-gray-600">متوسط وقت الاستجابة</p>
                        </div>
                        <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
                            <p className="text-3xl font-bold text-green-700 mb-1">24/7</p>
                            <p className="text-sm text-gray-600">متاحون على واتساب</p>
                        </div>
                        <div className="bg-amber-50 rounded-xl p-4 text-center border border-amber-100">
                            <p className="text-3xl font-bold text-amber-700 mb-1">30 مدينة</p>
                            <p className="text-sm text-gray-600">تغطية في السعودية</p>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">كيف يمكننا مساعدتك؟</h3>
                    <ul className="text-gray-700 space-y-2 mb-4">
                        <li><strong>مقارنة الأسعار:</strong> نساعدك في الحصول على أفضل سعر من شركات معتمدة بسجل تجاري سعودي.</li>
                        <li><strong>التحقق من الشركات:</strong> نتحقق من ترخيص الشركة وتقييماتها قبل توصيتها لك.</li>
                        <li><strong>حماية المستهلك:</strong> إذا واجهت مشكلة مع أي شركة مسجلة في بروكر، تواصل معنا وسنتابع شكواك.</li>
                        <li><strong>إضافة شركتك:</strong> إذا كنت صاحب شركة خدمات، يمكنك التسجيل مجاناً والوصول لآلاف العملاء.</li>
                        <li><strong>شراكات إعلامية:</strong> نرحب بالتعاون مع الصحفيين والباحثين للاستفادة من بياناتنا المفتوحة.</li>
                    </ul>
                    <p className="text-gray-600 text-sm">
                        بروكر هو الدليل الأول للخدمات المنزلية في السعودية — نربط بين أكثر من 500 شركة معتمدة والعملاء في 30 مدينة.
                        جميع البيانات والتقييمات حقيقية وموثقة.
                    </p>
                </div>
            </section>

            {/* Contact FAQ — Interactive Accordion */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <FaqAccordion
                    items={[
                        { question: 'كيف أتواصل مع بروكر؟', answer: 'يمكنك التواصل معنا عبر واتساب على الرقم +966542317431، أو البريد الإلكتروني info@prokr.co، أو ملء نموذج الاتصال. متوسط وقت الاستجابة 15 دقيقة.' },
                        { question: 'كيف أسجل شركتي في بروكر؟', answer: 'التسجيل مجاني — تواصل معنا عبر نموذج الاتصال أو واتساب مع بيانات شركتك (الاسم التجاري، السجل التجاري، الخدمات، المدن المغطاة) وسيتم تفعيل حسابك خلال 24 ساعة.' },
                        { question: 'هل خدمة بروكر مجانية للعملاء؟', answer: 'نعم، خدمة التصفح والمقارنة والاتصال بالشركات مجانية تماماً للعملاء. بروكر لا يأخذ أي عمولة من العملاء.' },
                    ]}
                    cityName="السعودية"
                    serviceName="خدمة العملاء"
                />
            </section>

            <Footer />
        </main>
        </>
    );
}
