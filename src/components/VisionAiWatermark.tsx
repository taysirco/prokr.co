// ============================================
// 🖼️ VisionAiWatermark — CSS Overlay for "نفاذ / SBC" badge
// Can be used standalone (inside existing relative container)
// or as a wrapper around an image.
// Server Component — no 'use client' needed
// ============================================

import { NafathSbcBadge } from './NafathSbcBadge';

type BadgePosition = 'bottom-left' | 'bottom-right' | 'top-right';
type BadgeSize = 'sm' | 'md' | 'lg';

interface VisionAiWatermarkProps {
    position?: BadgePosition;
    size?: BadgeSize;
    /** When provided, wraps children in a relative container. When omitted, renders badge standalone (parent must be position:relative). */
    children?: React.ReactNode;
    className?: string;
}

const POSITION_STYLES: Record<BadgePosition, React.CSSProperties> = {
    'bottom-left': { bottom: '8px', left: '8px' },
    'bottom-right': { bottom: '8px', right: '8px' },
    'top-right': { top: '8px', right: '8px' },
};

export function VisionAiWatermark({
    position = 'bottom-left',
    size = 'md',
    children,
    className,
}: VisionAiWatermarkProps) {
    const badge = (
        <div
            style={{
                position: 'absolute',
                ...POSITION_STYLES[position],
                zIndex: 10,
                pointerEvents: 'none',
                filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.3))',
            }}
            aria-hidden="true"
        >
            <NafathSbcBadge size={size} />
        </div>
    );

    // Standalone mode: just render the badge (parent must have position: relative)
    if (!children) return badge;

    // Wrapper mode: wrap children in a relative container
    return (
        <div className={className} style={{ position: 'relative' }}>
            {children}
            {badge}
        </div>
    );
}
