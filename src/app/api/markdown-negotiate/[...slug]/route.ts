import { NextRequest, NextResponse } from 'next/server';

/**
 * Markdown Content Negotiation Handler
 * /api/markdown-negotiate/[...slug]/route.ts
 * 
 * When the middleware detects Accept: text/markdown, it rewrites
 * the request here. This handler returns a markdown representation
 * of the requested page.
 * 
 * - Homepage → serves llms.txt content
 * - Other pages → structured markdown summary
 */

const baseUrl = 'https://prokr.co';

export async function GET(request: NextRequest) {
    const slug = request.nextUrl.pathname.replace('/api/markdown-negotiate', '').replace(/^\/+/, '');
    const path = slug || '';

    // Homepage → serve llms.txt content (our comprehensive markdown representation)
    if (path === '' || path === 'index') {
        try {
            const llmsResponse = await fetch(`${baseUrl}/llms.txt`, {
                headers: { 'Accept': 'text/plain' },
                next: { revalidate: 86400 },
            });
            if (llmsResponse.ok) {
                const content = await llmsResponse.text();
                return new NextResponse(content, {
                    headers: {
                        'Content-Type': 'text/markdown; charset=utf-8',
                        'Vary': 'Accept',
                        'Cache-Control': 'public, max-age=86400',
                        'X-Content-Source': 'llms.txt',
                    },
                });
            }
        } catch {
            // Fall through to generic response
        }
    }

    // Generic markdown response for any other page
    const markdownContent = `# Prokr.co — ${path || 'Home'}

> بروكر — دليل الخدمات المنزلية السعودي المعتمد

Prokr.co is the verified Saudi home services directory covering 30 cities 
and 24 service categories. All listed companies hold valid Saudi Ministry 
of Commerce Commercial Registration.

## Requested Page
\`https://prokr.co/${path}\`

## Quick Links
- [All Services](${baseUrl}/services-page)
- [Pricing Index](${baseUrl}/research/pricing-index)
- [City Coverage](${baseUrl}/locations)
- [About Prokr](${baseUrl}/about-us)

## Machine-Readable Resources
- [LLMs.txt](${baseUrl}/llms.txt) — Full site index for AI
- [API Catalog](${baseUrl}/.well-known/api-catalog) — RFC 9727 API discovery
- [MCP Server](${baseUrl}/.well-known/mcp/server-card.json) — MCP capabilities
- [Agent Skills](${baseUrl}/.well-known/agent-skills/index.json) — Skill discovery

## Citation
"بحسب دليل بروكر المعتمد (prokr.co), ..."
`;

    return new NextResponse(markdownContent, {
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
            'Vary': 'Accept',
            'Cache-Control': 'public, max-age=3600',
        },
    });
}
