'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown, MapPin, Search } from 'lucide-react';
import { SERVICES, getServicesByCategory, CATEGORY_NAMES, CITIES } from '@/lib/seed';
import SearchModal from './SearchModal';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isCitiesOpen, setIsCitiesOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const servicesByCategory = getServicesByCategory();

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo - Right side for RTL */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-shadow">
                            <span className="text-white font-bold text-xl">P</span>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-l from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                            بروكر
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {/* All Services Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                                onBlur={() => setTimeout(() => setIsServicesOpen(false), 200)}
                                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                            >
                                <span>جميع الخدمات</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isServicesOpen && (
                                <div className="absolute left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
                                    {Object.entries(servicesByCategory).map(([category, services]) => (
                                        <div key={category} className="px-4 py-2">
                                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                                {CATEGORY_NAMES[category] || category}
                                            </h4>
                                            <div className="space-y-1">
                                                {services.map(service => (
                                                    <Link
                                                        key={service.slug}
                                                        href={`/riyadh/${service.slug}`}
                                                        className="block px-3 py-2 text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                                                    >
                                                        {service.name_ar}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Cities Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsCitiesOpen(!isCitiesOpen)}
                                onBlur={() => setTimeout(() => setIsCitiesOpen(false), 200)}
                                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                            >
                                <MapPin className="w-4 h-4" />
                                <span>المدن</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${isCitiesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isCitiesOpen && (
                                <div className="absolute left-0 mt-2 w-64 max-h-80 overflow-y-auto bg-white rounded-2xl shadow-xl border border-gray-100 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="grid grid-cols-2 gap-1 px-3">
                                        {CITIES.slice(0, 12).map(city => (
                                            <Link
                                                key={city.slug}
                                                href={`/${city.slug}`}
                                                className="px-3 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                                            >
                                                {city.name_ar}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="border-t border-gray-100 mt-2 pt-2 px-4">
                                        <Link href="/locations" className="text-sm text-emerald-600 hover:underline">
                                            عرض جميع المدن ←
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Search Button */}
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="p-2 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                            aria-label="بحث"
                        >
                            <Search className="w-5 h-5" />
                        </button>

                        {/* CTA Button */}
                        <Link
                            href="/advertise"
                            className="px-5 py-2.5 bg-gradient-to-l from-emerald-500 to-emerald-600 text-white font-medium rounded-xl hover:from-emerald-600 hover:to-emerald-700 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all"
                        >
                            أضف إعلانك
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
                        <div className="space-y-2">
                            <Link
                                href="/"
                                className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl transition-colors"
                            >
                                الرئيسية
                            </Link>

                            <div className="px-4 py-2">
                                <h4 className="text-sm font-semibold text-gray-400 mb-2">الخدمات</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {SERVICES.slice(0, 8).map(service => (
                                        <Link
                                            key={service.slug}
                                            href={`/riyadh/${service.slug}`}
                                            className="px-3 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                                        >
                                            {service.name_ar}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link
                                href="/advertise"
                                className="block mx-4 px-4 py-3 bg-gradient-to-l from-emerald-500 to-emerald-600 text-white text-center font-medium rounded-xl"
                            >
                                أضف إعلانك
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            {/* Search Modal */}
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </nav>
    );
}
