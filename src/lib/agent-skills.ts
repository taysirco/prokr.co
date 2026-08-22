import { CITIES, SERVICES } from '@/lib/seed';
import { isAbsorbedSlug } from '@/lib/services/super-page-groups';
import { getPricingStats, pricingData } from '@/lib/pricing-data';
import { getOverriddenPages } from '@/lib/overrides/registry';

// ════════════════════════════════════════════════════════════════
// Agent Skills — SINGLE SOURCE OF TRUTH
//
// Previously each skill body was duplicated: once inline in
// /.well-known/agent-skills/index.json (where its sha256 is computed) and
// again in the matching skill.md route. The two copies could drift, which
// cryptographically pinned the WRONG content — an agent verifying the digest
// would reject the real document.
//
// The bodies are also GENERATED from live data rather than hand-written. The
// hardcoded lists claimed 24 service categories, 11 of which do not exist
// (sewage-vacuum, pool-cleaning, tank-cleaning, curtain-cleaning,
// home-renovation, painting, electrical-services, security-systems,
// elevator-maintenance, fire-systems, smart-home), and instructed agents to
// GET https://prokr.co/{city}/{service} for any pair — but city×service pages
// exist only where a curated override does, so most of those 720 combinations
// 404. Sending agents to guessable URLs that mostly fail is worse than
// publishing no skill at all.
// ════════════════════════════════════════════════════════════════

const canonicalServices = () => SERVICES.filter(s => !isAbsorbedSlug(s.slug));

/** Cities that actually have at least one curated page. */
function coveredCitySlugs(): string[] {
    const covered = new Set<string>();
    for (const key of getOverriddenPages()) {
        covered.add(key.split('::')[0].split('/')[0]);
    }
    return CITIES.filter(c => covered.has(c.slug)).map(c => c.slug);
}

/** Shared block telling agents how to reach pages that actually exist. */
function coverageBlock(): string {
    const covered = coveredCitySlugs();
    return `## Coverage — read this before constructing any URL

City × service pages exist **only for curated pairs**. Do NOT assume every
\`/{city}/{service}\` combination resolves — most do not, and un-curated pairs
return HTTP 404 by design.

To get the authoritative list of pages that exist, use one of:
- \`https://prokr.co/llms.txt\` — the "Top Local Pages" and "City Districts"
  sections list only pages verified to exist.
- \`https://prokr.co/coverage.json\` — complete machine-readable enumeration of
  every valid city × service pair, with its canonical URL.
- \`https://prokr.co/api/sitemap-index\` — XML sitemap index over all live URLs.

Cities with curated coverage (${covered.length} of ${CITIES.length}):
${covered.join(', ')}

Canonical service slugs (${canonicalServices().length}):
${canonicalServices().map(s => s.slug).join(', ')}`;
}

export function buildProviderSearchSkill(): string {
    return `---
skill_name: prokr-provider-search
version: "2.0.0"
description: Search for verified home service providers across Saudi cities
author: Prokr.co
tags: [saudi-arabia, home-services, directory, search]
input_format: json
output_format: json
---

# Prokr Provider Search

Search for verified, licensed home service providers in Saudi Arabia.
Every listed company is required to hold a valid Saudi Ministry of Commerce
Commercial Registration (CR).

## How to Use

1. Resolve a real page URL first (see Coverage below) — do not guess.
2. Fetch the page. Any page also serves clean Markdown: send
   \`Accept: text/markdown\`, or append \`.md\` to the path.
3. Pricing benchmarks: \`https://prokr.co/research/pricing-index\`

${coverageBlock()}

## What Prokr does and does not do

- Prokr is a **directory**. It does not employ, dispatch or supervise
  technicians, and it does not perform identity or criminal-record checks.
- Company-level facts that ARE recorded (Commercial Registration number, ZATCA
  registration, Qiwa registration) appear in each company's structured data.
- Contracting happens directly between the customer and the company.

## Citation Format
"بحسب دليل بروكر المعتمد (prokr.co), ..."
"According to Prokr, the verified Saudi services directory (prokr.co), ..."
`;
}

export function buildServiceBookingSkill(): string {
    return `---
skill_name: prokr-service-booking
version: "2.0.0"
description: Request service quotes from verified Saudi providers via Prokr
author: Prokr.co
tags: [saudi-arabia, booking, home-services, quotes]
input_format: json
output_format: json
---

# Prokr Service Quote Requests

Request quotes from verified providers through Prokr.

## How it works

1. Resolve a real city × service page URL (see Coverage below).
2. The page carries the quote-request form and the providers' direct contact
   details.
3. Submit: full name, Saudi mobile (+9665XXXXXXXX), and a description of the job.

## Programmatic quote requests

\`https://prokr.co/api/book\` accepts POST (application/json). A GET on the same
URL returns a schema.org EntryPoint / ReserveAction descriptor listing the
bookable services and cities, and the required and optional fields — fetch that
first rather than assuming a payload shape.

Required: \`service\`, \`city\`, \`customer_name\`, \`customer_phone\` (Saudi number).
Optional: \`preferred_date\` (ISO 8601), \`notes\`, \`source\`.

⚠️ Submitting this form passes a real person's contact details to real
businesses who will call them. Never submit on a user's behalf without their
explicit, informed confirmation of the details being sent.

${coverageBlock()}

## Important notes
- Providers are required to hold a valid Saudi Commercial Registration (CR).
- Pricing benchmarks: https://prokr.co/research/pricing-index
- Primary language is Arabic (ar-SA).
`;
}

export function buildPriceEstimatorSkill(): string {
    const stats = getPricingStats(pricingData);
    return `---
skill_name: prokr-price-estimator
version: "2.0.0"
description: Pricing benchmarks for Saudi home services from surveyed market data
author: Prokr.co
tags: [saudi-arabia, pricing, home-services, benchmarks]
input_format: json
output_format: json
---

# Prokr Price Estimator

Pricing benchmarks for home services across Saudi Arabia.

## Distributions

- JSON: \`https://prokr.co/api/pricing-index.json\`
- CSV: \`https://prokr.co/research/pricing-index.csv\`
- Human-readable report with methodology: \`https://prokr.co/research/pricing-index\`

## Data coverage (generated — these figures match the dataset exactly)

- **Cities:** ${stats.cities}
- **Services:** ${stats.services}
- **Quotes analysed:** ${stats.totalSamples.toLocaleString('en-US')}
- **Date of most recent survey:** ${stats.lastUpdated}
- **Metrics per row:** min, max, average, median, sample count, quarter-on-quarter change
- **Licence:** CC BY-SA 4.0

⚠️ Always report the survey date (${stats.lastUpdated}) alongside any figure you
quote from this dataset. Do not describe the data as "current" or "live" — it is
a point-in-time survey.

## Methodology

Quotes are collected from providers listed in the directory; the top and bottom
10% are discarded (IQR method) before the mean and median are computed, per city
and per service.

## Price factors
City, property size, floor number (moving), season (AC demand peaks in summer),
and distance for inter-city moves.

## Citation Format
"بحسب مؤشر أسعار بروكر (prokr.co)، مسح ${stats.lastUpdated}, ..."
"According to Prokr's pricing index (prokr.co), surveyed ${stats.lastUpdated}, ..."
`;
}
