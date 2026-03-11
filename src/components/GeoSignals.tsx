import { getCityContext } from '@/lib/city-context';
import { CITY_DISPATCH_ZONES, getGeoNarrative, SERVICE_ZONE_MAP } from '@/lib/geo-dispatch-data';
import { getServiceGeoProfile } from '@/lib/service-geo-profiles';
import { MapPin, Navigation, Clock, Truck, Wrench } from 'lucide-react';

interface GeoSignalsProps {
    citySlug: string;
    serviceSlug: string;
    serviceName: string;
    serviceCategory: string;
}

/**
 * Phantom Geo-Hijacking Component — Per-Service-Slug Deep Uniqueness
 * 
 * 53 services × 24 cities = 1,272 unique geo signal outputs.
 * 
 * Uniqueness layers:
 * 1. Dispatch zone (4 per city) — selected by category + zoneOverride
 * 2. Narrative template (3 per category) — selected by city+category hash
 * 3. Equipment keywords (unique per slug)
 * 4. Team descriptor (unique per slug)
 * 5. Arrival context (unique per slug)
 * 6. Neighborhood rotation (by slug hash)
 * 7. Google Maps destination (by service name + neighborhood + city)
 */
export default function GeoSignals({ citySlug, serviceSlug, serviceName, serviceCategory }: GeoSignalsProps) {
    const context = getCityContext(citySlug);
    if (!context) return null;

    // Get per-service-slug profile (unique equipment, team, zone override)
    const profile = getServiceGeoProfile(serviceSlug, serviceCategory);

    // Zone selection: use slug's zoneOverride if present, else fallback to category default
    const effectiveZoneType = profile.zoneOverride || SERVICE_ZONE_MAP[serviceCategory] || 'landmark';
    
    // Get the correct zone directly from dispatch data
    const cityZones = CITY_DISPATCH_ZONES[citySlug];
    if (!cityZones) return null;
    const actualZone = cityZones[effectiveZoneType];
    
    if (!actualZone) return null;

    const { 
        name_ar: cityName, 
        coverageRadius, 
        responseTime, 
        neighborhoods,
    } = context;

    const { lat, lng, name_ar: zoneName, nameEn: zoneNameEn, description: zoneDescription } = actualZone;

    // Slug-based hash for stable neighborhood selection
    let slugHash = 0;
    for (let i = 0; i < serviceSlug.length; i++) {
        slugHash = ((slugHash << 5) - slugHash) + serviceSlug.charCodeAt(i);
        slugHash |= 0;
    }
    const neighborhoodOffset = Math.abs(slugHash) % neighborhoods.length;
    
    const destNeighborhood = neighborhoods[neighborhoodOffset];
    const destinationQuery = encodeURIComponent(`${serviceName} ${destNeighborhood.name_ar} ${cityName}`);
    
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${zoneNameEn}&destination=${destinationQuery}&travelmode=driving`;

    // Category narrative (city-level uniqueness)
    const categoryNarrative = getGeoNarrative(
        citySlug, serviceCategory, cityName, responseTime, coverageRadius, zoneName,
    );

    // Neighborhood display: rotate by slugHash to show different neighborhoods per service
    const coverageAreas: string[] = [];
    const neighborhoodCount = neighborhoods.length;
    for (let i = 0; i < Math.min(4, neighborhoodCount); i++) {
        coverageAreas.push(neighborhoods[(neighborhoodOffset + i) % neighborhoodCount].name_ar);
    }

    return (
        <section 
            className="geo-signals mt-10 mb-6 mx-auto max-w-4xl"
            itemScope 
            itemType="https://schema.org/LocalBusiness"
            aria-label={`تغطية ${serviceName} — ${cityName}`}
        >
            {/* Schema.org microdata — uses dispatch zone coordinates */}
            <meta itemProp="name" content={`بروكر — ${serviceName} ${cityName}`} />
            <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
                <meta itemProp="latitude" content={String(lat)} />
                <meta itemProp="longitude" content={String(lng)} />
            </div>
            <div itemProp="areaServed" itemScope itemType="https://schema.org/City">
                <meta itemProp="name" content={cityName} />
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-5 shadow-sm">
                {/* Header — unique per service */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200">
                        تغطية {profile.teamDesc} — {cityName}
                    </h3>
                    <span className="text-[10px] bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full">
                        {zoneDescription}
                    </span>
                </div>

                {/* Main geo signal — UNIQUE per city+slug */}
                <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400 mb-3">
                    <Navigation className="w-3.5 h-3.5 inline-block ml-1 text-emerald-500" />
                    ينطلق{' '}
                    <a 
                        href={mapsUrl}
                        target="_blank" 
                        rel="nofollow noopener" 
                        className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-semibold hover:underline transition-colors"
                        title={`اتجاهات من ${zoneName} إلى ${destNeighborhood.name_ar} ${cityName}`}
                    >
                        📍 {profile.teamDesc}
                    </a>
                    {' '}من قاعدة {zoneName} لتغطية أحياء {cityName} في نطاق {coverageRadius} — 
                    بزمن وصول لا يتجاوز {responseTime}.
                </p>

                {/* Service-specific equipment & arrival context */}
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

                {/* Neighborhood coverage — rotated by service slug hash */}
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
