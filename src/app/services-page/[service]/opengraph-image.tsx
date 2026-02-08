import { ImageResponse } from 'next/og';
import { getServiceBySlug } from '@/lib/seed';

export const runtime = 'edge';
export const alt = 'بروكر - دليل الخدمات السعودي';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OgImage({ params }: { params: Promise<{ service: string }> }) {
    const resolvedParams = await params;
    const service = getServiceBySlug(resolvedParams.service);
    const serviceName = service?.name_ar || resolvedParams.service;

    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #d97706 0%, #92400e 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    padding: '60px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        marginBottom: '40px',
                    }}
                >
                    <div
                        style={{
                            width: '60px',
                            height: '60px',
                            background: 'white',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '32px',
                            fontWeight: 'bold',
                            color: '#d97706',
                        }}
                    >
                        بـ
                    </div>
                    <span style={{ color: 'white', fontSize: '36px', fontWeight: 'bold' }}>
                        بروكر
                    </span>
                </div>

                <div
                    style={{
                        color: 'white',
                        fontSize: '64px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        lineHeight: 1.3,
                        marginBottom: '20px',
                        direction: 'rtl',
                    }}
                >
                    {serviceName}
                </div>

                <div
                    style={{
                        color: '#fde68a',
                        fontSize: '42px',
                        fontWeight: '600',
                        textAlign: 'center',
                        direction: 'rtl',
                        marginBottom: '30px',
                    }}
                >
                    في جميع مدن المملكة
                </div>

                <div
                    style={{
                        background: 'rgba(255,255,255,0.15)',
                        borderRadius: '12px',
                        padding: '12px 32px',
                        color: '#fef3c7',
                        fontSize: '24px',
                        direction: 'rtl',
                    }}
                >
                    24 مدينة • شركات معتمدة • أسعار تنافسية
                </div>

                <div
                    style={{
                        position: 'absolute',
                        bottom: '30px',
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '20px',
                    }}
                >
                    prokr.co
                </div>
            </div>
        ),
        { ...size }
    );
}
