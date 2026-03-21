// ============================================
// 🖼️ VisionAiWatermark — CSS Overlay for "نفاذ / SBC" badge
// Cleanly positions the badge over any image.
// Server Component — no 'use client' needed
// ============================================

import { NafathSbcBadge } from './NafathSbcBadge';

type BadgePosition = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
type BadgeSize = 'xs' | 'sm' | 'md' | 'lg';

interface VisionAiWatermarkProps {
    position?: BadgePosition;
    size?: BadgeSize;
    children?: React.ReactNode;
    className?: string;
}

const POSITION_STYLES: Record<BadgePosition, React.CSSProperties> = {
    'top-left':     { top: '6px', left: '6px' },
    'top-right':    { top: '6px', right: '6px' },
    'bottom-left':  { bottom: '6px', left: '6px' },
    'bottom-right': { bottom: '6px', right: '6px' },
};

export function VisionAiWatermark({
    position = 'top-right',
    size = 'sm',
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
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.25))',
                lineHeight: 0,
            }}
            aria-hidden="true"
        >
            <NafathSbcBadge size={size} />
        </div>
    );

    if (!children) return badge;

    return (
        <div className={className} style={{ position: 'relative', overflow: 'hidden' }}>
            {children}
            {badge}
        </div>
    );
}
