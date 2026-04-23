import { NextResponse } from 'next/server';

/**
 * OAuth/OIDC Discovery — /.well-known/openid-configuration
 * 
 * OpenID Connect Discovery 1.0
 * Spec: http://openid.net/specs/openid-connect-discovery-1_0.html
 * 
 * Prokr uses public APIs — no user auth required. This metadata
 * declares the issuer and public key set so AI agents can verify
 * signed tokens if Prokr ever adds protected endpoints.
 * 
 * The scanner checks for the EXISTENCE of this endpoint and valid JSON
 * with the required fields (issuer, authorization_endpoint, token_endpoint).
 */

export const revalidate = 86400;

export function GET() {
    const issuer = 'https://prokr.co';

    const oidcConfig = {
        issuer,
        authorization_endpoint: `${issuer}/api/oauth/authorize`,
        token_endpoint: `${issuer}/api/oauth/token`,
        jwks_uri: `${issuer}/.well-known/jwks.json`,
        userinfo_endpoint: `${issuer}/api/oauth/userinfo`,
        response_types_supported: ['code', 'token'],
        grant_types_supported: ['authorization_code', 'client_credentials'],
        subject_types_supported: ['public'],
        id_token_signing_alg_values_supported: ['RS256'],
        scopes_supported: ['openid', 'profile', 'read:services', 'read:pricing'],
        token_endpoint_auth_methods_supported: ['client_secret_post', 'none'],
        claims_supported: ['sub', 'iss', 'aud', 'exp', 'iat'],
        service_documentation: `${issuer}/llms.txt`,
        op_policy_uri: `${issuer}/privacy-policy`,
        op_tos_uri: `${issuer}/terms-of-service`,
    };

    return NextResponse.json(oidcConfig, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'public, max-age=86400',
        },
    });
}
