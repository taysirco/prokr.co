import React from 'react';

/**
 * CitableSummary — AI-Optimized Paragraph
 *
 * Produces a single, perfectly-formatted paragraph that AI Overviews
 * can directly cite. Uses the exact structure Google SGE prefers:
 *
 *   "[Term] في [Location] هو [definition]. [Key stat]. [Source + date]."
 *
 * The `.citable-summary` CSS class is referenced by SpeakableSpecification
 * so voice assistants and AI know to read THIS paragraph.
 *
 * IMPORTANT: This component is for pages that do NOT have DirectAnswer.
 * DirectAnswer pages ([city]/[service]) should NOT use this component.
 */
interface CitableSummaryProps {
    serviceName: string;       // e.g. "نقل عفش"
    locationName: string;      // e.g. "السعودية" or "حي الملقا، الرياض"
    definition: string;        // 1-2 sentence definition
    statText: string;          // e.g. "يتوفر 24 شركة معتمدة في 24 مدينة"
    priceHint?: string;        // e.g. "بدءاً من 800 ريال"
}

export function CitableSummary({
    serviceName,
    locationName,
    definition,
    statText,
    priceHint,
}: CitableSummaryProps) {
    const today = new Date().toISOString().split('T')[0];

    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <p
                className="citable-summary text-gray-700 leading-relaxed text-base bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
                itemProp="abstract"
            >
                <strong>{serviceName} في {locationName}</strong> — {definition}.{' '}
                {statText}.{' '}
                {priceHint && <>{priceHint}. </>}
                <span className="text-gray-500 text-sm">
                    المصدر: دليل بروكر المعتمد — آخر تحديث: {today}.
                </span>
            </p>
        </section>
    );
}
