import { ImageResponse } from 'next/og';
import { getCityBySlug } from '@/lib/seed';

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

    const fontData = await fetch(FONT_URL).then(res => res.arrayBuffer()).catch(() => null);

    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #0f172a, #1e3a5f)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '80px',
                    color: 'white',
                    fontFamily: '"Cairo"',
                }}
            >
                {/* شارة سيادية — top-right */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        alignSelf: 'flex-end',
                        background: '#7c3aed',
                        color: '#ffffff',
                        padding: '12px 32px',
                        borderRadius: '100px',
                        fontSize: '28px',
                        fontWeight: 'bold',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                    }}
                >
                    {rtl('دليل الخدمات المعتمد')}
                </div>

                {/* المحتوى الرئيسي — right-aligned */}
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
                </div>

                {/* الشريط السفلي */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        borderTop: '2px solid #334155',
                        paddingTop: '40px',
                    }}
                >
                    <div style={{ fontSize: '36px', color: '#94a3b8', fontWeight: 700, display: 'flex' }}>
                        {rtl(`تحديث: ${currentMonth}`)}
                    </div>
                    <div
                        style={{
                            fontSize: '48px',
                            fontWeight: 700,
                            color: '#ffffff',
                            letterSpacing: '2px',
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
