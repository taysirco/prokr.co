'use client';

import Image from 'next/image';
import { useState } from 'react';

interface CompanyLogoProps {
    logoUrl: string;
    businessName: string;
    serviceName?: string;
}

/**
 * Client component wrapper for company logo with graceful fallback.
 * If the logo URL fails to load (broken/inaccessible), shows the 
 * first letter of business name as a styled placeholder instead.
 */
export default function CompanyLogo({ logoUrl, businessName, serviceName }: CompanyLogoProps) {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return (
            <span className="text-3xl sm:text-4xl font-bold text-sky-600">
                {businessName.charAt(0)}
            </span>
        );
    }

    return (
        <Image
            src={logoUrl}
            alt={`شعار ${businessName} - شركة ${serviceName || 'خدمات'} معتمدة`}
            fill
            className="object-contain rounded-xl p-1"
            sizes="128px"
            onError={() => setHasError(true)}
        />
    );
}
