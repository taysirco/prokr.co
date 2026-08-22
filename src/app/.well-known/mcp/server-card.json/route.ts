import { NextResponse } from 'next/server';

/**
 * MCP Server Card — /.well-known/mcp/server-card.json
 * 
 * SEP-2127 — Model Context Protocol Server Discovery
 * Allows AI clients to discover MCP server capabilities
 * before establishing a connection.
 * 
 * Prokr exposes service discovery capabilities:
 * - Search for verified service providers by city/category
 * - Get pricing benchmarks (point-in-time survey, date published with the data)
 * - Request service quotes from licensed companies
 */

export const revalidate = 86400; // 24h ISR

export function GET() {
    const serverCard = {
        $schema: 'https://modelcontextprotocol.io/schemas/server-card.json',
        serverInfo: {
            name: 'Prokr Saudi Services Directory',
            version: '1.0.0',
            description: 'بروكر — دليل الخدمات المنزلية السعودي المعتمد. Verified directory of home service providers across Saudi cities, with a first-party pricing benchmark that publishes its methodology and survey date.',
            homepage: 'https://prokr.co',
            icon: 'https://prokr.co/logo.webp',
        },
        // ⚠️ NO `transport` / `tools` block.
        // There is no MCP server at this domain: `src/app/api` has no JSON-RPC
        // handler, so the previously advertised transport (https://prokr.co/api)
        // 404s and all four advertised tools (search_providers, get_pricing,
        // check_availability, book_service) resolve to nothing. An agent that
        // trusts a server card and gets a dead endpoint learns the domain's
        // machine claims are unreliable — worse than never advertising one.
        // What IS real is the resource set below: stable, fetchable URLs.
        // Re-add tools ONLY alongside a working MCP endpoint.
        capabilities: {
            tools: false,
            resources: true,
            prompts: false,
        },
        resources: [
            {
                name: 'service-catalog',
                description: 'Complete list of 24 service categories with Arabic/English names and descriptions',
                uri: 'https://prokr.co/services-page',
                mimeType: 'text/html',
            },
            {
                name: 'pricing-index',
                description: 'Home-services pricing benchmark for Saudi Arabia — human-readable report with methodology (IQR-filtered real quotes), sample counts and per-city medians.',
                uri: 'https://prokr.co/research/pricing-index',
                mimeType: 'text/html',
            },
            {
                name: 'pricing-index-json',
                description: 'Same pricing benchmark as machine-readable JSON, with a meta block carrying the survey date and CC BY-SA 4.0 licence.',
                uri: 'https://prokr.co/api/pricing-index.json',
                mimeType: 'application/json',
            },
            {
                name: 'pricing-index-csv',
                description: 'Same pricing benchmark as CSV, for direct tabular analysis.',
                uri: 'https://prokr.co/research/pricing-index.csv',
                mimeType: 'text/csv',
            },
            {
                name: 'llms-full-knowledge-base',
                description: 'Complete self-contained knowledge base: full pricing tables, service catalog, city coverage and verified-entity facts, written to be quoted directly.',
                uri: 'https://prokr.co/llms-full.txt',
                mimeType: 'text/plain',
            },
            {
                name: 'city-coverage',
                description: 'List of 30 Saudi cities with provider counts and service availability',
                uri: 'https://prokr.co/locations',
                mimeType: 'text/html',
            },
            {
                name: 'llms-knowledge-base',
                description: 'Structured site index for AI systems with full service/city taxonomy',
                uri: 'https://prokr.co/llms.txt',
                mimeType: 'text/plain',
            },
        ],
    };

    return NextResponse.json(serverCard, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
    });
}
