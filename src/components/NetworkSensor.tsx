'use client';

import { useEffect } from 'react';

/**
 * Network-Aware DOM Sensor
 *
 * Detects slow connections (2G/3G/saveData) and activates
 * `prokr-lite-mode` on <html> element.
 *
 * CSS rules in globals.css then:
 *  - Replace hero images with solid color backgrounds
 *  - Hide decorative images and maps
 *  - Disable CSS animations and transitions
 *  - Reduce image quality via img[loading="lazy"] deferral
 *  - Simplify shadows and gradients
 *
 * Also listens for connection changes (e.g., WiFi → 3G)
 * and toggles lite mode dynamically.
 */
export default function NetworkSensor() {
    useEffect(() => {
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
