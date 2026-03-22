'use client';

import { Phone, MessageCircle } from 'lucide-react';
import ActionButton from './ActionButton';

interface CompanyStickyBarProps {
    phoneLink: string;
    whatsappLink: string;
    cityName?: string;
    serviceName?: string;
    advertiserName?: string;
}

/**
 * CompanyStickyBar — Mobile Sticky CTA (Client Component)
 *
 * Replaces the raw <a> tags in the company page sticky bar
 * with ActionButton components that support WhatsApp WhatsApp Redirect.
 */
export default function CompanyStickyBar({
    phoneLink,
    whatsappLink,
    cityName = '',
    serviceName = '',
    advertiserName,
}: CompanyStickyBarProps) {
    return (
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm md:hidden">
            <div className="flex gap-3 p-3">
                <ActionButton
                    href={phoneLink}
                    type="phone"
                    label="اتصل الآن"
                    cityName={cityName}
                    serviceName={serviceName}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-l from-sky-500 to-sky-600 text-white font-medium rounded-xl"
                >
                    <Phone className="w-5 h-5" />
                </ActionButton>
                <ActionButton
                    href={whatsappLink}
                    type="whatsapp"
                    label="واتساب"
                    cityName={cityName}
                    serviceName={serviceName}
                    external
                    advertiserName={advertiserName}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-l from-green-500 to-green-600 text-white font-medium rounded-xl"
                >
                    <MessageCircle className="w-5 h-5" />
                </ActionButton>
            </div>
        </div>
    );
}
