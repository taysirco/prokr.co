import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { CITIES, SERVICES, getCityBySlug, getServiceBySlug } from '@/lib/seed';
import { NAP } from '@/lib/nap';
import { getCityKeyword } from '@/lib/keyword-strategy';
import { hasPageOverride } from '@/lib/overrides/registry';
import { isAbsorbedSlug, getCanonicalSlug } from '@/lib/services/super-page-groups';

interface FooterProps {
    currentCity?: string;
    currentService?: string;
}

export default function Footer({ currentCity, currentService }: FooterProps) {
    // Get current city and service objects
    const city = currentCity ? getCityBySlug(currentCity) : null;
    const service = currentService ? getServiceBySlug(currentService) : null;

    // Show services and cities that actually have valid E-E-A-T pages
    const currentValidCity = currentCity || 'riyadh';
    const currentValidService = currentService || 'furniture-moving';
    // Resolve absorbed slug to canonical for city link generation
    const canonicalService = getCanonicalSlug(currentValidService) || currentValidService;

    const allServices = SERVICES.filter(s =>
        s.slug !== currentService &&
        hasPageOverride(currentValidCity, s.slug) &&
        !isAbsorbedSlug(s.slug)
    );
    const allCities = CITIES.filter(c =>
        c.slug !== currentCity &&
        hasPageOverride(c.slug, canonicalService)
    );

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
            {/* Sitemap-Style Links: All Services */}
            <div className="border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                        {city ? `جميع الخدمات ${getCityKeyword(city.name_ar, 'ba')}` : 'جميع خدماتنا'}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {allServices.map(s => (
                            <Link
                                key={s.slug}
                                href={`/${currentValidCity}/${s.slug}`}
                                className="hover:text-emerald-400 transition-colors text-sm"
                            >
                                {s.name_ar}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sitemap-Style Links: All Cities */}
            <div className="border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                        {service ? `${service.name_ar} في جميع المدن` : 'جميع المدن'}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {allCities.map(c => (
                            <Link
                                key={c.slug}
                                href={`/${c.slug}/${canonicalService}`}
                                className="hover:text-emerald-400 transition-colors text-sm"
                            >
                                {c.name_ar}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Column 1: Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                            روابط سريعة
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-emerald-400 transition-colors text-sm">
                                    الرئيسية
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us" className="hover:text-emerald-400 transition-colors text-sm">
                                    من نحن
                                </Link>
                            </li>
                            <li>
                                <Link href="/advertise" className="hover:text-emerald-400 transition-colors text-sm">
                                    أضف إعلانك
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us" className="hover:text-emerald-400 transition-colors text-sm">
                                    تواصل معنا
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations" className="hover:text-emerald-400 transition-colors text-sm">
                                    المدن
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-emerald-400 transition-colors text-sm">
                                    جميع الخدمات
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-emerald-400 transition-colors text-sm">
                                    المدونة
                                </Link>
                            </li>
                            <li>
                                <Link href="/research/pricing-index" className="hover:text-emerald-400 transition-colors text-sm">
                                    📊 مؤشر الأسعار
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Legal & Contact */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                            تواصل معنا
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm">
                                <Phone className="w-4 h-4 text-emerald-500" />
                                <span dir="ltr">{NAP.phoneDisplay}</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <Mail className="w-4 h-4 text-emerald-500" />
                                <span>{NAP.email}</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <MapPin className="w-4 h-4 text-emerald-500" />
                                <span>{NAP.address.country}</span>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="flex gap-3 mt-6">
                            <a
                                href={NAP.social.facebook}
                                className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="Facebook"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href={NAP.social.twitter}
                                className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="Twitter"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href={NAP.social.instagram}
                                className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="Instagram"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Legal Links */}
                        <div className="mt-6 space-y-2">
                            <Link href="/privacy-policy" className="block text-xs text-gray-500 hover:text-gray-400 transition-colors">
                                سياسة الخصوصية
                            </Link>
                            <Link href="/terms-of-service" className="block text-xs text-gray-500 hover:text-gray-400 transition-colors">
                                الشروط والأحكام
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} بروكر. جميع الحقوق محفوظة.
                        </p>
                        <p className="text-xs text-gray-600">
                            دليل الخدمات السعودي الشامل
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
