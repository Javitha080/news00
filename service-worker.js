// Service Worker for Homagama Maha Vidyalaya website
// Provides offline support and performance improvements

const CACHE_NAME = 'hmv-cache-v1';
const RUNTIME_CACHE = 'hmv-runtime-v1';

// Resources to cache on install
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/security.js',
  '/preload.js',
  '/assets/logo.png',
  '/assets/hero-bg.jpg',
  '/src/main.tsx',
  '/src/index.css',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap',
  'https://ik.imagekit.io/5fpzilm1y/logo.png?updatedAt=1747557297487'
];

// Install event - precache static resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const currentCaches = [CACHE_NAME, RUNTIME_CACHE];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// Fetch event - network-first strategy for most requests, cache-first for assets
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (event.request.url.startsWith(self.location.origin) || 
      event.request.url.includes('fonts.googleapis.com') || 
      event.request.url.includes('fonts.gstatic.com') ||
      event.request.url.includes('ik.imagekit.io')) {
    
    // Don't cache auth or CMS pages
    if (event.request.url.includes('/auth') || event.request.url.includes('/cms')) {
      return;
    }
    
    // For HTML pages, use network-first strategy
    if (event.request.mode === 'navigate') {
      event.respondWith(
        fetch(event.request).catch(() => {
          return caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
              return cachedResponse;
            }
            return caches.match('/');
          });
        })
      );
      return;
    }
    
    // For assets, use cache-first strategy
    if (event.request.url.includes('/assets/') || 
        event.request.url.includes('.png') || 
        event.request.url.includes('.jpg') || 
        event.request.url.includes('.svg') || 
        event.request.url.includes('.css') || 
        event.request.url.includes('.js') || 
        event.request.url.includes('fonts')) {
      
      event.respondWith(
        caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            // Update cache in the background
            fetch(event.request).then(response => {
              caches.open(RUNTIME_CACHE).then(cache => {
                cache.put(event.request, response.clone());
              });
            }).catch(() => {});
            return cachedResponse;
          }
          
          // Not in cache, get from network
          return fetch(event.request).then(response => {
            // Clone the response
            const responseToCache = response.clone();
            
            // Add to runtime cache
            caches.open(RUNTIME_CACHE).then(cache => {
              cache.put(event.request, responseToCache);
            });
            
            return response;
          }).catch(() => {
            // If both cache and network fail, return a fallback for images
            if (event.request.url.match(/\.(jpg|png|svg|gif)$/)) {
              return caches.match('/assets/fallback-image.png');
            }
            return new Response('Network error happened', {
              status: 408,
              headers: { 'Content-Type': 'text/plain' }
            });
          });
        })
      );
      return;
    }
  }
  
  // For all other requests, try network first, then cache
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});

// Handle push notifications
self.addEventListener('push', event => {
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    data: {
      url: data.url || '/'
    }
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Handle notification click
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});

// Handle background sync
self.addEventListener('sync', event => {
  if (event.tag === 'sync-comments') {
    event.waitUntil(syncComments());
  }
});

// Function to sync comments from IndexedDB to server
async function syncComments() {
  // This would be implemented to sync data from IndexedDB to server
  // when the user comes back online
  console.log('Background sync for comments');
}