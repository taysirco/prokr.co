'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MapPin, Search, Phone, Sparkles, Truck, Bug, Droplet, Wrench, Building2, Shield, Home, Info, Mail, BookOpen } from 'lucide-react';
import { SERVICES, getServicesByCategory, CATEGORY_NAMES, getCitiesByRegion, REGION_NAMES } from '@/lib/seed';
import { isAbsorbedSlug } from '@/lib/services/super-page-groups';
import SearchModal from './SearchModal';

// Category icons
const categoryIcons: Record<string, React.ReactNode> = {
    moving: <Truck className="w-5 h-5" />,
    cleaning: <Sparkles className="w-5 h-5" />,
    'pest-control': <Bug className="w-5 h-5" />,
    'leak-detection': <Droplet className="w-5 h-5" />,
    insulation: <Shield className="w-5 h-5" />,
};



export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isCitiesOpen, setIsCitiesOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const servicesByCategory = getServicesByCategory();
    const citiesByRegion = getCitiesByRegion();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Top Bar - Contact Info */}
            <div className="hidden lg:block bg-slate-950 text-white text-sm py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-sky-400" />
                            <span>الخط الساخن: +966 54 231 7431</span>
                        </span>
                        <span className="text-sky-400">|</span>
                        <span>المنصة الأولى للخدمات في المملكة</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/about-us" className="hover:text-sky-300 transition-colors">من نحن</Link>
                        <Link href="/contact-us" className="hover:text-sky-300 transition-colors">اتصل بنا</Link>
                        <Link href="/advertise" className="hover:text-sky-300 transition-colors">للشركات</Link>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-xl' : 'backdrop-blur-md border-b border-white/5'}`}
                style={{ background: isScrolled ? 'linear-gradient(to left, #030712, #0f172a)' : 'linear-gradient(to left, rgba(3,7,18,0.95), rgba(15,23,42,0.95))' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center group">
                            <Image
                                src="/logo.png"
                                alt="PROKR - بروكر"
                                width={140}
                                height={44}
                                className="h-12 w-auto group-hover:scale-105 transition-transform drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]"
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {/* Home */}
                            <Link
                                href="/"
                                className="flex items-center gap-2 px-4 py-2.5 text-gray-200 hover:text-white hover:bg-white/10 rounded-xl font-medium transition-all"
                            >
                                <Home className="w-4 h-4" />
                                <span>الرئيسية</span>
                            </Link>

                            {/* Mega Menu - Services */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                            >
                                <button
                                    className={`flex items-center gap-2 px-4 py-2.5 font-medium transition-all rounded-xl ${isServicesOpen
                                        ? 'text-cyan-400 bg-white/10'
                                        : 'text-gray-200 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    <Wrench className="w-4 h-4" />
                                    <span>الخدمات</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Mega Menu Dropdown */}
                                <div
                                    className={`absolute right-0 pt-2 w-[700px] transition-all duration-200 origin-top ${isServicesOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                                        }`}
                                >
                                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                                        <div className="p-6">
                                            <div className="grid grid-cols-3 gap-6">
                                                {Object.entries(servicesByCategory).slice(0, 3).map(([category, services]) => (
                                                    <div key={category}>
                                                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100">
                                                            <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600">
                                                                {categoryIcons[category] || <Wrench className="w-4 h-4" />}
                                                            </div>
                                                            <h4 className="font-bold text-gray-900">
                                                                {CATEGORY_NAMES[category] || category}
                                                            </h4>
                                                        </div>
                                                        <div className="space-y-1">
                                                            {services.filter(s => !isAbsorbedSlug(s.slug)).slice(0, 6).map(service => (
                                                                <Link
                                                                    key={service.slug}
                                                                    href={`/${service.slug}`}
                                                                    className="block px-3 py-2 text-gray-600 hover:bg-sky-50 hover:text-sky-700 rounded-lg transition-all text-sm"
                                                                >
                                                                    {service.name_ar}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        {/* Footer of dropdown */}
                                        <div className="bg-gradient-to-l from-sky-50 to-white px-6 py-4 border-t border-gray-100">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-bold text-gray-900">{SERVICES.filter(s => !isAbsorbedSlug(s.slug)).length} خدمة متخصصة</p>
                                                    <p className="text-sm text-gray-500">تصفح جميع الخدمات المتاحة</p>
                                                </div>
                                                <Link
                                                    href="/services"
                                                    className="px-5 py-2.5 bg-sky-600 text-white font-medium rounded-xl hover:bg-sky-700 transition-colors shadow-lg shadow-sky-500/30"
                                                >
                                                    عرض الكل ←
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mega Menu - Cities */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsCitiesOpen(true)}
                                onMouseLeave={() => setIsCitiesOpen(false)}
                            >
                                <button
                                    className={`flex items-center gap-2 px-4 py-2.5 font-medium transition-all rounded-xl ${isCitiesOpen
                                        ? 'text-cyan-400 bg-white/10'
                                        : 'text-gray-200 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    <MapPin className="w-4 h-4" />
                                    <span>المدن</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCitiesOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Cities Mega Menu */}
                                <div
                                    className={`absolute right-0 pt-2 w-[600px] transition-all duration-200 origin-top ${isCitiesOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                                        }`}
                                >
                                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                                        <div className="p-6">
                                            <div className="grid grid-cols-3 gap-4">
                                                {Object.entries(citiesByRegion).slice(0, 3).map(([region, cities]) => (
                                                    <div key={region}>
                                                        <h4 className="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2">
                                                            <MapPin className="w-4 h-4 text-sky-500" />
                                                            {REGION_NAMES[region]}
                                                        </h4>
                                                        <div className="space-y-1">
                                                            {cities.slice(0, 5).map(city => (
                                                                <Link
                                                                    key={city.slug}
                                                                    href={`/${city.slug}`}
                                                                    className="block px-3 py-2 text-gray-600 hover:bg-sky-50 hover:text-sky-700 rounded-lg transition-all text-sm"
                                                                >
                                                                    {city.name_ar}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-l from-purple-50 to-white px-6 py-4 border-t border-gray-100">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-bold text-gray-900">24 مدينة سعودية</p>
                                                    <p className="text-sm text-gray-500">تغطية شاملة للمملكة</p>
                                                </div>
                                                <Link
                                                    href="/locations"
                                                    className="px-5 py-2.5 bg-purple-600 text-white font-medium rounded-xl hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/30"
                                                >
                                                    جميع المدن ←
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Blog */}
                            <Link
                                href="/blog"
                                className="flex items-center gap-2 px-4 py-2.5 text-gray-200 hover:text-white hover:bg-white/10 rounded-xl font-medium transition-all"
                            >
                                <BookOpen className="w-4 h-4" />
                                <span>المدونة</span>
                            </Link>

                            {/* About */}
                            <Link
                                href="/about-us"
                                className="flex items-center gap-2 px-4 py-2.5 text-gray-200 hover:text-white hover:bg-white/10 rounded-xl font-medium transition-all"
                            >
                                <Info className="w-4 h-4" />
                                <span>من نحن</span>
                            </Link>

                            {/* Contact */}
                            <Link
                                href="/contact-us"
                                className="flex items-center gap-2 px-4 py-2.5 text-gray-200 hover:text-white hover:bg-white/10 rounded-xl font-medium transition-all"
                            >
                                <Mail className="w-4 h-4" />
                                <span>اتصل بنا</span>
                            </Link>
                        </div>

                        {/* Right Side Actions */}
                        <div className="hidden lg:flex items-center gap-3">
                            {/* Search Button */}
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                                aria-label="بحث"
                            >
                                <Search className="w-5 h-5" />
                            </button>

                            {/* Divider */}
                            <div className="h-8 w-px bg-white/20"></div>

                            {/* CTA Button */}
                            <Link
                                href="/advertise"
                                className="flex items-center gap-2 px-6 py-3 text-white font-bold rounded-2xl hover:opacity-90 shadow-xl transition-all hover:scale-105"
                                style={{ background: 'linear-gradient(to left, #f59e0b, #d97706)' }}
                            >
                                <Building2 className="w-5 h-5" />
                                <span>سجّل شركتك</span>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex lg:hidden items-center gap-3">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                                aria-label="بحث"
                            >
                                <Search className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="border-t border-white/5 px-4 py-6 space-y-4" style={{ background: 'linear-gradient(to bottom, #030712, #0f172a)' }}>
                        {/* Quick Links */}
                        <div className="grid grid-cols-2 gap-3">
                            <Link
                                href="/"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all"
                            >
                                <div className="w-10 h-10 bg-sky-500/20 rounded-xl flex items-center justify-center text-sky-400">
                                    <Home className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-gray-200">الرئيسية</span>
                            </Link>
                            <Link
                                href="/services"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all"
                            >
                                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                                    <Wrench className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-gray-200">الخدمات</span>
                            </Link>
                            <Link
                                href="/locations"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all"
                            >
                                <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-gray-200">المدن</span>
                            </Link>
                            <Link
                                href="/blog"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all"
                            >
                                <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-gray-200">المدونة</span>
                            </Link>
                        </div>

                        {/* Featured Services */}
                        <div className="pt-4 border-t border-white/10">
                            <h4 className="text-sm font-bold text-gray-400 mb-3 px-1">الخدمات الشائعة</h4>
                            <div className="grid grid-cols-2 gap-2">
                                {SERVICES.filter(s => !isAbsorbedSlug(s.slug)).slice(0, 6).map(service => (
                                    <Link
                                        key={service.slug}
                                        href={`/${service.slug}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded-xl transition-all"
                                    >
                                        {service.name_ar}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4 border-t border-white/10 space-y-3">
                            <Link
                                href="/advertise"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center justify-center gap-2 w-full px-6 py-4 text-white font-bold rounded-2xl shadow-lg"
                                style={{ background: 'linear-gradient(to left, #f59e0b, #d97706)' }}
                            >
                                <Building2 className="w-5 h-5" />
                                <span>سجّل شركتك مجاناً</span>
                            </Link>
                            <Link
                                href="/contact-us"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-white/10 text-gray-200 font-medium rounded-2xl hover:bg-white/15"
                            >
                                <Phone className="w-5 h-5" />
                                <span>تواصل معنا</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Search Modal */}
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
