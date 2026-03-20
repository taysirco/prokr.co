// ============================================
// Prokr.co — Service Worker v1.0
// Multi-Strategy Caching + Offline + Background Sync
// ============================================

const SW_VERSION = '1.1.0';

// ─── Cache Names ───
const CACHE_STATIC  = 'prokr-static-v1';
const CACHE_IMAGES  = 'prokr-images-v1';
const CACHE_CITIES  = 'prokr-cities-v1';
const CACHE_PAGES   = 'prokr-pages-v1';
const CACHE_API     = 'prokr-api-v1';

const ALL_CACHES = [CACHE_STATIC, CACHE_IMAGES, CACHE_CITIES, CACHE_PAGES, CACHE_API];

// ─── 24 City Slugs (Pre-cache on install) ───
const CITY_SLUGS = [
  'riyadh', 'al-kharj', 'qassim', 'buraidah', 'onizah',
  'jeddah', 'makkah', 'madinah', 'taif', 'yanbu',
  'dammam', 'al-khobar', 'dhahran', 'jubail', 'al-ahsa', 'qatif', 'hafr-albatin',
  'tabuk', 'hail',
  'abha', 'khamis-mushait', 'najran', 'jazan', 'al-baha'
];

// Only pre-cache critical resources on install (not all 24 cities)
// Cities are cached opportunistically on first visit via Cache-First strategy
const PRECACHE_URLS = [
  '/offline.html',
  '/',
];

// ─── Background Sync Queue (IndexedDB) ───
const SYNC_DB_NAME = 'prokr-sync-queue';
const SYNC_STORE   = 'pending-requests';
const SYNC_TAG     = 'prokr-bg-sync';

// ============================================
// INSTALL — Pre-cache critical shell
// ============================================
self.addEventListener('install', (event) => {
  console.log(`[SW ${SW_VERSION}] Installing...`);
  event.waitUntil(
    caches.open(CACHE_CITIES)
      .then(cache => {
        // Use individual fetches so one failure doesn't block others
        return Promise.allSettled(
          PRECACHE_URLS.map(url =>
            fetch(url, { credentials: 'same-origin' })
              .then(response => {
                if (response.ok) {
                  return cache.put(url, response);
                }
              })
              .catch(() => {
                console.warn(`[SW] Failed to pre-cache: ${url}`);
              })
          )
        );
      })
      .then(() => self.skipWaiting())
  );
});

// ============================================
// ACTIVATE — Clean old caches + pre-cache cities
// ============================================
self.addEventListener('activate', (event) => {
  console.log(`[SW ${SW_VERSION}] Activating...`);
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key.startsWith('prokr-') && !ALL_CACHES.includes(key))
          .map(key => {
            console.log(`[SW] Deleting old cache: ${key}`);
            return caches.delete(key);
          })
      ))
      .then(() => self.clients.claim())
      .then(() => {
        // Pre-cache city pages lazily AFTER activation (non-blocking)
        // This runs in the background without blocking the SW activation
        caches.open(CACHE_CITIES).then(cache => {
          CITY_SLUGS.forEach(slug => {
            const url = `/${slug}`;
            cache.match(url).then(existing => {
              if (!existing) {
                fetch(url, { credentials: 'same-origin' })
                  .then(res => { if (res.ok) cache.put(url, res); })
                  .catch(() => {}); // Silently skip on failure
              }
            });
          });
        });
      })
  );
});

// ============================================
// FETCH — Multi-Strategy Router
// ============================================
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // ─── Skip Firebase Auth handler & critical Google API requests ───
  // These must NEVER be intercepted by the SW to avoid auth flow breakage
  
  // Skip /__/auth/* — these are proxied to Firebase auth handler via Next.js rewrites
  // Intercepting them would break Google Sign-In popup/redirect flow
  if (url.pathname.startsWith('/__/auth')) {
    return;
  }

  const PASSTHROUGH_DOMAINS = [
    'identitytoolkit.googleapis.com',
    'securetoken.googleapis.com',
    'www.googleapis.com',
    'accounts.google.com',
    'prokr-84ca8.firebaseapp.com',
  ];
  if (PASSTHROUGH_DOMAINS.some(d => url.hostname === d || url.hostname.endsWith('.' + d))) {
    return; // Let the browser handle these directly
  }

  // Skip non-GET for caching (but intercept for Background Sync)
  if (request.method !== 'GET') {
    if (request.method === 'POST' || request.method === 'PUT') {
      event.respondWith(handleMutationRequest(request));
    }
    return;
  }

  // ─── Skip Next.js internals that must NOT be cached ───
  // RSC (React Server Components) flight responses — corrupts hydration if cached
  if (request.headers.get('RSC') === '1') return;
  // Next.js prefetch requests
  if (request.headers.get('Next-Router-Prefetch') === '1') return;
  // Next.js data routes (App Router server actions / data fetching)
  if (url.pathname.startsWith('/_next/data/')) return;
  // Next.js image optimization API
  if (url.pathname.startsWith('/_next/image')) return;

  // Only handle same-origin + allowed external origins
  const isInternal = url.origin === self.location.origin;
  const isFirebaseStorage = url.hostname.includes('firebasestorage.googleapis.com')
                         || url.hostname.includes('prokr-84ca8.firebasestorage.app');
  const isGoogleFonts = url.hostname.includes('fonts.googleapis.com')
                     || url.hostname.includes('fonts.gstatic.com');

  if (!isInternal && !isFirebaseStorage && !isGoogleFonts) return;

  // ─── Strategy Router (order matters: most specific first) ───
  if (isAPIRequest(url)) {
    event.respondWith(networkFirst(request, CACHE_API, 3000));
  } else if (isCityPage(url)) {
    event.respondWith(cacheFirst(request, CACHE_CITIES, 7 * 24 * 60 * 60 * 1000));
  } else if (isGoogleFonts || isStaticAsset(url)) {
    event.respondWith(cacheFirst(request, CACHE_STATIC));
  } else if (isImageRequest(url, request, isFirebaseStorage)) {
    event.respondWith(cacheFirstWithLimit(request, CACHE_IMAGES, 200));
  } else if (isNavigationOrPage(request, url)) {
    event.respondWith(staleWhileRevalidate(request, CACHE_PAGES));
  }
  // All other requests pass through to network normally
});

// ============================================
// BACKGROUND SYNC — Replay queued requests
// ============================================
self.addEventListener('sync', (event) => {
  if (event.tag === SYNC_TAG) {
    console.log('[SW] Background Sync triggered');
    event.waitUntil(replaySyncQueue());
  }
});

// ============================================
// CACHE STRATEGIES
// ============================================

/**
 * Cache-First: Serve from cache, fallback to network.
 * Optional maxAge (ms) for time-based expiry.
 */
async function cacheFirst(request, cacheName, maxAge) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    if (maxAge) {
      const dateHeader = cachedResponse.headers.get('sw-cached-at');
      if (dateHeader) {
        const cachedAt = parseInt(dateHeader, 10);
        if (Date.now() - cachedAt > maxAge) {
          // Expired — fetch fresh in background, return stale immediately
          fetchAndCache(request, cache);
          return cachedResponse;
        }
      }
    }
    return cachedResponse;
  }

  return fetchAndCache(request, cache);
}

/**
 * Cache-First with LRU eviction when cache exceeds maxItems.
 */
async function cacheFirstWithLimit(request, cacheName, maxItems) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);

  if (cachedResponse) return cachedResponse;

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const keys = await cache.keys();
      if (keys.length >= maxItems) {
        await cache.delete(keys[0]); // LRU: evict oldest entry
      }
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch {
    return offlineFallback(request);
  }
}

/**
 * Stale-While-Revalidate: Return cached immediately,
 * fetch fresh copy in background for next visit.
 */
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);

  // Always start the revalidation fetch (fire-and-forget)
  const revalidate = fetch(request)
    .then(networkResponse => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch(() => null);

  // If we have a cached version, return it immediately
  if (cachedResponse) {
    return cachedResponse;
  }

  // No cache — must wait for network
  const networkResponse = await revalidate;
  if (networkResponse) return networkResponse;

  return offlineFallback(request);
}

/**
 * Network-First: Try network with timeout, fallback to cache.
 */
async function networkFirst(request, cacheName, timeoutMs) {
  const cache = await caches.open(cacheName);

  try {
    const networkResponse = await withTimeout(fetch(request), timeoutMs);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) return cachedResponse;
    return new Response(JSON.stringify({ error: 'offline', message: 'لا يوجد اتصال بالإنترنت' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// ============================================
// MUTATION HANDLER (POST/PUT with Background Sync)
// ============================================

async function handleMutationRequest(request) {
  try {
    const response = await fetch(request.clone());
    return response;
  } catch {
    // Network failed — queue for Background Sync
    await saveToSyncQueue(request.clone());
    return new Response(JSON.stringify({
      queued: true,
      message: 'تم حفظ طلبك وسيُرسل تلقائياً عند عودة الاتصال'
    }), {
      status: 202,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// ============================================
// HELPERS
// ============================================

/** Fetch and store in cache with timestamp header for expiry */
async function fetchAndCache(request, cache) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      // Clone response and inject timestamp for expiry tracking
      const headers = new Headers(networkResponse.headers);
      headers.set('sw-cached-at', Date.now().toString());

      const body = await networkResponse.clone().arrayBuffer();
      const timedResponse = new Response(body, {
        status: networkResponse.status,
        statusText: networkResponse.statusText,
        headers
      });

      cache.put(request, timedResponse);
    }
    return networkResponse;
  } catch {
    return offlineFallback(request);
  }
}

/** Return offline.html for navigation, or a minimal 503 for sub-resources */
async function offlineFallback(request) {
  if (request.mode === 'navigate' || request.destination === 'document') {
    const cache = await caches.open(CACHE_CITIES);
    const offlinePage = await cache.match('/offline.html');
    if (offlinePage) return offlinePage;
  }

  return new Response('', { status: 503, statusText: 'Offline' });
}

/** Timeout wrapper for fetch */
function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Timeout')), ms);
    promise
      .then(val => { clearTimeout(timer); resolve(val); })
      .catch(err => { clearTimeout(timer); reject(err); });
  });
}

// ─── URL Classification ───

function isStaticAsset(url) {
  // Next.js hashed static bundles (immutable, safe to cache forever)
  if (url.pathname.startsWith('/_next/static/')) return true;
  // General static file extensions
  return /\.(css|js|woff2?|ttf|eot|ico)(\?.*)?$/i.test(url.pathname);
}

function isImageRequest(url, request, isFirebaseStorage) {
  // Firebase Storage images (check for image token or common extensions)
  if (isFirebaseStorage) {
    return /\.(jpg|jpeg|png|gif|webp|avif|svg)(\?.*)?/i.test(url.pathname)
        || request.destination === 'image';
  }
  return request.destination === 'image'
      || /\.(jpg|jpeg|png|gif|webp|avif|svg)(\?.*)?$/i.test(url.pathname);
}

function isCityPage(url) {
  if (url.origin !== self.location.origin) return false;
  const path = url.pathname.replace(/\/$/, '') || '/';
  if (path === '/') return true;
  // Must be a single-segment path matching a known city slug
  const segments = path.split('/').filter(Boolean);
  return segments.length === 1 && CITY_SLUGS.includes(segments[0]);
}

function isAPIRequest(url) {
  if (url.origin === self.location.origin) {
    return url.pathname.startsWith('/api/');
  }
  return url.hostname.includes('firestore.googleapis.com');
}

function isNavigationOrPage(request, url) {
  if (url.origin !== self.location.origin) return false;
  if (request.mode === 'navigate') return true;
  // Exclude internal Next.js paths that are NOT user-facing pages
  if (url.pathname.startsWith('/_next/')) return false;
  if (url.pathname.startsWith('/api/')) return false;
  // /{city}/{service} or /company/{code} or /regions/{city}/{sub} or /blog/{slug}
  const segments = url.pathname.split('/').filter(Boolean);
  return segments.length >= 2;
}

// ============================================
// BACKGROUND SYNC — IndexedDB Queue
// ============================================

function openSyncDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(SYNC_DB_NAME, 1);
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains(SYNC_STORE)) {
        req.result.createObjectStore(SYNC_STORE, { keyPath: 'id', autoIncrement: true });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function saveToSyncQueue(request) {
  try {
    const body = await request.text();
    const entry = {
      url: request.url,
      method: request.method,
      headers: Object.fromEntries(request.headers.entries()),
      body,
      timestamp: Date.now()
    };

    const db = await openSyncDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(SYNC_STORE, 'readwrite');
      tx.objectStore(SYNC_STORE).add(entry);
      tx.oncomplete = () => {
        // Request Background Sync registration
        if (self.registration.sync) {
          self.registration.sync.register(SYNC_TAG).catch(() => {});
        }
        resolve();
      };
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.error('[SW] Failed to queue request:', err);
  }
}

/**
 * Replay all queued requests when connectivity returns.
 * Uses a fresh transaction per delete to avoid stale-transaction bug.
 */
async function replaySyncQueue() {
  const db = await openSyncDB();

  // Step 1: Read all entries in one transaction
  const entries = await new Promise((resolve, reject) => {
    const tx = db.transaction(SYNC_STORE, 'readonly');
    const req = tx.objectStore(SYNC_STORE).getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });

  if (!entries.length) {
    console.log('[SW] No queued requests to replay');
    return;
  }

  console.log(`[SW] Replaying ${entries.length} queued requests`);

  // Step 2: Replay each entry and delete on success (separate transactions)
  for (const entry of entries) {
    try {
      await fetch(entry.url, {
        method: entry.method,
        headers: entry.headers,
        body: entry.body || undefined
      });

      // Delete successfully replayed entry in a fresh transaction
      await new Promise((resolve, reject) => {
        const tx = db.transaction(SYNC_STORE, 'readwrite');
        tx.objectStore(SYNC_STORE).delete(entry.id);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
      });

      console.log(`[SW] ✅ Replayed: ${entry.method} ${entry.url}`);
    } catch {
      console.warn(`[SW] ⏳ Retry failed, keeping in queue: ${entry.url}`);
      // Stop trying remaining entries if we're still offline
      break;
    }
  }
}

// ============================================
// MESSAGE HANDLER — Client ↔ SW communication
// ============================================
self.addEventListener('message', (event) => {
  const { data } = event;
  if (!data || !data.type) return;

  switch (data.type) {
    case 'SKIP_WAITING':
      self.skipWaiting();
      break;

    case 'GET_VERSION':
      event.ports?.[0]?.postMessage({ version: SW_VERSION });
      break;

    case 'CACHE_INVALIDATE':
      if (data.url) {
        Promise.all(
          ALL_CACHES.map(name => caches.open(name).then(c => c.delete(data.url)))
        ).then(() => {
          console.log(`[SW] Cache invalidated: ${data.url}`);
        });
      }
      break;

    case 'CACHE_WARM':
      // Warm specific URLs into their appropriate caches
      if (Array.isArray(data.urls)) {
        caches.open(CACHE_PAGES).then(cache => {
          data.urls.forEach(url => {
            fetch(url, { credentials: 'same-origin' })
              .then(res => { if (res.ok) cache.put(url, res); })
              .catch(() => {});
          });
        });
      }
      break;
  }
});
