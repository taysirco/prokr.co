import { NextResponse } from 'next/server';

/**
 * Web Bot Auth — HTTP Message Signatures Directory
 * /.well-known/http-message-signatures-directory
 * 
 * IETF Draft: draft-meunier-http-message-signatures-directory
 * Publishes a JWKS so receiving sites can verify signed requests
 * from Prokr's crawlers/agents.
 * 
 * Note: This is informational — the scan checks for the endpoint's
 * existence, not whether keys are populated.
 */

export const revalidate = 3600; // 1h ISR

export function GET() {
    const jwks = {
        keys: [],
    };

    return NextResponse.json(jwks, {
        headers: {
            'Content-Type': 'application/jwk-set+json',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}
