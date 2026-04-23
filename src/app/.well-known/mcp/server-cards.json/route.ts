import { NextResponse } from 'next/server';

/**
 * MCP Server Cards (Array) — /.well-known/mcp/server-cards.json
 * 
 * Array-format listing of all MCP servers hosted by this domain.
 * Some clients check this endpoint for multi-server discovery.
 */

export const revalidate = 86400;

export function GET() {
    const serverCards = {
        servers: [
            {
                name: 'Prokr Saudi Services Directory',
                version: '1.0.0',
                description: 'Verified Saudi home services directory — 30 cities, 24 service categories',
                url: 'https://prokr.co/.well-known/mcp/server-card.json',
                transport: 'https',
            },
        ],
    };

    return NextResponse.json(serverCards, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
    });
}
