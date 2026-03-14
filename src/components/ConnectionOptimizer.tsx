'use client';

import { useEffect } from 'react';

/**
 * Network-Aware DOM Sensor
 *
 * Detects slow connections (2G/3G/saveData) and activates
 * `prokr-lite-mode` on <html> element.
 *
 * CSS rules are injected directly via <style> tag to bypass
 * Tailwind v4 tree-shaking (which strips classes not in templates).
 *
 * Also listens for connection changes (e.g., WiFi → 3G)
 * and toggles lite mode dynamically.
 */

const LITE_MODE_CSS = `
/* ═══ Network-Aware Lite Mode ═══ */

/* 1. Kill ALL animations and transitions */
.prokr-lite-mode *,
.prokr-lite-mode *::before,
.prokr-lite-mode *::after {
  animation-duration: 0.001s !important;
  animation-delay: 0s !important;
  transition-duration: 0.001s !important;
  transition-delay: 0s !important;
}

/* 2. Defer non-essential images */
.prokr-lite-mode img:not([data-essential]) {
  content-visibility: auto;
  contain-intrinsic-size: auto 200px;
}

/* 3. Hide heavy interactive elements */
.prokr-lite-mode iframe,
.prokr-lite-mode video,
.prokr-lite-mode .map-container,
.prokr-lite-mode [data-heavy] {
  display: none !important;
}

/* 4. Simplify shadows */
.prokr-lite-mode [class*="shadow-lg"],
.prokr-lite-mode [class*="shadow-xl"],
.prokr-lite-mode [class*="shadow-2xl"] {
  box-shadow: 0 1px 2px rgba(0,0,0,0.05) !important;
}

/* 5. Reduce border-radius for faster paint */
.prokr-lite-mode [class*="rounded-2xl"],
.prokr-lite-mode [class*="rounded-3xl"] {
  border-radius: 0.375rem !important;
}

/* 6. Hide non-essential sections */
.prokr-lite-mode .success-stories,
.prokr-lite-mode .related-services-carousel,
.prokr-lite-mode .decorative-badge {
  display: none !important;
}

/* 7. Kill backdrop-blur and gradients */
.prokr-lite-mode [class*="backdrop-blur"] {
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

/* 8. Lite mode indicator bar */
.prokr-lite-mode::after {
  content: '⚡ وضع خفيف — شبكة بطيئة';
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #059669;
  color: white;
  text-align: center;
  padding: 4px 0;
  font-size: 12px;
  z-index: 9999;
  direction: rtl;
}
`;

export default function ConnectionOptimizer() {
    useEffect(() => {
        // ═══ 1. Inject CSS (bypass Tailwind tree-shaking) ═══
        const styleId = 'prokr-lite-mode-css';
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = LITE_MODE_CSS;
            document.head.appendChild(style);
        }

        // ═══ 2. Evaluate network ═══
        const nav = navigator as any;

        function evaluateNetwork() {
            const conn = nav.connection || nav.mozConnection || nav.webkitConnection;
            if (!conn) return;

            const isSlowNetwork =
                conn.saveData === true ||
                conn.effectiveType === 'slow-2g' ||
                conn.effectiveType === '2g' ||
                conn.effectiveType === '3g';

            if (isSlowNetwork) {
                document.documentElement.classList.add('prokr-lite-mode');
            } else {
                document.documentElement.classList.remove('prokr-lite-mode');
            }
        }

        // Initial evaluation
        evaluateNetwork();

        // Listen for connection changes (WiFi ↔ cellular)
        const conn = nav.connection || nav.mozConnection || nav.webkitConnection;
        if (conn) {
            conn.addEventListener('change', evaluateNetwork);
        }

        return () => {
            if (conn) {
                conn.removeEventListener('change', evaluateNetwork);
            }
        };
    }, []);

    // This component renders nothing — pure side-effect
    return null;
}
