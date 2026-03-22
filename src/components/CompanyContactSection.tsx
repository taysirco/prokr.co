'use client';

import { Phone, MessageCircle } from 'lucide-react';
import ActionButton from './ActionButton';
import PhoneRevealButton from './PhoneRevealButton';
import CopyButton from './CopyButton';

interface CompanyContactSectionProps {
    phoneNumber: string;
    phoneLink: string;
    whatsappLink: string;
    cityName?: string;
    serviceName?: string;
    advertiserName?: string;
    /** National address (العنوان الوطني) */
    streetAddress?: string;
    /** Commercial Registration Number (السجل التجاري) */
    crn?: string;
}

/**
 * CompanyContactSection — Sidebar Contact Card (Client Component)
 *
 * Layout:
 * ┌──────────────────────────────────────┐
 * │  تواصل معنا                          │
 * │                                      │
 * │  📞 05555••• [👁️ اضغط لكشف الرقم]    │  ← PhoneRevealButton
 * │  → After reveal:                     │
 * │  📞 05555555 [📋] [اتصل الآن]        │  ← Number + Copy + Call
 * │                                      │
 * │  [   💬 تواصل عبر واتساب   ]         │  ← WhatsApp CTA
 * │                                      │
 * │  📍 العنوان... [📋]                   │
 * │  📝 سجل تجاري: XXX [📋]             │
 * └──────────────────────────────────────┘
 *
 * Tracked events:
 * - phone_reveal → GA4 (phone interaction)
 * - terminal_conversion → GA4 (phone call)
 * - copy_action → GA4 (copy event)
 * - task_completion → GA4 (WhatsApp click)
 * - Night mode → Red emergency styling on call button
 */
export default function CompanyContactSection({
    phoneNumber,
    phoneLink,
    whatsappLink,
    cityName = '',
    serviceName = '',
    advertiserName,
    streetAddress,
    crn,
}: CompanyContactSectionProps) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4">تواصل معنا</h3>

            <div className="space-y-3">
                {/* ═══════════════════════════════════════════
                 *  UNIFIED PHONE ROW
                 *  Combines: Phone Reveal + Call Button + Copy
                 *  All in one professional element
                 * ═══════════════════════════════════════════ */}
                <PhoneRevealButton
                    phoneNumber={phoneNumber}
                    phoneLink={phoneLink}
                    sectionId="sidebar-contact"
                    showCallLink
                    cityName={cityName}
                    serviceName={serviceName}
                />

                {/* ═══════════════════════════════════════════
                 *  WHATSAPP BUTTON — WhatsApp Redirect
                 * ═══════════════════════════════════════════ */}
                <ActionButton
                    href={whatsappLink}
                    type="whatsapp"
                    label="تواصل عبر واتساب"
                    cityName={cityName}
                    serviceName={serviceName}
                    external
                    advertiserName={advertiserName}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-gradient-to-l from-green-500 to-green-600 text-white font-medium rounded-xl hover:from-green-600 hover:to-green-700 shadow-lg shadow-green-500/30 transition-all"
                >
                    <MessageCircle className="w-5 h-5" />
                </ActionButton>
            </div>

            {/* ═══════════════════════════════════════════
             *  ADDRESS + CRN — With Copy Buttons
             * ═══════════════════════════════════════════ */}
            {(streetAddress || crn) && (
                <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                    {/* National Address with Copy */}
                    {streetAddress && (
                        <div className="flex items-start gap-3 text-gray-600">
                            <span className="text-base flex-shrink-0 mt-0.5">📍</span>
                            <div className="flex-1">
                                <p className="text-sm text-gray-700 leading-relaxed">{streetAddress}</p>
                                <div className="mt-1.5">
                                    <CopyButton
                                        value={streetAddress}
                                        type="address"
                                        sectionId="sidebar-contact"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* CRN with Copy */}
                    {crn && (
                        <div className="flex items-center gap-3 text-gray-600">
                            <span className="text-base flex-shrink-0">📝</span>
                            <div className="flex-1 flex items-center gap-2">
                                <span className="text-sm text-gray-700">سجل تجاري: {crn}</span>
                                <CopyButton
                                    value={crn}
                                    type="crn"
                                    sectionId="sidebar-contact"
                                    compact
                                />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
