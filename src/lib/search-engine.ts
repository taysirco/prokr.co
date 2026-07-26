// ============================================
// Smart Search Engine — بروكر
// Arabic-aware fuzzy search with synonyms,
// composite city+service detection, & scoring
// ============================================

import { CITIES, SERVICES } from '@/lib/seed';
import { isAbsorbedSlug, getCanonicalSlug, SUPER_PAGE_GROUPS } from '@/lib/services/super-page-groups';
// Existence check ONLY — must come from the generated flat key list, never from
// overrides/registry. search-engine.ts is reachable from SearchModal ('use
// client'), which the navbar mounts on every page: importing the registry drags
// ~1,200 content modules (8.2 MB of JS) into the browser bundle sitewide.
// Regenerate with: npx tsx scripts/gen-override-index.ts
import { pageOverrideExists as hasPageOverride } from '@/lib/overrides/override-index.generated';
import { BLOG_ARTICLES } from '@/lib/blog-data';
import type { City, Service } from '@/types';

// ============================================
// 1. ARABIC TEXT NORMALIZER
// ============================================

const ARABIC_NORMALIZE_MAP: Record<string, string> = {
  'إ': 'ا', 'أ': 'ا', 'آ': 'ا', 'ٱ': 'ا',
  'ة': 'ه',
  'ى': 'ي',
  'ؤ': 'و',
  'ئ': 'ي',
};

const DIACRITICS_REGEX = /[\u064B-\u065F\u0670]/g; // tashkeel

export function normalizeArabic(text: string): string {
  let result = text.replace(DIACRITICS_REGEX, ''); // strip tashkeel
  for (const [from, to] of Object.entries(ARABIC_NORMALIZE_MAP)) {
    result = result.replaceAll(from, to);
  }
  return result.trim().toLowerCase();
}

// ============================================
// 2. SYNONYMS MAP — absorbed slugs + colloquial
// ============================================

// Build synonyms from super-page-groups (each absorbed label → canonical service)
const SYNONYM_TO_SERVICE = new Map<string, string>();

for (const group of SUPER_PAGE_GROUPS) {
  for (const [slug, label] of Object.entries(group.absorbedLabels)) {
    SYNONYM_TO_SERVICE.set(normalizeArabic(label), group.canonical);
    SYNONYM_TO_SERVICE.set(slug, group.canonical);
  }
}

// Manual colloquial / brand synonyms
const COLLOQUIAL_SYNONYMS: Record<string, string> = {
  'شركة نقل': 'furniture-moving',
  'نقال': 'furniture-moving',
  'نقل اثاث': 'furniture-moving',
  'سيارة نقل': 'furniture-moving',
  'ونيت': 'furniture-moving',
  'ونش': 'furniture-moving',
  'حشرات': 'pest-control',
  'بق': 'pest-control',
  'بق الفراش': 'pest-control',
  'صراصير': 'pest-control',
  'نمل': 'pest-control',
  'فئران': 'pest-control',
  'رش': 'pest-control',
  'مبيد': 'pest-control',
  'تنظيف بيت': 'cleaning',
  'تنظيف منزل': 'cleaning',
  'شغاله': 'cleaning',
  'شغالة': 'cleaning',
  'عاملة نظافة': 'cleaning',
  'عاملة': 'cleaning',
  'تنظيف شقق': 'apartments-cleaning',
  'تسربات': 'water-leak-detection',
  'تسريب': 'water-leak-detection',
  'تسرب مياه': 'water-leak-detection',
  'تسرب': 'water-leak-detection',
  'كشف تسرب': 'water-leak-detection',
  'سباك': 'water-leak-detection',
  'سباكة': 'water-leak-detection',
  'عزل اسطح': 'roof-insulation',
  'عزل خزانات': 'tank-insulation',
  'عزل فوم': 'roof-insulation',
  'عزل حراري': 'roof-insulation',
  'عزل مائي': 'tank-insulation',
  'عزل': 'roof-insulation',
  'تنظيف كنب': 'sofa-cleaning',
  'غسيل كنب': 'sofa-cleaning',
  'غسيل سجاد': 'carpet-cleaning',
  'تنظيف سجاد': 'carpet-cleaning',
  'تنظيف موكيت': 'carpet-cleaning',
  'جلي بلاط': 'floor-polishing',
  'جلي رخام': 'floor-polishing',
  'تسليك مجاري': 'sewage-pumping',
  'شفط بيارات': 'sewage-pumping',
  'مجاري': 'sewage-pumping',
  'بيارات': 'sewage-pumping',
  'صرف صحي': 'sewage-pumping',
  'تخزين': 'furniture-storage',
  'تخزين عفش': 'furniture-storage',
  'مستودع': 'furniture-storage',
  'تغليف': 'furniture-moving',
  'فك وتركيب': 'furniture-moving',
  'مكيف': 'air-conditioner-cleaning',
  'مكيفات': 'air-conditioner-cleaning',
  'تنظيف مكيف': 'air-conditioner-cleaning',
  'غسيل مكيف': 'air-conditioner-cleaning',
};

for (const [phrase, serviceSlug] of Object.entries(COLLOQUIAL_SYNONYMS)) {
  SYNONYM_TO_SERVICE.set(normalizeArabic(phrase), serviceSlug);
}

// City nicknames / colloquial names
const CITY_NICKNAMES: Record<string, string> = {
  'الرياض': 'riyadh',
  'جده': 'jeddah',
  'جدة': 'jeddah',
  'مكه': 'makkah',
  'مكة': 'makkah',
  'المدينة': 'madinah',
  'المدينه': 'madinah',
  'الدمام': 'dammam',
  'الخبر': 'al-khobar',
  'خبر': 'al-khobar',
  'الطايف': 'taif',
  'الطائف': 'taif',
  'تبوك': 'tabuk',
  'ابها': 'abha',
  'أبها': 'abha',
  'حايل': 'hail',
  'حائل': 'hail',
  'جيزان': 'jazan',
  'جازان': 'jazan',
  'القصيم': 'qassim',
  'بريده': 'buraidah',
  'بريدة': 'buraidah',
  'الاحساء': 'al-ahsa',
  'الأحساء': 'al-ahsa',
  'الجبيل': 'jubail',
  'ينبع': 'yanbu',
  'نجران': 'najran',
  'الباحه': 'al-baha',
  'الباحة': 'al-baha',
  'خميس مشيط': 'khamis-mushait',
  'خميس': 'khamis-mushait',
  'الظهران': 'dhahran',
  'القطيف': 'qatif',
  'حفر الباطن': 'hafr-albatin',
  'رابغ': 'rabigh',
  'عنيزه': 'onizah',
  'عنيزة': 'onizah',
  'نيوم': 'neom',
  'الدرعيه': 'diriyah',
  'الدرعية': 'diriyah',
  'المجمعة': 'majmaah',
  'المجمعه': 'majmaah',
  'راس تنورة': 'ras-tanura',
  'رأس تنورة': 'ras-tanura',
  'الخرج': 'al-kharj',
};

// ============================================
// 3. FUZZY MATCHING (Levenshtein distance)
// ============================================

function levenshtein(a: string, b: string): number {
  const la = a.length;
  const lb = b.length;
  if (la === 0) return lb;
  if (lb === 0) return la;

  // Optimize: if lengths differ by more than the threshold, skip
  if (Math.abs(la - lb) > 3) return Math.abs(la - lb);

  const matrix: number[][] = [];
  for (let i = 0; i <= la; i++) {
    matrix[i] = [i];
    for (let j = 1; j <= lb; j++) {
      if (i === 0) {
        matrix[i][j] = j;
      } else {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + cost
        );
      }
    }
  }
  return matrix[la][lb];
}

function fuzzyMatch(query: string, target: string, threshold: number = 2): boolean {
  if (target.includes(query)) return true;
  // For short queries, require exact substring
  if (query.length <= 2) return target.includes(query);

  // Check each word in target
  const targetWords = target.split(/\s+/);
  for (const word of targetWords) {
    if (levenshtein(query, word) <= threshold) return true;
  }

  return false;
}

// ============================================
// 4. SEARCH RESULT TYPES
// ============================================

export type SearchResultType = 'composite' | 'city' | 'service' | 'article' | 'synonym';

export interface SearchResult {
  type: SearchResultType;
  /** Relevance score — higher = better */
  score: number;
  /** URL to navigate to */
  href: string;
  /** Primary label (Arabic) */
  title: string;
  /** Secondary label */
  subtitle?: string;
  /** Extra context */
  meta?: string;
  /** Icon hint for rendering */
  icon: 'composite' | 'city' | 'service' | 'article';
  /** The raw matched item for highlight utilities */
  matchedQuery?: string;
}

// ============================================
// 5. TRENDING / POPULAR SEARCHES
// ============================================

export const TRENDING_SEARCHES = [
  { query: 'نقل عفش الرياض', href: '/riyadh/furniture-moving', icon: 'composite' as const },
  { query: 'تنظيف شقق جدة', href: '/jeddah/apartments-cleaning', icon: 'composite' as const },
  { query: 'مكافحة حشرات', href: '/pest-control', icon: 'service' as const },
  { query: 'كشف تسربات الدمام', href: '/dammam/water-leak-detection', icon: 'composite' as const },
  { query: 'تنظيف مكيفات', href: '/air-conditioner-cleaning', icon: 'service' as const },
  { query: 'عزل خزانات', href: '/tank-insulation', icon: 'service' as const },
  { query: 'نقل عفش جدة', href: '/jeddah/furniture-moving', icon: 'composite' as const },
  { query: 'تنظيف كنب', href: '/sofa-cleaning', icon: 'service' as const },
];

// ============================================
// 6. CORE SEARCH FUNCTION
// ============================================

// Canonical services only — with pre-computed normalized names
const CANONICAL_SERVICES = SERVICES.filter(s => !isAbsorbedSlug(s.slug));

// Pre-compute normalized names for faster search (avoids re-normalizing on every keystroke)
const SERVICE_NORMALIZED = CANONICAL_SERVICES.map(s => ({
  service: s,
  normAr: normalizeArabic(s.name_ar),
  normEn: s.name_en.toLowerCase(),
}));

const CITY_NORMALIZED = CITIES.map(c => ({
  city: c,
  normAr: normalizeArabic(c.name_ar),
  normEn: c.name_en.toLowerCase(),
}));

const ARTICLE_NORMALIZED = BLOG_ARTICLES.map(a => ({
  article: a,
  normTitle: normalizeArabic(a.title),
  normTags: a.tags.map(t => normalizeArabic(t)),
  normCategory: normalizeArabic(a.categoryLabel),
}));

export function smartSearch(rawQuery: string): SearchResult[] {
  const query = rawQuery.trim();
  if (!query || query.length > 100) return [];

  const normalizedQuery = normalizeArabic(query);
  const queryWords = normalizedQuery.split(/\s+/).filter(Boolean);
  const results: SearchResult[] = [];

  // --- Phase 1: Composite detection (city + service) ---
  const compositeResults = detectComposites(normalizedQuery, queryWords);
  results.push(...compositeResults);

  // --- Phase 2: Synonym resolution ---
  const synonymServiceSlug = resolveSynonym(normalizedQuery);
  if (synonymServiceSlug) {
    const service = CANONICAL_SERVICES.find(s => s.slug === synonymServiceSlug);
    if (service && !results.some(r => r.href === `/${service.slug}`)) {
      results.push({
        type: 'synonym',
        score: 85,
        href: `/${service.slug}`,
        title: service.name_ar,
        subtitle: `هل تقصد: ${service.name_ar}؟`,
        icon: 'service',
        matchedQuery: query,
      });
    }
  }

  // --- Phase 3: Direct service matches (using pre-computed normalized names) ---
  for (const { service, normAr, normEn } of SERVICE_NORMALIZED) {
    let score = 0;

    // Exact match
    if (normAr === normalizedQuery || normEn === normalizedQuery) {
      score = 100;
    }
    // Starts with
    else if (normAr.startsWith(normalizedQuery) || normEn.startsWith(normalizedQuery)) {
      score = 90;
    }
    // Contains
    else if (normAr.includes(normalizedQuery) || normEn.includes(normalizedQuery) || service.slug.includes(normalizedQuery)) {
      score = 75;
    }
    // Word match: query words exist in name
    else if (queryWords.length > 1 && queryWords.every(w => normAr.includes(w))) {
      score = 70;
    }
    // Any word match
    else if (queryWords.some(w => w.length >= 2 && normAr.includes(w))) {
      score = 50;
    }
    // Fuzzy match
    else if (fuzzyMatch(normalizedQuery, normAr)) {
      score = 35;
    }

    if (score > 0 && !results.some(r => r.href === `/${service.slug}`)) {
      results.push({
        type: 'service',
        score,
        href: `/${service.slug}`,
        title: service.name_ar,
        subtitle: service.name_en,
        icon: 'service',
        matchedQuery: query,
      });
    }
  }

  // --- Phase 4: City matches (using pre-computed normalized names) ---
  for (const { city, normAr, normEn } of CITY_NORMALIZED) {
    let score = 0;

    if (normAr === normalizedQuery || normEn === normalizedQuery) {
      score = 95;
    } else if (normAr.startsWith(normalizedQuery) || normEn.startsWith(normalizedQuery)) {
      score = 85;
    } else if (normAr.includes(normalizedQuery) || normEn.includes(normalizedQuery) || city.slug.includes(normalizedQuery)) {
      score = 65;
    } else if (fuzzyMatch(normalizedQuery, normAr)) {
      score = 30;
    }

    if (score > 0 && !results.some(r => r.href === `/${city.slug}`)) {
      results.push({
        type: 'city',
        score,
        href: `/${city.slug}`,
        title: city.name_ar,
        subtitle: city.name_en,
        icon: 'city',
        matchedQuery: query,
      });
    }
  }

  // --- Phase 5: Blog article matches (using pre-computed normalized data) ---
  for (const { article, normTitle, normTags, normCategory } of ARTICLE_NORMALIZED) {
    let score = 0;

    if (normTitle.includes(normalizedQuery)) {
      score = 70;
    } else if (queryWords.length > 1 && queryWords.every(w => normTitle.includes(w))) {
      score = 60;
    } else if (queryWords.some(w => w.length >= 2 && normTitle.includes(w))) {
      score = 40;
    } else if (normTags.some(t => t.includes(normalizedQuery))) {
      score = 45;
    } else if (normCategory.includes(normalizedQuery)) {
      score = 35;
    } else if (queryWords.some(w => normTags.some(t => t.includes(w)))) {
      score = 30;
    }

    if (score > 0) {
      results.push({
        type: 'article',
        score,
        href: `/blog/${article.slug}`,
        title: article.title,
        subtitle: article.categoryLabel,
        meta: `${article.readTime} دقائق قراءة`,
        icon: 'article',
        matchedQuery: query,
      });
    }
  }

  // --- Sort by score descending, then limit ---
  results.sort((a, b) => b.score - a.score);

  // De-duplicate by href
  const seen = new Set<string>();
  const unique = results.filter(r => {
    if (seen.has(r.href)) return false;
    seen.add(r.href);
    return true;
  });

  return unique.slice(0, 15);
}

// ============================================
// 7. COMPOSITE DETECTION (City + Service)
// ============================================

function detectComposites(normalizedQuery: string, queryWords: string[]): SearchResult[] {
  const results: SearchResult[] = [];

  let matchedCity: City | null = null;
  let matchedService: Service | null = null;
  let cityMatchedWords: string[] = [];

  // Try to find a city in the query
  for (const city of CITIES) {
    const normalizedCityAr = normalizeArabic(city.name_ar);
    const cityWords = normalizedCityAr.split(/\s+/);

    if (normalizedQuery.includes(normalizedCityAr)) {
      matchedCity = city;
      cityMatchedWords = cityWords;
      break;
    }

    // Check nickname map
    for (const [nickname, slug] of Object.entries(CITY_NICKNAMES)) {
      if (normalizedQuery.includes(normalizeArabic(nickname)) && slug === city.slug) {
        matchedCity = city;
        cityMatchedWords = normalizeArabic(nickname).split(/\s+/);
        break;
      }
    }
    if (matchedCity) break;
  }

  if (!matchedCity) return results;

  // Remove city words from query to find service part
  const serviceQueryWords = queryWords.filter(w => !cityMatchedWords.includes(w));
  const serviceQuery = serviceQueryWords.join(' ');

  if (!serviceQuery) return results;

  // Try synonym resolution first
  const synonymSlug = resolveSynonym(serviceQuery);
  if (synonymSlug) {
    matchedService = CANONICAL_SERVICES.find(s => s.slug === synonymSlug) || null;
  }

  // Direct service match
  if (!matchedService) {
    for (const service of CANONICAL_SERVICES) {
      const normalizedServiceAr = normalizeArabic(service.name_ar);
      if (normalizedServiceAr.includes(serviceQuery) || serviceQuery.includes(normalizedServiceAr)) {
        matchedService = service;
        break;
      }
      // Word overlap
      const serviceWords = normalizedServiceAr.split(/\s+/);
      const overlap = serviceQueryWords.filter(w => serviceWords.some(sw => sw.includes(w) || w.includes(sw)));
      if (overlap.length > 0 && overlap.length >= serviceQueryWords.length * 0.5) {
        matchedService = service;
        break;
      }
    }
  }

  if (matchedService) {
    // Only emit a CITY-scoped result when that combo actually has a curated page.
    // Otherwise /{city}/{service} 308-redirects to the national hub, so link the
    // hub directly (and show the hub title) — no misleading city result, no redirect.
    const canonical = getCanonicalSlug(matchedService.slug) || matchedService.slug;
    if (hasPageOverride(matchedCity.slug, canonical)) {
      results.push({
        type: 'composite',
        score: 110, // Highest priority
        href: `/${matchedCity.slug}/${canonical}`,
        title: `${matchedService.name_ar} في ${matchedCity.name_ar}`,
        subtitle: `${matchedService.name_en} in ${matchedCity.name_en}`,
        icon: 'composite',
        matchedQuery: normalizedQuery,
      });
    } else {
      results.push({
        type: 'composite',
        score: 110,
        href: `/${canonical}`,
        title: `${matchedService.name_ar}`,
        subtitle: `${matchedService.name_en}`,
        icon: 'composite',
        matchedQuery: normalizedQuery,
      });
    }
  }

  return results;
}

// ============================================
// 8. SYNONYM RESOLUTION
// ============================================

// Pre-sort synonyms by phrase length descending → longest match first
const SORTED_SYNONYMS = [...SYNONYM_TO_SERVICE.entries()]
  .sort((a, b) => b[0].length - a[0].length);

function resolveSynonym(normalizedQuery: string): string | null {
  // Exact match in synonym map
  const direct = SYNONYM_TO_SERVICE.get(normalizedQuery);
  if (direct) {
    // Ensure we return the canonical slug  
    const canonical = getCanonicalSlug(direct);
    return canonical || direct;
  }

  // Check if query contains any synonym phrase (longest first)
  for (const [phrase, serviceSlug] of SORTED_SYNONYMS) {
    if (phrase.length >= 3 && normalizedQuery.includes(phrase)) {
      const canonical = getCanonicalSlug(serviceSlug);
      return canonical || serviceSlug;
    }
  }

  return null;
}

// ============================================
// 9. HIGHLIGHT UTILITY
// ============================================

export function highlightMatch(text: string, query: string): { text: string; highlight: boolean }[] {
  if (!query.trim()) return [{ text, highlight: false }];

  const normalizedQuery = normalizeArabic(query);
  const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length >= 2);

  if (queryWords.length === 0) return [{ text, highlight: false }];

  // Build position mapping: normalized index → original text position
  // This handles diacritics (tashkeel) that are stripped during normalization.
  // Since normalization replaces chars 1-to-1 (ة→ه, أ→ا) and only strips diacritics,
  // we mark diacritic positions with \0, then map surviving chars to original indices.
  const normalizedText = normalizeArabic(text);
  const textNoDiacritics = text.replace(DIACRITICS_REGEX, '\0');
  const origPositions: number[] = []; // origPositions[normIdx] = original text position
  
  for (let i = 0; i < textNoDiacritics.length; i++) {
    if (textNoDiacritics[i] !== '\0') {
      origPositions.push(i);
    }
  }

  // Find highlight ranges in normalized text, then map back to original
  const normHighlights: { start: number; end: number }[] = [];

  for (const word of queryWords) {
    let idx = 0;
    while (idx < normalizedText.length) {
      const pos = normalizedText.indexOf(word, idx);
      if (pos === -1) break;
      normHighlights.push({ start: pos, end: pos + word.length });
      idx = pos + 1;
    }
  }

  if (normHighlights.length === 0) return [{ text, highlight: false }];

  // Merge overlapping
  normHighlights.sort((a, b) => a.start - b.start);
  const merged: { start: number; end: number }[] = [normHighlights[0]];
  for (let i = 1; i < normHighlights.length; i++) {
    const last = merged[merged.length - 1];
    if (normHighlights[i].start <= last.end) {
      last.end = Math.max(last.end, normHighlights[i].end);
    } else {
      merged.push(normHighlights[i]);
    }
  }

  // Map normalized positions back to original text positions
  const origHighlights = merged.map(h => ({
    start: origPositions[h.start] ?? 0,
    end: h.end < origPositions.length ? (origPositions[h.end] ?? text.length) : text.length,
  }));

  // Build segments from original text
  const segments: { text: string; highlight: boolean }[] = [];
  let lastEnd = 0;

  for (const { start, end } of origHighlights) {
    if (start > lastEnd) {
      segments.push({ text: text.slice(lastEnd, start), highlight: false });
    }
    segments.push({ text: text.slice(start, end), highlight: true });
    lastEnd = end;
  }

  if (lastEnd < text.length) {
    segments.push({ text: text.slice(lastEnd), highlight: false });
  }

  return segments;
}

// ============================================
// 10. SEARCH FOR SERVER-SIDE (search page)
// ============================================

export function serverSearch(query: string) {
  const results = smartSearch(query);

  return {
    composites: results.filter(r => r.type === 'composite'),
    services: results.filter(r => r.type === 'service' || r.type === 'synonym'),
    cities: results.filter(r => r.type === 'city'),
    articles: results.filter(r => r.type === 'article'),
    total: results.length,
  };
}
