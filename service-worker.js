const CACHE_NAME = "pwa-cache-v1";
const ASSETS = [
  "/",
  "/vending_machine/index.html",
  "/vending_machine/styles.css",
  "/vending_machine/script.js",
  "/vending_machine/icons/icon-192x192.png",
  "/vending_machine/icons/icon-512x512.png",
  "/vending_machine/recycle_bg.png",
  "/vending_machine/dummy_qr_code.png",
  "/vending_machine/logo_horizontal.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

