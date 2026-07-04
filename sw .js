// Minimal service worker: makes the site installable as an app (PWA).
// The app itself is always loaded live (no offline caching of data).
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', () => {}); // network passthrough
