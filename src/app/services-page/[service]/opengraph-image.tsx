import { ImageResponse } from 'next/og';
import { getServiceBySlug, CITIES } from '@/lib/seed';

export const runtime = 'edge';
export const alt = 'بروكر - دليل الخدمات السعودي';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Cairo Bold TTF — confirmed working with satori Arabic rendering
const FONT_URL = 'https://fonts.gstatic.com/s/cairo/v31/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hAc5W1Q.ttf';

// Satori renders Arabic words LTR — reverse word order so RTL readers see correct text
const rtl = (text: string) => text.split(' ').reverse().join(' ');

export default async function OgImage({ params }: { params: Promise<{ service: string }> }) {
    const resolvedParams = await params;
    const service = getServiceBySlug(resolvedParams.service);
    const serviceName = service?.name_ar || resolvedParams.service;
    const currentMonth = new Date().toLocaleString('ar-SA', { month: 'long', year: 'numeric' });

    // Dynamic: total cities covered
    const totalCities = CITIES.length;

    const fontData = await fetch(FONT_URL).then(res => res.arrayBuffer()).catch(() => null);

    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #0f172a 0%, #92400e 50%, #78350f 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '60px 70px',
                    color: 'white',
                    fontFamily: '"Cairo"',
                }}
            >
                {/* Top badges */}
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
                            background: 'rgba(239, 68, 68, 0.9)',
                            padding: '10px 28px',
                            borderRadius: '100px',
                            fontSize: '26px',
                            fontWeight: 'bold',
                            boxShadow: '0 8px 30px rgba(239, 68, 68, 0.4)',
                        }}
                    >
                        <div style={{
                            width: '12px', height: '12px', borderRadius: '50%',
                            background: '#fff',
                            display: 'flex',
                        }} />
                        {rtl(`متاح في ${totalCities}+ مدينة`)}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            background: '#d97706',
                            color: '#ffffff',
                            padding: '10px 28px',
                            borderRadius: '100px',
                            fontSize: '26px',
                            fontWeight: 'bold',
                        }}
                    >
                        {rtl('شركات معتمدة')}
                    </div>
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
                        {rtl(serviceName)}
                    </div>
                    <div
                        style={{
                            fontSize: '56px',
                            color: '#fde68a',
                            fontWeight: 700,
                            display: 'flex',
                            textAlign: 'right',
                        }}
                    >
                        {rtl('في جميع مدن المملكة')}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginTop: '20px',
                            background: 'rgba(251, 191, 36, 0.15)',
                            padding: '10px 24px',
                            borderRadius: '16px',
                            border: '2px solid rgba(251, 191, 36, 0.3)',
                        }}
                    >
                        <span style={{ fontSize: '28px', color: '#fbbf24', fontWeight: 700 }}>
                            {rtl('⭐ قارن الأسعار واحصل على أفضل عرض')}
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
                            background: 'rgba(16, 185, 129, 0.95)',
                            padding: '8px 20px',
                            borderRadius: '12px',
                            border: '2px solid rgba(255,255,255,0.3)',
                        }}
                    >
                        <span style={{ fontSize: '20px' }}>🛡️</span>
                        <span style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>
                            {rtl('تم التحقق — نفاذ')}
                        </span>
                        <span style={{ fontSize: '14px', color: '#d1fae5', fontWeight: 700 }}>
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
