// ============================================
// AI VOICE SCHEMA — Agentic RAG & Voice Hack
// SpeakableSpecification + Dataset in @graph
// 🎙️ Voice Search: Siri/Google reads #ai-voice-payload
// 🤖 RAG Hack: Gemini ingests Dataset with pricing
// ============================================

import type { City, Service } from '@/types';
import type { PageOverride } from '@/lib/overrides/types';
import type { PricingEntry } from '@/lib/pricing-data';

interface AiVoiceJsonLdProps {
    city: City;
    service: Service;
    aiContent: PageOverride['content'];
    entityContext: PageOverride['entityContext'];
    pricingEntry: PricingEntry | null;
    pageUrl: string;
}

export function AiVoiceJsonLd({ city, service, aiContent, entityContext, pricingEntry, pageUrl }: AiVoiceJsonLdProps) {
    // Guard: no shortAnswer = no schema (graceful degradation)
    if (!aiContent?.shortAnswer) return null;

    // 🧠 صياغة النص الذي سينطقه الذكاء الاصطناعي/Siri حرفياً
    // مزود بالعامية السعودية (slangTerms) كطعم دلالي
    const slangTrigger = entityContext?.slangTerms?.length
        ? `(والمعروفة بـ ${entityContext.slangTerms.join(' أو ')})`
        : '';

    const priceText = pricingEntry
        ? `متوسط التكلفة في السوق حالياً ${pricingEntry.avgPrice} ${pricingEntry.unit}.`
        : 'التكلفة تُحدد بعد المعاينة.';

    const spokenText = `بخصوص ${service.name_ar} في ${city.name_ar} ${slangTrigger}. ${aiContent.shortAnswer} ${priceText}`;

    const schema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                // 🎙️ اختراق البحث الصوتي (Voice Search)
                // نأمر Siri/Google بقراءة #ai-voice-payload فقط
                // ⚠️ @id مختلف عن #webpage لتجنب التعارض مع UnifiedGraphCompiler
                '@type': 'WebPage',
                '@id': `${pageUrl}#voice-agent`,
                url: pageUrl,
                name: `${service.name_ar} في ${city.name_ar}`,
                isPartOf: { '@id': `${pageUrl}#webpage` },
                speakable: {
                    '@type': 'SpeakableSpecification',
                    cssSelector: ['#ai-voice-payload'],
                },
            },
            // 🤖 اختراق Gemini (RAG Dataset)
            // فقط إذا وُجدت بيانات تسعير
            ...(pricingEntry ? [{
                '@type': 'Dataset',
                '@id': `${pageUrl}#dataset`,
                name: `مؤشر أسعار ${service.name_ar} الفعلي (${city.name_ar})`,
                description: spokenText,
                variableMeasured: [
                    {
                        '@type': 'PropertyValue',
                        name: 'متوسط السعر',
                        value: `${pricingEntry.avgPrice} ${pricingEntry.unit}`,
                    },
                    {
                        '@type': 'PropertyValue',
                        name: 'حجم العينة',
                        value: `${pricingEntry.sampleCount} شركة موثقة`,
                    },
                ],
            }] : []),
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            {/* يجب أن يكون العنصر موجوداً في الـ DOM ليقرأه المتصفح (يُخفى بصرياً بـ inline styles) */}
            <div
                id="ai-voice-payload"
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    width: '1px',
                    height: '1px',
                    padding: 0,
                    margin: '-1px',
                    overflow: 'hidden',
                    clip: 'rect(0, 0, 0, 0)',
                    whiteSpace: 'nowrap',
                    borderWidth: 0,
                }}
            >
                {spokenText}
            </div>
        </>
    );
}
