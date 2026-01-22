import { NextRequest, NextResponse } from 'next/server';
import { CITIES, SERVICES } from '@/lib/seed';

// Create sets for O(1) lookup
const citySlugs = new Set(CITIES.map(c => c.slug));
const serviceSlugs = new Set(SERVICES.map(s => s.slug));

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Skip if path has more segments, static files, api routes, etc.
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/admin') ||
        pathname.startsWith('/advertise') ||
        pathname.startsWith('/company') ||
        pathname.startsWith('/about-us') ||
        pathname.startsWith('/contact-us') ||
        pathname.startsWith('/privacy-policy') ||
        pathname.startsWith('/terms-of-service') ||
        pathname.startsWith('/locations') ||
        pathname.startsWith('/regions') ||
        pathname.includes('.') ||  // Static files like .css, .js, .ico
        pathname === '/'
    ) {
        return NextResponse.next();
    }

    // Get the first segment
    const segments = pathname.split('/').filter(Boolean);
    const firstSegment = segments[0];

    // If it's a city slug, continue normally (handled by /[city])
    if (citySlugs.has(firstSegment)) {
        return NextResponse.next();
    }

    // If it's a service slug at root level, rewrite to /services-page/[service]
    if (serviceSlugs.has(firstSegment) && segments.length === 1) {
        const url = request.nextUrl.clone();
        url.pathname = `/services-page/${firstSegment}`;
        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};
