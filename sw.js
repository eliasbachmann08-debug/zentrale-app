// Minimaler Service Worker, damit Chrome die Zentrale als App installieren kann.
// Es wird nichts zwischengespeichert: die Zentrale selbst kommt immer frisch von claude.ai.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
