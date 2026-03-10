import { getCityContext } from '@/lib/city-context';
import { MapPin, Navigation, Clock, Truck } from 'lucide-react';

interface GeoSignalsProps {
    citySlug: string;
    serviceName?: string;
}

/**
 * Phantom Geo-Hijacking Component
 * 
 * Injects Google Maps Directions API links from famous city landmarks.
 * Google's map crawlers follow these links and associate the domain
 * with physical geographic presence in each city.
 * 
 * Strategy: The Directions link encodes origin (famous landmark) →
 * destination (city center), creating a spatial entity signal.
 */
export default function GeoSignals({ citySlug, serviceName }: GeoSignalsProps) {
    const context = getCityContext(citySlug);
    if (!context) return null;

    const {
        name_ar,
        majorLandmark,
        majorLandmarkEn,
        coverageRadius,
        responseTime,
        neighborhoods,
        coordinates
    } = context;

    // Google Maps Directions URL: landmark → city center
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${majorLandmarkEn}&destination=${encodeURIComponent(name_ar)}+center&travelmode=driving`;

    // Select first 4 neighborhoods for coverage display
    const coverageAreas = neighborhoods.slice(0, 4).map(n => n.name_ar);

    return (
        <section
            className="geo-signals mt-10 mb-6 mx-auto max-w-4xl"
            itemScope
            itemType="https://schema.org/LocalBusiness"
            aria-label={`التغطية الجغرافية ${name_ar}`}
        >
            {/* Hidden Schema.org microdata for spatial entity */}
            <meta itemProp="name" content={`بروكر — ${serviceName || 'خدمات منزلية'} ${name_ar}`} />
            <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
                <meta itemProp="latitude" content={String(coordinates.lat)} />
                <meta itemProp="longitude" content={String(coordinates.lng)} />
            </div>
            <div itemProp="areaServed" itemScope itemType="https://schema.org/City">
                <meta itemProp="name" content={name_ar} />
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-5 shadow-sm">
                {/* Header */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200">
                        التغطية اللوجستية — {name_ar}
                    </h3>
                </div>

                {/* Main geo signal text with Maps link */}
                <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400 mb-4">
                    <Navigation className="w-3.5 h-3.5 inline-block ml-1 text-emerald-500" />
                    تتحرك فرقنا المعتمدة من النقاط المركزية قرب{' '}
                    <a
                        href={mapsUrl}
                        target="_blank"
                        rel="nofollow noopener"
                        className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-semibold hover:underline transition-colors"
                        title={`اتجاهات من ${majorLandmark} إلى وسط ${name_ar}`}
                    >
                        {majorLandmark}
                    </a>
                    {' '}لتغطية كافة أحياء {name_ar} في نطاق {coverageRadius} — بزمن وصول لا يتجاوز {responseTime}.
                </p>

                {/* Coverage grid */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                    {/* Response time */}
                    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-100 dark:border-gray-700">
                        <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <div>
                            <span className="text-gray-500 dark:text-gray-400">زمن الاستجابة:</span>
                            <span className="font-semibold text-gray-800 dark:text-gray-200 mr-1">{responseTime}</span>
                        </div>
                    </div>

                    {/* Coverage radius */}
                    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-100 dark:border-gray-700">
                        <Truck className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <div>
                            <span className="text-gray-500 dark:text-gray-400">نطاق التغطية:</span>
                            <span className="font-semibold text-gray-800 dark:text-gray-200 mr-1">{coverageRadius}</span>
                        </div>
                    </div>
                </div>

                {/* Neighborhood coverage list */}
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
