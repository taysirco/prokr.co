import { NextResponse } from 'next/server';

/**
 * Agent Skill: Prokr Price Estimator
 * /.well-known/agent-skills/prokr-price-estimator/SKILL.md
 */

export const revalidate = 86400;

export function GET() {
    const skillMd = `---
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

    return new NextResponse(skillMd, {
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
        },
    });
}
