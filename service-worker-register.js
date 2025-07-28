// Service Worker Registration Script

// Only register service worker in production or if explicitly enabled in development
if ('serviceWorker' in navigator && 
    (window.location.hostname !== 'localhost' && 
     window.location.hostname !== '127.0.0.1' || 
     localStorage.getItem('enable_sw_dev') === 'true')) {
  
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
        
        // Check for updates every hour
        setInterval(() => {
          registration.update();
        }, 60 * 60 * 1000);
        
        // Setup periodic sync if supported
        if ('periodicSync' in registration) {
          const status = navigator.permissions.query({
            name: 'periodic-background-sync',
          });
          
          if (status.state === 'granted') {
            registration.periodicSync.register('content-sync', {
              minInterval: 24 * 60 * 60 * 1000, // Once per day
            });
          }
        }
        
        // Setup push notifications if supported
        if ('PushManager' in window) {
          // This would be expanded to handle push notification subscription
          console.log('Push notifications are supported');
        }
      })
      .catch(function(error) {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
  
  // Handle service worker updates
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', function() {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });
  
  // Listen for messages from service worker
  navigator.serviceWorker.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'CACHE_UPDATED') {
      // Notify user about new content
      const notification = document.createElement('div');
      notification.className = 'update-notification';
      notification.innerHTML = `
        <p>New content is available. <button id="update-button">Refresh</button></p>
      `;
      document.body.appendChild(notification);
      
      document.getElementById('update-button').addEventListener('click', function() {
        window.location.reload();
      });
    }
  });
} else {
  console.log('Service workers are not supported or disabled in development mode');
}