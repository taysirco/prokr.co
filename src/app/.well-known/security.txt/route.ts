import { NextResponse } from 'next/server';

/**
 * /.well-known/security.txt
 * Standard security contact info per RFC 9116
 * Required by Google's security team for responsible disclosure
 */
export async function GET() {
    const securityTxt = `# Security Policy for Prokr.co
# https://prokr.co/.well-known/security.txt

Contact: mailto:security@prokr.co
Expires: 2027-04-06T00:00:00.000Z
Preferred-Languages: ar, en
Canonical: https://prokr.co/.well-known/security.txt
Policy: https://prokr.co/terms-of-service

# Prokr - دليل الخدمات السعودي الشامل
`;

    return new NextResponse(securityTxt, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400',
        },
    });
}
