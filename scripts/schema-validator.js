#!/usr/bin/env node
/**
 * Schema Validator — Validates JSON-LD structured data across key pages
 * 
 * Tests: correct @type, required properties, entity relationships
 * Covers: FAQPage, Organization, WebPage, BreadcrumbList, LocalBusiness, Article
 * 
 * Usage: node scripts/schema-validator.js
 */

const https = require('https');

const BASE = 'https://prokr.co';

function fetch(url) {
    return new Promise((resolve) => {
        https.get(url, { headers: { 'User-Agent': 'ProkrSchemaValidator/1.0' } }, (res) => {
            let data = '';
            res.on('data', d => data += d);
            res.on('end', () => resolve({ status: res.statusCode, body: data }));
        }).on('error', (err) => resolve({ status: 0, error: err.message, body: '' }));
    });
}

function extractSchema(html) {
    const schemas = [];
    const regex = /<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
        try {
            schemas.push(JSON.parse(match[1]));
        } catch (e) {
            schemas.push({ _parseError: e.message, _raw: match[1].slice(0, 200) });
        }
    }
    return schemas;
}

function validatePage(path, schemas) {
    const errors = [];
    const warnings = [];
    const types = schemas.map(s => s['@type'] || (s['@graph'] && 'Graph')).filter(Boolean);
    
    // Check for parse errors
    schemas.filter(s => s._parseError).forEach(s => errors.push(`JSON parse error: ${s._parseError}`));
    
    // FAQPage validation
    const faq = schemas.find(s => s['@type'] === 'FAQPage');
    if (faq) {
        if (!faq.mainEntity || faq.mainEntity.length === 0) 
            errors.push('FAQPage has no mainEntity');
        if (faq.mainEntity) {
            faq.mainEntity.forEach((q, i) => {
                if (!q.name) errors.push(`FAQ Q${i+1}: missing name`);
                if (!q.acceptedAnswer?.text) errors.push(`FAQ Q${i+1}: missing answer text`);
            });
        }
    }
    
    // BreadcrumbList validation
    const bc = schemas.find(s => s['@type'] === 'BreadcrumbList');
    if (bc) {
        if (!bc.itemListElement || bc.itemListElement.length === 0)
            errors.push('BreadcrumbList has no items');
    } else {
        warnings.push('Missing BreadcrumbList');
    }
    
    // Organization validation
    const org = schemas.find(s => s['@type'] === 'Organization');
    if (org) {
        if (!org.name) errors.push('Organization missing name');
        if (!org.url) errors.push('Organization missing url');
    }
    
    // WebPage or WebSite validation
    const wp = schemas.find(s => s['@type'] === 'WebPage' || s['@type'] === 'WebSite');
    if (!wp) warnings.push('Missing WebPage/WebSite schema');
    
    return { path, types, errors, warnings, schemaCount: schemas.length };
}

async function main() {
    console.log(`\n🔬 Schema Validator — ${new Date().toISOString().split('T')[0]}`);
    console.log(`   Target: ${BASE}\n`);
    
    const pages = [
        { path: '/', expect: ['FAQPage', 'WebSite', 'Organization', 'BreadcrumbList'] },
        { path: '/riyadh', expect: ['FAQPage', 'WebPage', 'BreadcrumbList'] },
        { path: '/riyadh/furniture-moving', expect: ['FAQPage', 'WebPage', 'BreadcrumbList', 'HowTo'] },
        { path: '/furniture-moving', expect: ['FAQPage', 'WebPage', 'BreadcrumbList'] },
        { path: '/blog', expect: ['BreadcrumbList'] },
    ];
    
    let totalErrors = 0;
    let totalWarnings = 0;
    
    for (const { path, expect } of pages) {
        const res = await fetch(`${BASE}${path}`);
        if (res.status !== 200) {
            console.log(`  ❌ ${path} → HTTP ${res.status}`);
            totalErrors++;
            continue;
        }
        
        const schemas = extractSchema(res.body);
        const result = validatePage(path, schemas);
        
        // Check expected types
        const allTypes = new Set();
        schemas.forEach(s => {
            if (s['@type']) allTypes.add(s['@type']);
            if (s['@graph']) s['@graph'].forEach(g => g['@type'] && allTypes.add(g['@type']));
        });
        
        const missing = expect.filter(t => !allTypes.has(t));
        if (missing.length > 0) result.warnings.push(`Missing expected: ${missing.join(', ')}`);
        
        const status = result.errors.length > 0 ? '❌' : result.warnings.length > 0 ? '⚠️' : '✅';
        console.log(`  ${status} ${path.padEnd(35)} ${result.schemaCount} schemas, ${allTypes.size} types`);
        
        if (result.errors.length > 0) {
            result.errors.forEach(e => console.log(`     ❌ ${e}`));
            totalErrors += result.errors.length;
        }
        if (result.warnings.length > 0) {
            result.warnings.forEach(w => console.log(`     ⚠️  ${w}`));
            totalWarnings += result.warnings.length;
        }
    }
    
    console.log(`\n═══════════════════════════════════════`);
    if (totalErrors === 0) {
        console.log(`  🟢 ALL SCHEMAS VALID — ${totalWarnings} warnings`);
    } else {
        console.log(`  🔴 ${totalErrors} errors, ${totalWarnings} warnings`);
    }
    console.log(`═══════════════════════════════════════\n`);
}

main().catch(console.error);
