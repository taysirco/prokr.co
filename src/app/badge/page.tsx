import { Metadata } from 'next';
import CopyButton from '@/components/CopyButton';

export const metadata: Metadata = {
    title: 'شارة مزود معتمد — بروكر 2026',
    description: 'احصل على شارة "مزود خدمة معتمد في دليل بروكر" لتعزيز مصداقية موقع شركتك.',
    robots: { index: false, follow: false },
};

/**
 * Trust Badge Embed Page (§10.1)
 * 
 * Gives each listed company an embeddable badge widget
 * that contains a dofollow link back to prokr.co.
 * 
 * URL: /badge?company=COMPANY_CODE
 * 
 * EFFECT: Every company that embeds this = 1 dofollow backlink
 */
export default async function BadgePage({
    searchParams,
}: {
    searchParams: Promise<{ company?: string; theme?: string }>;
}) {
    const params = await searchParams;
    const companyCode = params.company || 'XXXXX';
    const theme = params.theme || 'light';

    const embedCode = `<!-- بروكر — مزود خدمة معتمد -->
<a href="https://prokr.co/company/${companyCode}" 
   title="مزود خدمة معتمد في دليل بروكر"
   target="_blank" rel="noopener">
  <img src="https://prokr.co/images/badge-verified-2026.svg" 
       alt="✅ مزود خدمة معتمد — دليل بروكر 2026"
       width="180" height="60"
       style="border:0" loading="lazy" />
</a>`;

    const darkBg = theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900';

    return (
        <div className={`min-h-screen ${darkBg}`}>
            <div className="max-w-3xl mx-auto px-4 py-16" dir="rtl">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-4">
                        🛡️ شارة المزود المعتمد
                    </div>
                    <h1 className="text-3xl font-bold mb-4">
                        أضف شارة بروكر لموقعك
                    </h1>
                    <p className="text-gray-500 text-lg max-w-lg mx-auto">
                        أظهر لعملائك أن شركتك معتمدة ومُراجعة في أكبر دليل خدمات سعودي
                    </p>
                </div>

                {/* Badge Preview */}
                <div className="bg-gray-50 rounded-2xl p-8 mb-8 text-center border border-gray-200">
                    <p className="text-sm text-gray-500 mb-4">معاينة الشارة:</p>
                    <div className="inline-block bg-white p-6 rounded-xl shadow-sm border">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                                <span className="text-xl">🛡️</span>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-bold text-sky-700">مزود خدمة معتمد</p>
                                <p className="text-xs text-gray-400">دليل بروكر 2026</p>
                            </div>
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Embed Code */}
                <div className="bg-gray-900 rounded-2xl p-6 mb-8">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-sm text-gray-400">كود التضمين — انسخه والصقه في موقعك:</p>
                        <CopyButton
                            value={embedCode}
                            type="address"
                            sectionId="badge-page"
                        />
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">
                        {embedCode}
                    </pre>
                </div>

                {/* Benefits */}
                <div className="grid gap-6 md:grid-cols-3 mb-12">
                    <div className="bg-sky-50 rounded-xl p-5 border border-sky-100">
                        <p className="text-2xl mb-2">📈</p>
                        <h3 className="font-bold text-gray-900 mb-1">تعزيز الثقة</h3>
                        <p className="text-sm text-gray-600">
                            87% من العملاء يثقون بالشركات ذات الشارات المعتمدة
                        </p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                        <p className="text-2xl mb-2">🔗</p>
                        <h3 className="font-bold text-gray-900 mb-1">تحسين SEO</h3>
                        <p className="text-sm text-gray-600">
                            رابط موثوق من دليل بروكر يعزز ترتيب موقعك
                        </p>
                    </div>
                    <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                        <p className="text-2xl mb-2">⭐</p>
                        <h3 className="font-bold text-gray-900 mb-1">تقييم محدّث</h3>
                        <p className="text-sm text-gray-600">
                            الشارة تعرض تقييمك الحالي وعدد المراجعات تلقائياً
                        </p>
                    </div>
                </div>

                {/* Instructions */}
                <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
                    <h2 className="font-bold text-lg mb-4">📋 خطوات التركيب</h2>
                    <ol className="space-y-3 text-sm text-gray-700">
                        <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-sky-600 text-white text-xs flex items-center justify-center flex-shrink-0">1</span>
                            <span>استبدل <code className="bg-white px-1 rounded text-sky-700 text-xs">{companyCode}</code> بكود شركتك من بروكر</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-sky-600 text-white text-xs flex items-center justify-center flex-shrink-0">2</span>
                            <span>انسخ كود HTML أعلاه</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-sky-600 text-white text-xs flex items-center justify-center flex-shrink-0">3</span>
                            <span>الصقه في فوتر موقعك أو صفحة &quot;من نحن&quot;</span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

