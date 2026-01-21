'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MapPin, Search, Phone, Sparkles, Truck, Bug, Droplet, Wrench, Building2, Shield, Home, Info, Mail, FileText } from 'lucide-react';
import { SERVICES, getServicesByCategory, CATEGORY_NAMES, CITIES, getCitiesByRegion } from '@/lib/seed';
import SearchModal from './SearchModal';

// Category icons
const categoryIcons: Record<string, React.ReactNode> = {
    moving: <Truck className="w-5 h-5" />,
    cleaning: <Sparkles className="w-5 h-5" />,
    'pest-control': <Bug className="w-5 h-5" />,
    'leak-detection': <Droplet className="w-5 h-5" />,
    insulation: <Shield className="w-5 h-5" />,
};

// Region names
const regionNames: Record<string, string> = {
    central: 'المنطقة الوسطى',
    western: 'المنطقة الغربية',
    eastern: 'المنطقة الشرقية',
    northern: 'المنطقة الشمالية',
    southern: 'المنطقة الجنوبية',
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
            <div className="hidden lg:block bg-emerald-900 text-white text-sm py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-emerald-400" />
                            <span>الخط الساخن: 920000000</span>
                        </span>
                        <span className="text-emerald-400">|</span>
                        <span>المنصة الأولى للخدمات في المملكة</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/about-us" className="hover:text-emerald-300 transition-colors">من نحن</Link>
                        <Link href="/contact-us" className="hover:text-emerald-300 transition-colors">اتصل بنا</Link>
                        <Link href="/advertise" className="hover:text-emerald-300 transition-colors">للشركات</Link>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white shadow-lg'
                : 'bg-white/95 backdrop-blur-md border-b border-gray-100'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all group-hover:scale-105">
                                    <span className="text-white font-black text-2xl">P</span>
                                </div>
                                {/* Pulse effect */}
                                <div className="absolute inset-0 bg-emerald-500 rounded-2xl animate-ping opacity-20"></div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black bg-gradient-to-l from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                                    بروكر
                                </span>
                                <span className="text-[10px] text-gray-400 font-medium -mt-1">دليل الخدمات السعودي</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {/* Home */}
                            <Link
                                href="/"
                                className="flex items-center gap-2 px-4 py-2.5 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl font-medium transition-all"
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
                                        ? 'text-emerald-600 bg-emerald-50'
                                        : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
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
                                                            <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                                                                {categoryIcons[category] || <Wrench className="w-4 h-4" />}
                                                            </div>
                                                            <h4 className="font-bold text-gray-900">
                                                                {CATEGORY_NAMES[category] || category}
                                                            </h4>
                                                        </div>
                                                        <div className="space-y-1">
                                                            {services.slice(0, 6).map(service => (
                                                                <Link
                                                                    key={service.slug}
                                                                    href={`/services/${service.slug}`}
                                                                    className="block px-3 py-2 text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all text-sm"
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
                                        <div className="bg-gradient-to-l from-emerald-50 to-white px-6 py-4 border-t border-gray-100">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-bold text-gray-900">أكثر من 50 خدمة</p>
                                                    <p className="text-sm text-gray-500">تصفح جميع الخدمات المتاحة</p>
                                                </div>
                                                <Link
                                                    href="/services"
                                                    className="px-5 py-2.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/30"
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
                                        ? 'text-emerald-600 bg-emerald-50'
                                        : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
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
                                                            <MapPin className="w-4 h-4 text-emerald-500" />
                                                            {regionNames[region]}
                                                        </h4>
                                                        <div className="space-y-1">
                                                            {cities.slice(0, 5).map(city => (
                                                                <Link
                                                                    key={city.slug}
                                                                    href={`/${city.slug}`}
                                                                    className="block px-3 py-2 text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all text-sm"
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

                            {/* About */}
                            <Link
                                href="/about-us"
                                className="flex items-center gap-2 px-4 py-2.5 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl font-medium transition-all"
                            >
                                <Info className="w-4 h-4" />
                                <span>من نحن</span>
                            </Link>

                            {/* Contact */}
                            <Link
                                href="/contact-us"
                                className="flex items-center gap-2 px-4 py-2.5 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl font-medium transition-all"
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
                                className="p-3 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
                                aria-label="بحث"
                            >
                                <Search className="w-5 h-5" />
                            </button>

                            {/* Divider */}
                            <div className="h-8 w-px bg-gray-200"></div>

                            {/* CTA Button */}
                            <Link
                                href="/advertise"
                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-l from-amber-500 to-amber-600 text-white font-bold rounded-2xl hover:from-amber-600 hover:to-amber-700 shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all hover:scale-105"
                            >
                                <Building2 className="w-5 h-5" />
                                <span>سجّل شركتك</span>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex lg:hidden items-center gap-3">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2.5 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
                                aria-label="بحث"
                            >
                                <Search className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2.5 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="bg-white border-t border-gray-100 px-4 py-6 space-y-4">
                        {/* Quick Links */}
                        <div className="grid grid-cols-2 gap-3">
                            <Link
                                href="/"
                                className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-emerald-50 rounded-2xl transition-all"
                            >
                                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                                    <Home className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-gray-900">الرئيسية</span>
                            </Link>
                            <Link
                                href="/services"
                                className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-emerald-50 rounded-2xl transition-all"
                            >
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                    <Wrench className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-gray-900">الخدمات</span>
                            </Link>
                            <Link
                                href="/locations"
                                className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-emerald-50 rounded-2xl transition-all"
                            >
                                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-gray-900">المدن</span>
                            </Link>
                            <Link
                                href="/about-us"
                                className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-emerald-50 rounded-2xl transition-all"
                            >
                                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                                    <Info className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-gray-900">من نحن</span>
                            </Link>
                        </div>

                        {/* Featured Services */}
                        <div className="pt-4 border-t border-gray-100">
                            <h4 className="text-sm font-bold text-gray-400 mb-3 px-1">الخدمات الشائعة</h4>
                            <div className="grid grid-cols-2 gap-2">
                                {SERVICES.slice(0, 6).map(service => (
                                    <Link
                                        key={service.slug}
                                        href={`/services/${service.slug}`}
                                        className="px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl transition-all"
                                    >
                                        {service.name_ar}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4 border-t border-gray-100 space-y-3">
                            <Link
                                href="/advertise"
                                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-l from-amber-500 to-amber-600 text-white font-bold rounded-2xl shadow-lg"
                            >
                                <Building2 className="w-5 h-5" />
                                <span>سجّل شركتك مجاناً</span>
                            </Link>
                            <Link
                                href="/contact-us"
                                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gray-100 text-gray-700 font-medium rounded-2xl"
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
