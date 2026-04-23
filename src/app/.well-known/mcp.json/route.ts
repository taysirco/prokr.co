import { NextResponse } from 'next/server';

/**
 * MCP Discovery — /.well-known/mcp.json
 * 
 * Legacy/alternative MCP discovery endpoint.
 * Some clients check this path for MCP server metadata.
 * Points to the canonical server card.
 */

export const revalidate = 86400;

export function GET() {
    const mcpDiscovery = {
        name: 'Prokr Saudi Services Directory',
        version: '1.0.0',
        server_card: 'https://prokr.co/.well-known/mcp/server-card.json',
        transport: {
            type: 'https',
            url: 'https://prokr.co/api',
        },
    };

    return NextResponse.json(mcpDiscovery, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
    });
}
