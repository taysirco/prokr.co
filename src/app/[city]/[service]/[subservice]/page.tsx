import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import {
    Home, ChevronLeft, Truck, ShieldCheck, AlertTriangle, Lightbulb,
    Wrench, ExternalLink, Award, CheckCircle2,
} from 'lucide-react';
import { getCityBySlug, getServiceBySlug } from '@/lib/seed';
import { getSubRegion, getSubRegionServiceHref } from '@/lib/sub-regions';
import { getOverrideForPage, getOverriddenPages, withBrandSuffix, BRAND_AR } from '@/lib/overrides';
import type { PageOverride } from '@/lib/overrides/types';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { DirectAnswer } from '@/components/seo/DirectAnswer';
import FaqAccordion from '@/components/FaqAccordion';
import FraudAlertBanner from '@/components/FraudAlertBanner';
import { NafathVerifyBanner } from '@/components/NafathVerifyBanner';
import MarketTimingBadge from '@/components/MarketTimingBadge';
import LeadCaptureCTA from '@/components/LeadCaptureCTA';
import Footer from '@/components/Footer';

// ════════════════════════════════════════════════════════════════════════
// Neighborhood × Service page — /{city}/{subregion}/{service}
// e.g. /makkah/sharaia/movers (نقل عفش الشرائع).
//
// Curated overrides for a neighborhood are registered in the override registry
// under a composite key whose city part contains a slash, e.g.
// makeOverrideKey('makkah/sharaia', 'movers') → 'makkah/sharaia::movers'.
// The 2-segment /{city}/{service} route only ever looks up simple city slugs,
// so these overrides need this dedicated 3-segment route to be reachable.
//
// dynamicParams = false: only the URLs returned by generateStaticParams are
// served. Every other 3-segment URL keeps returning a real 404 (the
// middleware "Phoenix Protocol" behavior is preserved — we do not catch and
// soft-redirect unrelated /{a}/{b}/{c} paths).
// ════════════════════════════════════════════════════════════════════════
export const dynamicParams = false;

interface NeighborhoodPageProps {
    params: Promise<{
        city: string;        // e.g. 'makkah'
        service: string;     // 2nd segment = sub-region slug, e.g. 'sharaia'
        subservice: string;  // 3rd segment = service slug, e.g. 'movers'
    }>;
}

// Discover every neighborhood-service override straight from the registry, so
// adding a new override file + registry entry is all that's needed to ship a
// new page here. Composite keys look like '<city>/<subregion>::<service>'.
export async function generateStaticParams() {
    return getOverriddenPages()
        .filter(key => key.includes('/') && key.includes('::'))
        .map(key => {
            const [cityPath, serviceSlug] = key.split('::');
            const [citySlug, subRegionSlug] = cityPath.split('/');
            return { city: citySlug, service: subRegionSlug, subservice: serviceSlug };
        });
}

function resolveNeighborhood(p: { city: string; service: string; subservice: string }) {
    const city = getCityBySlug(p.city);
    const subRegion = getSubRegion(p.city, p.service);
    const override = getOverrideForPage(`${p.city}/${p.service}`, p.subservice) as PageOverride | undefined;
    return { city, subRegion, override };
}

export async function generateMetadata({ params }: NeighborhoodPageProps): Promise<Metadata> {
    const p = await params;
    const { city, subRegion, override } = resolveNeighborhood(p);

    if (!city || !subRegion || !override) {
        return { title: 'صفحة غير موجودة' };
    }

    const canonicalUrl = `https://prokr.co/${p.city}/${p.service}/${p.subservice}`;
    // withBrandSuffix normalises to exactly one " - بروكر الخدمي": some
    // neighbourhood overrides are hand-written with the brand already appended
    // and older ones without it. Paired with `absolute` below, this is the final
    // <title> — without it the layout template would print the brand twice.
    const title = withBrandSuffix(
        override.meta?.title || `${override.meta?.h1 || subRegion.name_ar} — ${city.name_ar}`
    );
    // Social cards drop the brand suffix — og:site_name already carries it.
    const socialTitle = (override.meta?.ogTitle || override.meta?.title
        || `${override.meta?.h1 || subRegion.name_ar} — ${city.name_ar}`)
        .replace(new RegExp(`\\s*[-|—]\\s*${BRAND_AR}\\s*$`), '').trim();
    const description = override.meta?.description
        || override.content?.shortAnswer
        || `خدمة متخصصة في ${subRegion.name_ar}، ${city.name_ar}.`;

    return {
        title: { absolute: title },
        description,
        keywords: override.meta?.keywords,
        alternates: { canonical: canonicalUrl },
        openGraph: {
            title: socialTitle,
            description: override.meta?.ogDescription || description,
            locale: 'ar_SA',
            type: 'website',
            siteName: 'بروكر الخدمي',
            url: canonicalUrl,
        },
        twitter: {
            card: 'summary_large_image',
            title: socialTitle,
            description: override.meta?.ogDescription || description,
        },
        robots: { index: true, follow: true },
    };
}

export default async function NeighborhoodServicePage({ params }: NeighborhoodPageProps) {
    const p = await params;
    const { city, subRegion, override } = resolveNeighborhood(p);

    // No real city, no real sub-region, or no curated override → genuine 404.
    if (!city || !subRegion || !override) {
        notFound();
    }

    // The 3rd segment is a neighborhood service alias (e.g. 'movers'). Map it to
    // a real service for internal links + lead capture (movers → furniture-moving).
    const baseService = getServiceBySlug(p.subservice)
        || getServiceBySlug('furniture-moving')
        || getServiceBySlug(subRegion.services[0]);
    const baseServiceSlug = baseService?.slug || 'furniture-moving';
    const baseServiceName = baseService?.name_ar || 'نقل عفش';

    const h1 = override.meta?.h1 || `${baseServiceName} ${subRegion.name_ar}`;
    const canonicalUrl = `https://prokr.co/${p.city}/${p.service}/${p.subservice}`;

    // Four levels, not three. The sub-region hub sits between the city and this
    // page in the real URL hierarchy (/{city}/{subregion}/{service}), and omitting
    // it told Google a hierarchy the URLs contradict — while denying the hub the
    // one internal signal its own child pages should be giving it.
    const breadcrumbs = [
        { name: 'الرئيسية', url: 'https://prokr.co' },
        { name: city.name_ar, url: `https://prokr.co/${city.slug}` },
        { name: subRegion.name_ar, url: `https://prokr.co/${city.slug}/${subRegion.slug}` },
        { name: h1, url: canonicalUrl },
    ];

    const faqItems = override.faq || [];

    return (
        <>
            <BreadcrumbJsonLd items={breadcrumbs} />
            {faqItems.length > 0 && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: faqItems.map(f => ({
                            '@type': 'Question',
                            name: f.question,
                            acceptedAnswer: { '@type': 'Answer', text: f.answer },
                        })),
                    }) }}
                />
            )}

            <main className="min-h-screen bg-gray-50">
                {/* Hero */}
                <section className="hero-gradient relative text-white overflow-hidden" data-hero-gradient style={{ background: 'linear-gradient(to bottom left, #0369a1, #0c4a6e, #082f49)' }}>
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
                        <nav aria-label="مسار التنقل" className="flex items-center gap-2 text-sky-100 text-sm mb-6">
                            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                                <Home className="w-4 h-4" />
                                الرئيسية
                            </Link>
                            <ChevronLeft className="w-4 h-4" />
                            <Link href={`/${city.slug}`} className="hover:text-white transition-colors">
                                {city.name_ar}
                            </Link>
                            <ChevronLeft className="w-4 h-4" />
                            {/* The sub-region is a PARENT here, not the current page —
                                it was rendered as the plain-text current item, which
                                both mislabelled this page and left no way up to the hub. */}
                            <Link href={`/${city.slug}/${subRegion.slug}`} className="hover:text-white transition-colors">
                                {subRegion.name_ar}
                            </Link>
                            <ChevronLeft className="w-4 h-4" />
                            <span className="text-white font-medium">{h1}</span>
                        </nav>

                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Truck className="w-8 h-8" />
                            </div>
                            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">{h1}</h1>
                        </div>

                        {override.content?.heroSubtitle && (
                            <p className="text-lg text-sky-100 max-w-2xl mt-2">{override.content.heroSubtitle}</p>
                        )}

                        <div className="mt-4">
                            <MarketTimingBadge compact />
                        </div>
                    </div>
                </section>

                {/* Direct Answer (AEO featured-snippet target) */}
                {override.content?.shortAnswer && (
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                        <DirectAnswer
                            city={subRegion.name_ar}
                            service={baseServiceName}
                            answer={override.content.shortAnswer}
                        />
                    </section>
                )}

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
                    {/* Intro */}
                    {override.content?.introduction && (
                        <article className="prose prose-lg max-w-none">
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">عن خدمة {baseServiceName} في {subRegion.name_ar}</h2>
                            <p className="text-gray-700 leading-relaxed">{override.content.introduction}</p>
                        </article>
                    )}

                    {/* Pricing */}
                    {override.pricing && override.pricing.length > 0 && (
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">أسعار {baseServiceName} في {subRegion.name_ar}</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-right border border-gray-200 rounded-lg overflow-hidden">
                                    <thead className="bg-gray-100 text-gray-700">
                                        <tr>
                                            <th className="px-3 py-2 font-semibold">الخدمة</th>
                                            <th className="px-3 py-2 font-semibold whitespace-nowrap">السعر التقديري</th>
                                            <th className="px-3 py-2 font-semibold whitespace-nowrap">المدة</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {override.pricing.map((row, i) => (
                                            <tr key={i} className="border-t border-gray-100">
                                                <td className="px-3 py-2 text-gray-800">{row.type}</td>
                                                <td className="px-3 py-2 text-gray-800 whitespace-nowrap">{row.minPrice} - {row.maxPrice} ريال</td>
                                                <td className="px-3 py-2 text-gray-600 whitespace-nowrap">{row.time}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <p className="text-xs text-gray-500 mt-1">* أسعار تقديرية قابلة للتغيّر حسب الكمية والمسافة داخل {subRegion.name_ar}.</p>
                            </div>
                        </section>
                    )}

                    {/* Expert tips */}
                    {override.expertTips && override.expertTips.length > 0 && (
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <Lightbulb className="w-5 h-5 text-amber-500" /> نصائح الخبراء قبل {baseServiceName}
                            </h2>
                            <ul className="space-y-2">
                                {override.expertTips.map((tip, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                                        <span>{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Warnings */}
                    {override.warnings && override.warnings.length > 0 && (
                        <section className="bg-red-50 border border-red-200 rounded-xl p-5">
                            <h2 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5" /> تحذيرات مهمة
                            </h2>
                            <ul className="space-y-2">
                                {override.warnings.map((w, i) => (
                                    <li key={i} className="flex items-start gap-2 text-red-700">
                                        <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-1" />
                                        <span>{w}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Equipment */}
                    {override.equipment && override.equipment.length > 0 && (
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <Wrench className="w-5 h-5 text-sky-600" /> المعدات المستخدمة
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {override.equipment.map((eq, i) => (
                                    <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-semibold text-gray-900 mb-1">{eq.name}</h3>
                                        <p className="text-sm text-gray-600">{eq.use}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Common concerns */}
                    {override.commonConcerns && override.commonConcerns.length > 0 && (
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">مخاوف شائعة وحلولها</h2>
                            <div className="space-y-3">
                                {override.commonConcerns.map((c, i) => (
                                    <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
                                        <p className="font-semibold text-gray-900 mb-1">❓ {c.concern}</p>
                                        <p className="text-sm text-gray-700">✅ {c.solution}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Consumer education (myth/truth) */}
                    {override.consumerEducation && override.consumerEducation.length > 0 && (
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">تصحيح مفاهيم خاطئة</h2>
                            <div className="space-y-3">
                                {override.consumerEducation.map((c, i) => (
                                    <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
                                        <p className="text-sm text-red-600 mb-1"><span className="font-semibold">شائعة:</span> {c.myth}</p>
                                        <p className="text-sm text-green-700"><span className="font-semibold">الحقيقة:</span> {c.truth}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Verification badges */}
                    {override.verificationBadges && override.verificationBadges.length > 0 && (
                        <section className="flex flex-wrap gap-3">
                            {override.verificationBadges.map((b, i) => (
                                <div key={i} className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm rounded-full px-4 py-2">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span>{b.badge}</span>
                                </div>
                            ))}
                        </section>
                    )}

                    {/* Trust anchors (outbound authority links) */}
                    {override.trustAnchors && override.trustAnchors.length > 0 && (
                        <section>
                            <h2 className="text-lg font-bold text-gray-900 mb-3">جهات رسمية ذات صلة</h2>
                            <ul className="space-y-2">
                                {override.trustAnchors.map((t, i) => (
                                    <li key={i}>
                                        <a href={t.url} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1.5 text-sky-700 hover:text-sky-900">
                                            <ExternalLink className="w-4 h-4" />
                                            <span className="font-medium">{t.entity}{t.acronym ? ` (${t.acronym})` : ''}</span>
                                        </a>
                                        <span className="text-gray-500 text-sm"> — {t.role}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Saudi regulations */}
                    {override.saudiRegulations && override.saudiRegulations.length > 0 && (
                        <section>
                            <h2 className="text-lg font-bold text-gray-900 mb-3">الأنظمة السعودية ذات الصلة</h2>
                            <ul className="space-y-2">
                                {override.saudiRegulations.map((r, i) => (
                                    <li key={i} className="text-gray-700">
                                        <span className="font-semibold">{r.code}</span> — {r.description}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* FAQ */}
                    {faqItems.length > 0 && (
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">الأسئلة الشائعة عن {baseServiceName} في {subRegion.name_ar}</h2>
                            <FaqAccordion
                                items={faqItems}
                                cityName={`${subRegion.name_ar}، ${city.name_ar}`}
                                serviceName={baseServiceName}
                            />
                        </section>
                    )}

                    {/* Expert reviewer */}
                    {override.expertReviewer && (
                        <section className="bg-sky-50 border border-sky-200 rounded-xl p-5">
                            <div className="flex items-start gap-3">
                                <Award className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">روجِع واعتُمد بواسطة</p>
                                    <a href={override.expertReviewer.profileUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-gray-900 hover:text-sky-700">
                                        {override.expertReviewer.name}
                                    </a>
                                    <p className="text-sm text-gray-600">{override.expertReviewer.title}</p>
                                    <p className="text-xs text-gray-500 mt-0.5">{override.expertReviewer.credential}</p>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Related services (internal links to real city service pages) */}
                    {override.relatedServices && override.relatedServices.length > 0 && (
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">خدمات ذات صلة في {subRegion.name_ar}</h2>
                            <div className="flex flex-wrap gap-3">
                                {override.relatedServices
                                    .slice()
                                    .sort((a, b) => a.priority - b.priority)
                                    .map(rs => {
                                        const svc = getServiceBySlug(rs.slug);
                                        if (!svc) return null;
                                        // Prefer the sibling page in THIS neighbourhood when one
                                        // exists — it is the more relevant destination for someone
                                        // already reading about this neighbourhood, and it keeps the
                                        // cluster interlinked. Fall back to the city page, and label
                                        // each link with wherever it actually goes.
                                        const siblingHref = getSubRegionServiceHref(city.slug, subRegion.slug, svc.slug);
                                        const href = siblingHref ?? `/${city.slug}/${svc.slug}`;
                                        // Overrides list their own service among relatedServices
                                        // (it used to resolve to the city page, a legitimate "up"
                                        // link). Now that it resolves to the neighbourhood sibling
                                        // it would point at THIS page — drop the self-link.
                                        if (href === `/${p.city}/${p.service}/${p.subservice}`) return null;
                                        const place = siblingHref ? subRegion.name_ar : city.name_ar;
                                        return (
                                            <Link
                                                key={rs.slug}
                                                href={href}
                                                className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-sky-300 hover:shadow-md transition-all text-gray-800"
                                            >
                                                {svc.name_ar} {place}
                                            </Link>
                                        );
                                    })}
                            </div>
                        </section>
                    )}
                </div>

                {/* Lead capture (mirrors the service page's no-advertisers state) */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
                    <LeadCaptureCTA
                        cityName={`${subRegion.name_ar}، ${city.name_ar}`}
                        serviceName={`${baseServiceName} ${subRegion.name_ar}`}
                        serviceSlug={baseServiceSlug}
                        citySlug={city.slug}
                    />
                </section>

                {/* Consumer protection + Nafath trust */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <FraudAlertBanner serviceName={baseServiceName} serviceSlug={baseServiceSlug} cityName={`${subRegion.name_ar}، ${city.name_ar}`} />
                </section>
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                    <NafathVerifyBanner serviceNameAr={baseServiceName} cityNameAr={`${subRegion.name_ar}، ${city.name_ar}`} />
                </section>

                <Footer currentCity={city.slug} currentService={baseServiceSlug} />
            </main>
        </>
    );
}
