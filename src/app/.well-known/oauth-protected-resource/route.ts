import { NextResponse } from 'next/server';

/**
 * OAuth Protected Resource Metadata — /.well-known/oauth-protected-resource
 * 
 * RFC 9728 — OAuth 2.0 Protected Resource Metadata
 * Spec: https://www.rfc-editor.org/rfc/rfc9728
 * 
 * Tells AI agents and OAuth clients how to obtain access tokens
 * for Prokr's service APIs. Declares:
 * - Which authorization servers can issue tokens for this resource
 * - What scopes are available
 * - The resource identifier
 */

export const revalidate = 86400;

export function GET() {
    const issuer = 'https://prokr.co';

    const protectedResource = {
        resource: issuer,
        authorization_servers: [issuer],
        scopes_supported: ['read:services', 'read:pricing', 'write:bookings'],
        bearer_methods_supported: ['header', 'body'],
        resource_documentation: `${issuer}/llms.txt`,
        resource_signing_alg_values_supported: ['RS256'],
    };

    return NextResponse.json(protectedResource, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'public, max-age=86400',
        },
    });
}
