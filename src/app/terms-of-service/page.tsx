import { Metadata } from 'next';
import Link from 'next/link';
import { Home, ChevronLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'الشروط والأحكام | بروكر',
    description: 'الشروط والأحكام الخاصة باستخدام موقع بروكر - دليل الخدمات السعودي',
};

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-gradient-to-bl from-emerald-600 via-emerald-700 to-emerald-900 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-emerald-100 text-sm mb-6">
                        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            الرئيسية
                        </Link>
                        <ChevronLeft className="w-4 h-4" />
                        <span className="text-white font-medium">الشروط والأحكام</span>
                    </nav>
                    <h1 className="text-3xl sm:text-4xl font-bold">الشروط والأحكام</h1>
                    <p className="text-emerald-100 mt-4">آخر تحديث: يناير 2026</p>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl p-8 shadow-sm prose prose-lg max-w-none">
                    <h2>مقدمة</h2>
                    <p>
                        باستخدامك لموقع بروكر، فإنك توافق على الالتزام بهذه الشروط والأحكام.
                        يرجى قراءتها بعناية قبل استخدام الموقع.
                    </p>

                    <h2>تعريف الخدمة</h2>
                    <p>
                        بروكر هو دليل إلكتروني يربط بين مقدمي الخدمات والعملاء في المملكة العربية السعودية.
                        نحن منصة وسيطة ولا نقدم الخدمات بشكل مباشر.
                    </p>

                    <h2>استخدام الموقع</h2>
                    <p>يجب عليك:</p>
                    <ul>
                        <li>تقديم معلومات صحيحة ودقيقة عند التسجيل</li>
                        <li>عدم استخدام الموقع لأغراض غير قانونية</li>
                        <li>عدم انتحال شخصية أي فرد أو مؤسسة</li>
                        <li>احترام حقوق الملكية الفكرية</li>
                    </ul>

                    <h2>للمعلنين</h2>
                    <p>عند تسجيلك كمعلن:</p>
                    <ul>
                        <li>تتحمل كامل المسؤولية عن صحة معلومات شركتك</li>
                        <li>توافق على عرض معلومات التواصل للعملاء المحتملين</li>
                        <li>تلتزم بتقديم خدمات عالية الجودة</li>
                        <li>تلتزم بالأنظمة واللوائح المعمول بها في المملكة</li>
                    </ul>

                    <h2>إخلاء المسؤولية</h2>
                    <p>
                        بروكر ليست مسؤولة عن جودة الخدمات المقدمة من قبل المعلنين أو أي خلافات
                        قد تنشأ بين العميل ومقدم الخدمة. نحن نوفر المنصة فقط لتسهيل التواصل.
                    </p>

                    <h2>حقوق الملكية الفكرية</h2>
                    <p>
                        جميع المحتويات على الموقع (نصوص، صور، تصميمات) محمية بحقوق الملكية الفكرية.
                        يُمنع نسخها أو إعادة استخدامها دون إذن كتابي مسبق.
                    </p>

                    <h2>التعديلات</h2>
                    <p>
                        نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر التحديثات على هذه الصفحة
                        مع تاريخ آخر تحديث.
                    </p>

                    <h2>القانون الحاكم</h2>
                    <p>
                        تخضع هذه الشروط وتفسر وفقاً لأنظمة المملكة العربية السعودية.
                    </p>

                    <h2>التواصل</h2>
                    <p>
                        للاستفسارات حول هذه الشروط، تواصل معنا عبر صفحة{' '}
                        <Link href="/contact-us" className="text-emerald-600">اتصل بنا</Link>.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
