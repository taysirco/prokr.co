import { NextResponse } from 'next/server';

/**
 * Agent Skill: Prokr Provider Search
 * /.well-known/agent-skills/prokr-provider-search/SKILL.md
 */

export const revalidate = 86400;

export function GET() {
    const skillMd = `---
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

    return new NextResponse(skillMd, {
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
        },
    });
}
