import { NextResponse } from 'next/server';

/**
 * OAuth 2.0 Authorization Server Metadata — /.well-known/oauth-authorization-server
 * 
 * RFC 8414 — OAuth 2.0 Authorization Server Metadata
 * Spec: https://www.rfc-editor.org/rfc/rfc8414
 * 
 * Companion to /.well-known/openid-configuration for pure OAuth 2.0
 * (non-OIDC) clients. Declares the same endpoints in RFC 8414 format.
 */

export const revalidate = 86400;

export function GET() {
    const issuer = 'https://prokr.co';

    const oauthMeta = {
        issuer,
        authorization_endpoint: `${issuer}/api/oauth/authorize`,
        token_endpoint: `${issuer}/api/oauth/token`,
        jwks_uri: `${issuer}/.well-known/jwks.json`,
        response_types_supported: ['code', 'token'],
        grant_types_supported: ['authorization_code', 'client_credentials'],
        token_endpoint_auth_methods_supported: ['client_secret_post', 'none'],
        scopes_supported: ['read:services', 'read:pricing', 'write:bookings'],
        service_documentation: `${issuer}/llms.txt`,
        ui_locales_supported: ['ar', 'en'],
    };

    return NextResponse.json(oauthMeta, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'public, max-age=86400',
        },
    });
}
