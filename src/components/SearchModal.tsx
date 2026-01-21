'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, MapPin, Briefcase, Loader2 } from 'lucide-react';
import { CITIES, SERVICES } from '@/lib/seed';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<{
        cities: typeof CITIES;
        services: typeof SERVICES;
    }>({ cities: [], services: [] });
    const inputRef = useRef<HTMLInputElement>(null);

    // Focus input when modal opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    // Search logic
    useEffect(() => {
        if (!query.trim()) {
            setResults({ cities: [], services: [] });
            return;
        }

        const q = query.toLowerCase();

        const matchedCities = CITIES.filter(
            city => city.name_ar.includes(query) || city.name_en.toLowerCase().includes(q) || city.slug.includes(q)
        ).slice(0, 5);

        const matchedServices = SERVICES.filter(
            service => service.name_ar.includes(query) || service.name_en.toLowerCase().includes(q) || service.slug.includes(q)
        ).slice(0, 8);

        setResults({ cities: matchedCities, services: matchedServices });
    }, [query]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
                {/* Search Input */}
                <div className="flex items-center gap-4 p-4 border-b border-gray-100">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="ابحث عن خدمة أو مدينة..."
                        className="flex-1 text-lg outline-none placeholder-gray-400"
                        dir="rtl"
                    />
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* Results */}
                <div className="max-h-[60vh] overflow-y-auto">
                    {!query.trim() ? (
                        <div className="p-8 text-center text-gray-500">
                            <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
                            <p>اكتب للبحث عن خدمة أو مدينة</p>
                        </div>
                    ) : results.cities.length === 0 && results.services.length === 0 ? (
                        <div className="p-8 text-center text-gray-500">
                            <p>لا توجد نتائج لـ "{query}"</p>
                        </div>
                    ) : (
                        <div className="py-4">
                            {/* Cities */}
                            {results.cities.length > 0 && (
                                <div className="mb-4">
                                    <h3 className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                        المدن
                                    </h3>
                                    {results.cities.map(city => (
                                        <Link
                                            key={city.slug}
                                            href={`/${city.slug}`}
                                            onClick={onClose}
                                            className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition-colors"
                                        >
                                            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{city.name_ar}</p>
                                                <p className="text-sm text-gray-500">{city.name_en}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {/* Services */}
                            {results.services.length > 0 && (
                                <div>
                                    <h3 className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                        الخدمات
                                    </h3>
                                    {results.services.map(service => (
                                        <Link
                                            key={service.slug}
                                            href={`/riyadh/${service.slug}`}
                                            onClick={onClose}
                                            className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition-colors"
                                        >
                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                                <Briefcase className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{service.name_ar}</p>
                                                <p className="text-sm text-gray-500">{service.name_en}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Keyboard Hint */}
                <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 text-sm text-gray-500 flex items-center justify-between">
                    <span>اضغط ESC للإغلاق</span>
                    <span className="flex items-center gap-1">
                        <kbd className="px-2 py-1 bg-white rounded border border-gray-200 text-xs">↵</kbd>
                        للاختيار
                    </span>
                </div>
            </div>
        </div>
    );
}
