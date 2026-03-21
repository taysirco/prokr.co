// ============================================
// 🛡️ NafathSbcBadge — شارة "تم التحقق - نفاذ / SBC"
// Two modes:
//   - xs/sm: Icon-only shield ✓ (readable at tiny sizes)
//   - md/lg: Full HTML pill with Arabic + English text
// Server Component — no 'use client' needed
// ============================================

interface NafathSbcBadgeProps {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    className?: string;
}

// ─── Shield icon only (xs/sm) ───
const ICON_SIZE: Record<string, number> = {
    xs: 18,
    sm: 22,
};

function ShieldIcon({ size, className }: { size: 'xs' | 'sm'; className?: string }) {
    const s = ICON_SIZE[size];
    return (
        <svg
            width={s}
            height={s}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="تم التحقق — نفاذ / SBC"
            className={className}
            style={{ display: 'block' }}
        >
            {/* Green circle background */}
            <circle cx="12" cy="12" r="12" fill="#059669" />
            {/* White shield */}
            <path
                d="M12 4 L18 6.5 V11.5 C18 15 12 18 12 18 C12 18 6 15 6 11.5 V6.5 L12 4Z"
                fill="rgba(255,255,255,0.95)"
            />
            {/* Green checkmark inside shield */}
            <path
                d="M9 11.5 L11 13.5 L15.5 9"
                fill="none"
                stroke="#059669"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

// ─── Full text pill (md/lg) — Pure HTML/CSS ───
function TextPill({ size, className }: { size: 'md' | 'lg'; className?: string }) {
    const maxWidth = size === 'lg' ? '160px' : '130px';
    const shieldSize = size === 'lg' ? 16 : 14;

    return (
        <div
            role="img"
            aria-label="تم التحقق — نفاذ / SBC"
            className={className}
            dir="rtl"
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: size === 'lg' ? '6px' : '5px',
                maxWidth,
                background: 'linear-gradient(135deg, #059669, #047857)',
                borderRadius: '6px',
                padding: size === 'lg' ? '5px 10px' : '4px 8px',
                border: '0.5px solid rgba(255,255,255,0.15)',
                opacity: 0.92,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
            }}
        >
            {/* Shield icon */}
            <svg
                width={shieldSize}
                height={shieldSize}
                viewBox="0 0 14 16"
                xmlns="http://www.w3.org/2000/svg"
                style={{ flexShrink: 0, display: 'block' }}
            >
                <path
                    d="M7 0 L14 3 V8.5 C14 12 7 16 7 16 C7 16 0 12 0 8.5 V3 L7 0Z"
                    fill="rgba(255,255,255,0.92)"
                />
                <path
                    d="M3.5 8 L5.8 10.5 L10.5 5.5"
                    fill="none"
                    stroke="#059669"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            {/* Text block */}
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15, minWidth: 0 }}>
                <span
                    style={{
                        color: '#fff',
                        fontSize: size === 'lg' ? '11px' : '9.5px',
                        fontWeight: 700,
                        fontFamily: 'Cairo, Tahoma, Arial, sans-serif',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    تم التحقق — نفاذ
                </span>
                <span
                    style={{
                        color: 'rgba(209,250,229,0.85)',
                        fontSize: size === 'lg' ? '7.5px' : '6.5px',
                        fontWeight: 700,
                        fontFamily: 'Inter, system-ui, sans-serif',
                        letterSpacing: '0.3px',
                        direction: 'ltr',
                        textAlign: 'left',
                    }}
                >
                    Verified · SBC
                </span>
            </div>
        </div>
    );
}

export function NafathSbcBadge({ size = 'sm', className }: NafathSbcBadgeProps) {
    if (size === 'xs' || size === 'sm') {
        return <ShieldIcon size={size} className={className} />;
    }
    return <TextPill size={size as 'md' | 'lg'} className={className} />;
}
