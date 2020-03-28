var cacheName = 'service-worker'
var filesToCache = [
    '/',
    '/css/style.css',
    '/js/app.js'
]


/* start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(filesToCache);
        })
    );
});

/* serve cached content when offline */
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request)
        })
    );
});