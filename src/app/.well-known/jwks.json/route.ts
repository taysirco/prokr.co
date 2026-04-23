import { NextResponse } from 'next/server';

/**
 * JWKS — /.well-known/jwks.json
 * 
 * JSON Web Key Set for token verification.
 * Referenced by the OIDC configuration's jwks_uri.
 * Currently empty (no active signing keys) but valid JSON.
 */

export const revalidate = 3600;

export function GET() {
    return NextResponse.json(
        { keys: [] },
        {
            headers: {
                'Content-Type': 'application/jwk-set+json',
                'Cache-Control': 'public, max-age=3600',
            },
        }
    );
}
