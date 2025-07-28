// Resource preloading script
// This script helps with performance by preloading critical resources

(function() {
  // Helper function to create and append preload links
  function preloadResource(url, as, type = null, crossorigin = null) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = as;
    if (type) link.type = type;
    if (crossorigin) link.crossOrigin = crossorigin;
    document.head.appendChild(link);
  }

  // Preload critical fonts
  preloadResource('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', 'style');
  preloadResource('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2', 'font', 'font/woff2', 'anonymous');
  
  // Preload critical images (update with your actual critical images)
  preloadResource('https://ik.imagekit.io/5fpzilm1y/logo.png?updatedAt=1747557297487', 'image');
  preloadResource('/assets/hero-bg.jpg', 'image');

  // Preload critical scripts
  preloadResource('/src/main.tsx', 'script');

  // DNS prefetch for external domains
  const domains = [
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    'supabase.co',
    'ik.imagekit.io'
  ];

  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = `//${domain}`;
    document.head.appendChild(link);

    // Also add preconnect for critical domains
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = `//${domain}`;
    document.head.appendChild(preconnect);
  });

  // Add resource hints
  if ('connection' in navigator && navigator.connection.effectiveType === '4g') {
    // Only preload more resources on fast connections
    preloadResource('/assets/secondary-image.jpg', 'image');
  }

  // Log preloading initialization
  console.info('Resource preloading initialized');
})();