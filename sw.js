const CACHE = 'boki3-v2';
const ASSETS = [
  '/boki3-app/',
  '/boki3-app/index.html',
  '/boki3-app/questions.js',
  '/boki3-app/questions2.js',
  '/boki3-app/questions3.js',
  '/boki3-app/manifest.json',
  '/boki3-app/icon-192.png',
  '/boki3-app/icon-512.png'
];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request))); });
