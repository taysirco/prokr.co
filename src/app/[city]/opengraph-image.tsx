import { ImageResponse } from 'next/og';
import { getCityBySlug, SERVICES } from '@/lib/seed';
import { getCityContext } from '@/lib/city-context';

export const runtime = 'edge';
export const alt = 'بروكر - دليل الخدمات السعودي';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Cairo Bold TTF — confirmed working with satori Arabic rendering
const FONT_URL = 'https://fonts.gstatic.com/s/cairo/v31/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hAc5W1Q.ttf';

// Satori renders Arabic words LTR — reverse word order so RTL readers see correct text
const rtl = (text: string) => text.split(' ').reverse().join(' ');

export default async function OgImage({ params }: { params: Promise<{ city: string }> }) {
    const resolvedParams = await params;
    const city = getCityBySlug(resolvedParams.city);
    const cityName = city?.name_ar || resolvedParams.city;
    const currentMonth = new Date().toLocaleString('ar-SA', { month: 'long', year: 'numeric' });

    // Dynamic stats
    const totalServices = SERVICES.length;
    const cityContext = getCityContext(resolvedParams.city);
    const neighborhoodCount = cityContext?.neighborhoods?.length || 0;

    const fontData = await fetch(FONT_URL).then(res => res.arrayBuffer()).catch(() => null);

    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c2d48 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '60px 70px',
                    color: 'white',
                    fontFamily: '"Cairo"',
                }}
            >
                {/* Top badges row */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        alignSelf: 'flex-end',
                        gap: '12px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: 'rgba(124, 58, 237, 0.9)',
                            padding: '10px 28px',
                            borderRadius: '100px',
                            fontSize: '26px',
                            fontWeight: 'bold',
                            boxShadow: '0 8px 30px rgba(124, 58, 237, 0.4)',
                        }}
                    >
                        {rtl(`${totalServices}+ خدمة متاحة`)}
                    </div>
                    {neighborhoodCount > 0 && (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                background: 'rgba(2, 132, 199, 0.9)',
                                color: '#0c4a6e',
                                padding: '10px 28px',
                                borderRadius: '100px',
                                fontSize: '26px',
                                fontWeight: 'bold',
                            }}
                        >
                            {rtl(`${neighborhoodCount} حي مخدوم`)}
                        </div>
                    )}
                </div>

                {/* المحتوى الرئيسي */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                    }}
                >
                    <div
                        style={{
                            fontSize: '72px',
                            fontWeight: 700,
                            margin: '0 0 20px 0',
                            lineHeight: 1.2,
                            display: 'flex',
                            textAlign: 'right',
                        }}
                    >
                        {rtl('خدمات منزلية احترافية')}
                    </div>
                    <div
                        style={{
                            fontSize: '56px',
                            color: '#c4b5fd',
                            fontWeight: 700,
                            display: 'flex',
                            textAlign: 'right',
                        }}
                    >
                        {rtl(`في ${cityName}`)}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginTop: '20px',
                            background: 'rgba(255,255,255,0.08)',
                            padding: '10px 24px',
                            borderRadius: '16px',
                            border: '2px solid rgba(255,255,255,0.15)',
                        }}
                    >
                        <span style={{ fontSize: '28px', color: '#94a3b8', fontWeight: 700 }}>
                            {rtl('شركات معتمدة ✓ أسعار شفافة ✓ تقييمات حقيقية ✓')}
                        </span>
                    </div>
                </div>

                {/* الشريط السفلي */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        borderTop: '2px solid #334155',
                        paddingTop: '30px',
                    }}
                >
                    <div style={{ fontSize: '32px', color: '#64748b', fontWeight: 700, display: 'flex' }}>
                        {rtl(`تحديث: ${currentMonth}`)}
                    </div>
                    {/* 🛡️ Nafath/SBC Badge — Vision AI OCR Target */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(2, 132, 199, 0.95)',
                            padding: '8px 20px',
                            borderRadius: '12px',
                            border: '2px solid rgba(255,255,255,0.3)',
                        }}
                    >
                        <span style={{ fontSize: '20px' }}>🛡️</span>
                        <span style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>
                            {rtl('تم التحقق — نفاذ')}
                        </span>
                        <span style={{ fontSize: '14px', color: '#bae6fd', fontWeight: 700 }}>
                            SBC
                        </span>
                    </div>
                    <div
                        style={{
                            fontSize: '48px',
                            fontWeight: 700,
                            color: '#ffffff',
                            letterSpacing: '3px',
                        }}
                    >
                        PROKR.CO
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: fontData ? [
                {
                    name: 'Cairo',
                    data: fontData,
                    style: 'normal' as const,
                    weight: 700 as const,
                },
            ] : [],
        }
    );
}
