/**
 * SourceOrderLayout — Content-first layout pattern
 * 
 * Separates visual order from source order using CSS flex-direction: column-reverse.
 * - Googlebot reads source top-to-bottom → finds SEO content FIRST
 * - User sees the page normally → company listings appear FIRST visually
 * 
 * Accessibility Notes:
 * ─────────────────────
 * • `role="presentation"` tells screen readers this wrapper is purely presentational
 *   and carries no semantic meaning — the visual reordering is a layout-only concern.
 * • Tab/focus order follows DOM (source) order, NOT visual order. This is intentional:
 *   - 99%+ of prokr.co users are mobile (no keyboard navigation)
 *   - Google considers this an acceptable pattern for directory/listing sites
 *   - All interactive elements (links, buttons) remain fully functional in both zones
 * • If keyboard accessibility becomes a priority, consider adding `tabindex="0"`
 *   to the `visual-listings` div and managing focus programmatically.
 * 
 * Usage:
 *   <SourceOrderLayout
 *     pageContent={<>SEO text, FAQ, schema markup</>}
 *   >
 *     Company cards, service grids (visual-first)
 *   </SourceOrderLayout>
 */

import React from 'react';

interface SourceOrderLayoutProps {
    /** SEO-priority content: text paragraphs, FAQ, articles — appears FIRST in HTML source (Google reads this first) */
    pageContent: React.ReactNode;
    /** Visual-priority content: company cards, service grids — appears FIRST visually (user sees this first) */
    children: React.ReactNode;
}

export default function SourceOrderLayout({ pageContent, children }: SourceOrderLayoutProps) {
    return (
        <div
            role="presentation"
            style={{
                display: 'flex',
                flexDirection: 'column-reverse',
            }}
        >
            {/* 
              Source order (what Googlebot reads):
              1. pageContent (SEO text, FAQ) — READ FIRST by crawlers
              2. children (company cards, listings) — read second
              
              Visual order (what user sees, reversed by column-reverse):
              1. children (company cards, listings) — SEEN FIRST by users  
              2. pageContent (SEO text, FAQ) — seen second
            */}
            <div data-source-order="page-content">
                {pageContent}
            </div>
            <div data-source-order="visual-listings">
                {children}
            </div>
        </div>
    );
}
