import { notFound, permanentRedirect } from 'next/navigation';
import { getCityBySlug } from '@/lib/seed';
import { getSubRegion } from '@/lib/sub-regions';

// ────────────────────────────────────────────────────────────────────────────
// LEGACY redirect. Sub-region pages now live at the SHORT URL /{city}/{subregion}
// (e.g. /riyadh/north) — served natively by the /[city]/[service] route, with NO
// /regions prefix. This route only 308-redirects the old /regions/{city}/{subregion}
// URLs (which Google already indexed) to their canonical short URL.
// ────────────────────────────────────────────────────────────────────────────

interface LegacyRegionRedirectProps {
    params: Promise<{ city: string; subregion: string }>;
}

export default async function LegacyRegionRedirect({ params }: LegacyRegionRedirectProps) {
    const { city, subregion } = await params;
    const cityObj = getCityBySlug(city);
    if (cityObj && getSubRegion(cityObj.slug, subregion)) {
        permanentRedirect(`/${cityObj.slug}/${subregion}`);
    }
    notFound();
}
