'use client';

import ActionButton from '@/components/ActionButton';
import { Phone, MessageCircle } from 'lucide-react';

export default function TestButtonsPage() {
    return (
        <div className="p-8 bg-white min-h-screen">
            <h1 className="text-2xl font-bold mb-8">CTA Button Test</h1>
            
            <div className="space-y-4 max-w-md">
                <div className="p-4 border rounded-lg">
                    <p className="text-sm text-gray-500 mb-2">Phone Button (should be blue #0284c7):</p>
                    <ActionButton
                        href="tel:920029221"
                        type="phone"
                        label="اتصل الآن"
                        cityName="riyadh"
                        serviceName="furniture-moving"
                        className="flex items-center justify-center gap-2 px-4 py-3 text-white font-medium rounded-xl shadow-lg"
                    >
                        <Phone className="w-5 h-5" />
                    </ActionButton>
                </div>

                <div className="p-4 border rounded-lg">
                    <p className="text-sm text-gray-500 mb-2">WhatsApp Button (should be green #16a34a):</p>
                    <ActionButton
                        href="https://wa.me/0539185890"
                        type="whatsapp"
                        label="واتساب"
                        cityName="riyadh"
                        serviceName="furniture-moving"
                        external={true}
                        className="flex items-center justify-center gap-2 px-4 py-3 text-white font-medium rounded-xl shadow-lg"
                    >
                        <MessageCircle className="w-5 h-5" />
                    </ActionButton>
                </div>

                <div className="p-4 border rounded-lg">
                    <p className="text-sm text-gray-500 mb-2">Raw anchor (no component):</p>
                    <a
                        href="tel:123456"
                        className="flex items-center justify-center gap-2 px-4 py-3 text-white font-medium rounded-xl shadow-lg"
                        style={{ backgroundColor: '#0284c7', color: '#ffffff' }}
                        data-cta-type="phone"
                    >
                        <Phone className="w-5 h-5" />
                        Direct Link
                    </a>
                </div>
            </div>
        </div>
    );
}
