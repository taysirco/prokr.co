import { getCityContext } from '@/lib/city-context';
import { getServiceGeoProfile } from '@/lib/service-geo-profiles';
import { getNeighborhoodCoords } from '@/lib/neighborhood-coords';
import { MapPin, Navigation, Clock, Truck, Wrench } from 'lucide-react';

interface LocalPresenceProps {
    citySlug: string;
    serviceSlug: string;
    serviceName: string;
    serviceCategory: string;
}

/**
 * Stable hash: string → positive integer
 */
function stableHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

/**
 * Local Service Area — Per-Service-Slug Neighborhood-Level Uniqueness
 * 
 * Each of the 53×24 = 1,272 pages gets:
 * - Different dispatch NEIGHBORHOOD (name + real coordinates)
 * - Different equipment description 
 * - Different team descriptor
 * - Different arrival context
 * - Different covered neighborhoods list
 * - Different Google Maps destination
 * - Different Schema.org coordinates
 */
export default function LocalPresence({ citySlug, serviceSlug, serviceName, serviceCategory }: LocalPresenceProps) {
    const context = getCityContext(citySlug);
    if (!context) return null;

    const { 
        name_ar: cityName, 
        coverageRadius, 
        responseTime, 
        neighborhoods,
        coordinates: cityCenter,
    } = context;

    if (!neighborhoods.length) return null;

    // Get per-service-slug profile
    const profile = getServiceGeoProfile(serviceSlug, serviceCategory);

    // ────────────────────────────────────────────────
    // DISPATCH NEIGHBORHOOD: hash slug → unique neighborhood per service
    // Each service in the same city dispatches from a DIFFERENT neighborhood
    // ────────────────────────────────────────────────
    const slugHash = stableHash(serviceSlug);
    const dispatchIdx = slugHash % neighborhoods.length;
    const dispatchNeighborhood = neighborhoods[dispatchIdx];
    
    // Get REAL coordinates for this specific neighborhood
    const dispatchCoords = getNeighborhoodCoords(
        citySlug,
        dispatchNeighborhood.name_ar,
        cityCenter.lat,
        cityCenter.lng,
    );

    // ────────────────────────────────────────────────
    // DESTINATION NEIGHBORHOOD: different from dispatch
    // Uses a secondary hash to pick a different neighborhood
    // ────────────────────────────────────────────────
    const destHash = stableHash(`${serviceSlug}:dest`);
    let destIdx = destHash % neighborhoods.length;
    if (destIdx === dispatchIdx && neighborhoods.length > 1) {
        destIdx = (destIdx + 1) % neighborhoods.length;
    }
    const destNeighborhood = neighborhoods[destIdx];
    
    // Google Maps URL: dispatch neighborhood → destination neighborhood (through service name)
    const originQuery = encodeURIComponent(`${dispatchNeighborhood.name_ar} ${cityName}`);
    const destQuery = encodeURIComponent(`${serviceName} ${destNeighborhood.name_ar} ${cityName}`);
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${originQuery}&destination=${destQuery}&travelmode=driving`;

    // ────────────────────────────────────────────────
    // COVERED NEIGHBORHOODS: rotate differently per slug
    // Show 4 neighborhoods starting from a slug-specific position
    // ────────────────────────────────────────────────
    const coverageStart = stableHash(`${serviceSlug}:cov`) % neighborhoods.length;
    const coverageAreas: string[] = [];
    for (let i = 0; i < Math.min(4, neighborhoods.length); i++) {
        const nb = neighborhoods[(coverageStart + i) % neighborhoods.length];
        coverageAreas.push(nb.name_ar);
    }

    return (
        <section 
            className="geo-signals mt-10 mb-6 mx-auto max-w-4xl"
            itemScope 
            itemType="https://schema.org/LocalBusiness"
            aria-label={`تغطية ${serviceName} — ${cityName}`}
        >
            {/* Schema.org — uses DISPATCH NEIGHBORHOOD coordinates */}
            <meta itemProp="name" content={`بروكر — ${serviceName} ${cityName}`} />
            <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
                <meta itemProp="latitude" content={String(dispatchCoords.lat)} />
                <meta itemProp="longitude" content={String(dispatchCoords.lng)} />
            </div>
            <div itemProp="areaServed" itemScope itemType="https://schema.org/City">
                <meta itemProp="name" content={cityName} />
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-5 shadow-sm">
                {/* Header — unique team name per service */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200">
                        {profile.teamDesc} — {dispatchNeighborhood.name_ar}، {cityName}
                    </h3>
                </div>

                {/* Dispatch signal — UNIQUE neighborhood per slug */}
                <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400 mb-3">
                    <Navigation className="w-3.5 h-3.5 inline-block ml-1 text-emerald-500" />
                    ينطلق {profile.teamDesc} من نقطة التمركز في{' '}
                    <a 
                        href={mapsUrl}
                        target="_blank" 
                        rel="nofollow noopener" 
                        className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-semibold hover:underline transition-colors"
                        title={`اتجاهات من ${dispatchNeighborhood.name_ar} إلى ${destNeighborhood.name_ar} — ${cityName}`}
                    >
                        📍 {dispatchNeighborhood.name_ar}
                    </a>
                    {' '}لتغطية أحياء {cityName} في نطاق {coverageRadius} — 
                    بزمن وصول لا يتجاوز {responseTime}.
                </p>

                {/* Service-specific equipment & arrival context — UNIQUE per slug */}
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 mb-3 border border-gray-100 dark:border-gray-700">
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        <Wrench className="w-3 h-3 inline-block ml-1 text-gray-400" />
                        <strong className="text-gray-700 dark:text-gray-300">المعدات:</strong>{' '}
                        {profile.equipment}.{' '}
                        {profile.arrivalContext}.
                    </p>
                </div>

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

                {/* Neighborhoods — ROTATED per slug */}
                {coverageAreas.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            <MapPin className="w-3 h-3 inline-block ml-1" />
                            أحياء مغطاة: {coverageAreas.join(' • ')} 
                            {neighborhoods.length > 4 && ` و${neighborhoods.length - 4} أحياء أخرى`}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
