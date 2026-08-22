import { NextResponse } from 'next/server';
import { buildProviderSearchSkill } from '@/lib/agent-skills';

/**
 * Agent Skill: prokr-provider-search
 * /.well-known/agent-skills/prokr-provider-search/skill.md
 *
 * Body comes from @/lib/agent-skills so it is byte-identical to the string
 * whose sha256 is published in /.well-known/agent-skills/index.json.
 */

export const revalidate = 86400;

export function GET() {
    return new NextResponse(buildProviderSearchSkill(), {
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
    });
}
