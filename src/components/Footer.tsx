import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { CITIES, SERVICES, getCityBySlug, getServiceBySlug } from '@/lib/seed';
import type { City, Service } from '@/types';

interface FooterProps {
    currentCity?: string;
    currentService?: string;
}

export default function Footer({ currentCity, currentService }: FooterProps) {
    // Get current city and service objects
    const city = currentCity ? getCityBySlug(currentCity) : null;
    const service = currentService ? getServiceBySlug(currentService) : null;

    // Get other services in the same city (exclude current)
    const otherServicesInCity = currentCity
        ? SERVICES.filter(s => s.slug !== currentService).slice(0, 8)
        : SERVICES.slice(0, 8);

    // Get other cities for the same service (exclude current)
    const otherCitiesForService = currentService
        ? CITIES.filter(c => c.slug !== currentCity).slice(0, 8)
        : CITIES.slice(0, 8);

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Column 1: Dynamic - Other Services in Current City */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                            {city ? `خدمات أخرى في ${city.name_ar}` : 'خدماتنا'}
                        </h3>
                        <ul className="space-y-2">
                            {otherServicesInCity.map(s => (
                                <li key={s.slug}>
                                    <Link
                                        href={`/${currentCity || 'riyadh'}/${s.slug}`}
                                        className="hover:text-emerald-400 transition-colors text-sm"
                                    >
                                        {s.name_ar}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Dynamic - Current Service in Other Cities */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                            {service ? `${service.name_ar} في مدن أخرى` : 'المدن'}
                        </h3>
                        <ul className="space-y-2">
                            {otherCitiesForService.map(c => (
                                <li key={c.slug}>
                                    <Link
                                        href={`/${c.slug}/${currentService || 'furniture-moving'}`}
                                        className="hover:text-emerald-400 transition-colors text-sm"
                                    >
                                        {c.name_ar}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
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
                                <span dir="ltr">+966 50 000 0000</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <Mail className="w-4 h-4 text-emerald-500" />
                                <span>info@prokr.co</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <MapPin className="w-4 h-4 text-emerald-500" />
                                <span>المملكة العربية السعودية</span>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="flex gap-3 mt-6">
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="Instagram"
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
