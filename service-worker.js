const CACHE_NAME = 'interface-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/styleAnimation.css',
    '/css/styleHub.css',
    '/js/script.js',
    '/img/logo-JOA.png'
    // ➕ ajoute ici d'autres images si tu veux les pré-cacher
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response =>
            response || fetch(event.request)
        )
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames =>
            Promise.all(
                cacheNames
                    .filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            )
        )
    );
});
