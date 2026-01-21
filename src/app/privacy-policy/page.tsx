import { Metadata } from 'next';
import Link from 'next/link';
import { Home, ChevronLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'سياسة الخصوصية | بروكر',
    description: 'سياسة الخصوصية الخاصة بموقع بروكر - دليل الخدمات السعودي',
};

export default function PrivacyPolicyPage() {
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
                        <span className="text-white font-medium">سياسة الخصوصية</span>
                    </nav>
                    <h1 className="text-3xl sm:text-4xl font-bold">سياسة الخصوصية</h1>
                    <p className="text-emerald-100 mt-4">آخر تحديث: يناير 2026</p>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl p-8 shadow-sm prose prose-lg max-w-none">
                    <h2>مقدمة</h2>
                    <p>
                        نحن في بروكر نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية.
                        توضح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا للمعلومات التي تقدمها لنا.
                    </p>

                    <h2>المعلومات التي نجمعها</h2>
                    <p>نقوم بجمع المعلومات التالية:</p>
                    <ul>
                        <li><strong>معلومات الحساب:</strong> الاسم، البريد الإلكتروني، رقم الهاتف عند التسجيل كمعلن</li>
                        <li><strong>معلومات الاستخدام:</strong> الصفحات التي تزورها، وقت الزيارة، الجهاز المستخدم</li>
                        <li><strong>معلومات التواصل:</strong> الرسائل التي ترسلها عبر نموذج الاتصال</li>
                    </ul>

                    <h2>كيف نستخدم معلوماتك</h2>
                    <ul>
                        <li>تقديم وتحسين خدماتنا</li>
                        <li>التواصل معك بخصوص حسابك أو استفساراتك</li>
                        <li>إرسال تحديثات عن الخدمات (بموافقتك)</li>
                        <li>تحليل استخدام الموقع لتحسين التجربة</li>
                    </ul>

                    <h2>حماية المعلومات</h2>
                    <p>
                        نستخدم تقنيات أمان متقدمة لحماية بياناتك، بما في ذلك التشفير والجدران النارية.
                        لا نشارك معلوماتك الشخصية مع أطراف ثالثة إلا بموافقتك أو عند الضرورة القانونية.
                    </p>

                    <h2>ملفات تعريف الارتباط (Cookies)</h2>
                    <p>
                        نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وتذكر تفضيلاتك.
                        يمكنك تعطيلها من إعدادات المتصفح، لكن قد يؤثر ذلك على بعض وظائف الموقع.
                    </p>

                    <h2>حقوقك</h2>
                    <p>لديك الحق في:</p>
                    <ul>
                        <li>الوصول إلى بياناتك الشخصية</li>
                        <li>تصحيح البيانات غير الدقيقة</li>
                        <li>طلب حذف بياناتك</li>
                        <li>الاعتراض على معالجة بياناتك</li>
                    </ul>

                    <h2>التواصل معنا</h2>
                    <p>
                        إذا كانت لديك أي أسئلة حول سياسة الخصوصية، يمكنك التواصل معنا عبر:
                    </p>
                    <ul>
                        <li>البريد الإلكتروني: privacy@prokr.co</li>
                        <li>صفحة <Link href="/contact-us" className="text-emerald-600">اتصل بنا</Link></li>
                    </ul>
                </div>
            </section>

            <Footer />
        </main>
    );
}
