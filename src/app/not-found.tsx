'use client';

import { useEffect } from 'react';

// ════════════════════════════════════════════════════════════════
// 404 → Homepage Redirect (Layer 2 - Dynamic Routes)
// Since Next.js App Router does not support server-side redirect()
// directly from within a not-found boundary, we use a robust
// client-side redirect combined with a meta refresh tag.
// ════════════════════════════════════════════════════════════════
export default function NotFound() {
    useEffect(() => {
        // Immediate client-side redirect
        window.location.replace('/');
    }, []);

    // Meta refresh as a fallback for browsers with JS disabled 
    // and for web crawlers. Renders inside Root Layout.
    return (
        <meta httpEquiv="refresh" content="0;url=/" />
    );
}
