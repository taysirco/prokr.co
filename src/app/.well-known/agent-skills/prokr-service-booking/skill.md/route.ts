import { NextResponse } from 'next/server';

/**
 * Agent Skill: Prokr Service Booking
 * /.well-known/agent-skills/prokr-service-booking/SKILL.md
 */

export const revalidate = 86400;

export function GET() {
    const skillMd = `---
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

    return new NextResponse(skillMd, {
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
        },
    });
}
