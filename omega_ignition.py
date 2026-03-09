#!/usr/bin/env python3
# ═══════════════════════════════════════════════════════════════
# ☢️  OMEGA IGNITION PROTOCOL — Prokr.co Reactor Pre-warming
# ═══════════════════════════════════════════════════════════════
# المسبار الحراري الموجه (Guided Thermal Probe)
# asyncio + aiohttp + Semaphore(40) = جراحة بدون انصهار
#
# Usage:
#   python3 omega_ignition.py                     # تسخين الإنتاج
#   python3 omega_ignition.py --dry-run           # عرض فقط
#   python3 omega_ignition.py --concurrency=20    # تغيير التزامن
# ═══════════════════════════════════════════════════════════════

import asyncio
import aiohttp
import time
import sys
import re
import ssl
from pathlib import Path

try:
    import certifi
    SSL_CONTEXT = ssl.create_default_context(cafile=certifi.where())
except ImportError:
    SSL_CONTEXT = None  # Fall back to system certs

# ---------------------------------------------------------
# الغرفة صفر: إعدادات مفاعل بروكر (Prokr.co Reactor Settings)
# ---------------------------------------------------------

# الحد الأقصى للتزامن: 40 (نصف سعة خادم Firebase لتجنب الانصهار)
MAX_CONCURRENCY = 40
# مهلة النبضة: 15 ثانية كحد أقصى للرد
TIMEOUT_SECONDS = 15
# عنوان المفاعل
BASE_URL = "https://prokr.co"

# رأسيات مخصصة (Custom Headers) للتعريف بأننا مشرط الجراح وليس روبوت خبيث
HEADERS = {
    "User-Agent": "Omega-Resurrection-Prewarmer/1.0 (Room Zero; Al-Sananiyah)",
    "X-Prokr-Override": "Surgical-Cache-Prime",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "ar,en;q=0.5",
}

# ---------------------------------------------------------
# نظام استخراج الحمض النووي (DNA Extraction — URL Auto-Discovery)
# ---------------------------------------------------------

def extract_absorbed_slugs() -> set[str]:
    """
    يقرأ super-page-groups.ts ويستخرج كل الـ absorbed slugs
    التي تسبب 301 redirect → لا فائدة من تسخينها.
    """
    script_dir = Path(__file__).parent
    groups_file = script_dir / "src" / "lib" / "services" / "super-page-groups.ts"

    if not groups_file.exists():
        print(f"\033[93m[!] WARNING: super-page-groups.ts not found, no filtering\033[0m")
        return set()

    content = groups_file.read_text()
    # Extract all absorbed arrays: absorbed: ['slug1', 'slug2']
    matches = re.findall(r"absorbed:\s*\[([^\]]+)\]", content)
    absorbed = set()
    for match in matches:
        slugs = re.findall(r"'([^']+)'", match)
        absorbed.update(slugs)

    return absorbed


def discover_all_urls(base_url: str) -> tuple[list[str], int]:
    """
    يستخرج الروابط النشطة مباشرة من نظام الملفات —
    مع تصفية الـ absorbed slugs (301 redirects) لتجنب إهدار الخادم.
    المصدر: src/lib/overrides/pages/
    Returns: (urls, filtered_count)
    """
    # تحديد مسار مجلد الـ overrides
    script_dir = Path(__file__).parent
    overrides_dir = script_dir / "src" / "lib" / "overrides" / "pages"

    if not overrides_dir.exists():
        print(f"\033[91m[!] CRITICAL: Override directory not found: {overrides_dir}\033[0m")
        sys.exit(1)

    # استخراج الـ absorbed slugs لتصفيتها
    absorbed = extract_absorbed_slugs()

    urls = []
    filtered_count = 0

    # ── المرحلة 1: الشرايين الرئيسية (Static Pages) ──
    static_pages = [
        "/",
        "/locations",
        "/services",
        "/about-us",
        "/contact-us",
        "/advertise",
        "/blog",
        "/privacy-policy",
        "/terms-of-service",
    ]
    for page in static_pages:
        urls.append(f"{base_url}{page}")

    # ── المرحلة 1.5: مقالات المدونة (Blog Articles) ──
    # ⚠️ المقالات الفعلية في src/lib/blog/*.ts وليس blog-data.ts
    blog_dir = script_dir / "src" / "lib" / "blog"
    if blog_dir.exists():
        for blog_file in sorted(blog_dir.iterdir()):
            if blog_file.is_file() and blog_file.suffix == ".ts":
                blog_content = blog_file.read_text()
                blog_slugs = re.findall(r"slug:\s*'([^']+)'", blog_content)
                for slug in blog_slugs:
                    urls.append(f"{base_url}/blog/{slug}")

    # ── المرحلة 2: مراكز القيادة (City Hubs) ──
    city_dirs = sorted([
        d.name for d in overrides_dir.iterdir()
        if d.is_dir()
    ])

    for city in city_dirs:
        urls.append(f"{base_url}/{city}")

    # ── المرحلة 3: خلايا الاستهداف (City × Service Pages) ──
    # ⚠️ تصفية الـ absorbed slugs + المجلدات الفرعية (مثل makkah/sharaia)
    for city in city_dirs:
        city_path = overrides_dir / city
        service_files = sorted([
            f.stem for f in city_path.iterdir()
            if f.is_file() and f.suffix == ".ts" and f.name != "index.ts"
        ])
        for service in service_files:
            if service in absorbed:
                filtered_count += 1
                continue  # ← Skip: 301 redirect = wasted request
            urls.append(f"{base_url}/{city}/{service}")

    return urls, filtered_count

# ---------------------------------------------------------
# وحدة النبض الكهرومغناطيسي (Electromagnetic Pulse Unit)
# ---------------------------------------------------------

# إحصائيات عالمية
stats = {
    "success": 0,
    "redirects": 0,
    "not_found": 0,
    "errors": 0,
    "timeouts": 0,
    "ttfb_list": [],
}

async def strike_warhead(session: aiohttp.ClientSession, url: str, semaphore: asyncio.Semaphore, index: int, total: int):
    """
    توجيه نبضة حرارية لصفحة واحدة لتوليدها (ISR) وحفظها في حافة الكاش (Edge Cache).
    """
    async with semaphore:
        start_time = time.time()
        try:
            timeout = aiohttp.ClientTimeout(total=TIMEOUT_SECONDS)
            async with session.get(url, headers=HEADERS, timeout=timeout, allow_redirects=True) as response:
                status = response.status
                # قراءة الاستجابة الكاملة لضمان اكتمال دورة SSR في خوادم Next.js
                await response.read()
                latency = time.time() - start_time

                progress = f"[{index}/{total}]"

                if status == 200:
                    stats["success"] += 1
                    stats["ttfb_list"].append(latency)
                    # تلوين TTFB حسب السرعة
                    if latency < 0.5:
                        ttfb_icon = "🟢"
                    elif latency < 1.5:
                        ttfb_icon = "🟡"
                    else:
                        ttfb_icon = "🔴"
                    print(f"{progress} [\033[92m✓\033[0m] WARMED: {url} — {ttfb_icon} {latency:.2f}s")

                elif 300 <= status < 400:
                    stats["redirects"] += 1
                    print(f"{progress} [\033[96m↩\033[0m] REDIRECT {status}: {url} — {latency:.2f}s")

                elif status == 404:
                    stats["not_found"] += 1
                    print(f"{progress} [\033[93m!\033[0m] NO OVERRIDE (404): {url} — {latency:.2f}s")

                else:
                    stats["errors"] += 1
                    print(f"{progress} [\033[91m✗\033[0m] ANOMALY {status}: {url} — {latency:.2f}s")

        except asyncio.TimeoutError:
            stats["timeouts"] += 1
            print(f"[{index}/{total}] [\033[91m⏱\033[0m] TIMEOUT: {url} (الخادم يختنق — {TIMEOUT_SECONDS}s!)")

        except Exception as e:
            stats["errors"] += 1
            print(f"[{index}/{total}] [\033[91m💥\033[0m] FAILURE: {url} — {str(e)[:60]}")

# ---------------------------------------------------------
# نواة الإشعال المتزامن (Synchronous Ignition Core)
# ---------------------------------------------------------

async def omega_ignition_sequence(urls: list[str], concurrency: int):
    # صمام الأمان لمنع انفجار خوادم Firebase
    semaphore = asyncio.Semaphore(concurrency)

    # فتح قناة اتصال TCP عالية الأداء
    connector = aiohttp.TCPConnector(limit=concurrency, limit_per_host=concurrency, ssl=SSL_CONTEXT)
    async with aiohttp.ClientSession(connector=connector) as session:
        total = len(urls)
        # تجهيز الرؤوس الحربية
        tasks = [
            strike_warhead(session, url, semaphore, i + 1, total)
            for i, url in enumerate(urls)
        ]
        # تنفيذ الانفجار المتزامن المحكوم
        await asyncio.gather(*tasks)

# ---------------------------------------------------------
# محرك التقارير (Report Engine)
# ---------------------------------------------------------

def generate_battle_report(total_urls: int, total_time: float):
    ttfb_list = stats["ttfb_list"]
    avg_ttfb = sum(ttfb_list) / len(ttfb_list) if ttfb_list else 0
    min_ttfb = min(ttfb_list) if ttfb_list else 0
    max_ttfb = max(ttfb_list) if ttfb_list else 0
    p95_index = int(len(ttfb_list) * 0.95) if ttfb_list else 0
    sorted_ttfb = sorted(ttfb_list)
    p95_ttfb = sorted_ttfb[p95_index] if sorted_ttfb and p95_index < len(sorted_ttfb) else 0

    print("\n")
    print("\033[91m═══════════════════════════════════════════════════════════\033[0m")
    print("\033[91m  ☢️   OMEGA IGNITION — BATTLE REPORT\033[0m")
    print("\033[91m═══════════════════════════════════════════════════════════\033[0m")
    print(f"  🎯 Target:          {BASE_URL}")
    print(f"  ⚡ Concurrency:     {MAX_CONCURRENCY} (Safety Valve)")
    print(f"  ⏱️  Duration:        {total_time:.1f}s ({total_time/60:.1f} min)")
    print("\033[90m───────────────────────────────────────────────────────────\033[0m")
    print(f"  📊 Total Warheads:  {total_urls}")
    print(f"  \033[92m✅ Success:\033[0m        {stats['success']}")
    print(f"  \033[96m↩️  Redirects:\033[0m      {stats['redirects']}")
    print(f"  \033[93m⚠️  Not Found:\033[0m      {stats['not_found']}")
    print(f"  \033[91m❌ Errors:\033[0m         {stats['errors']}")
    print(f"  \033[91m⏱️  Timeouts:\033[0m       {stats['timeouts']}")
    print("\033[90m───────────────────────────────────────────────────────────\033[0m")
    print(f"  🟢 TTFB Average:   {avg_ttfb*1000:.0f}ms")
    print(f"  🟢 TTFB Min:       {min_ttfb*1000:.0f}ms")
    print(f"  🔴 TTFB Max:       {max_ttfb*1000:.0f}ms")
    print(f"  🟡 TTFB P95:       {p95_ttfb*1000:.0f}ms")
    print("\033[91m═══════════════════════════════════════════════════════════\033[0m")

    if stats["success"] == total_urls:
        print("\n\033[92m  [✓] ALL CELLS CACHED AND RADIATING.\033[0m")
        print("\033[92m  [✓] THE EMPEROR MAY NOW LIFT THE MAINTENANCE SHIELD.\033[0m")
    elif stats["errors"] + stats["timeouts"] > 0:
        print(f"\n\033[93m  [!] WARNING: {stats['errors'] + stats['timeouts']} warheads failed.\033[0m")
        print("\033[93m  [!] Consider re-running with lower concurrency.\033[0m")

    print("")

# ---------------------------------------------------------
# لوحة التحكم المركزية (Main Console)
# ---------------------------------------------------------

if __name__ == "__main__":
    # Parse CLI arguments
    args = sys.argv[1:]
    dry_run = "--dry-run" in args
    
    conc_arg = [a for a in args if a.startswith("--concurrency=")]
    if conc_arg:
        MAX_CONCURRENCY = int(conc_arg[0].split("=")[1])
    
    base_arg = [a for a in args if a.startswith("--base=")]
    if base_arg:
        BASE_URL = base_arg[0].split("=", 1)[1].rstrip("/")

    print("")
    print("\033[91m╔═══════════════════════════════════════════════════════╗\033[0m")
    print("\033[91m║  ☢️   OMEGA IGNITION PROTOCOL — ROOM ZERO             ║\033[0m")
    print("\033[91m╚═══════════════════════════════════════════════════════╝\033[0m")
    print("")

    # استخراج الحمض النووي — مع تصفية الـ absorbed slugs
    urls_to_warm, filtered_count = discover_all_urls(BASE_URL)
    total_warheads = len(urls_to_warm)

    # Count breakdown
    static_count = 9
    overrides_dir = Path(__file__).parent / "src" / "lib" / "overrides" / "pages"
    blog_dir = Path(__file__).parent / "src" / "lib" / "blog"
    city_count = len([d for d in overrides_dir.iterdir() if d.is_dir()])
    blog_count = 0
    if blog_dir.exists():
        for bf in blog_dir.iterdir():
            if bf.is_file() and bf.suffix == ".ts":
                blog_count += len(re.findall(r"slug:\s*'([^']+)'", bf.read_text()))
    service_count = total_warheads - static_count - city_count - blog_count

    print(f"  🧬 DNA EXTRACTION COMPLETE:")
    print(f"     Static arteries:   {static_count}")
    print(f"     Blog articles:     {blog_count}")
    print(f"     Command centers:   {city_count} cities")
    print(f"     Target cells:      {service_count} service pages")
    if filtered_count > 0:
        print(f"     \033[93m🚫 Absorbed (301):    {filtered_count} filtered out\033[0m")
    print(f"     ────────────────────────────")
    print(f"     🎯 TOTAL WARHEADS: {total_warheads}")
    print(f"     ⚡ CONCURRENCY:    {MAX_CONCURRENCY} (Semaphore Safety Valve)")
    print(f"     🛡️  FIREBASE REACTOR: PROTECTED (under {MAX_CONCURRENCY * 2} limit)")
    print("")

    if dry_run:
        print("  🏜️  DRY RUN — Listing targets without firing:\n")
        for url in urls_to_warm:
            print(f"     {url}")
        print(f"\n  Total: {total_warheads} URLs")
        sys.exit(0)

    # العد التنازلي
    print("\033[93m  ⚠️  INITIATING IGNITION SEQUENCE...\033[0m")
    for i in range(3, 0, -1):
        print(f"  [{i}]...")
        time.sleep(1)

    print("\n\033[91m  🔥 FIRING ALL WARHEADS!\033[0m\n")
    print("─" * 60)

    start_time = time.time()

    # إطلاق النبضة الكهرومغناطيسية
    asyncio.run(omega_ignition_sequence(urls_to_warm, MAX_CONCURRENCY))

    total_time = time.time() - start_time

    # تقرير المعركة
    generate_battle_report(total_warheads, total_time)
