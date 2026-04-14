# 🛡️ Cloudflare Edge Cache — Complete Setup Guide

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Phase 1: Cloudflare Account & Zone Setup](#phase-1-cloudflare-account--zone-setup)
3. [Phase 2: DNS Migration from Namecheap](#phase-2-dns-migration-from-namecheap)
4. [Phase 3: SSL/TLS Configuration](#phase-3-ssltls-configuration)
5. [Phase 4: Deploy the Edge Worker](#phase-4-deploy-the-edge-worker)
6. [Phase 5: Verify & Test](#phase-5-verify--test)
7. [Phase 6: Cache Warming](#phase-6-cache-warming)
8. [Monitoring & Maintenance](#monitoring--maintenance)
9. [Rollback Plan](#rollback-plan)
10. [Troubleshooting](#troubleshooting)

---

## Prerequisites

- Cloudflare account (free plan is sufficient)
- Access to Namecheap domain management for `prokr.co`
- Node.js 18+ installed locally
- `wrangler` CLI: `npm install -g wrangler` (or use `npx`)

---

## Phase 1: Cloudflare Account & Zone Setup

### 1.1 Create/Login to Cloudflare
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Sign up or log in

### 1.2 Add prokr.co Zone
1. Click **"Add a Site"**
2. Enter `prokr.co`
3. Select **Free** plan (sufficient for current traffic)
4. Cloudflare will scan existing DNS records

### 1.3 Verify DNS Records
Cloudflare should auto-detect these records. Verify them:

| Type | Name | Content | Proxy | TTL |
|------|------|---------|-------|-----|
| A | prokr.co | 35.219.200.196 | ☁️ Proxied | Auto |
| CNAME | www | prokr.co | ☁️ Proxied | Auto |
| TXT | prokr.co | `google-site-verification=DcfyYpBV_Uy1_KBs576oJlJQ4gDTQ4D0UzrrVmSg-tA` | — | Auto |
| TXT | prokr.co | `google-site-verification=Ed3SDlm2dwURmwiI8W3KF167qVrunVCBy4_02QBKKMA` | — | Auto |

> ⚠️ **CRITICAL: Enable "Proxied" (orange cloud) for A and CNAME records!**
> - If "DNS only" (gray cloud), the Worker won't intercept traffic.
> - The `www` record MUST be proxied. Firebase App Hosting only recognizes
>   `prokr.co` as a custom domain — `www.prokr.co` returns **404** from Firebase.
>   The Worker handles `www → prokr.co` 301 redirect at the edge.

> [!IMPORTANT]
> **TXT records are mandatory!** Without the `google-site-verification` TXT records,
> Google Search Console will lose domain ownership verification → no search data, no indexing API.

> [!WARNING]
> **Firebase IP may change.** Firebase App Hosting (Google Cloud Run) may rotate IPs.
> If the site goes down after DNS migration, check: `dig prokr.co @dns1.registrar-servers.com A +short`
> Compare with the A record in Cloudflare. If different, update the A record.

### 1.4 Note Your Zone ID and Account ID
- Go to the **Overview** tab for prokr.co
- Copy **Zone ID** (right sidebar)
- Copy **Account ID** (right sidebar)
- You'll need these for `wrangler.toml` and cache purge scripts

---

## Phase 2: DNS Migration from Namecheap

### 2.1 Get Cloudflare Nameservers
After adding the zone, Cloudflare will show 2 nameservers like:
```
xxx.ns.cloudflare.com
yyy.ns.cloudflare.com
```

### 2.2 Update Namecheap DNS
1. Log in to [namecheap.com](https://namecheap.com)
2. Go to **Domain List** → `prokr.co` → **Manage**
3. Under **Nameservers**, change from "Namecheap BasicDNS" to **"Custom DNS"**
4. Enter the 2 Cloudflare nameservers
5. Click the **green checkmark** to save

### 2.3 Wait for Propagation
- Usually: **5-30 minutes**
- Maximum: **24-48 hours** (rare)
- Check status: `dig NS prokr.co +short`
- Should show: `xxx.ns.cloudflare.com.` and `yyy.ns.cloudflare.com.`

### 2.4 Verify in Cloudflare Dashboard
- Go to **Overview** tab
- Status should change from "Pending" to **"Active"** ✅

> 💡 **Tip**: Do this step at night (after midnight KSA time) to minimize impact.

---

## Phase 3: SSL/TLS Configuration

### 3.1 Set SSL Mode to Full (Strict)
1. Go to **SSL/TLS** → **Overview**
2. Set encryption mode to **Full (strict)**
3. This ensures: Client → HTTPS → Cloudflare → HTTPS → Firebase

> ⚠️ **Do NOT use "Flexible"** — it will cause redirect loops with Firebase HSTS.

### 3.2 Enable Always Use HTTPS
1. Go to **SSL/TLS** → **Edge Certificates**
2. Enable **"Always Use HTTPS"**

### 3.3 Enable HSTS
1. Go to **SSL/TLS** → **Edge Certificates**
2. Enable **HSTS** with:
   - Max-Age: 12 months
   - Include subdomains: Yes
   - Preload: Yes
   - No-Sniff Header: Yes

### 3.4 Minimum TLS Version
1. Set **Minimum TLS Version** to **TLS 1.2**

---

## Phase 4: Deploy the Edge Worker

### 4.1 Configure Wrangler
1. Open `cloudflare/edge-cache/wrangler.toml`
2. Uncomment and set your Account ID:
   ```toml
   account_id = "YOUR_ACCOUNT_ID_HERE"
   ```

### 4.2 Authenticate Wrangler
```bash
cd cloudflare/edge-cache
npx wrangler login
```
This opens a browser for Cloudflare OAuth authentication.

### 4.3 Install Dependencies
```bash
cd cloudflare/edge-cache
npm install
```

### 4.4 Test Locally
```bash
npx wrangler dev
```
- Opens local server at `https://localhost:8787`
- Test with: `curl -sI https://localhost:8787/`
- Verify `X-Edge-Worker: prokr-v1` header appears

### 4.5 Deploy to Production
```bash
npx wrangler deploy
```
- This deploys the Worker to Cloudflare's global edge network
- Worker will be active on `prokr.co/*` immediately
- Monitor in dashboard: **Workers & Pages** → **prokr-edge-cache**

### 4.6 Verify Worker is Active
```bash
# Should show X-Edge-Worker and X-Cache-Status headers
curl -sI https://prokr.co/ | grep -iE "x-edge|x-cache|server-timing"
```

Expected output:
```
X-Cache-Status: MISS          ← First request = MISS
X-Edge-Worker: prokr-v1       ← Worker is active
X-Edge-TTFB: 623ms            ← First request goes to origin
```

Second request:
```
X-Cache-Status: HIT            ← Cached! 🎉
X-Edge-Worker: prokr-v1
X-Edge-TTFB: 3ms               ← 3ms from edge! ⚡
```

---

## Phase 5: Verify & Test

### 5.1 TTFB Test
```bash
# Test 3 times (1st = MISS, 2nd & 3rd = HIT)
for i in 1 2 3; do
  echo "Request $i:"
  curl -sI -o /dev/null -w "  TTFB: %{time_starttransfer}s\n" https://prokr.co/riyadh/furniture-moving
  sleep 1
done
```

### 5.2 Full Edge Verification
```bash
# From project root
npx tsx scripts/verify-edge.ts
```

### 5.3 Bot Simulation
```bash
# Simulate Googlebot
curl -sI -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" \
  https://prokr.co/riyadh/furniture-moving | grep -iE "x-edge|x-cache"
```

### 5.4 PageSpeed Insights
- Open: https://pagespeed.web.dev/analysis?url=https://prokr.co/riyadh/furniture-moving
- Expect: TTFB < 100ms, LCP score improvement

---

## Phase 6: Cache Warming

After deploying the Worker, warm the cache:

```bash
# From project root
npx tsx warm-cache.ts
```

This will:
1. Hit all ~648 pages with `X-Prokr-Warm: true` header
2. Worker stores each response in edge cache with extended bot TTL (24h)
3. All subsequent requests (including Googlebot) get edge-cached responses
4. Verify HIT status after warming

> [!WARNING]
> **Per-PoP Limitation:** Cloudflare's Cache API stores data per-datacenter.
> Running `warm-cache.ts` from Egypt warms **only the Cairo PoP**.
> Users hitting Riyadh or Jeddah PoPs will still get a MISS on first request.
> This is normal — the cache warms organically as real traffic flows through each PoP.
> The first Googlebot visit to each PoP will be a MISS (~600ms), then all subsequent visits are HITs (~10ms).

---

## Monitoring & Maintenance

### Dashboard
- **Workers Analytics**: dash.cloudflare.com → Workers → prokr-edge-cache → Analytics
- Key metrics: Requests/day, CPU time, Error rate

### Real-time Logs
```bash
cd cloudflare/edge-cache
npx wrangler tail
```

### Cache Purge
```bash
# Purge everything (after deploy/content update)
CF_ZONE_ID="xxx" CF_API_TOKEN="xxx" node cloudflare/edge-cache/scripts/purge-cache.js

# Purge specific URLs
CF_ZONE_ID="xxx" CF_API_TOKEN="xxx" node cloudflare/edge-cache/scripts/purge-cache.js \
  --urls=/,/riyadh/furniture-moving,/jeddah/cleaning

# Then re-warm
npx tsx warm-cache.ts
```

### ⚠️ After Every Firebase Deploy
When Firebase deploys a new version, the edge cache still serves the **OLD** version
until TTL expires (up to 30min for service pages, 24h for blog).

**You MUST purge + re-warm after every deploy:**
```bash
# Step 1: Purge edge cache
CF_ZONE_ID="xxx" CF_API_TOKEN="xxx" node cloudflare/edge-cache/scripts/purge-cache.js

# Step 2: Re-warm all 648 pages
npx tsx warm-cache.ts
```

> 💡 **Tip:** Add this to your deploy workflow:
> ```bash
> # In package.json scripts:
> "deploy:purge": "CF_ZONE_ID=$CF_ZONE_ID CF_API_TOKEN=$CF_API_TOKEN node cloudflare/edge-cache/scripts/purge-cache.js && npx tsx warm-cache.ts"
> ```

### Cloudflare Page Rules (Optional Optimization)
If you want belt-and-suspenders caching, add these Page Rules:

| URL Pattern | Setting | Value |
|------------|---------|-------|
| `prokr.co/_next/static/*` | Cache Level | Cache Everything |
| `prokr.co/images/*` | Cache Level | Cache Everything |
| `prokr.co/api/*` | Cache Level | Bypass |

---

## Rollback Plan

If something goes wrong after deploying the Worker:

### Quick Rollback (< 1 minute)
```bash
# Delete the Worker route — traffic goes direct to Firebase
cd cloudflare/edge-cache
npx wrangler delete
```

### DNS Rollback (if Cloudflare itself is the issue)
1. Go to Namecheap → `prokr.co` → Manage
2. Switch Nameservers back to "Namecheap BasicDNS"
3. Add A record: `prokr.co` → `35.219.200.196`
4. Wait 5-30 minutes for propagation

### Emergency: Proxy Toggle
1. Cloudflare Dashboard → DNS
2. Click the orange cloud ☁️ next to the A record to turn it gray (DNS only)
3. Traffic bypasses Cloudflare entirely — goes direct to Firebase

---

## Troubleshooting

### Problem: Redirect Loop
**Cause**: SSL mode set to "Flexible" instead of "Full (Strict)"
**Fix**: SSL/TLS → Overview → Set to "Full (strict)"

### Problem: 525 SSL Handshake Failed
**Cause**: Firebase certificate not recognized
**Fix**: Ensure SSL mode is "Full (strict)" (not "Strict" without "Full")

### Problem: Worker Not Intercepting
**Cause**: DNS proxy disabled (gray cloud)
**Fix**: DNS → Click A record → Enable proxy (orange cloud)

### Problem: Cache Always MISS
**Cause**: Worker route not matching
**Fix**: Check `wrangler.toml` routes match `prokr.co/*`

### Problem: Stale Content After Update
**Fix**: Run cache purge + warm:
```bash
CF_ZONE_ID="xxx" CF_API_TOKEN="xxx" node cloudflare/edge-cache/scripts/purge-cache.js
npx tsx warm-cache.ts
```

### Problem: API Calls Cached (should be bypassed)
**Cause**: API route not in bypass list
**Fix**: Add pattern to `CACHE_RULES` bypass list in `worker.js`

### Problem: Pages Show Raw JSON/Text Instead of HTML
**Cause**: Next.js RSC (React Server Components) response was cached instead of HTML.
When Next.js navigates client-side, it sends `RSC: 1` header and gets `text/plain` RSC payload.
If this gets cached, all users see garbage instead of the page.
**Fix**: The Worker already bypasses RSC requests (`X-Cache-Status: BYPASS-RSC`).
Verify:
```bash
# HTML request (normal)
curl -sI https://prokr.co/riyadh/furniture-moving | grep "content-type"
# Should show: content-type: text/html; charset=utf-8

# RSC request (bypassed)
curl -sI -H "RSC: 1" https://prokr.co/riyadh/furniture-moving | grep -iE "content-type|x-cache"
# Should show: content-type: text/plain
#              X-Cache-Status: BYPASS-RSC
```

### Problem: Each Marketing Link Creates Separate Cache Entry
**Cause**: URLs like `?fbclid=xyz` or `?utm_source=fb` create unique cache keys.
**Fix**: The Worker automatically strips tracking params from cache keys.
All these URLs share one cache entry:
```
/riyadh/furniture-moving
/riyadh/furniture-moving?fbclid=abc123
/riyadh/furniture-moving?utm_source=facebook&utm_medium=cpc
```

### Problem: Client-Side Navigation Broken After Enabling Worker
**Cause**: The Worker might be caching RSC prefetch requests
**Fix**: Ensure `BYPASS-RSC` is working by checking headers. The Worker
bypasses all requests with `RSC: 1`, `Next-Router-State-Tree`,
`Next-Router-Prefetch`, or `Next-Router-Segment-Prefetch` headers.

### Problem: Error 1102 — Worker Exceeded CPU Limits
**Cause**: Worker CPU time exceeded free plan's 10ms limit.
This is extremely unlikely (Worker uses ~0.5ms on HIT, ~3-5ms on MISS).
**Fix**: Check `npx wrangler tail` for the specific request causing high CPU.
If persistent, upgrade to Workers Paid ($5/month) for 50ms CPU limit.

### Problem: www.prokr.co Returns 404 (Without Worker)
**Cause**: Firebase App Hosting only recognizes `prokr.co`, not `www.prokr.co`.
**Fix**: This is expected. The Worker handles `www → prokr.co` 301 redirect.
Ensure the `www` CNAME record is Proxied (orange cloud) in Cloudflare DNS.

### Problem: Site Down After DNS Migration
**Cause**: Firebase App Hosting may have rotated its IP address.
**Fix**:
```bash
# Check current Firebase IP (via old NS)
dig prokr.co @dns1.registrar-servers.com A +short

# Compare with Cloudflare A record
dig prokr.co A +short

# If different, update Cloudflare DNS → A record → new IP
```
