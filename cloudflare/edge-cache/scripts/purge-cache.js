#!/usr/bin/env node
// ═══════════════════════════════════════════════════════════════
// 🧹 Cloudflare Cache Purge Utility — Prokr.co
// ═══════════════════════════════════════════════════════════════
// Usage:
//   node scripts/purge-cache.js                    # Purge everything
//   node scripts/purge-cache.js --urls /,/riyadh   # Purge specific URLs
//   node scripts/purge-cache.js --prefix /riyadh/  # Purge by prefix
//
// Required env vars:
//   CF_API_TOKEN  — Cloudflare API token with Zone:Cache Purge permission
//   CF_ZONE_ID    — Cloudflare Zone ID for prokr.co
// ═══════════════════════════════════════════════════════════════

const ZONE_ID = process.env.CF_ZONE_ID;
const API_TOKEN = process.env.CF_API_TOKEN;
const BASE_URL = 'https://prokr.co';

if (!ZONE_ID || !API_TOKEN) {
  console.error('❌ Missing required environment variables:');
  if (!ZONE_ID) console.error('   CF_ZONE_ID — Cloudflare Zone ID');
  if (!API_TOKEN) console.error('   CF_API_TOKEN — Cloudflare API Token');
  console.error('\nSet them in your shell:');
  console.error('  export CF_ZONE_ID="your_zone_id"');
  console.error('  export CF_API_TOKEN="your_api_token"');
  process.exit(1);
}

const args = process.argv.slice(2);
const urlsArg = args.find(a => a.startsWith('--urls='));
const prefixArg = args.find(a => a.startsWith('--prefix='));

async function purgeAll() {
  console.log('🧹 Purging ALL cached content for prokr.co...');

  const res = await fetch(
    `https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/purge_cache`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ purge_everything: true }),
    }
  );

  const data = await res.json();
  if (data.success) {
    console.log('✅ Full cache purge successful!');
    console.log('   Cache will be warm again after first requests.');
    console.log('   Run `npx tsx warm-cache.ts` to pre-warm.');
  } else {
    console.error('❌ Purge failed:', data.errors);
  }
}

async function purgeUrls(paths) {
  const urls = paths.map(p => `${BASE_URL}${p.startsWith('/') ? p : '/' + p}`);
  console.log(`🧹 Purging ${urls.length} specific URLs...`);
  urls.forEach(u => console.log(`   ${u}`));

  // Cloudflare allows max 30 URLs per purge request
  const chunks = [];
  for (let i = 0; i < urls.length; i += 30) {
    chunks.push(urls.slice(i, i + 30));
  }

  let totalPurged = 0;
  for (const chunk of chunks) {
    const res = await fetch(
      `https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/purge_cache`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ files: chunk }),
      }
    );

    const data = await res.json();
    if (data.success) {
      totalPurged += chunk.length;
    } else {
      console.error(`❌ Purge failed for batch:`, data.errors);
    }
  }

  console.log(`✅ Purged ${totalPurged}/${urls.length} URLs`);
}

async function purgeByPrefix(prefix) {
  // Prefix purge requires Enterprise plan
  // For Free/Pro plans, we purge everything or use URL list
  console.log(`⚠️  Prefix purge (${prefix}) requires Enterprise plan.`);
  console.log('   Falling back to full purge...');
  await purgeAll();
}

async function main() {
  if (urlsArg) {
    const paths = urlsArg.split('=')[1].split(',');
    await purgeUrls(paths);
  } else if (prefixArg) {
    const prefix = prefixArg.split('=')[1];
    await purgeByPrefix(prefix);
  } else {
    await purgeAll();
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
