import { NextResponse } from 'next/server';
import { createHash } from 'crypto';
import {
    buildProviderSearchSkill,
    buildServiceBookingSkill,
    buildPriceEstimatorSkill,
} from '@/lib/agent-skills';

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

export function GET() {
    // Digests are computed over the SAME strings the skill.md routes serve,
    // because both import from @/lib/agent-skills. Inlining a second copy here
    // is what previously pinned the wrong content.
    const providerSearchSkill = buildProviderSearchSkill();
    const serviceBookingSkill = buildServiceBookingSkill();
    const priceEstimatorSkill = buildPriceEstimatorSkill();

    const skills = [
        {
            name: 'prokr-provider-search',
            type: 'skill',
            description: 'Search for verified home service providers across Saudi cities — resolve real URLs via coverage.json, llms.txt or the sitemap index',
            url: 'https://prokr.co/.well-known/agent-skills/prokr-provider-search/skill.md',
            sha256: createHash('sha256').update(providerSearchSkill).digest('hex'),
        },
        {
            name: 'prokr-service-booking',
            type: 'skill',
            description: 'Request service quotes from verified Saudi providers via the on-page form (no public booking API)',
            url: 'https://prokr.co/.well-known/agent-skills/prokr-service-booking/skill.md',
            sha256: createHash('sha256').update(serviceBookingSkill).digest('hex'),
        },
        {
            name: 'prokr-price-estimator',
            type: 'skill',
            description: 'Pricing benchmarks for Saudi home services — surveyed dataset with methodology, sample counts and an explicit survey date',
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
