'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, Star, BadgeCheck, MapPin } from 'lucide-react';
import type { Advertiser } from '@/types';
import ActionButton from './ActionButton';
import { VisionAiWatermark } from './VisionAiWatermark';

interface AdvertiserCardProps {
    advertiser: Advertiser;
    variant?: 'premium' | 'standard';
}

export default function AdvertiserCard({ advertiser, variant = 'standard' }: AdvertiserCardProps) {
    const isPremium = variant === 'premium' || advertiser.is_premium;

    // Calculate average rating
    const avgRating = advertiser.reviews.length > 0
        ? advertiser.reviews.reduce((sum, r) => sum + r.rating, 0) / advertiser.reviews.length
        : 0;

    // WhatsApp link
    const whatsappLink = `https://wa.me/${advertiser.whatsapp_number.replace(/\D/g, '')}`;

    // Phone link
    const phoneLink = `tel:${advertiser.phone_number}`;

    if (isPremium) {
        return (
            <div className="group relative bg-white rounded-2xl border-2 border-amber-400 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Gold Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-l from-amber-400 via-yellow-300 to-amber-400"></div>

                {/* Premium Badge */}
                <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1 px-3 py-1 text-amber-900 text-xs font-bold rounded-full shadow-lg" style={{ background: 'linear-gradient(to left, #fbbf24, #eab308)' }}>
                        <BadgeCheck className="w-3.5 h-3.5" />
                        معتمد
                    </span>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-6">
                    {/* Logo & Info */}
                    <div className="flex items-start gap-4">
                        <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-xl">
                            {advertiser.logo_url ? (
                                <Image
                                    src={advertiser.logo_url}
                                    alt={`${advertiser.business_name} - تم التحقق عبر نفاذ SBC`}
                                    fill
                                    className="object-cover rounded-xl border-2 border-amber-200"
                                />
                            ) : (
                                <div className="w-full h-full rounded-xl flex items-center justify-center border-2 border-amber-200" style={{ background: 'linear-gradient(to bottom right, #e0f2fe, #bae6fd)' }}>
                                    <span className="text-2xl font-bold text-sky-600">
                                        {advertiser.business_name.charAt(0)}
                                    </span>
                                </div>
                            )}
                            {/* 🛡️ Vision AI OCR — Nafath/SBC Watermark */}
                            <VisionAiWatermark position="top-right" size="xs" />
                        </div>

                        <div className="flex-1 min-w-0">
                            <Link
                                href={`/company/${advertiser.short_code}`}
                                className="block"
                            >
                                <h3 className="font-bold text-base sm:text-lg text-gray-900 group-hover:text-sky-600 transition-colors line-clamp-2 leading-snug">
                                    {advertiser.business_name}
                                </h3>
                            </Link>

                            {/* Rating */}
                            {avgRating > 0 && (
                                <div className="flex items-center gap-1 mt-1">
                                    <div className="flex">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <Star
                                                key={star}
                                                className={`w-4 h-4 ${star <= avgRating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-500">
                                        ({advertiser.reviews.length})
                                    </span>
                                </div>
                            )}

                            {/* Cities Tags */}
                            <div className="flex flex-wrap gap-1 mt-2">
                                {advertiser.targeted_cities.slice(0, 3).map(citySlug => (
                                    <span
                                        key={citySlug}
                                        className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                                    >
                                        <MapPin className="w-3 h-3" />
                                        {citySlug}
                                    </span>
                                ))}
                                {advertiser.targeted_cities.length > 3 && (
                                    <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full">
                                        +{advertiser.targeted_cities.length - 3}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Description Preview */}
                    <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                        {advertiser.description || 'شركة متخصصة في تقديم أفضل الخدمات بأعلى جودة وأفضل الأسعار.'}
                    </p>

                    {/* 🛡️ Government Credential Badges */}
                    {(advertiser.has_verified_employees || advertiser.zatca_registered || advertiser.qiwa_registered || advertiser.nitaqat_band) && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                            {advertiser.has_verified_employees && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-sky-50 text-sky-700 text-[10px] font-bold rounded-full border border-sky-200" title="فريق بتحقق هوية وطنية عبر منصة نفاذ">
                                    🪪 نفاذ
                                </span>
                            )}
                            {advertiser.zatca_registered && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-full border border-blue-200" title="ملتزمة بنظام الفوترة الإلكترونية ZATCA المرحلة الثانية">
                                    🧾 ZATCA
                                </span>
                            )}
                            {advertiser.qiwa_registered && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-purple-50 text-purple-700 text-[10px] font-bold rounded-full border border-purple-200" title="عقود موثقة في منصة قوى وأجير">
                                    📋 قوى
                                </span>
                            )}
                            {advertiser.nitaqat_band && (
                                <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold rounded-full border ${
                                    advertiser.nitaqat_band === 'platinum'
                                        ? 'bg-slate-50 text-slate-700 border-slate-300'
                                        : 'bg-green-50 text-green-700 border-green-200'
                                }`} title={`تصنيف نطاقات: ${advertiser.nitaqat_band}`}>
                                    🏅 نطاقات {advertiser.nitaqat_band === 'platinum' ? 'بلاتيني' : advertiser.nitaqat_band === 'green' ? 'أخضر' : 'أخضر منخفض'}
                                </span>
                            )}
                        </div>
                    )}

                    {/* CTA Buttons */}
                    <div className="flex gap-2 sm:gap-3 mt-4">
                        <ActionButton
                            href={phoneLink}
                            type="phone"
                            label="اتصل الآن"
                            cityName={advertiser.targeted_cities[0] || ''}
                            serviceName={advertiser.business_name}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 bg-sky-600 text-white font-medium rounded-xl hover:bg-sky-700 shadow-lg transition-all"
                        >
                            <Phone className="w-5 h-5" />
                        </ActionButton>
                        <ActionButton
                            href={whatsappLink}
                            type="whatsapp"
                            label=""
                            cityName={advertiser.targeted_cities[0] || ''}
                            serviceName={advertiser.business_name}
                            external={true}
                            ariaLabel="واتساب"
                            advertiserName={advertiser.business_name}
                            className="flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 shadow-lg transition-all"
                        >
                            <MessageCircle className="w-5 h-5" />
                        </ActionButton>
                    </div>
                </div>
            </div>
        );
    }

    // Standard variant - Simple row
    return (
        <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-sky-300 hover:shadow-md transition-all">
            {/* Logo */}
            <div className="relative w-12 h-12 flex-shrink-0">
                {advertiser.logo_url ? (
                    <Image
                        src={advertiser.logo_url}
                        alt={advertiser.business_name}
                        fill
                        className="object-cover rounded-lg"
                    />
                ) : (
                    <div className="w-full h-full rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)' }}>
                        <span className="text-lg font-bold text-gray-500">
                            {advertiser.business_name.charAt(0)}
                        </span>
                    </div>
                )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
                <Link
                    href={`/company/${advertiser.short_code}`}
                    className="font-medium text-gray-900 hover:text-sky-600 transition-colors block leading-snug line-clamp-2 text-sm"
                >
                    {advertiser.business_name}
                </Link>
                <div className="flex items-center gap-2 mt-0.5">
                    <p className="text-sm text-gray-500 truncate">
                        {advertiser.targeted_cities.slice(0, 2).join(' • ')}
                    </p>
                    {/* Compact credential indicator */}
                    {advertiser.has_verified_employees && (
                        <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-sky-50 text-sky-600 text-[9px] font-bold rounded border border-sky-200" title="فريق بتحقق نفاذ">
                            🛡️
                        </span>
                    )}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-2">
                <ActionButton
                    href={phoneLink}
                    type="phone"
                    label=""
                    cityName={advertiser.targeted_cities[0] || ''}
                    serviceName={advertiser.business_name}
                    ariaLabel="اتصل"
                    className="p-2.5 bg-sky-50 text-sky-600 rounded-lg hover:bg-sky-100"
                >
                    <Phone className="w-5 h-5" />
                </ActionButton>
                <ActionButton
                    href={whatsappLink}
                    type="whatsapp"
                    label=""
                    cityName={advertiser.targeted_cities[0] || ''}
                    serviceName={advertiser.business_name}
                    external={true}
                    ariaLabel="واتساب"
                    advertiserName={advertiser.business_name}
                    className="p-2.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100"
                >
                    <MessageCircle className="w-5 h-5" />
                </ActionButton>
            </div>
        </div>
    );
}
