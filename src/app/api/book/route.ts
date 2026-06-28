import { NextRequest } from 'next/server';
import { CITIES } from '@/lib/seed';
import { SERVICES } from '@/lib/services';
import { pricingData } from '@/lib/pricing-data';
import { createServiceBooking, getMatchedProviders, isValidSaudiPhone, normalizeSaudiPhone } from '@/lib/db/bookings';
import type { ServiceBookingFormData, BookingSource } from '@/types';

// ============================================
// /api/book — AI Booking Agent Endpoint
// Enables Google Assistant, Gemini, and AI agents
// to discover services and execute bookings
// programmatically via ReserveAction schema.
// ============================================

// ── Input sanitization ──
function sanitizeInput(input: string, maxLength: number = 200): string {
    return input
        .replace(/<[^>]*>/g, '')       // Strip HTML tags
        .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '') // Strip control chars
        .trim()
        .slice(0, maxLength);
}

// ── In-memory rate limiter with auto-cleanup ──
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);

    // Periodic cleanup: remove expired entries every 100 checks
    if (rateLimitMap.size > 100) {
        for (const [key, val] of rateLimitMap) {
            if (now > val.resetAt) rateLimitMap.delete(key);
        }
    }

    if (!entry || now > entry.resetAt) {
        rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
        return false;
    }

    entry.count++;
    return entry.count > RATE_LIMIT_MAX;
}

// ── Lookup helpers ──
const cityMap = new Map(CITIES.map(c => [c.slug, c]));
const serviceMap = new Map(SERVICES.map(s => [s.slug, s]));

// ── CORS headers for AI agents ──
const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Cache-Control': 'no-cache',
};

// ════════════════════════════════════════════
// OPTIONS — CORS Preflight
// ════════════════════════════════════════════
export async function OPTIONS() {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
}

// ════════════════════════════════════════════
// GET /api/book — Service Discovery
// AI agents call this to discover available
// services, cities, and pricing before booking.
// ════════════════════════════════════════════
export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const serviceSlug = searchParams.get('service');
    const citySlug = searchParams.get('city');

    // ── If no parameters: return full catalog ──
    if (!serviceSlug && !citySlug) {
        return Response.json({
            '@context': 'https://schema.org',
            '@type': 'EntryPoint',
            name: 'Prokr AI Booking API — بروكر وكيل الحجز الآلي',
            description: 'API endpoint for programmatic service booking in Saudi Arabia. Supports Google Assistant and AI agents via ReserveAction schema.',
            urlTemplate: 'https://prokr.co/api/book{?service,city,source}',
            httpMethod: 'POST',
            contentType: 'application/json',
            actionApplication: {
                '@type': 'WebApplication',
                name: 'بروكر — دليل الخدمات السعودية',
                url: 'https://prokr.co',
                applicationCategory: 'BusinessApplication',
                operatingSystem: 'All',
            },
            potentialAction: {
                '@type': 'ReserveAction',
                description: 'Book a home service in Saudi Arabia',
                target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://prokr.co/api/book',
                    httpMethod: 'POST',
                    contentType: 'application/json',
                    encodingType: 'application/json',
                },
                'input-required': [
                    { '@type': 'PropertyValueSpecification', valueName: 'service', description: 'Service slug (e.g., furniture-moving)' },
                    { '@type': 'PropertyValueSpecification', valueName: 'city', description: 'City slug (e.g., riyadh)' },
                    { '@type': 'PropertyValueSpecification', valueName: 'customer_name', description: 'Customer name in Arabic or English' },
                    { '@type': 'PropertyValueSpecification', valueName: 'customer_phone', description: 'Saudi phone number (05xxxxxxxx)' },
                ],
                'input-optional': [
                    { '@type': 'PropertyValueSpecification', valueName: 'preferred_date', description: 'Preferred date (ISO 8601)' },
                    { '@type': 'PropertyValueSpecification', valueName: 'notes', description: 'Additional notes' },
                    { '@type': 'PropertyValueSpecification', valueName: 'source', description: 'Source: web | google_assistant | ai_agent | api' },
                ],
            },
            availableServices: SERVICES.map(s => ({
                slug: s.slug,
                name_ar: s.name_ar,
                name_en: s.name_en,
                category: s.category,
            })),
            availableCities: CITIES.map(c => ({
                slug: c.slug,
                name_ar: c.name_ar,
                name_en: c.name_en,
                region: c.region,
            })),
        }, { headers: CORS_HEADERS });
    }

    // ── Service-specific discovery ──
    const service = serviceSlug ? serviceMap.get(serviceSlug) : null;
    const city = citySlug ? cityMap.get(citySlug) : null;

    if (serviceSlug && !service) {
        const safeSlug = sanitizeInput(serviceSlug, 50);
        return Response.json({
            '@context': 'https://schema.org',
            '@type': 'Action',
            actionStatus: 'FailedActionStatus',
            error: {
                '@type': 'Thing',
                name: 'InvalidService',
                description: `الخدمة "${safeSlug}" غير موجودة.`,
                description_en: `Service slug "${safeSlug}" not found.`,
            },
            availableServices: SERVICES.map(s => s.slug),
        }, { status: 404, headers: CORS_HEADERS });
    }

    if (citySlug && !city) {
        const safeSlug = sanitizeInput(citySlug, 50);
        return Response.json({
            '@context': 'https://schema.org',
            '@type': 'Action',
            actionStatus: 'FailedActionStatus',
            error: {
                '@type': 'Thing',
                name: 'InvalidCity',
                description: `المدينة "${safeSlug}" غير موجودة.`,
                description_en: `City slug "${safeSlug}" not found.`,
            },
            availableCities: CITIES.map(c => c.slug),
        }, { status: 404, headers: CORS_HEADERS });
    }

    // ── Build pricing info ──
    const matchingPrices = pricingData.filter(p => {
        if (service && city) return p.serviceSlug === service.slug && p.citySlug === city.slug;
        if (service) return p.serviceSlug === service.slug;
        if (city) return p.citySlug === city.slug;
        return false;
    });

    const response: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'Service',
    };

    if (service) {
        response.name = service.name_ar;
        response.name_en = service.name_en;
        response.serviceType = service.category;
    }

    if (city) {
        response.areaServed = {
            '@type': 'City',
            name: city.name_ar,
            name_en: city.name_en,
            addressCountry: 'SA',
        };
    }

    if (matchingPrices.length > 0) {
        const allMin = matchingPrices.map(p => p.minPrice).filter(Boolean);
        const allMax = matchingPrices.map(p => p.maxPrice).filter(Boolean);

        response.offers = {
            '@type': 'AggregateOffer',
            priceCurrency: 'SAR',
            ...(allMin.length > 0 && { lowPrice: Math.min(...allMin) }),
            ...(allMax.length > 0 && { highPrice: Math.max(...allMax) }),
            offerCount: matchingPrices.length,
        };

        response.priceDetails = matchingPrices.map(p => ({
            city: p.city,
            city_slug: p.citySlug,
            service: p.service,
            service_slug: p.serviceSlug,
            min_price: p.minPrice,
            max_price: p.maxPrice,
            avg_price: p.avgPrice,
            unit: p.unit,
        }));
    }

    response.bookingEndpoint = {
        method: 'POST',
        url: 'https://prokr.co/api/book',
        contentType: 'application/json',
        requiredFields: ['service', 'city', 'customer_name', 'customer_phone'],
        exampleRequest: {
            service: service?.slug || 'furniture-moving',
            city: city?.slug || 'riyadh',
            customer_name: 'أحمد محمد',
            customer_phone: '0512345678',
            preferred_date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
            source: 'google_assistant',
        },
    };

    return Response.json(response, { headers: CORS_HEADERS });
}

// ════════════════════════════════════════════
// POST /api/book — Execute Booking
// AI agents submit booking requests here.
// Returns Schema.org ReserveAction confirmation.
// ════════════════════════════════════════════
export async function POST(request: NextRequest) {
    // ── Rate limiting ──
    // Use NextRequest.ip (set by platform, not spoofable) first,
    // then x-forwarded-for (last entry = closest proxy, harder to spoof)
    const forwardedFor = request.headers.get('x-forwarded-for');
    const lastProxy = forwardedFor?.split(',').pop()?.trim();
    const ip = (request as unknown as { ip?: string }).ip
        || lastProxy
        || request.headers.get('x-real-ip')
        || 'unknown';

    if (isRateLimited(ip)) {
        return Response.json({
            '@context': 'https://schema.org',
            '@type': 'Action',
            actionStatus: 'FailedActionStatus',
            error: {
                '@type': 'Thing',
                name: 'RateLimitExceeded',
                description: 'تم تجاوز الحد الأقصى للطلبات. حاول مرة أخرى لاحقاً.',
                description_en: 'Rate limit exceeded. Maximum 10 requests per hour. Try again later.',
            },
        }, { status: 429, headers: CORS_HEADERS });
    }

    // ── Parse body ──
    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        return Response.json({
            '@context': 'https://schema.org',
            '@type': 'Action',
            actionStatus: 'FailedActionStatus',
            error: {
                '@type': 'Thing',
                name: 'InvalidJSON',
                description: 'جسم الطلب غير صالح.',
                description_en: 'Expected valid JSON body.',
            },
        }, { status: 400, headers: CORS_HEADERS });
    }

    const { service, city, customer_name, customer_phone, preferred_date, notes, source } = body as Partial<ServiceBookingFormData>;

    // ── Validate required fields ──
    const missingFields: string[] = [];
    if (!service) missingFields.push('service');
    if (!city) missingFields.push('city');
    if (!customer_name) missingFields.push('customer_name');
    if (!customer_phone) missingFields.push('customer_phone');

    if (missingFields.length > 0) {
        return Response.json({
            '@context': 'https://schema.org',
            '@type': 'Action',
            actionStatus: 'FailedActionStatus',
            error: {
                '@type': 'Thing',
                name: 'MissingRequiredFields',
                description: `الحقول التالية مطلوبة: ${missingFields.join(', ')}`,
                description_en: `Missing required fields: ${missingFields.join(', ')}`,
            },
            requiredFields: ['service', 'city', 'customer_name', 'customer_phone'],
        }, { status: 400, headers: CORS_HEADERS });
    }

    // ── Validate field types (prevent NoSQL injection & type coercion crashes) ──
    if (
        (service && typeof service !== 'string') ||
        (city && typeof city !== 'string') ||
        (customer_name && typeof customer_name !== 'string') ||
        (customer_phone && typeof customer_phone !== 'string') ||
        (preferred_date && typeof preferred_date !== 'string') ||
        (notes && typeof notes !== 'string') ||
        (source && typeof source !== 'string')
    ) {
        return Response.json({
            '@context': 'https://schema.org',
            '@type': 'Action',
            actionStatus: 'FailedActionStatus',
            error: {
                '@type': 'Thing',
                name: 'InvalidFieldType',
                description: 'جميع الحقول يجب أن تكون نصية.',
                description_en: 'All fields must be strings.',
            },
        }, { status: 400, headers: CORS_HEADERS });
    }

    // ── Sanitize text inputs ──
    const safeName = sanitizeInput(customer_name!, 100);
    const safeNotes = notes ? sanitizeInput(notes, 500) : undefined;

    if (safeName.length < 2) {
        return Response.json({
            '@context': 'https://schema.org',
            '@type': 'Action',
            actionStatus: 'FailedActionStatus',
            error: {
                '@type': 'Thing',
                name: 'InvalidCustomerName',
                description: 'اسم العميل يجب أن يكون حرفين على الأقل.',
                description_en: 'Customer name must be at least 2 characters.',
            },
        }, { status: 400, headers: CORS_HEADERS });
    }

    // ── Validate service ──
    const serviceObj = serviceMap.get(service!);
    if (!serviceObj) {
        return Response.json({
            '@context': 'https://schema.org',
            '@type': 'Action',
            actionStatus: 'FailedActionStatus',
            error: {
                '@type': 'Thing',
                name: 'InvalidService',
                description: `الخدمة "${service}" غير موجودة.`,
                description_en: `Service "${service}" not found.`,
            },
            availableServices: SERVICES.slice(0, 10).map(s => ({ slug: s.slug, name: s.name_ar })),
        }, { status: 400, headers: CORS_HEADERS });
    }

    // ── Validate city ──
    const cityObj = cityMap.get(city!);
    if (!cityObj) {
        return Response.json({
            '@context': 'https://schema.org',
            '@type': 'Action',
            actionStatus: 'FailedActionStatus',
            error: {
                '@type': 'Thing',
                name: 'InvalidCity',
                description: `المدينة "${city}" غير موجودة.`,
                description_en: `City "${city}" not found.`,
            },
            availableCities: CITIES.slice(0, 10).map(c => ({ slug: c.slug, name: c.name_ar })),
        }, { status: 400, headers: CORS_HEADERS });
    }

    // ── Validate Saudi phone ──
    if (!isValidSaudiPhone(customer_phone!)) {
        return Response.json({
            '@context': 'https://schema.org',
            '@type': 'Action',
            actionStatus: 'FailedActionStatus',
            error: {
                '@type': 'Thing',
                name: 'InvalidPhoneNumber',
                description: 'رقم الجوال غير صالح. يجب أن يبدأ بـ 05 ويتكون من 10 أرقام.',
                description_en: 'Invalid phone number. Must be a Saudi mobile number starting with 05 (10 digits).',
                expectedFormat: '05xxxxxxxx',
                alternativeFormats: ['+9665xxxxxxxx', '009665xxxxxxxx'],
            },
        }, { status: 400, headers: CORS_HEADERS });
    }

    // ── Validate preferred_date if provided ──
    if (preferred_date) {
        const dateStr = preferred_date as string;
        // Must match YYYY-MM-DD or full ISO 8601 datetime
        const isoDateRegex = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2})?(\.\d+)?(Z|[+-]\d{2}:\d{2})?)?$/;
        const dateObj = new Date(dateStr);
        const isValidFormat = isoDateRegex.test(dateStr);
        const isValidDate = !isNaN(dateObj.getTime());
        
        // Detect rollover: "2026-02-30" → JS silently makes it March 2
        let hasRollover = false;
        if (isValidDate && dateStr.length >= 10) {
            const [y, m, d] = dateStr.slice(0, 10).split('-').map(Number);
            hasRollover = dateObj.getUTCFullYear() !== y || 
                          dateObj.getUTCMonth() + 1 !== m || 
                          dateObj.getUTCDate() !== d;
        }
        
        if (!isValidFormat || !isValidDate || hasRollover) {
            return Response.json({
                '@context': 'https://schema.org',
                '@type': 'Action',
                actionStatus: 'FailedActionStatus',
                error: {
                    '@type': 'Thing',
                    name: 'InvalidDate',
                    description: 'التاريخ غير صالح. استخدم صيغة ISO 8601.',
                    description_en: 'Invalid date. Use ISO 8601 format (YYYY-MM-DD).',
                },
            }, { status: 400, headers: CORS_HEADERS });
        }
    }

    // ── Validate source ──
    const validSources: BookingSource[] = ['web', 'google_assistant', 'ai_agent', 'api'];
    const bookingSource: BookingSource = validSources.includes(source as BookingSource)
        ? (source as BookingSource)
        : 'api';

    // ── Match providers ──
    let matchedProviders: string[] = [];
    try {
        matchedProviders = await getMatchedProviders(city!, service!, 5);
    } catch {
        // Non-blocking: proceed even if provider matching fails
    }

    // ── Create booking in Firestore ──
    try {
        const booking = await createServiceBooking(
            {
                service: service!,
                city: city!,
                customer_name: safeName,
                customer_phone: normalizeSaudiPhone(customer_phone!),
                ...(preferred_date && { preferred_date }),
                ...(safeNotes && { notes: safeNotes }),
                source: bookingSource,
            },
            matchedProviders
        );

        // ── Success Response — Schema.org ReserveAction ──
        return Response.json({
            '@context': 'https://schema.org',
            '@type': 'ReserveAction',
            actionStatus: 'ConfirmedActionStatus',
            agent: {
                '@type': 'Organization',
                name: 'بروكر الخدمي',
                url: 'https://prokr.co',
            },
            result: {
                '@type': 'Reservation',
                reservationId: booking.reservation_id,
                reservationStatus: 'https://schema.org/ReservationPending',
                reservationFor: {
                    '@type': 'Service',
                    name: serviceObj.name_ar,
                    name_en: serviceObj.name_en,
                    serviceType: serviceObj.category,
                    areaServed: {
                        '@type': 'City',
                        name: cityObj.name_ar,
                        name_en: cityObj.name_en,
                        addressCountry: 'SA',
                    },
                },
                underName: {
                    '@type': 'Person',
                    name: booking.customer_name,
                    telephone: booking.customer_phone,
                },
                ...(booking.preferred_date && {
                    startDate: booking.preferred_date,
                }),
                provider: {
                    '@type': 'Organization',
                    name: 'بروكر الخدمي',
                    url: 'https://prokr.co',
                },
                priceCurrency: 'SAR',
            },
            matchedProviders: {
                count: matchedProviders.length,
                message: matchedProviders.length > 0
                    ? `تم العثور على ${matchedProviders.length} شركات معتمدة لتنفيذ طلبك. سيتم التواصل معك خلال 30 دقيقة.`
                    : 'جاري البحث عن أفضل مزودي الخدمة في منطقتك. سيتم التواصل معك قريباً.',
                message_en: matchedProviders.length > 0
                    ? `Found ${matchedProviders.length} certified providers for your request. You will be contacted within 30 minutes.`
                    : 'Searching for the best service providers in your area. You will be contacted soon.',
            },
            confirmationUrl: `https://prokr.co/${city}/${service}`,
            timestamp: new Date().toISOString(),
        }, { status: 201, headers: CORS_HEADERS });

    } catch (error) {
        return Response.json({
            '@context': 'https://schema.org',
            '@type': 'Action',
            actionStatus: 'FailedActionStatus',
            error: {
                '@type': 'Thing',
                name: 'BookingFailed',
                description: 'حدث خطأ أثناء معالجة الحجز. يرجى المحاولة مرة أخرى.',
                description_en: 'An error occurred while processing the booking. Please try again.',
                details: process.env.NODE_ENV === 'development' ? String(error) : undefined,
            },
        }, { status: 500, headers: CORS_HEADERS });
    }
}
