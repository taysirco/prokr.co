/**
 * Prokr.com → Prokr.co Bulk Redirect Generator
 * 
 * Reads prokr.com-links.md and generates a Cloudflare Bulk Redirect CSV
 * with intelligent service/city mapping based on prokr.co's URL structure.
 */

const fs = require('fs');
const path = require('path');

// ============================================================
// MAPPING TABLES
// ============================================================

// City name mapping: prokr.com slug → prokr.co slug
const CITY_MAP = {
  'riyadh': 'riyadh',
  'jeddah': 'jeddah',
  'makkah': 'makkah',
  'madinah': 'madinah',
  'dammam': 'dammam',
  'khobar': 'al-khobar',
  'dhahran': 'dhahran',
  'tabuk': 'tabuk',
  'taif': 'taif',
  'hail': 'hail',
  'jubail': 'jubail',
  'abha': 'abha',
  'khamis-mushait': 'khamis-mushait',
  'najran': 'najran',
  'jazan': 'jazan',
  'yanbu': 'yanbu',
  'al-ahsa': 'al-ahsa',
  'qatif': 'qatif',
  'buraydah': 'buraidah',
  'hafr-al-batin': 'hafr-albatin',
  'al-bahah': 'al-baha',
  'onaizah': 'onizah',
  'al-majmah': 'majmaah',
  'ras-tanura': 'ras-tanura',
  'rabigh': 'rabigh',
  // Cities that don't exist on prokr.co — fallback to /locations
  'sakaka': null,
  'arar': null,
  'wadi-ad-dawasir': null,
  'az-zulfi': null,
  'safwa': null,
  'sayhat': null,
  'muhayil': null,
  'bisha': null,
  'umluj': null,
  'duba': null,
  'tayma': null,
  'al-lith': null,
  'alqunfudhah': null,
  'al-majmah': 'majmaah',
};

// Service mapping: prokr.com service slug → prokr.co service slug
const SERVICE_MAP = {
  'moving': 'furniture-moving',
  'cleaning': 'cleaning',
  'pest-control': 'pest-control',
  'leaks-plumbing': 'water-leak-detection',
  'ac': 'air-conditioner-cleaning',
  'electricity': null, // no equivalent
  'painting-gypsum': null, // no equivalent
  'carpentry': null, // no equivalent
  'aluminum-glass': null, // no equivalent
  'flooring': null, // no equivalent
  'landscaping': 'landscaping',
  'appliances': null, // no equivalent
  'insulation-roofs': 'roof-insulation',
  'car-towing': null, // no equivalent
};

// Sub-service mapping: old sub-service slug → prokr.co service slug
const SUB_SERVICE_MAP = {
  // Moving sub-services
  'city-to-city': 'intercity-moving',
  'apartment-moving': 'furniture-moving',
  'villa-moving': 'furniture-moving',
  'office-moving': 'furniture-moving',
  'storage': 'furniture-storage',
  'crane-lifting': 'heavy-equipment-moving',
  'furniture-packing': 'furniture-packaging',
  'moving-boxes': 'furniture-packaging',
  'disassembly-assembly': 'furniture-moving',
  'insurance-warranty': 'furniture-moving',
  // Cleaning sub-services
  'deep-cleaning': 'deep-cleaning',
  'sanitization': 'sanitization',
  'sofa-curtains': 'sofa-cleaning',
  'carpet-rug': 'carpet-cleaning',
  'marble-polishing': 'marble-polishing',
  'facade-cleaning': 'glass-facades-cleaning',
  'hourly-cleaning': 'hourly-cleaning',
  'tank-cleaning': 'tanks-cleaning',
  'post-construction': 'post-construction-cleaning',
  // Pest control sub-services
  'termites': 'termite-control',
  'cockroaches': 'cockroach-control',
  'bed-bugs': 'bedbugs-control',
  'rodents': 'rodent-control',
  'ants': 'ants-control',
  'general-spray': 'pesticide-spraying',
  'annual-contracts': 'pest-control',
  'municipality-certificate': 'pest-control',
  // Leaks/plumbing sub-services
  'acoustic-leak-detection': 'water-leak-detection',
  'thermal-leak-detection': 'water-leak-detection',
  'tank-leaks': 'tank-leak-detection',
  'drain-unclogging': 'sewage-unblocking',
  'pipe-repair': 'plumbing',
  'pumps-valves': 'plumbing',
  'bathroom-kitchen-waterproofing': 'bathroom-leak-detection',
  // AC sub-services
  'split-ac-cleaning': 'air-conditioner-cleaning',
  'maintenance-repair': 'ac-maintenance',
  'ac-installation': 'ac-installation',
  'duct-cleaning': 'air-conditioner-cleaning',
  'freon-refill': 'ac-maintenance',
  'unit-relocation': 'ac-maintenance',
  // Insulation sub-services
  'thermal-insulation': 'thermal-insulation',
  'water-proofing': 'water-insulation',
  'foam-bitumen': 'foam-insulation',
  'cracks-treatment': 'roof-insulation',
  // Electricity sub-services (no equivalent — go to city)
  'wiring-lighting': null,
  'panels-distribution': null,
  'electrical-faults': null,
  'cctv-systems': null,
  // Painting sub-services (no equivalent — go to city)
  'interior-painting': null,
  'exterior-painting': null,
  'wallpaper': null,
  'gypsum-board': null,
  'decor': null,
  // Carpentry sub-services (no equivalent)
  'doors-windows': null,
  'furniture-repair': null,
  'kitchen-cabinets': null,
  'bedrooms': null,
  // Aluminum sub-services (no equivalent)
  'aluminum-windows-doors': null,
  'glass-facades': null,
  'shades-curtains': null,
  // Flooring sub-services (no equivalent)
  'parquet-vinyl': null,
  'marble-granite': null,
  'ceramic-porcelain': null,
  'grinding-polishing': null,
  // Landscaping sub-services
  'garden-design': 'landscaping',
  'palm-trees': 'landscaping',
  'lawn-mowing': 'landscaping',
  'irrigation-systems': 'landscaping',
  // Appliance sub-services (no equivalent)
  'refrigerators': null,
  'washing-machines': null,
  'ovens-stoves': null,
  'dryers': null,
  // Car towing sub-services (no equivalent)
  'city-towing': null,
  'intercity-towing': null,
  'luxury-car-transport': null,
};

// The corporate acquisition page — designed to receive ALL legacy domain traffic
// Contains AcquireAction schema + PageRank drip-feed arteries
const ACQUISITION_PAGE = '/corporate/acquisition';

// Static page mapping
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

// ============================================================
// URL RESOLVER
// ============================================================

function resolveRedirect(oldPath) {
  // 1. Static pages
  if (STATIC_MAP[oldPath] !== undefined) {
    return STATIC_MAP[oldPath];
  }

  // 2. Blog
  if (oldPath === '/blog') return '/blog';
  if (oldPath.startsWith('/blog/')) return '/blog';

  // 3. Services pages: /services/{service} or /services/{service}/{sub}
  if (oldPath.startsWith('/services/')) {
    return '/services-page';
  }

  // 4. /saudi/{city}/{service}/{sub-service}
  const saudiSubMatch = oldPath.match(/^\/saudi\/([^/]+)\/([^/]+)\/([^/]+)$/);
  if (saudiSubMatch) {
    const [, city, service, subService] = saudiSubMatch;
    const mappedCity = CITY_MAP[city];
    const mappedSubService = SUB_SERVICE_MAP[subService];
    const mappedService = SERVICE_MAP[service];
    
    if (mappedCity && mappedSubService) {
      return `/${mappedCity}/${mappedSubService}`;
    }
    if (mappedCity && mappedService) {
      return `/${mappedCity}/${mappedService}`;
    }
    if (mappedCity) {
      return `/${mappedCity}`;
    }
    return ACQUISITION_PAGE;
  }

  // 5. /saudi/{city}/{service}
  const saudiServiceMatch = oldPath.match(/^\/saudi\/([^/]+)\/([^/]+)$/);
  if (saudiServiceMatch) {
    const [, city, service] = saudiServiceMatch;
    const mappedCity = CITY_MAP[city];
    const mappedService = SERVICE_MAP[service];
    
    if (mappedCity && mappedService) {
      return `/${mappedCity}/${mappedService}`;
    }
    if (mappedCity) {
      return `/${mappedCity}`;
    }
    return ACQUISITION_PAGE;
  }

  // 6. /saudi/{city}
  const saudiCityMatch = oldPath.match(/^\/saudi\/([^/]+)$/);
  if (saudiCityMatch) {
    const city = saudiCityMatch[1];
    const mappedCity = CITY_MAP[city];
    if (mappedCity) {
      return `/${mappedCity}`;
    }
    return ACQUISITION_PAGE;
  }

  // 7. /pricing/{service}/{city} or /deals/{service}/{city} or /faq/{service}/{city} or /emergency/{service}/{city}
  const contextMatch = oldPath.match(/^\/(pricing|deals|faq|emergency)\/([^/]+)\/([^/]+)$/);
  if (contextMatch) {
    const [, , service, city] = contextMatch;
    const mappedCity = CITY_MAP[city];
    const mappedService = SERVICE_MAP[service];
    
    if (mappedCity && mappedService) {
      return `/${mappedCity}/${mappedService}`;
    }
    if (mappedCity) {
      return `/${mappedCity}`;
    }
    return ACQUISITION_PAGE;
  }

  // 8. /pricing/{service} or /deals/{service} etc.
  const contextOnlyMatch = oldPath.match(/^\/(pricing|deals|faq|emergency)\/([^/]+)$/);
  if (contextOnlyMatch) {
    return ACQUISITION_PAGE;
  }

  // 9. Catch-all
  return ACQUISITION_PAGE;
}

// ============================================================
// MAIN
// ============================================================

function main() {
  const linksFile = path.join(__dirname, '../../prokr.com-links.md');
  const outputCSV = path.join(__dirname, 'bulk-redirects.csv');
  const outputJSON = path.join(__dirname, 'bulk-redirects.json');

  const content = fs.readFileSync(linksFile, 'utf-8');
  const links = content
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.startsWith('<https://prokr.com'))
    .map(line => {
      const url = line.replace(/^</, '').replace(/>$/, '');
      try {
        return new URL(url).pathname;
      } catch {
        return null;
      }
    })
    .filter(Boolean);

  console.log(`📊 Found ${links.length} links to process`);

  // Generate redirects
  const redirects = [];
  const stats = { exact: 0, cityService: 0, cityOnly: 0, acquisition: 0, locations: 0 };

  for (const oldPath of links) {
    const newPath = resolveRedirect(oldPath);
    const sourceUrl = `https://prokr.com${oldPath}`;
    const targetUrl = `https://prokr.co${newPath}`;

    redirects.push({
      source: sourceUrl,
      target: targetUrl,
      status: 301,
      oldPath,
      newPath,
    });

    if (newPath === ACQUISITION_PAGE) stats.acquisition++;
    else if (newPath === '/locations') stats.locations++;
    else if (newPath.split('/').length >= 3) stats.cityService++;
    else if (newPath.split('/').length === 2) stats.cityOnly++;
    else stats.exact++;
  }

  // Write CSV (Cloudflare Bulk Redirect format)
  const csvHeader = 'Source URL,Target URL,Status Code,Include subpaths,Subpath matching,Preserve query string,Preserve path suffix';
  const csvRows = redirects.map(r => 
    `${r.source},${r.target},${r.status},FALSE,FALSE,FALSE,FALSE`
  );
  fs.writeFileSync(outputCSV, [csvHeader, ...csvRows].join('\n'));
  console.log(`✅ CSV written: ${outputCSV} (${csvRows.length} redirects)`);

  // Write JSON (for reference)
  fs.writeFileSync(outputJSON, JSON.stringify(redirects, null, 2));
  console.log(`✅ JSON written: ${outputJSON}`);

  // Stats
  console.log('\n📊 Statistics:');
  console.log(`  ✅ Exact matches: ${stats.exact}`);
  console.log(`  🏙️ City + Service: ${stats.cityService}`);
  console.log(`  🏙️ City only: ${stats.cityOnly}`);
  console.log(`  📄 → /corporate/acquisition: ${stats.acquisition}`);
  console.log(`  📍 → /locations: ${stats.locations}`);
  console.log(`  📋 Total: ${redirects.length}`);

  // Sample output
  console.log('\n📋 Sample redirects:');
  const samples = [
    '/saudi/riyadh',
    '/saudi/jeddah/cleaning/deep-cleaning',
    '/saudi/dammam/pest-control/termites',
    '/saudi/khobar/leaks-plumbing',
    '/pricing/ac/riyadh',
    '/blog/best-pest-control-methods-saudi-arabia',
    '/about',
    '/saudi/buraydah/moving',
    '/services/moving/villa-moving',
    '/emergency/leaks-plumbing/jeddah',
  ];
  for (const s of samples) {
    if (links.includes(s)) {
      const r = redirects.find(r => r.oldPath === s);
      console.log(`  ${s} → ${r.newPath}`);
    }
  }
}

main();
