import type { City, Service } from '@/types';
import { resolvePageContent } from '@/lib/overrides';

interface FaqJsonLdProps {
    city: City;
    service: Service;
}

export function FaqJsonLd({ city, service }: FaqJsonLdProps) {
    const content = resolvePageContent(city, service);

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": content.faqItems.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
