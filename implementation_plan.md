# 🚀 Prokr.co — خطة ما بعد الإطلاق (أبريل 2026)

> **الحالة**: ✅ الموقع مُطلق ويعمل على الإنتاج
> **الدومين**: prokr.co → Cloudflare Pages + Edge Cache
> **آخر تحديث**: 15 أبريل 2026, 01:01 بتوقيت القاهرة
> **جاهزية الإطلاق**: 98%

---

## الوضع الحالي

```
╔══════════════════════════════════════════════════════════════╗
║  Prokr.co — Production Status                               ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  🟢 الموقع:    مُطلق ويعمل على prokr.co                     ║
║  🟢 الاستضافة: Cloudflare Pages + Edge Cache                ║
║  🟢 SSL:       HSTS + preload                                ║
║  🟢 TTFB:      157ms (Edge HIT)                              ║
║  🟢 المحتوى:   978 content override + 708 sitemap URLs       ║
║  🟢 SEO:       42 unique schema types + 5 FAQ per page       ║
║  🟢 AI:        CitableSummary + DirectAnswer + Speakable     ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

## ✅ ما تم إنجازه (مُكتمل)

### المرحلة 1: البنية التحتية ✅
- [x] إطلاق الموقع على prokr.co
- [x] ربط Cloudflare DNS + SSL
- [x] Security Headers (5/5): HSTS, CSP, XFO, XCTO, RP
- [x] www → non-www (301)
- [x] HTTP → HTTPS (301)
- [x] PWA manifest.json (RTL, Arabic)

### المرحلة 2: SEO التقني ✅
- [x] Sitemap Index + 7 sub-sitemaps (708 URLs)
- [x] robots.txt — AI bots allowed, training bots blocked
- [x] Google Site Verification tag
- [x] Canonical self-referencing على كل الصفحات
- [x] hreflang (ar + x-default) على الرئيسية
- [x] OG tags + Twitter cards كاملة
- [x] 1 H1 per page (verified)
- [x] Meta descriptions فريدة لكل صفحة
- [x] JSON-LD valid (verified × 3 page types)

### المرحلة 3: AI Optimization ✅
- [x] CitableSummary → 30 city page (`itemProp="abstract"`)
- [x] DirectAnswer → كل service pages
- [x] SpeakableJsonLd → homepage + city + service
- [x] llms.txt → AI discovery file
- [x] Wikidata Q139265070 → LLM injection
- [x] `ai-content-declaration` meta tag

### المرحلة 4: Redirect Engine ✅
- [x] `/ksa/{city}/{service}` → `/{city}/{service}` (301)
- [x] `/ksa/{city}` → `/{city}` (301)
- [x] `/ksa/{city-service}` → `/{city}/{service}` (301 with alias parsing)
- [x] SERVICE_ALIASES: 21 entries covering all service slugs
- [x] CITY_ALIASES: 30+ entries covering all city variants
- [x] Case normalization: `/Riyadh` → `/riyadh` (301)
- [x] Trailing slash: `/riyadh/` → `/riyadh` (308)
- [x] Fragment architecture: `ac-maintenance` → `#ac-maintenance`

### المرحلة 5: Code Quality ✅
- [x] Error boundaries: `error.tsx` + `global-error.tsx`
- [x] Dead code removal: ShareButton + ConnectionOptimizer + AdvertiserCard
- [x] Cloudflare AI block disabled (manual)
- [x] robots.txt conflict resolved

---

## ⬜ المتبقي — إجراءات يدوية

### 🔴 فوري (35 دقيقة)

| # | الإجراء | الجهد | الملاحظات |
|---|---------|:-----:|-----------|
| 1 | **فحص/إنشاء Social Profiles** | 30 دقيقة | twitter.com/prokr_sa, instagram/prokr_sa, facebook/prokr.sa |
| 2 | **رفع Disavow لـ GSC** | 5 دقائق | الملف جاهز: `scripts/disavow.txt` (43 سطر) |

### 🟡 خلال 30 يوم

| # | الإجراء | الجهد | ملاحظات |
|---|---------|:-----:|---------|
| 3 | **301 لـ prokr.org** (الأضعف) | 30 دقيقة | DNS A record → prokr.co |
| 4 | **301 لـ prokr.net** | 30 دقيقة | بعد أسبوعين من prokr.org |
| 5 | **~~301 لـ prokr.com + Change of Address~~** | ~~ساعة~~ | ✅ تم — Worker + Middleware ذكي (65 اختبار ناجح) |

### 🟢 خلال 90 يوم

| # | الإجراء | الجهد | ملاحظات |
|---|---------|:-----:|---------|
| 6 | **50 neighborhood page** | 10 ساعات | أحياء الرياض وجدة |
| 7 | **Vendor CRM** | 20 ساعة | نظام إدارة الشركات |
| 8 | **Backlinks campaign** | $4,677 | حسب Blueprint §1.2 |
| 9 | **تحويل 8MB chunk لـ API route** | 4 ساعات | اختياري — SSG يعوض |

---

## مقاييس النجاح

| المقياس | الهدف (30 يوم) | كيف تقيس |
|---------|:--------------:|----------|
| صفحات مؤرشفة | 200+ | GSC → Coverage |
| Brand Searches "بروكر" | 100+/يوم | GSC → Queries |
| TTFB | < 200ms | server-timing header |
| Core Web Vitals | أخضر | GSC → CWV |
| AI Overviews | ≥1 appearance | البحث اليدوي |
| Organic Traffic | 500+/يوم | GA4 |

---

## Verification Commands

```bash
# Health check
curl -sI https://prokr.co/ | head -1
curl -sI https://prokr.co/riyadh | head -1
curl -sI https://prokr.co/riyadh/furniture-moving | head -1

# Redirect test
curl -sI https://prokr.co/ksa/riyadh/furniture-moving | grep location
curl -sI https://prokr.co/ksa/jeddah-pest-control | grep location

# robots.txt
curl -s https://prokr.co/robots.txt | grep -c "BEGIN Cloudflare"  # Should be 0

# Schema validation
curl -s https://prokr.co/riyadh | grep -o '"@type"' | wc -l

# Security headers
curl -sI https://prokr.co/ | grep -c "strict-transport\|x-frame\|x-content-type\|referrer-policy\|permissions-policy"
```

---

## Git History (الجلسة الأخيرة)

```
a8fcc5c  fix(seo): expand SERVICE_ALIASES for legacy /ksa/ redirect coverage
4dff468  chore: remove 3 dead code files (0 imports confirmed)
ac6e084  feat: add error boundaries + verify robots.txt cleanup
5af209f  fix(seo): deep audit — 3 critical fixes
7847483  feat(seo): add CitableSummary to [city] hub pages
3f0e86f  build: force edge cache flush with v9
```
