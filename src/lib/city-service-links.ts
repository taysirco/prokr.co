// ════════════════════════════════════════════════════════════════════════
// City × Service commercial link groups — single source of truth
//
// Used by the homepage grid AND the navbar mega-menu so both emit the SAME
// keyword-targeted anchor text ("شركات نقل عفش بجدة"), not a bare label
// ("عفش جدة"). Anchor text IS the ranking signal for the target page, so it
// must read exactly like the head term the page is trying to win.
//
// ⚠️ CLIENT-SAFE ON PURPOSE — Navbar.tsx is a 'use client' component, so this
// module must NOT import `@/lib/overrides/registry`: the registry statically
// imports ~1,200 override modules and would land the whole thing in the client
// bundle. The covered-city list below is therefore declared as data and
// verified against the registry by `npm run seo:links` (audit script), which
// fails loudly if a linked combo ever loses its curated page.
// ════════════════════════════════════════════════════════════════════════

import { CITIES } from './seed';
import { getCityKeyword } from './locale-formatting';

export interface CityServiceLink {
    citySlug: string;
    cityNameAr: string;
    /** /{city}/{service} */
    href: string;
    /** Keyword-targeted anchor, e.g. "شركات نقل عفش بجدة" */
    anchor: string;
}

export interface CityServiceLinkGroup {
    serviceSlug: string;
    /** Card/column heading, e.g. "شركات نقل العفش" */
    heading: string;
    /** Anchor stem the city keyword is appended to, e.g. "شركات نقل عفش" */
    anchorPrefix: string;
    links: CityServiceLink[];
}

/**
 * Cities that have a curated page override for ALL four money services, in
 * commercial priority order (search demand) — NOT the regional order used in
 * seed.ts. Only these are linked: a link into a thin auto-generated combo is
 * worse than no link, and /{city}/{service} with no override 301s to the
 * service hub anyway.
 *
 * Verified by scripts/internal-links-audit.js — see the file header.
 */
const LINKABLE_CITY_SLUGS = [
    'riyadh',
    'jeddah',
    'makkah',
    'madinah',
    'dammam',
    'al-khobar',
    'qassim',
    'buraidah',
    'taif',
    'al-ahsa',
    'tabuk',
    'abha',
    'khamis-mushait',
    'jubail',
    'al-kharj',
    'onizah',
];

/**
 * The four money services. `anchorPrefix` is the exact head term — it is NOT
 * derived from Service.name_ar because the directory intent ("شركات ...") has
 * to be part of the anchor, and because `cleaning`'s name_ar is
 * "تنظيف منازل" while the head term people search is "شركات تنظيف".
 */
const SERVICE_GROUPS: Omit<CityServiceLinkGroup, 'links'>[] = [
    { serviceSlug: 'furniture-moving', heading: 'شركات نقل العفش', anchorPrefix: 'شركات نقل عفش' },
    { serviceSlug: 'cleaning', heading: 'شركات التنظيف', anchorPrefix: 'شركات تنظيف' },
    { serviceSlug: 'pest-control', heading: 'شركات مكافحة الحشرات', anchorPrefix: 'شركات مكافحة حشرات' },
    { serviceSlug: 'water-leak-detection', heading: 'شركات كشف التسربات', anchorPrefix: 'شركات كشف تسربات' },
];

/** Slug → city, resolved once so the builders below stay O(1) per lookup. */
const CITY_BY_SLUG = new Map(CITIES.map(c => [c.slug, c]));

/** Exported for the audit script, which cross-checks these against the registry. */
export const LINKABLE_COMBOS = SERVICE_GROUPS.flatMap(g =>
    LINKABLE_CITY_SLUGS.map(citySlug => ({ citySlug, serviceSlug: g.serviceSlug }))
);

/**
 * Build the city × service link groups.
 *
 * @param limit max cities per service group
 */
export function getCityServiceLinkGroups(limit = 8): CityServiceLinkGroup[] {
    return SERVICE_GROUPS.map(group => {
        const links = LINKABLE_CITY_SLUGS
            .slice(0, limit)
            .map(slug => CITY_BY_SLUG.get(slug))
            .filter((c): c is NonNullable<typeof c> => Boolean(c))
            .map(c => ({
                citySlug: c.slug,
                cityNameAr: c.name_ar,
                href: `/${c.slug}/${group.serviceSlug}`,
                // getCityKeyword('جدة') → 'بجدة'; getCityKeyword('الرياض') → 'بالرياض'
                anchor: `${group.anchorPrefix} ${getCityKeyword(c.name_ar, 'ba')}`,
            }));

        return { ...group, links };
    }).filter(g => g.links.length > 0);
}

/** Default 8-per-service grid used on the homepage. */
export const CITY_SERVICE_LINK_GROUPS = getCityServiceLinkGroups(8);

/** Shorter 5-per-service list for the navbar mega-menu. */
export const CITY_SERVICE_LINK_GROUPS_NAV = getCityServiceLinkGroups(5);
