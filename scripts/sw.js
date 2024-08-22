self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('v1').then(cache => {
        return cache.addAll([
            '/Manuja/',  // Update this path
            '/Manuja/index.html',  // Update this path
            '/Manuja/styles/styles.css',  // Update this path
            '/Manuja/scripts/script.js',  // Update this path
            '/Manuja/favicons/favicon-192x192.png',  // Update this path
            '/Manuja/favicons/favicon-512x512.png'  // Update this path
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
