import { getCityContext } from '@/lib/city-context';
import { getDispatchZone, getGeoNarrative, CITY_DISPATCH_ZONES, SERVICE_ZONE_MAP } from '@/lib/geo-dispatch-data';
import { MapPin, Navigation, Clock, Truck } from 'lucide-react';

interface GeoSignalsProps {
    citySlug: string;
    serviceName?: string;
    serviceCategory?: string;
}

/**
 * Phantom Geo-Hijacking Component — Deep Per-City Per-Service Version
 * 
 * Each city+service combination renders a UNIQUE geo signal with:
 * - Different dispatch zone based on service category
 * - Different coordinates (residential vs commercial vs logistics)
 * - Different narrative text (3 templates × 6 categories = 18 variants)
 * - Different Google Maps Directions link
 * - Different neighborhoods displayed
 * 
 * This prevents duplicate content across pages in the same city.
 */
export default function GeoSignals({ citySlug, serviceName, serviceCategory }: GeoSignalsProps) {
    const context = getCityContext(citySlug);
    if (!context) return null;

    const category = serviceCategory || 'cleaning';
    const dispatchZone = getDispatchZone(citySlug, category);
    if (!dispatchZone) return null;

    const {
        name_ar,
        coverageRadius,
        responseTime,
        neighborhoods,
    } = context;

    // Use dispatch zone's real coordinates (NOT city center)
    const { lat, lng, name_ar: zoneName, nameEn: zoneNameEn, description: zoneDescription } = dispatchZone;

    // Google Maps Directions URL: dispatch zone → specific neighborhood
    // Different destination per service category for uniqueness
    const zoneType = SERVICE_ZONE_MAP[category] || 'landmark';

    // Select different destination neighborhoods PER CATEGORY (not per zone type)
    // This ensures even categories sharing the same zone type get unique Google Maps links
    const categoryOffset: Record<string, number> = {
        'cleaning': 0,
        'pest-control': 1,
        'insulation': 2,
        'leak-detection': 3,
        'moving': 4,
        'sewage': 5,
    };

    const neighborhoodOffset = categoryOffset[category] ?? 0;

    const destNeighborhood = neighborhoods[neighborhoodOffset % neighborhoods.length];
    // Include service name in destination query for absolute uniqueness
    // Even if neighborhood wraps around, the service keyword differentiates the URL
    const serviceLabel = serviceName || category;
    const destinationQuery = encodeURIComponent(`${serviceLabel} ${destNeighborhood.name_ar} ${name_ar}`);

    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${zoneNameEn}&destination=${destinationQuery}&travelmode=driving`;

    // Unique narrative text per city+category
    const narrativeText = getGeoNarrative(
        citySlug,
        category,
        name_ar,
        responseTime,
        coverageRadius,
        zoneName,
    );

    // Select different neighborhoods per service category for display uniqueness
    const neighborhoodCount = neighborhoods.length;
    const startIdx = neighborhoodOffset % neighborhoodCount;
    const coverageAreas: string[] = [];
    for (let i = 0; i < Math.min(4, neighborhoodCount); i++) {
        coverageAreas.push(neighborhoods[(startIdx + i) % neighborhoodCount].name_ar);
    }

    // Category-specific header suffix for uniqueness
    const categoryHeaders: Record<string, string> = {
        'cleaning': 'فرق التنظيف',
        'pest-control': 'فرق المكافحة',
        'leak-detection': 'فنيّو الكشف',
        'moving': 'أسطول النقل',
        'sewage': 'سيارات الشفط',
        'insulation': 'مقاولو العزل',
    };

    const headerSuffix = categoryHeaders[category] || 'فرقنا';

    return (
        <section
            className="geo-signals mt-10 mb-6 mx-auto max-w-4xl"
            itemScope
            itemType="https://schema.org/LocalBusiness"
            aria-label={`تغطية ${headerSuffix} — ${name_ar}`}
        >
            {/* Schema.org microdata — uses DISPATCH ZONE coordinates, not city center */}
            <meta itemProp="name" content={`بروكر — ${serviceName || 'خدمات منزلية'} ${name_ar}`} />
            <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
                <meta itemProp="latitude" content={String(lat)} />
                <meta itemProp="longitude" content={String(lng)} />
            </div>
            <div itemProp="areaServed" itemScope itemType="https://schema.org/City">
                <meta itemProp="name" content={name_ar} />
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-5 shadow-sm">
                {/* Header — unique per service category */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200">
                        تغطية {headerSuffix} — {name_ar}
                    </h3>
                    <span className="text-[10px] bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full">
                        {zoneDescription}
                    </span>
                </div>

                {/* Main geo signal — UNIQUE narrative per city+category */}
                <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400 mb-4">
                    <Navigation className="w-3.5 h-3.5 inline-block ml-1 text-emerald-500" />
                    <a
                        href={mapsUrl}
                        target="_blank"
                        rel="nofollow noopener"
                        className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-semibold hover:underline transition-colors"
                        title={`اتجاهات من ${zoneName} إلى ${destNeighborhood.name_ar} ${name_ar}`}
                    >
                        📍 {zoneName}
                    </a>
                    {' — '}
                    {narrativeText}
                </p>

                {/* Coverage grid */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-100 dark:border-gray-700">
                        <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <div>
                            <span className="text-gray-500 dark:text-gray-400">زمن الاستجابة:</span>
                            <span className="font-semibold text-gray-800 dark:text-gray-200 mr-1">{responseTime}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-100 dark:border-gray-700">
                        <Truck className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <div>
                            <span className="text-gray-500 dark:text-gray-400">نطاق التغطية:</span>
                            <span className="font-semibold text-gray-800 dark:text-gray-200 mr-1">{coverageRadius}</span>
                        </div>
                    </div>
                </div>

                {/* Neighborhood coverage — rotated per category */}
                {coverageAreas.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            <MapPin className="w-3 h-3 inline-block ml-1" />
                            أحياء مغطاة: {coverageAreas.join(' • ')}
                            {neighborhoodCount > 4 && ` و${neighborhoodCount - 4} أحياء أخرى`}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
