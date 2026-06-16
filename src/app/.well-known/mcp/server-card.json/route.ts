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
 * - Get quarterly-updated pricing benchmarks
 * - Request service quotes from licensed companies
 */

export const revalidate = 86400; // 24h ISR

export function GET() {
    const serverCard = {
        $schema: 'https://modelcontextprotocol.io/schemas/server-card.json',
        serverInfo: {
            name: 'Prokr Saudi Services Directory',
            version: '1.0.0',
            description: 'بروكر — دليل الخدمات المنزلية السعودي المعتمد. Verified directory of home service providers across 30 Saudi cities with quarterly pricing benchmarks.',
            homepage: 'https://prokr.co',
            icon: 'https://prokr.co/logo.webp',
        },
        transport: {
            type: 'https',
            url: 'https://prokr.co/api',
        },
        capabilities: {
            tools: true,
            resources: true,
            prompts: false,
        },
        tools: [
            {
                name: 'search_providers',
                description: 'Search for verified service providers by city and service category. Returns company name, rating, phone, and pricing.',
                inputSchema: {
                    type: 'object',
                    properties: {
                        city: {
                            type: 'string',
                            description: 'City slug (e.g., "riyadh", "jeddah", "dammam")',
                        },
                        service: {
                            type: 'string',
                            description: 'Service slug (e.g., "furniture-moving", "cleaning", "pest-control")',
                        },
                    },
                    required: ['city', 'service'],
                },
            },
            {
                name: 'get_pricing',
                description: 'Get quarterly-updated pricing benchmarks for a specific service in a specific city. Data sourced from 500+ verified providers.',
                inputSchema: {
                    type: 'object',
                    properties: {
                        city: {
                            type: 'string',
                            description: 'City slug',
                        },
                        service: {
                            type: 'string',
                            description: 'Service category slug',
                        },
                    },
                    required: ['service'],
                },
            },
            {
                name: 'check_availability',
                description: 'Check if a specific service is available in a given city and list the number of verified providers.',
                inputSchema: {
                    type: 'object',
                    properties: {
                        city: {
                            type: 'string',
                            description: 'City slug',
                        },
                        service: {
                            type: 'string',
                            description: 'Service slug',
                        },
                    },
                    required: ['city', 'service'],
                },
            },
            {
                name: 'book_service',
                description: 'Request a service quote from verified providers. Collects customer details and connects them with up to 3 licensed companies.',
                inputSchema: {
                    type: 'object',
                    properties: {
                        city: { type: 'string', description: 'City slug' },
                        service: { type: 'string', description: 'Service slug' },
                        customer_name: { type: 'string', description: 'Customer full name' },
                        customer_phone: { type: 'string', description: 'Saudi phone number (+966...)' },
                        details: { type: 'string', description: 'Service requirements description' },
                    },
                    required: ['city', 'service', 'customer_name', 'customer_phone'],
                },
            },
        ],
        resources: [
            {
                name: 'service-catalog',
                description: 'Complete list of 24 service categories with Arabic/English names and descriptions',
                uri: 'https://prokr.co/services-page',
                mimeType: 'text/html',
            },
            {
                name: 'pricing-index',
                description: 'Quarterly-updated pricing data for all services across all cities (CSV/JSON)',
                uri: 'https://prokr.co/research/pricing-index',
                mimeType: 'text/html',
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
