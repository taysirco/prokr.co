import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { CITIES, SERVICES, getCityBySlug, getServiceBySlug } from '@/lib/seed';
import { NAP } from '@/lib/nap';
import { getCityKeyword } from '@/lib/locale-formatting';
import { hasPageOverride } from '@/lib/overrides/registry';
import { isAbsorbedSlug, getCanonicalSlug } from '@/lib/services/super-page-groups';

interface FooterProps {
    currentCity?: string;
    currentService?: string;
}

// Footer internal links — deterministic category rotation
// توليد رقم عشوائي ثابت (Seed) بناءً على مسار الصفحة لكي لا ينهار كاش السيرفر
const getDeterministicLinks = <T,>(items: T[], seedString: string, limit: number): T[] => {
    if (!items.length) return [];
    const seed = Array.from(seedString).reduce((acc, char) => acc + char.charCodeAt(0), 0);
    // دوران رياضي ذكي — قص دائري
    const startIndex = seed % items.length;
    const rotated = [...items, ...items];
    return rotated.slice(startIndex, startIndex + limit);
};

export default function Footer({ currentCity, currentService }: FooterProps) {
    // Get current city and service objects
    const city = currentCity ? getCityBySlug(currentCity) : null;
    const service = currentService ? getServiceBySlug(currentService) : null;

    // Show services and cities that have valid content pages
    const currentValidCity = currentCity || 'riyadh';
    const currentValidService = currentService || 'furniture-moving';
    // Resolve absorbed slug to canonical for city link generation
    const canonicalService = getCanonicalSlug(currentValidService) || currentValidService;

    // 1. فلترة الخدمات والمدن المتاحة (كما كانت)
    const allServices = SERVICES.filter(s =>
        s.slug !== currentService &&
        hasPageOverride(currentValidCity, s.slug) &&
        !isAbsorbedSlug(s.slug)
    );
    const allCities = CITIES.filter(c =>
        c.slug !== currentCity &&
        hasPageOverride(c.slug, canonicalService)
    );

    // 2. عرض 6 روابط مختارة فقط — بدل 24+ رابط
    const targetedServices = getDeterministicLinks(allServices, currentCity || 'root', 6);
    const targetedCities = getDeterministicLinks(allCities, canonicalService || 'root', 6);

    return (
        <footer className="text-gray-300" style={{ background: 'linear-gradient(to bottom, #030712, #0f172a, #030712)', color: '#cbd5e1' }}>
            {/* Sitemap-Style Links: All Services */}
            <div className="border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-sky-500 rounded-full"></span>
                        {city ? `خدمات مقترحة ${getCityKeyword(city.name_ar, 'ba')}` : 'خدمات مقترحة'}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {targetedServices.map(s => (
                            <Link
                                key={s.slug}
                                href={`/${currentValidCity}/${s.slug}`}
                                className="hover:text-sky-400 transition-colors text-sm"
                                style={{ color: '#94a3b8' }}
                            >
                                {s.name_ar}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sitemap-Style Links: All Cities */}
            <div className="border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-sky-500 rounded-full"></span>
                        {service ? `${service.name_ar} في مدن أخرى` : 'مدن أخرى'}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {targetedCities.map(c => (
                            <Link
                                key={c.slug}
                                href={`/${c.slug}/${canonicalService}`}
                                className="hover:text-sky-400 transition-colors text-sm"
                                style={{ color: '#94a3b8' }}
                            >
                                {c.name_ar}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Specialized Services — Link equity for underlinked pages */}
            <div className="border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                        <span className="w-1 h-5 bg-amber-500 rounded-full"></span>
                        خدمات متخصصة
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                        <Link href={`/${currentValidCity}/sanitization`} className="hover:text-amber-400 transition-colors text-xs" style={{ color: '#94a3b8' }}>
                            تعقيم وتطهير
                        </Link>
                        <Link href={`/${currentValidCity}/air-conditioner-cleaning`} className="hover:text-amber-400 transition-colors text-xs" style={{ color: '#94a3b8' }}>
                            تنظيف مكيفات
                        </Link>
                        <Link href={`/${currentValidCity}/mattress-cleaning`} className="hover:text-amber-400 transition-colors text-xs" style={{ color: '#94a3b8' }}>
                            تنظيف مراتب
                        </Link>
                        <Link href={`/${currentValidCity}/swimming-pool-cleaning`} className="hover:text-amber-400 transition-colors text-xs" style={{ color: '#94a3b8' }}>
                            تنظيف مسابح
                        </Link>
                        <Link href={`/${currentValidCity}/floor-cleaning`} className="hover:text-amber-400 transition-colors text-xs" style={{ color: '#94a3b8' }}>
                            جلي رخام
                        </Link>
                        <Link href={`/${currentValidCity}/auto-cleaning`} className="hover:text-amber-400 transition-colors text-xs" style={{ color: '#94a3b8' }}>
                            غسيل سيارات
                        </Link>
                        <Link href="/research/pricing-index" className="hover:text-amber-400 transition-colors text-xs" style={{ color: '#94a3b8' }}>
                            📊 مؤشر الأسعار
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Column 0: Brand */}
                    <div className="lg:col-span-3 flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-4 pb-6 border-b border-white/10">
                        <Link href="/" className="shrink-0">
                            <Image
                                src="/logo.webp"
                                alt="PROKR - بروكر"
                                width={140}
                                height={44}
                                className="h-10 w-auto drop-shadow-[0_0_16px_rgba(56,189,248,0.3)]"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed max-w-lg" style={{ color: '#94a3b8' }}>
                            المنصة الأولى لمقارنة واختيار أفضل شركات الخدمات المعتمدة في المملكة العربية السعودية — أسعار شفافة، تقييمات حقيقية، وضمان جودة.
                        </p>
                    </div>

                    {/* Column 1: Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-sky-500 rounded-full"></span>
                            روابط سريعة
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-sky-400 transition-colors text-sm">
                                    الرئيسية
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us" className="hover:text-sky-400 transition-colors text-sm">
                                    من نحن
                                </Link>
                            </li>
                            <li>
                                <Link href="/advertise" className="hover:text-sky-400 transition-colors text-sm">
                                    أضف إعلانك
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us" className="hover:text-sky-400 transition-colors text-sm">
                                    تواصل معنا
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations" className="hover:text-sky-400 transition-colors text-sm">
                                    المدن
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-sky-400 transition-colors text-sm">
                                    جميع الخدمات
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-sky-400 transition-colors text-sm">
                                    المدونة
                                </Link>
                            </li>
                            <li>
                                <Link href="/research/pricing-index" className="hover:text-sky-400 transition-colors text-sm">
                                    📊 مؤشر الأسعار
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Legal & Contact */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-sky-500 rounded-full"></span>
                            تواصل معنا
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm">
                                <Phone className="w-4 h-4 text-sky-500" />
                                <span dir="ltr">{NAP.phoneDisplay}</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <Mail className="w-4 h-4 text-sky-500" />
                                <span>{NAP.email}</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <MapPin className="w-4 h-4 text-sky-500" />
                                <span>{NAP.address.country}</span>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="flex gap-3 mt-6">
                            <a
                                href={NAP.social.facebook}
                                className="w-10 h-10 bg-white/10 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="Facebook"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            {/* Twitter/X link removed — handle prokr_sa returns 404.
                                Re-add a live X account here when one exists. */}
                            <a
                                href={NAP.social.instagram}
                                className="w-10 h-10 bg-white/10 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="Instagram"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Legal Links */}
                        <div className="mt-6 space-y-2">
                            <Link href="/privacy-policy" className="block text-xs hover:text-sky-400 transition-colors" style={{ color: '#94a3b8' }}>
                                سياسة الخصوصية
                            </Link>
                            <Link href="/terms-of-service" className="block text-xs hover:text-sky-400 transition-colors" style={{ color: '#94a3b8' }}>
                                الشروط والأحكام
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm" style={{ color: '#94a3b8' }}>
                            © {new Date().getFullYear()} بروكر. جميع الحقوق محفوظة.
                        </p>
                        <p className="text-xs" style={{ color: '#64748b' }}>
                            دليل الخدمات السعودي الشامل
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
