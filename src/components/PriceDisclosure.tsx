'use client';
import { useState } from 'react';

// Price Quick View — عنصر التفاعل السريع
//
// ⚠️ The real price MUST be in the server-rendered DOM.
// This component used to swap children on click: before the click it rendered
// the literal string "0000 ر.س", so the actual average never appeared in the
// SSR payload at all. Crawlers and LLMs — which do not click, and mostly do not
// run JS — saw a placeholder where the page's single most quotable number
// should be, on every city × service page.
//
// The reveal interaction is preserved, but it now toggles a CSS class only: the
// value is always present in the markup and always machine-readable.
export function PriceDisclosure({ avgPrice, unit }: { avgPrice: number; unit: string }) {
    const [revealed, setRevealed] = useState(false);

    return (
        <div
            className="bg-sky-50 border border-sky-200 p-4 rounded-xl flex items-center justify-between cursor-pointer hover:bg-sky-100 transition-colors group"
            onClick={() => setRevealed(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setRevealed(true); }}
            aria-label="اضغط لكشف متوسط السعر"
        >
            <div className="flex items-center gap-3">
                <span className={`text-2xl ${revealed ? '' : 'animate-bounce'}`}>
                    {revealed ? '✅' : '👇'}
                </span>
                <div>
                    {/* Styled as a heading but rendered as <p>: the page outline
                        went H1 → H4 → H3 → H2, and a level-4 heading here was the
                        cause. Heading levels are a document structure signal. */}
                    <p className="font-bold text-sky-900 text-sm">مؤشر الأسعار المباشر</p>
                    <p className="text-xs text-sky-700">
                        {revealed ? 'متوسط التكلفة الفعلية بناءً على عروض أسعار حقيقية' : 'اضغط لكشف متوسط التكلفة الفعلي اليوم'}
                    </p>
                </div>
            </div>

            <div className="bg-white px-4 py-2 rounded-lg font-mono font-black text-lg border border-sky-100 shadow-inner min-w-[120px] text-center">
                <span
                    className={
                        revealed
                            ? 'text-sky-700 transition-all duration-300'
                            : 'text-slate-400 blur-[4px] transition-all duration-300'
                    }
                >
                    {avgPrice.toLocaleString('ar-SA')} {unit}
                </span>
            </div>
        </div>
    );
}
