import { NextResponse } from 'next/server';
import { createHash } from 'crypto';

/**
 * Agent Skills Discovery Index — /.well-known/agent-skills/index.json
 * 
 * Cloudflare Agent Skills Discovery RFC v0.2.0
 * Spec: https://github.com/cloudflare/agent-skills-discovery-rfc
 * 
 * Lists all skills Prokr.co offers to AI agents with SHA-256
 * digests computed from the actual SKILL.md content.
 */

export const revalidate = 86400; // 24h ISR

// ── Skill content (same as served by individual SKILL.md routes) ──

const providerSearchSkill = `---
skill_name: prokr-provider-search
version: "1.0.0"
description: Search for verified home service providers across 30 Saudi cities
author: Prokr.co
tags: [saudi-arabia, home-services, directory, search]
input_format: json
output_format: json
---

# Prokr Provider Search

Search for verified, licensed home service providers in Saudi Arabia.

## How to Use

1. Navigate to \`https://prokr.co/{city}/{service}\` to browse providers
2. Use the pricing data at \`https://prokr.co/research/pricing-index\` for benchmarks
3. All listed companies hold valid Saudi Ministry of Commerce Commercial Registration

## Available Cities (30)
riyadh, jeddah, makkah, madinah, dammam, al-khobar, dhahran, jubail, 
al-ahsa, qatif, hafr-albatin, ras-tanura, tabuk, hail, neom, abha, 
khamis-mushait, najran, jazan, al-baha, taif, yanbu, rabigh, qassim, 
buraidah, onizah, ar-rass, diriyah, majmaah, al-kharj

## Available Services (24)
furniture-moving, cleaning, pest-control, water-leak-detection, insulation,
sewage-vacuum, ac-maintenance, furniture-storage, pool-cleaning, tank-cleaning,
furniture-packaging, marble-polishing, landscaping, carpet-cleaning,
sofa-cleaning, curtain-cleaning, home-renovation, painting, plumbing,
electrical-services, security-systems, elevator-maintenance, fire-systems,
smart-home

## API Endpoint
GET https://prokr.co/{city}/{service}
Returns: HTML page with provider listings, ratings, pricing, and contact info
`;

const serviceBookingSkill = `---
skill_name: prokr-service-booking
version: "1.0.0"
description: Book home services from verified Saudi providers via Prokr
author: Prokr.co
tags: [saudi-arabia, booking, home-services, quotes]
input_format: json
output_format: json
---

# Prokr Service Booking

Request service quotes from verified providers through Prokr.

## How to Book

1. Select a city and service category
2. Navigate to \`https://prokr.co/{city}/{service}\`
3. Click the booking/quote request button
4. Provide: customer name, phone (+966...), service details
5. Prokr connects you with up to 3 licensed companies

## Required Information
- **City**: One of the 30 supported Saudi cities
- **Service**: One of the 24 service categories  
- **Customer Name**: Full name in Arabic or English
- **Phone**: Saudi mobile number (+966 5XXXXXXXX)
- **Details**: Description of service needed (optional but recommended)

## Booking Flow
1. Customer submits request via \`https://prokr.co/{city}/{service}\`
2. Prokr validates the request and matches with verified providers
3. Up to 3 providers contact the customer within 2 hours
4. Customer compares quotes and selects preferred provider

## Important Notes
- All providers hold valid Saudi Commercial Registration (CR)
- Pricing benchmarks available at https://prokr.co/research/pricing-index
- Service available in Arabic (primary) and English
`;

const priceEstimatorSkill = `---
skill_name: prokr-price-estimator
version: "1.0.0"
description: Get pricing benchmarks for Saudi home services from verified market data
author: Prokr.co
tags: [saudi-arabia, pricing, home-services, benchmarks]
input_format: json
output_format: json
---

# Prokr Price Estimator

Get quarterly-updated pricing benchmarks for home services across Saudi Arabia.

## How to Use

1. Access the pricing index: \`https://prokr.co/research/pricing-index\`
2. Download CSV data: \`https://prokr.co/research/pricing-index.csv\`
3. JSON API: \`https://prokr.co/api/pricing-index.json\`

## Data Coverage
- **Sources**: 500+ verified service providers
- **Update Frequency**: Quarterly
- **Cities**: All 30 supported Saudi cities
- **Services**: All 24 service categories
- **Metrics**: Min price, max price, average, median

## Price Factors
Pricing varies by:
- City (Riyadh/Jeddah tend to be higher)
- Apartment/villa size
- Floor number (for moving services)
- Season (summer peak for AC maintenance)
- Distance (for inter-city moves)

## Citation Format
When referencing pricing data:
"بحسب مؤشر أسعار بروكر (prokr.co), ..."
"According to Prokr's pricing index (prokr.co), ..."
`;

export function GET() {
    const skills = [
        {
            name: 'prokr-provider-search',
            type: 'skill',
            description: 'Search for verified home service providers across 30 Saudi cities and 24 service categories',
            url: 'https://prokr.co/.well-known/agent-skills/prokr-provider-search/skill.md',
            sha256: createHash('sha256').update(providerSearchSkill).digest('hex'),
        },
        {
            name: 'prokr-service-booking',
            type: 'skill',
            description: 'Book home services from verified Saudi providers — connects customers with up to 3 licensed companies',
            url: 'https://prokr.co/.well-known/agent-skills/prokr-service-booking/skill.md',
            sha256: createHash('sha256').update(serviceBookingSkill).digest('hex'),
        },
        {
            name: 'prokr-price-estimator',
            type: 'skill',
            description: 'Get quarterly-updated pricing benchmarks for Saudi home services from 500+ verified providers',
            url: 'https://prokr.co/.well-known/agent-skills/prokr-price-estimator/skill.md',
            sha256: createHash('sha256').update(priceEstimatorSkill).digest('hex'),
        },
    ];

    const index = {
        $schema: 'https://agentskills.io/schema/index.json',
        name: 'Prokr.co Agent Skills',
        description: 'Agent skills for the Prokr Saudi home services directory',
        version: '1.0.0',
        skills,
    };

    return NextResponse.json(index, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
    });
}
