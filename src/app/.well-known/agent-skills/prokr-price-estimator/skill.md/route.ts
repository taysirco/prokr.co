import { NextResponse } from 'next/server';
import { buildPriceEstimatorSkill } from '@/lib/agent-skills';

/**
 * Agent Skill: prokr-price-estimator
 * /.well-known/agent-skills/prokr-price-estimator/skill.md
 *
 * Body comes from @/lib/agent-skills so it is byte-identical to the string
 * whose sha256 is published in /.well-known/agent-skills/index.json.
 */

export const revalidate = 86400;

export function GET() {
    return new NextResponse(buildPriceEstimatorSkill(), {
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
    });
}
