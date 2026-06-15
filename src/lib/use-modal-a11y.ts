'use client';

import { useEffect, useRef } from 'react';

const FOCUSABLE = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
].join(',');

/**
 * Accessibility helper for modal dialogs (WCAG 2.1.2 / 4.1.2):
 * - moves focus into the dialog on open
 * - traps Tab/Shift+Tab within the dialog
 * - closes on Escape
 * - restores focus to the previously-focused element on close
 *
 * Attach the returned ref to the dialog panel. `onClose` is read through a ref
 * so the effect only re-runs when `isOpen` changes (not on every render).
 */
export function useModalA11y<T extends HTMLElement = HTMLDivElement>(
    isOpen: boolean,
    onClose: () => void,
) {
    const ref = useRef<T>(null);
    const onCloseRef = useRef(onClose);
    onCloseRef.current = onClose;

    useEffect(() => {
        if (!isOpen) return;
        const panel = ref.current;
        const prevActive = (typeof document !== 'undefined'
            ? document.activeElement
            : null) as HTMLElement | null;

        const focusables = () =>
            panel
                ? Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
                      el => el.offsetParent !== null,
                  )
                : [];

        // Move focus into the dialog (first focusable, or the panel itself).
        const f = focusables();
        (f[0] ?? panel)?.focus?.();

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                onCloseRef.current();
                return;
            }
            if (e.key === 'Tab' && panel) {
                const items = focusables();
                if (items.length === 0) return;
                const first = items[0];
                const last = items[items.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            prevActive?.focus?.();
        };
    }, [isOpen]);

    return ref;
}
