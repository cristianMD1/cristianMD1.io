self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/cristianMD11.github.io/',
      '/cristianMD11.github.io/index.html',
      '/cristianMD11.github.io/index.js',
      '/cristianMD11.github.io/style.css',
      '/cristianMD11.github.io/images/fox1.jpg',
      '/cristianMD11.github.io/images/fox2.jpg',
      '/cristianMD11.github.io/images/fox3.jpg',
      '/cristianMD11.github.io/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
