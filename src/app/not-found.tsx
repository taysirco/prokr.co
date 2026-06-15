import Link from 'next/link';
import type { Metadata } from 'next';

// ════════════════════════════════════════════════════════════════
// Real 404 page (server component).
// Previously this client-redirected every 404 to the homepage, which
// Google treats as a soft-404 (404 status whose content sends users to
// an unrelated page). We now serve a genuine, helpful 404 and let the
// HTTP 404 status stand. robots:noindex,follow so it is never indexed
// but its internal links are still crawled.
// ════════════════════════════════════════════════════════════════
export const metadata: Metadata = {
    title: 'الصفحة غير موجودة',
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return (
        <div className="min-h-[70vh] bg-gray-50 flex items-center justify-center px-4 py-16">
            <div className="text-center max-w-md">
                <p className="text-7xl font-extrabold text-sky-600">404</p>
                <h1 className="mt-4 text-2xl font-bold text-gray-900">الصفحة غير موجودة</h1>
                <p className="mt-3 text-gray-600 leading-relaxed">
                    عذراً، الصفحة التي تبحث عنها غير متوفرة أو تم نقلها. يمكنك المتابعة من أحد الروابط التالية:
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/"
                        className="px-5 py-3 rounded-lg bg-sky-600 text-white font-semibold hover:bg-sky-700 transition-colors"
                    >
                        الصفحة الرئيسية
                    </Link>
                    <Link
                        href="/services-page"
                        className="px-5 py-3 rounded-lg border border-sky-600 text-sky-700 font-semibold hover:bg-sky-50 transition-colors"
                    >
                        تصفّح كل الخدمات
                    </Link>
                    <Link
                        href="/locations"
                        className="px-5 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-colors"
                    >
                        المدن
                    </Link>
                </div>
            </div>
        </div>
    );
}
