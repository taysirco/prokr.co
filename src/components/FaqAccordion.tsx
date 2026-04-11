'use client';

import { useState, useCallback, memo, useRef, useEffect } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

/**
 * FaqAccordion — Colloquial Saudi FAQ (§7.4)
 *
 * STRATEGY:
 * 1. People Also Ask (PAA) is Google's crown jewel for Featured Snippets
 * 2. Each question that matches a PAA query = direct snippet opportunity
 * 3. The accordion pattern increases dwell time (Google signal)
 * 4. Progressive disclosure keeps above-fold clean for CLS
 *
 * GA4 Events:
 * - faq_item_open: Tracks which questions users care about
 * - faq_section_visible: Scroll depth signal
 */

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqAccordionProps {
    items: FaqItem[];
    cityName: string;
    serviceName: string;
}

const FaqItemComponent = memo(function FaqItemComponent({
    item,
    index,
    isOpen,
    onToggle,
}: {
    item: FaqItem;
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? contentRef.current.scrollHeight : 0);
        }
    }, [isOpen]);

    return (
        <div
            className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                isOpen
                    ? 'border-sky-200 bg-sky-50/50 shadow-sm'
                    : 'border-gray-200 bg-white hover:border-sky-100'
            }`}
        >
            <button
                onClick={onToggle}
                className="w-full flex items-start gap-3 text-right p-4 sm:p-5 cursor-pointer group"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
            >
                <span
                    className={`flex-shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                            ? 'bg-sky-600 text-white rotate-180'
                            : 'bg-gray-100 text-gray-500 group-hover:bg-sky-100 group-hover:text-sky-600'
                    }`}
                >
                    <ChevronDown className="w-4 h-4" />
                </span>
                <span
                    className={`flex-1 text-sm sm:text-base font-bold leading-relaxed transition-colors ${
                        isOpen ? 'text-sky-900' : 'text-gray-800 group-hover:text-sky-700'
                    }`}
                >
                    {item.question}
                </span>
            </button>
            <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                style={{ maxHeight: height }}
                className="overflow-hidden transition-all duration-300 ease-in-out"
            >
                <div ref={contentRef} className="px-4 sm:px-5 pb-4 sm:pb-5 pr-14">
                    <p className="text-sm text-gray-600 leading-relaxed">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    );
});

export default function FaqAccordion({ items, cityName, serviceName }: FaqAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open
    const sectionRef = useRef<HTMLElement>(null);
    const hasTracked = useRef(false);

    // Track visibility for GA4
    useEffect(() => {
        if (!sectionRef.current || hasTracked.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTracked.current) {
                    hasTracked.current = true;
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                        (window as any).gtag('event', 'faq_section_visible', {
                            event_category: 'engagement',
                            city: cityName,
                            service: serviceName,
                            items_count: items.length,
                        });
                    }
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [cityName, serviceName, items.length]);

    const handleToggle = useCallback((index: number) => {
        setOpenIndex(prev => prev === index ? null : index);

        // GA4 track FAQ interaction
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'faq_item_open', {
                event_category: 'engagement',
                question_index: index,
                question_text: items[index]?.question?.slice(0, 100),
                city: cityName,
                service: serviceName,
            });
        }
    }, [items, cityName, serviceName]);

    if (!items || items.length === 0) return null;

    // Show top 5 for UX, rest are in schema only
    const visibleItems = items.slice(0, 6);

    return (
        <section
            ref={sectionRef}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
            aria-label={`أسئلة شائعة عن ${serviceName} في ${cityName}`}
        >
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                        أسئلة شائعة عن {serviceName} في {cityName}
                    </h2>
                    <p className="text-sm text-gray-500 mt-0.5">
                        إجابات موثوقة من خبراء بروكر
                    </p>
                </div>
            </div>

            {/* Accordion Items */}
            <div className="space-y-3">
                {visibleItems.map((item, index) => (
                    <FaqItemComponent
                        key={index}
                        item={item}
                        index={index}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>

            {/* Trust Footer */}
            <p className="text-xs text-gray-400 mt-4 text-center">
                الإجابات مبنية على تحليل بيانات الخدمات المقدمة عبر بروكر في {cityName}
            </p>
        </section>
    );
}
