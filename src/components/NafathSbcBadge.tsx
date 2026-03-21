// ============================================
// 🛡️ NafathSbcBadge — شارة "تم التحقق - نفاذ / SBC"
// SVG text badge — Vision AI reads rendered text in pixels
// Server Component — no 'use client' needed
// ============================================

interface NafathSbcBadgeProps {
    size?: 'sm' | 'md' | 'lg';
    opacity?: number;
    className?: string;
}

const SIZE_CONFIG = {
    sm: { w: 140, h: 28, fontSize: 9, enSize: 7, iconSize: 12, pad: 6, radius: 6, gap: 3 },
    md: { w: 200, h: 38, fontSize: 12, enSize: 9, iconSize: 16, pad: 8, radius: 8, gap: 4 },
    lg: { w: 280, h: 50, fontSize: 16, enSize: 12, iconSize: 22, pad: 12, radius: 10, gap: 6 },
} as const;

export function NafathSbcBadge({ size = 'md', opacity = 0.92, className }: NafathSbcBadgeProps) {
    const c = SIZE_CONFIG[size];

    return (
        <svg
            width={c.w}
            height={c.h}
            viewBox={`0 0 ${c.w} ${c.h}`}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="تم التحقق — نفاذ / SBC"
            className={className}
            style={{ opacity }}
        >
            {/* Background pill */}
            <rect
                x="0" y="0"
                width={c.w} height={c.h}
                rx={c.radius} ry={c.radius}
                fill="url(#nafathGrad)"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1"
            />

            {/* Gradient definition */}
            <defs>
                <linearGradient id="nafathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#059669" />
                    <stop offset="100%" stopColor="#047857" />
                </linearGradient>
            </defs>

            {/* Shield icon (simple path) */}
            <g transform={`translate(${c.pad}, ${(c.h - c.iconSize) / 2})`}>
                <path
                    d={`M${c.iconSize / 2} 0 L${c.iconSize} ${c.iconSize * 0.25} L${c.iconSize} ${c.iconSize * 0.6} C${c.iconSize} ${c.iconSize * 0.85} ${c.iconSize / 2} ${c.iconSize} ${c.iconSize / 2} ${c.iconSize} C${c.iconSize / 2} ${c.iconSize} 0 ${c.iconSize * 0.85} 0 ${c.iconSize * 0.6} L0 ${c.iconSize * 0.25} Z`}
                    fill="rgba(255,255,255,0.9)"
                />
                {/* Checkmark inside shield */}
                <path
                    d={`M${c.iconSize * 0.25} ${c.iconSize * 0.5} L${c.iconSize * 0.42} ${c.iconSize * 0.68} L${c.iconSize * 0.75} ${c.iconSize * 0.32}`}
                    fill="none"
                    stroke="#059669"
                    strokeWidth={c.iconSize * 0.12}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>

            {/* Arabic text: تم التحقق — نفاذ */}
            <text
                x={c.pad + c.iconSize + c.gap}
                y={c.h * 0.48}
                fill="white"
                fontSize={c.fontSize}
                fontWeight="700"
                fontFamily="Cairo, Tahoma, Arial, sans-serif"
                dominantBaseline="middle"
                direction="rtl"
                textAnchor="start"
            >
                تم التحقق — نفاذ
            </text>

            {/* English text: Verified · SBC */}
            <text
                x={c.pad + c.iconSize + c.gap}
                y={c.h * 0.82}
                fill="rgba(209,250,229,0.9)"
                fontSize={c.enSize}
                fontWeight="700"
                fontFamily="Inter, system-ui, sans-serif"
                dominantBaseline="middle"
                letterSpacing="0.5"
            >
                Verified · SBC
            </text>
        </svg>
    );
}
