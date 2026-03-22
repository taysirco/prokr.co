/**
 * SourceOrderLayout — CSS Visual vs Source Order Hack (Section 15.6)
 * 
 * Separates visual order from source order using CSS flex-direction: column-reverse.
 * - Googlebot reads source top-to-bottom → finds SEO content FIRST
 * - User sees the page normally → company listings appear FIRST visually
 * 
 * Usage:
 *   SourceOrderLayout
 *     seoContent={SEO text, FAQ, schema markup}
 *   
 *     Company cards, service grids (visual-first)
 *   /SourceOrderLayout
 */

import React from 'react';

interface SourceOrderLayoutProps {
    /** SEO-priority content: text paragraphs, FAQ, articles — appears FIRST in HTML source (Google reads this first) */
    seoContent: React.ReactNode;
    /** Visual-priority content: company cards, service grids — appears FIRST visually (user sees this first) */
    children: React.ReactNode;
}

export default function SourceOrderLayout({ seoContent, children }: SourceOrderLayoutProps) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column-reverse',
            }}
        >
            {/* 
              Source order (what Googlebot reads):
              1. seoContent (SEO text, FAQ) — READ FIRST by crawlers
              2. children (company cards, listings) — read second
              
              Visual order (what user sees, reversed by column-reverse):
              1. children (company cards, listings) — SEEN FIRST by users  
              2. seoContent (SEO text, FAQ) — seen second
            */}
            <div data-source-order="seo-content">
                {seoContent}
            </div>
            <div data-source-order="visual-listings">
                {children}
            </div>
        </div>
    );
}
