// TODO: add listener and handler to cache static assets
const filesToCache = [
    '/',
    './manifest.webmanifest',
    './index.html',
    './assets/css/style.css',
    './assets/images/brandenburg.jpg',
    './assets/images/logo16.png',
    './assets/images/logo48.png',
    './assets/images/logo128.png',
    './assets/images/logo512.png',
    './assets/images/map.jpg',
    './assets/images/reichstag.jpg'
]


// TODO: add listener and handler to retrieve static assets from the Cache Storage in the browser 
self.addEventListener('install', (event) => {
    event.waitUntil(caches.open('static')
    .then(cache => {return cache.addAll(filesToCache)}));
    self.skipWaiting();
})
self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request)
    .then(response => {
        return response || fetch(event.request)
    }));
})