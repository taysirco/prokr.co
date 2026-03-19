'use client';

import dynamic from 'next/dynamic';

const ClaimBusinessCTA = dynamic(() => import('@/components/ClaimBusinessCTA'), {
    ssr: false,
    loading: () => (
        <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 border-2 border-amber-300 rounded-2xl p-5 sm:p-6 animate-pulse">
            <div className="h-5 bg-amber-100 rounded w-2/3 mb-3 mr-auto" />
            <div className="h-3 bg-amber-50 rounded w-1/2 mb-4 mr-auto" />
            <div className="h-10 bg-amber-100 rounded-xl w-full" />
        </div>
    ),
});

interface Props {
    companyCode: string;
    businessName: string;
    variant?: 'full' | 'compact';
}

export default function ClaimBusinessCTAWrapper({ companyCode, businessName, variant = 'full' }: Props) {
    return <ClaimBusinessCTA companyCode={companyCode} businessName={businessName} variant={variant} />;
}
