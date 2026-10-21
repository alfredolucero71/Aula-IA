const CACHE_PREFIX = "aulaia-shell-";
const CACHE_NAME = `${CACHE_PREFIX}v2`;
const APP_BASE = self.registration.scope;
const appUrl = (path = "") => new URL(path, APP_BASE).toString();
const API_PATH = new URL("api/", APP_BASE).pathname;
const APP_SHELL = [
  appUrl(""),
  appUrl("index.html"),
  appUrl("manifest.webmanifest"),
  appUrl("favicon.svg"),
  appUrl("icons/aulaia-192.svg"),
  appUrl("icons/aulaia-512.svg")
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  // Nunca cachear API, sesiones ni datos de usuarios.
  if (url.pathname.startsWith(API_PATH)) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(appUrl("index.html"), copy));
          }
          return response;
        })
        .catch(async () => (await caches.match(appUrl("index.html"))) || (await caches.match(appUrl(""))))
    );
    return;
  }

  if (["script", "style", "image", "font"].includes(request.destination)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) {
          // Actualizar la caché en segundo plano sin fallar la respuesta ya disponible.
          fetch(request).then((response) => {
            if (response.ok) {
              const copy = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
            }
          }).catch(() => {});
          return cached;
        }

        return fetch(request).then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        });
      })
    );
  }
});
