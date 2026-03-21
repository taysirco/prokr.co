import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, Star, BadgeCheck, MapPin } from 'lucide-react';
import type { Advertiser } from '@/types';
import ActionButton from './ActionButton';

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
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-l from-amber-400 to-yellow-500 text-amber-900 text-xs font-bold rounded-full shadow-lg">
                        <BadgeCheck className="w-3.5 h-3.5" />
                        معتمد
                    </span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                    {/* Logo & Info */}
                    <div className="flex items-start gap-4">
                        <div className="relative w-20 h-20 flex-shrink-0">
                            {advertiser.logo_url ? (
                                <Image
                                    src={advertiser.logo_url}
                                    alt={advertiser.business_name}
                                    fill
                                    className="object-cover rounded-xl border-2 border-amber-200"
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center border-2 border-amber-200">
                                    <span className="text-2xl font-bold text-emerald-600">
                                        {advertiser.business_name.charAt(0)}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="flex-1 min-w-0">
                            <Link
                                href={`/company/${advertiser.short_code}`}
                                className="block"
                            >
                                <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-600 transition-colors truncate">
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
                    <p className="mt-4 text-sm text-gray-600 line-clamp-2">
                        {advertiser.description || 'شركة متخصصة في تقديم أفضل الخدمات بأعلى جودة وأفضل الأسعار.'}
                    </p>

                    {/* 🛡️ Government Credential Badges */}
                    {(advertiser.has_verified_employees || advertiser.zatca_registered || advertiser.qiwa_registered || advertiser.nitaqat_band) && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                            {advertiser.has_verified_employees && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full border border-emerald-200" title="فريق بتحقق هوية وطنية عبر منصة نفاذ">
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
                    <div className="flex gap-3 mt-5">
                        <ActionButton
                            href={phoneLink}
                            type="phone"
                            label="اتصل الآن"
                            cityName={advertiser.targeted_cities[0] || ''}
                            serviceName={advertiser.business_name}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-l from-emerald-500 to-emerald-600 text-white font-medium rounded-xl hover:from-emerald-600 hover:to-emerald-700 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
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
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-l from-green-500 to-green-600 text-white font-medium rounded-xl hover:from-green-600 hover:to-green-700 shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
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
        <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all">
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
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
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
                    className="font-medium text-gray-900 hover:text-emerald-600 transition-colors truncate block"
                >
                    {advertiser.business_name}
                </Link>
                <div className="flex items-center gap-2 mt-0.5">
                    <p className="text-sm text-gray-500 truncate">
                        {advertiser.targeted_cities.slice(0, 2).join(' • ')}
                    </p>
                    {/* Compact credential indicator */}
                    {advertiser.has_verified_employees && (
                        <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-emerald-50 text-emerald-600 text-[9px] font-bold rounded border border-emerald-200" title="فريق بتحقق نفاذ">
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
                    className="p-2.5 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100"
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
