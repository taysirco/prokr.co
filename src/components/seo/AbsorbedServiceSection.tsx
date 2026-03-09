// ============================================
// AbsorbedServiceSection — Fragment Section for Super Pages
// Renders absorbed service content as a section with a fragment ID
// Used when a Super Page needs to display content from merged services
// ============================================

import type { City, Service } from '@/types';
import { getOverrideForPage } from '@/lib/overrides';
import type { SuperPageGroup } from '@/lib/services/super-page-groups';

interface AbsorbedServiceSectionsProps {
    city: City;
    service: Service; // The canonical (super page) service
    group: SuperPageGroup;
    allServices: Service[]; // All SERVICES for slug→name lookup
}

/**
 * Renders all absorbed service content as fragment-anchored sections
 * within the canonical Super Page.
 *
 * Each section has:
 *   - id={absorbedSlug} — the fragment anchor
 *   - h2 heading with the absorbed service name
 *   - Introduction content merged from the absorbed page's override
 *   - FAQ items from the absorbed page
 *   - Pricing from the absorbed page
 */
export function AbsorbedServiceSections({
    city,
    service,
    group,
    allServices,
}: AbsorbedServiceSectionsProps) {
    // Filter absorbed slugs that have overrides for this city
    const absorbedWithOverrides = group.absorbed.filter(slug =>
        getOverrideForPage(city.slug, slug)
    );

    if (absorbedWithOverrides.length === 0) return null;

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-8 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full"></div>
                <h2 className="text-xl font-bold text-gray-900">خدمات ذات صلة — {service.name_ar}</h2>
            </div>

            <div className="space-y-12">
                {absorbedWithOverrides.map(absorbedSlug => {
                    const override = getOverrideForPage(city.slug, absorbedSlug);
                    if (!override) return null;

                    const label = group.absorbedLabels[absorbedSlug] ||
                        allServices.find(s => s.slug === absorbedSlug)?.name_ar ||
                        absorbedSlug;

                    return (
                        <article
                            key={absorbedSlug}
                            id={absorbedSlug}
                            className="absorbed-section scroll-mt-32 bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 shadow-sm transition-all duration-300"
                        >
                            {/* Fragment Section Heading */}
                            <h3 className="text-lg lg:text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                {label} {city.name_ar}
                            </h3>

                            {/* Introduction from absorbed page */}
                            {override.content?.introduction && (
                                <div className="seo-introduction text-gray-700 leading-relaxed mb-6">
                                    <p>{override.content.introduction}</p>
                                </div>
                            )}

                            {/* Pricing from absorbed page */}
                            {override.pricing && override.pricing.length > 0 && (
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">أسعار {label}</h4>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm" dir="rtl">
                                            <thead>
                                                <tr className="bg-emerald-50 text-emerald-800">
                                                    <th className="py-2 px-3 text-right rounded-tr-lg">الخدمة</th>
                                                    <th className="py-2 px-3 text-center">الوحدة</th>
                                                    <th className="py-2 px-3 text-center">السعر (ريال)</th>
                                                    <th className="py-2 px-3 text-center rounded-tl-lg">المدة</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {override.pricing.map((p, i) => (
                                                    <tr key={i} className="border-b border-gray-100">
                                                        <td className="py-2 px-3 text-right">{p.type}</td>
                                                        <td className="py-2 px-3 text-center">{p.unit}</td>
                                                        <td className="py-2 px-3 text-center font-medium text-emerald-700">
                                                            {p.minPrice}–{p.maxPrice}
                                                        </td>
                                                        <td className="py-2 px-3 text-center text-gray-500">{p.time}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {/* FAQ from absorbed page */}
                            {override.faq && override.faq.length > 0 && (
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-3">أسئلة شائعة — {label}</h4>
                                    <div className="space-y-3">
                                        {override.faq.slice(0, 3).map((item, i) => (
                                            <details key={i} className="group bg-gray-50 rounded-lg">
                                                <summary className="cursor-pointer p-3 text-gray-900 font-medium text-sm hover:text-emerald-700 transition-colors">
                                                    {item.question}
                                                </summary>
                                                <p className="px-3 pb-3 text-sm text-gray-600 leading-relaxed">
                                                    {item.answer}
                                                </p>
                                            </details>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
