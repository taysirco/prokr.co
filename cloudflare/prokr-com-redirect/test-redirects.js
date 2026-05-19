/**
 * ═══════════════════════════════════════════════════════════════
 * Redirect Test Suite — prokr.com → prokr.co
 * ═══════════════════════════════════════════════════════════════
 * 
 * Tests the redirect logic in the Worker without deploying.
 * Run: node test-redirects.js
 */

// Import the resolve function by extracting it
// (In production, the Worker handles this at the edge)

const ACQUISITION_PAGE = '/corporate/acquisition';

const CITY_MAP = {
  'riyadh': 'riyadh', 'jeddah': 'jeddah', 'makkah': 'makkah',
  'madinah': 'madinah', 'dammam': 'dammam', 'khobar': 'al-khobar',
  'dhahran': 'dhahran', 'tabuk': 'tabuk', 'taif': 'taif',
  'hail': 'hail', 'jubail': 'jubail', 'abha': 'abha',
  'khamis-mushait': 'khamis-mushait', 'najran': 'najran',
  'jazan': 'jazan', 'yanbu': 'yanbu', 'al-ahsa': 'al-ahsa',
  'qatif': 'qatif', 'buraydah': 'buraidah', 'hafr-al-batin': 'hafr-albatin',
  'al-bahah': 'al-baha', 'onaizah': 'onizah', 'al-majmah': 'majmaah',
  'ras-tanura': 'ras-tanura', 'rabigh': 'rabigh',
  'sakaka': null, 'arar': null, 'wadi-ad-dawasir': null,
  'az-zulfi': null, 'safwa': null, 'sayhat': null,
  'muhayil': null, 'bisha': null, 'umluj': null,
  'duba': null, 'tayma': null, 'al-lith': null, 'alqunfudhah': null,
};

const SERVICE_MAP = {
  'moving': 'furniture-moving', 'cleaning': 'cleaning',
  'pest-control': 'pest-control', 'leaks-plumbing': 'water-leak-detection',
  'ac': 'air-conditioner-cleaning', 'landscaping': 'landscaping',
  'insulation-roofs': 'roof-insulation',
  'electricity': null, 'painting-gypsum': null, 'carpentry': null,
  'aluminum-glass': null, 'flooring': null, 'appliances': null,
  'car-towing': null,
};

const SUB_SERVICE_MAP = {
  'city-to-city': 'intercity-moving', 'apartment-moving': 'furniture-moving',
  'villa-moving': 'furniture-moving', 'office-moving': 'furniture-moving',
  'storage': 'furniture-storage', 'crane-lifting': 'heavy-equipment-moving',
  'furniture-packing': 'furniture-packaging', 'moving-boxes': 'furniture-packaging',
  'disassembly-assembly': 'furniture-moving', 'insurance-warranty': 'furniture-moving',
  'deep-cleaning': 'deep-cleaning', 'sanitization': 'sanitization',
  'sofa-curtains': 'sofa-cleaning', 'carpet-rug': 'carpet-cleaning',
  'marble-polishing': 'marble-polishing', 'facade-cleaning': 'glass-facades-cleaning',
  'hourly-cleaning': 'hourly-cleaning', 'tank-cleaning': 'tanks-cleaning',
  'post-construction': 'post-construction-cleaning',
  'termites': 'termite-control', 'cockroaches': 'cockroach-control',
  'bed-bugs': 'bedbugs-control', 'rodents': 'rodent-control',
  'ants': 'ants-control', 'general-spray': 'pesticide-spraying',
  'annual-contracts': 'pest-control', 'municipality-certificate': 'pest-control',
  'acoustic-leak-detection': 'water-leak-detection',
  'thermal-leak-detection': 'water-leak-detection',
  'tank-leaks': 'tank-leak-detection', 'drain-unclogging': 'sewage-unblocking',
  'pipe-repair': 'plumbing', 'pumps-valves': 'plumbing',
  'bathroom-kitchen-waterproofing': 'bathroom-leak-detection',
  'split-ac-cleaning': 'air-conditioner-cleaning',
  'maintenance-repair': 'ac-maintenance', 'ac-installation': 'ac-installation',
  'duct-cleaning': 'air-conditioner-cleaning',
  'freon-refill': 'ac-maintenance', 'unit-relocation': 'ac-maintenance',
  'thermal-insulation': 'thermal-insulation', 'water-proofing': 'water-insulation',
  'foam-bitumen': 'foam-insulation', 'cracks-treatment': 'roof-insulation',
  'garden-design': 'landscaping', 'palm-trees': 'landscaping',
  'lawn-mowing': 'landscaping', 'irrigation-systems': 'landscaping',
  'wiring-lighting': null, 'panels-distribution': null, 'wallpaper': null,
  'doors-windows': null, 'refrigerators': null, 'city-towing': null,
};

const STATIC_MAP = {
  '/': ACQUISITION_PAGE,
  '/about': '/about-us',
  '/contact': '/contact-us',
  '/privacy': '/privacy-policy',
  '/terms': '/terms-of-service',
  '/providers': ACQUISITION_PAGE,
  '/coverage': '/locations',
  '/service-area': '/locations',
  '/faqs': ACQUISITION_PAGE,
  '/deals': ACQUISITION_PAGE,
  '/pricing': ACQUISITION_PAGE,
  '/emergency': ACQUISITION_PAGE,
  '/saudi': '/locations',
  '/services': '/services-page',
};

function resolveRedirect(pathname) {
  const path = (pathname || '/').replace(/\/+$/, '') || '/';
  if (STATIC_MAP[path] !== undefined) return STATIC_MAP[path];
  if (path === '/blog' || path.startsWith('/blog/')) return '/blog';
  if (path.startsWith('/services')) return '/services-page';

  const saudiSubMatch = path.match(/^\/saudi\/([^/]+)\/([^/]+)\/([^/]+)$/);
  if (saudiSubMatch) {
    const [, city, service, subService] = saudiSubMatch;
    const mappedCity = CITY_MAP[city];
    const mappedSub = SUB_SERVICE_MAP[subService];
    const mappedService = SERVICE_MAP[service];
    if (mappedCity && mappedSub) return `/${mappedCity}/${mappedSub}`;
    if (mappedCity && mappedService) return `/${mappedCity}/${mappedService}`;
    if (mappedCity) return `/${mappedCity}`;
    return ACQUISITION_PAGE;
  }

  const saudiServiceMatch = path.match(/^\/saudi\/([^/]+)\/([^/]+)$/);
  if (saudiServiceMatch) {
    const [, city, service] = saudiServiceMatch;
    const mappedCity = CITY_MAP[city];
    const mappedService = SERVICE_MAP[service];
    if (mappedCity && mappedService) return `/${mappedCity}/${mappedService}`;
    if (mappedCity) return `/${mappedCity}`;
    return ACQUISITION_PAGE;
  }

  const saudiCityMatch = path.match(/^\/saudi\/([^/]+)$/);
  if (saudiCityMatch) {
    const mappedCity = CITY_MAP[saudiCityMatch[1]];
    return mappedCity ? `/${mappedCity}` : ACQUISITION_PAGE;
  }

  const contextMatch = path.match(/^\/(pricing|deals|faq|emergency)\/([^/]+)\/([^/]+)$/);
  if (contextMatch) {
    const [, , service, city] = contextMatch;
    const mappedCity = CITY_MAP[city];
    const mappedService = SERVICE_MAP[service];
    if (mappedCity && mappedService) return `/${mappedCity}/${mappedService}`;
    if (mappedCity) return `/${mappedCity}`;
    return ACQUISITION_PAGE;
  }

  if (path.match(/^\/(pricing|deals|faq|emergency)\/[^/]+$/)) return ACQUISITION_PAGE;

  return ACQUISITION_PAGE;
}

// ═══════════════════════════════════════════════════════════════
// TEST CASES
// ═══════════════════════════════════════════════════════════════

const tests = [
  // ── Static Pages ──
  ['/', ACQUISITION_PAGE, 'Homepage → acquisition'],
  ['/about', '/about-us', 'About → about-us'],
  ['/contact', '/contact-us', 'Contact → contact-us'],
  ['/privacy', '/privacy-policy', 'Privacy → privacy-policy'],
  ['/terms', '/terms-of-service', 'Terms → terms-of-service'],
  ['/providers', ACQUISITION_PAGE, 'Providers → acquisition'],
  ['/coverage', '/locations', 'Coverage → locations'],
  ['/service-area', '/locations', 'Service area → locations'],
  ['/saudi', '/locations', '/saudi → locations'],
  ['/services', '/services-page', '/services → services-page'],
  ['/faqs', ACQUISITION_PAGE, 'FAQs → acquisition'],
  ['/deals', ACQUISITION_PAGE, 'Deals → acquisition'],
  ['/pricing', ACQUISITION_PAGE, 'Pricing → acquisition'],
  ['/emergency', ACQUISITION_PAGE, 'Emergency → acquisition'],

  // ── Blog ──
  ['/blog', '/blog', 'Blog index → blog'],
  ['/blog/best-pest-control-methods', '/blog', 'Blog article → blog'],
  ['/blog/category/cleaning', '/blog', 'Blog category → blog'],

  // ── Services Pages ──
  ['/services/moving', '/services-page', 'Service → services-page'],
  ['/services/cleaning/deep-cleaning', '/services-page', 'Sub-service → services-page'],

  // ── /saudi/{city} ──
  ['/saudi/riyadh', '/riyadh', 'Saudi/Riyadh → /riyadh'],
  ['/saudi/jeddah', '/jeddah', 'Saudi/Jeddah → /jeddah'],
  ['/saudi/khobar', '/al-khobar', 'Saudi/Khobar → /al-khobar (city rename)'],
  ['/saudi/buraydah', '/buraidah', 'Saudi/Buraydah → /buraidah (spelling fix)'],
  ['/saudi/hafr-al-batin', '/hafr-albatin', 'Saudi/Hafr-al-batin → /hafr-albatin'],
  ['/saudi/al-bahah', '/al-baha', 'Saudi/Al-bahah → /al-baha'],
  ['/saudi/onaizah', '/onizah', 'Saudi/Onaizah → /onizah'],
  ['/saudi/al-majmah', '/majmaah', 'Saudi/Al-majmah → /majmaah'],
  ['/saudi/sakaka', ACQUISITION_PAGE, 'Saudi/Sakaka → acquisition (no equivalent)'],
  ['/saudi/bisha', ACQUISITION_PAGE, 'Saudi/Bisha → acquisition (no equivalent)'],

  // ── /saudi/{city}/{service} ──
  ['/saudi/riyadh/moving', '/riyadh/furniture-moving', 'Riyadh moving → furniture-moving'],
  ['/saudi/jeddah/cleaning', '/jeddah/cleaning', 'Jeddah cleaning → cleaning'],
  ['/saudi/dammam/pest-control', '/dammam/pest-control', 'Dammam pest control'],
  ['/saudi/makkah/leaks-plumbing', '/makkah/water-leak-detection', 'Makkah leaks → water-leak-detection'],
  ['/saudi/riyadh/ac', '/riyadh/air-conditioner-cleaning', 'Riyadh AC → AC cleaning'],
  ['/saudi/tabuk/insulation-roofs', '/tabuk/roof-insulation', 'Tabuk insulation'],
  ['/saudi/hail/electricity', '/hail', 'Hail electricity → city only (no equivalent service)'],
  ['/saudi/riyadh/carpentry', '/riyadh', 'Riyadh carpentry → city only'],
  ['/saudi/bisha/cleaning', ACQUISITION_PAGE, 'Bisha cleaning → acquisition (no city)'],

  // ── /saudi/{city}/{service}/{sub-service} ──
  ['/saudi/riyadh/pest-control/termites', '/riyadh/termite-control', 'Riyadh termites'],
  ['/saudi/jeddah/cleaning/deep-cleaning', '/jeddah/deep-cleaning', 'Jeddah deep cleaning'],
  ['/saudi/dammam/moving/villa-moving', '/dammam/furniture-moving', 'Dammam villa moving'],
  ['/saudi/makkah/leaks-plumbing/acoustic-leak-detection', '/makkah/water-leak-detection', 'Makkah acoustic leak'],
  ['/saudi/riyadh/ac/freon-refill', '/riyadh/ac-maintenance', 'Riyadh freon → AC maintenance'],
  ['/saudi/jeddah/leaks-plumbing/drain-unclogging', '/jeddah/sewage-unblocking', 'Jeddah drain → sewage'],
  ['/saudi/tabuk/insulation-roofs/foam-bitumen', '/tabuk/foam-insulation', 'Tabuk foam insulation'],
  ['/saudi/riyadh/moving/storage', '/riyadh/furniture-storage', 'Riyadh storage'],
  ['/saudi/khobar/pest-control/bed-bugs', '/al-khobar/bedbugs-control', 'Khobar bed bugs'],
  ['/saudi/riyadh/electricity/wiring-lighting', '/riyadh', 'Riyadh wiring → city (no sub)'],
  ['/saudi/bisha/pest-control/termites', ACQUISITION_PAGE, 'Bisha termites → acquisition'],

  // ── /pricing/{service}/{city} ──
  ['/pricing/pest-control/riyadh', '/riyadh/pest-control', 'Pricing pest-control riyadh'],
  ['/pricing/ac/jeddah', '/jeddah/air-conditioner-cleaning', 'Pricing AC jeddah'],
  ['/pricing/moving/dammam', '/dammam/furniture-moving', 'Pricing moving dammam'],
  ['/pricing/electricity/riyadh', '/riyadh', 'Pricing electricity → city only'],
  ['/pricing/cleaning/bisha', ACQUISITION_PAGE, 'Pricing cleaning bisha → acquisition'],

  // ── /deals/{service}/{city} ──
  ['/deals/cleaning/makkah', '/makkah/cleaning', 'Deals cleaning makkah'],
  ['/deals/pest-control/jeddah', '/jeddah/pest-control', 'Deals pest jeddah'],
  ['/deals/painting-gypsum/riyadh', '/riyadh', 'Deals painting → city only'],

  // ── /faq/{service}/{city} ──
  ['/faq/moving/riyadh', '/riyadh/furniture-moving', 'FAQ moving riyadh'],
  ['/faq/ac/jazan', '/jazan/air-conditioner-cleaning', 'FAQ AC jazan'],
  ['/faq/carpentry/muhayil', ACQUISITION_PAGE, 'FAQ carpentry muhayil → acquisition'],

  // ── /emergency/{service}/{city} ──
  ['/emergency/leaks-plumbing/jeddah', '/jeddah/water-leak-detection', 'Emergency leaks jeddah'],
  ['/emergency/moving/riyadh', '/riyadh/furniture-moving', 'Emergency moving riyadh'],

  // ── Edge Cases ──
  ['/unknown-page', ACQUISITION_PAGE, 'Unknown page → acquisition'],
  ['/saudi/riyadh/', '/riyadh', 'Trailing slash normalized'],
  ['/', ACQUISITION_PAGE, 'Root → acquisition'],
];

// ═══════════════════════════════════════════════════════════════
// RUN TESTS
// ═══════════════════════════════════════════════════════════════

let passed = 0;
let failed = 0;

console.log('═══════════════════════════════════════════════════════');
console.log('  Redirect Test Suite — prokr.com → prokr.co');
console.log('═══════════════════════════════════════════════════════\n');

for (const [input, expected, label] of tests) {
  const result = resolveRedirect(input);
  if (result === expected) {
    passed++;
    console.log(`  ✅ ${label}`);
    console.log(`     ${input} → ${result}`);
  } else {
    failed++;
    console.log(`  ❌ ${label}`);
    console.log(`     ${input}`);
    console.log(`     Expected: ${expected}`);
    console.log(`     Got:      ${result}`);
  }
}

console.log('\n═══════════════════════════════════════════════════════');
console.log(`  Results: ${passed} passed, ${failed} failed, ${tests.length} total`);
console.log('═══════════════════════════════════════════════════════');

if (failed > 0) {
  process.exit(1);
}
