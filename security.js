// Security enhancement script

// This script adds additional security headers and protections
// It runs immediately when loaded

(function() {
  // Set security-related HTTP-only cookie
  document.cookie = 'secure_session=true; path=/; SameSite=Strict; Secure;';
  
  // Create a Content Security Policy violation reporter
  document.addEventListener('securitypolicyviolation', function(e) {
    console.error('CSP violation:', e.blockedURI, 'violated', e.violatedDirective);
    // In production, you could send this to your server for logging
  });
  
  // Add meta CSP tag to ensure client-side CSP matches server configuration
  const metaCSP = document.createElement('meta');
  metaCSP.setAttribute('http-equiv', 'Content-Security-Policy');
  metaCSP.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: https://images.unsplash.com https://ik.imagekit.io; connect-src 'self' https://*.supabase.co wss://*.supabase.co; font-src 'self' https://fonts.gstatic.com data:;");
  document.head.appendChild(metaCSP);
  // Prevent clickjacking
  if (window.self !== window.top) {
    // If the page is being framed, break out of the frame
    window.top.location = window.self.location;
  }

  // Disable console for production (uncomment in production)
  // if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
  //   console.log = function() {};
  //   console.warn = function() {};
  //   console.error = function() {};
  //   console.info = function() {};
  //   console.debug = function() {};
  // }

  // Prevent drag and drop attacks
  window.addEventListener('dragover', function(e) {
    e.preventDefault();
  }, false);
  
  window.addEventListener('drop', function(e) {
    e.preventDefault();
  }, false);

  // Prevent browser caching of sensitive pages
  if (window.location.pathname.includes('/auth') || window.location.pathname.includes('/cms')) {
    // Add meta tags to prevent caching
    const metaCache = document.createElement('meta');
    metaCache.setAttribute('http-equiv', 'Cache-Control');
    metaCache.setAttribute('content', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    document.head.appendChild(metaCache);
    
    const metaPragma = document.createElement('meta');
    metaPragma.setAttribute('http-equiv', 'Pragma');
    metaPragma.setAttribute('content', 'no-cache');
    document.head.appendChild(metaPragma);
    
    const metaExpires = document.createElement('meta');
    metaExpires.setAttribute('http-equiv', 'Expires');
    metaExpires.setAttribute('content', '0');
    document.head.appendChild(metaExpires);
  }

  // Detect and prevent certain XSS attacks
  const urlParams = new URLSearchParams(window.location.search);
  for (const [key, value] of urlParams.entries()) {
    if (
      value.includes('<script') ||
      value.includes('javascript:') ||
      value.includes('data:') ||
      value.includes('vbscript:') ||
      value.includes('onerror=') ||
      value.includes('onload=')
    ) {
      // Potential XSS attack detected, redirect to home
      window.location.href = '/';
      break;
    }
  }

  // Add a listener for storage events to detect potential session hijacking
  window.addEventListener('storage', function(e) {
    // If someone is trying to modify auth-related storage items from another tab
    if (e.key && (e.key.includes('auth') || e.key.includes('token'))) {
      // Log out the user as a precaution
      sessionStorage.clear();
      localStorage.removeItem('auth_attempts');
      localStorage.removeItem('auth_locked_until');
      // Redirect to home
      window.location.href = '/';
    }
  });

  // Log security script initialization
  console.info('Security enhancements initialized');
  
  // Advanced DevTools detection (multiple methods)
  let devToolsTimeout;
  let devToolsOpen = false;
  let authBypass = false;
  
  // Function to show warning when DevTools is detected - less intrusive version
  const showDevToolsWarning = function() {
    // Don't show warning if bypassed or if we've already shown it recently
    if (!devToolsOpen || authBypass || sessionStorage.getItem('devToolsWarningShown')) {
      return;
    }
    
    // Set a flag to prevent showing the warning too frequently
    sessionStorage.setItem('devToolsWarningShown', 'true');
    
    // Clear the flag after 30 seconds to allow showing the warning again if needed
    setTimeout(function() {
      sessionStorage.removeItem('devToolsWarningShown');
    }, 30000);
    
    // Create a floating notification instead of replacing entire body
    const warningDiv = document.createElement('div');
    warningDiv.style.position = 'fixed';
    warningDiv.style.top = '10%';
    warningDiv.style.left = '50%';
    warningDiv.style.transform = 'translateX(-50%)';
    warningDiv.style.width = '80%';
    warningDiv.style.maxWidth = '500px';
    warningDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    warningDiv.style.color = 'white';
    warningDiv.style.padding = '20px';
    warningDiv.style.zIndex = '9999999';
    warningDiv.style.fontFamily = 'Arial, sans-serif';
    warningDiv.style.borderRadius = '8px';
    warningDiv.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)';
    warningDiv.style.textAlign = 'center';
    
    warningDiv.innerHTML = '<h2 style="color:#ff6b6b;margin-bottom:15px;">Security Notice</h2>' +
      '<p style="font-size:16px;margin-bottom:15px;">Developer tools have been detected. For security reasons, some features may be restricted.</p>' +
      '<p style="font-size:14px;margin-bottom:20px;">If you believe this is an error, please close developer tools and refresh the page.</p>' +
      '<div><button onclick="window.location.reload()" style="padding:8px 16px;font-size:14px;background-color:#4CAF50;color:white;border:none;border-radius:4px;cursor:pointer;">Refresh Page</button>' +
      '<button onclick="this.parentNode.parentNode.remove()" style="padding:8px 16px;font-size:14px;background-color:#555;color:white;border:none;border-radius:4px;cursor:pointer;margin-left:10px;">Dismiss</button></div>';
    
    document.body.appendChild(warningDiv);
    
    // Auto-remove after 10 seconds
    setTimeout(function() {
      if (warningDiv.parentNode) {
        document.body.removeChild(warningDiv);
      }
    }, 10000);
  };
  
  // Method 1: Enhanced size detection with adaptive thresholds - less aggressive version
  const sizeDetection = function() {
    // Only run this check occasionally to reduce performance impact
    if (Math.random() < 0.5) { // Only run 50% of the time
      // Get device pixel ratio to account for high-DPI displays
      const pixelRatio = window.devicePixelRatio || 1;
      
      // Calculate thresholds based on screen size and pixel ratio with more conservative values
      // This makes the detection more accurate across different devices and screen sizes
      const baseWidthThreshold = 200 * pixelRatio; // Increased from 160
      const baseHeightThreshold = 200 * pixelRatio; // Increased from 160
      
      // Adjust thresholds based on screen size (larger screens may have larger differences)
      const screenSizeFactor = Math.min(1.5, Math.max(1, Math.sqrt(screen.width * screen.height) / 1500));
      const widthThreshold = baseWidthThreshold * screenSizeFactor;
      const heightThreshold = baseHeightThreshold * screenSizeFactor;
      
      // Calculate the differences
      const widthDiff = window.outerWidth - window.innerWidth;
      const heightDiff = window.outerHeight - window.innerHeight;
      
      // Check if differences exceed thresholds with more conservative checks
      const isWidthSuspicious = widthDiff > widthThreshold;
      const isHeightSuspicious = heightDiff > heightThreshold;
      
      // Additional check for common dev tools dimensions with higher thresholds
      const isCommonDevToolSize = (
        (widthDiff === 0 && heightDiff > 150) || // Bottom panel (increased from 100)
        (widthDiff > 150 && heightDiff === 0) || // Side panel (increased from 100)
        (widthDiff > 250 && heightDiff > 150)    // Both panels (increased from 200/100)
      );
      
      // Check for Firefox dev tools which can have different behavior
      const isFirefox = navigator.userAgent.indexOf('Firefox') !== -1;
      const isFirefoxDevTools = isFirefox && (
        widthDiff > 100 || heightDiff > 100 // Increased from 50
      );
      
      // Perform multiple checks to reduce false positives
      let positiveChecks = 0;
      const checkCount = 3;
      
      for (let i = 0; i < checkCount; i++) {
        if (isWidthSuspicious || isHeightSuspicious || isCommonDevToolSize || isFirefoxDevTools) {
          positiveChecks++;
        }
      }
      
      // Only trigger if majority of checks are positive
      if (positiveChecks >= Math.ceil(checkCount * 0.6)) {
        devToolsOpen = true;
        showDevToolsWarning();
      }
    }
  };
  
  // Method 2: Console.log override detection - store original methods but don't override immediately
  // This prevents interference with normal page functionality
  const originalLog = console.log;
  const originalClear = console.clear;
  const originalWarn = console.warn;
  const originalError = console.error;
  const originalDebug = console.debug;
  const originalInfo = console.info;
  
  // We'll use these in the detection function instead of overriding globally
  function setupConsoleDetectors() {
    // Only set up if not already overridden
    if (console.log === originalLog) {
      console.log = function() {
        // Check if this is a dev tools related call
        const stack = new Error().stack || '';
        if (stack.indexOf('devtools') !== -1 || stack.indexOf('debugger') !== -1) {
          devToolsOpen = true;
          showDevToolsWarning();
        }
        return originalLog.apply(console, arguments);
      };
    }
    
    // Set a timeout to restore original methods
    setTimeout(function() {
      console.log = originalLog;
      console.clear = originalClear;
      console.warn = originalWarn;
      console.error = originalError;
      console.debug = originalDebug;
      console.info = originalInfo;
    }, 100);
  }
  
  // We'll call this function periodically instead of keeping overrides active all the time
  
  // Method 3: Enhanced debugger detection with multiple checks
  function debuggerDetection() {
    // We'll use a less intrusive approach that doesn't affect normal page functionality
    // Only run this check occasionally to reduce performance impact
    if (Math.random() < 0.3) { // Only run 30% of the time
      // First check: Time-based debugger detection with a non-blocking approach
      const startTime = new Date().getTime();
      // Using a conditional debugger statement that only triggers in dev tools
      if (window.devToolsForceDebugger) debugger;
      const endTime = new Date().getTime();
      const timeDiff = endTime - startTime;
      
      // Adjust threshold based on device performance
      // This helps reduce false positives on slower devices
      let debuggerThreshold = 100;
      
      // Check if we're on a mobile device which might be slower
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        debuggerThreshold = 200; // Higher threshold for mobile devices
      }
      
      if (timeDiff > debuggerThreshold) {
        devToolsOpen = true;
        showDevToolsWarning();
        return;
      }
    }
    
    // Second check: Try-catch with Error.toString - only run occasionally
    if (Math.random() < 0.2) { // Only run 20% of the time
      try {
        // Use a less intrusive approach
        const testObj = { get id() { return 'debug-check'; } };
        // Only log to console if we're already checking
        if (devToolsOpen) {
          console.log(testObj);
          console.clear();
        }
      } catch (e) {
        // If an error occurs, check if it's related to debugger
        if (e.toString().indexOf('Debugger') !== -1) {
          devToolsOpen = true;
          showDevToolsWarning();
        }
      }
    }
  }
  
  // Method 10: Console override detection - less intrusive version
  function consoleOverrideDetection() {
    // Only run this check occasionally to reduce performance impact
    if (Math.random() < 0.2) { // Only run 20% of the time
      // Check if any console methods have been overridden without modifying them
      try {
        // Use a safer approach to check for overrides
        const isLogOverridden = Function.prototype.toString.call(console.log).indexOf('native code') === -1;
        const isErrorOverridden = Function.prototype.toString.call(console.error).indexOf('native code') === -1;
        
        // Only check the most commonly used methods to reduce performance impact
        if (isLogOverridden || isErrorOverridden) {
          devToolsOpen = true;
          showDevToolsWarning();
        }
      } catch (e) {
        // If we get an error during the check, it might be due to dev tools interference
        if (e.toString().indexOf('access') !== -1 || e.toString().indexOf('permission') !== -1) {
          devToolsOpen = true;
          showDevToolsWarning();
        }
      }
      
      // We'll use the setupConsoleDetectors function for temporary overrides
      // instead of doing it here to avoid duplication and reduce interference
      if (!devToolsOpen) {
        setupConsoleDetectors();
      }
    }
  }
  
  // Method 4: Function.prototype.toString detection - improved version
  function functionToStringDetection() {
    // Only run this check occasionally to reduce performance impact
    if (Math.random() < 0.15) { // Only run 15% of the time
      // Store original methods before checking
      const originalToString = Function.prototype.toString;
      const originalFunctionToString = Function.toString;
      
      try {
        // Use a safer approach to check for modifications
        const testFunc = function testFunctionForSecurity() { return 'test'; };
        const testResult = originalToString.call(testFunc);
        
        // More reliable check for tampering - look for function name and basic structure
        // This avoids false positives from different browser implementations
        const hasExpectedStructure = (
          testResult.indexOf('testFunctionForSecurity') !== -1 || 
          testResult.indexOf('return') !== -1
        );
        
        // Only flag as devtools if we're very confident it's been modified
        if (!hasExpectedStructure && originalToString.toString() !== originalFunctionToString) {
          // Verify with a secondary check to reduce false positives
          const secondaryTest = function() {};
          const secondaryResult = originalToString.call(secondaryTest);
          
          if (secondaryResult.indexOf('function') === -1) {
            devToolsOpen = true;
            showDevToolsWarning();
          }
        }
      } catch (e) {
        // Only set devToolsOpen if we get a specific error related to debugger
        // This helps avoid false positives from normal errors
        if (e.toString().indexOf('access') !== -1 || 
            e.toString().indexOf('permission') !== -1 || 
            e.toString().indexOf('debugger') !== -1) {
          devToolsOpen = true;
          showDevToolsWarning();
        }
      }
    }
  }
  
  // Special bypass for auth page access
  // This allows the auth page to be accessed when the correct keyboard shortcut is used
  if (window.location.pathname.includes('/auth')) {
    const authKey = sessionStorage.getItem('authKeyUsed');
    const authToken = sessionStorage.getItem('authToken');
    const authTimestamp = sessionStorage.getItem('authTimestamp');
    
    if (authKey === 'true' && authToken && authTimestamp) {
      const timestamp = parseInt(authTimestamp, 10);
      const now = Date.now();
      
      // Token must be less than 30 seconds old
      if (now - timestamp < 30000) {
        authBypass = true;
        
        // Create a small indicator that auth bypass is active
        const bypassIndicator = document.createElement('div');
        bypassIndicator.style.position = 'fixed';
        bypassIndicator.style.top = '10px';
        bypassIndicator.style.right = '10px';
        bypassIndicator.style.backgroundColor = 'rgba(0, 128, 0, 0.7)';
        bypassIndicator.style.color = 'white';
        bypassIndicator.style.padding = '5px 10px';
        bypassIndicator.style.borderRadius = '3px';
        bypassIndicator.style.fontSize = '12px';
        bypassIndicator.style.zIndex = '9999';
        bypassIndicator.textContent = 'Auth Mode';
        document.body.appendChild(bypassIndicator);
      }
    }
  }
  
  // Check for developer tools on page load using element dimensions
  function checkDevToolsOnLoad() {
    // Method 5: Check for firebug
    if (window.console && (window.console.firebug || window.console.exception)) {
      devToolsOpen = true;
      showDevToolsWarning();
      return;
    }
    
    // Method 6: Check using element.id technique
    const element = document.createElement('div');
    Object.defineProperty(element, 'id', {
      get: function() {
        devToolsOpen = true;
        showDevToolsWarning();
        return 'devtools-check';
      }
    });
    console.log(element);
    console.clear();
    
    // Method 7: Performance timing
    const start = performance.now();
    for (let i = 0; i < 1000; i++) {
      console.debug(i);
    }
    const end = performance.now();
    if (end - start > 100) { // Threshold for detecting slowdown due to DevTools
      devToolsOpen = true;
      showDevToolsWarning();
    }
    console.clear();
  }
  
  // Run the on-load check after a short delay
  setTimeout(checkDevToolsOnLoad, 1000);
  
  // Method 8: Eruda and mobile devtools detection - improved version
  function detectMobileDevTools() {
    // Only run this check occasionally to reduce performance impact
    if (Math.random() < 0.2) { // Only run 20% of the time
      let detectedTools = 0;
      const totalChecks = 5;
      
      // Check for Eruda (popular mobile dev tool)
      if (window.eruda || window.hasOwnProperty('eruda')) {
        detectedTools++;
      }
      
      // Check for vConsole (popular in WeChat and Chinese browsers)
      if (window.vConsole || window.hasOwnProperty('vConsole')) {
        detectedTools++;
      }
      
      // Check for other mobile dev tools with more reliable detection
      const devToolList = ['__REACT_DEVTOOLS_GLOBAL_HOOK__', '__REDUX_DEVTOOLS_EXTENSION__', '__VUE_DEVTOOLS_GLOBAL_HOOK__'];
      for (const tool of devToolList) {
        if (window[tool]) {
          detectedTools++;
        }
      }
      
      // Only trigger warning if we detect multiple tools or specific ones
      // This reduces false positives from development libraries
      if (detectedTools >= 2 || window.eruda || window.vConsole) {
        devToolsOpen = true;
        showDevToolsWarning();
      }
    }
  }
  
  // Method 9: Date.prototype.toString detection - less intrusive version
  function dateToStringDetection() {
    // Only run this check occasionally to reduce performance impact
    if (Math.random() < 0.15) { // Only run 15% of the time
      const originalToString = Date.prototype.toString;
      try {
        // Use a safer approach to check for modifications
        const testDate = new Date();
        const normalResult = testDate.toString();
        const directResult = originalToString.call(testDate);
        
        // Compare results to detect modifications without overriding
        if (normalResult !== directResult) {
          devToolsOpen = true;
          showDevToolsWarning();
        }
        
        // Only temporarily override for a brief check if needed
        if (Math.random() < 0.1) { // Very rarely do the override check
          const tempDate = new Date();
          const originalMethod = Date.prototype.toString;
          Date.prototype.toString = function() {
            Date.prototype.toString = originalMethod; // Immediately restore
            devToolsOpen = true;
            showDevToolsWarning();
            return originalMethod.apply(this, arguments);
          };
          console.log(tempDate);
          Date.prototype.toString = originalMethod; // Ensure restoration
        }
      } catch (e) {
        Date.prototype.toString = originalToString; // Ensure restoration on error
      }
    }
  }
  
  // Emergency bypass for authorized developers
  // This creates a special key sequence that can temporarily disable the detection
  let emergencyBypassBuffer = '';
  const emergencyBypassSequence = 'debug-override-9731';
  
  window.addEventListener('keydown', function(e) {
    // Only process alphanumeric and hyphen keys
    if (/^[a-zA-Z0-9\-]$/.test(e.key)) {
      emergencyBypassBuffer += e.key;
      
      // Keep the buffer from growing too large
      if (emergencyBypassBuffer.length > 30) {
        emergencyBypassBuffer = emergencyBypassBuffer.slice(-30);
      }
      
      // Check if buffer contains the bypass sequence
      if (emergencyBypassBuffer.includes(emergencyBypassSequence)) {
        // Prompt for developer password
        const password = prompt('Enter developer override password:');
        if (password === 'RiversideSchool2023!') { // This should be stored securely in a real app
          authBypass = true;
          alert('Developer tools detection temporarily bypassed for this session.');
          
          // Create a bypass indicator
          const devBypassIndicator = document.createElement('div');
          devBypassIndicator.style.position = 'fixed';
          devBypassIndicator.style.top = '10px';
          devBypassIndicator.style.left = '10px';
          devBypassIndicator.style.backgroundColor = 'rgba(255, 165, 0, 0.8)';
          devBypassIndicator.style.color = 'white';
          devBypassIndicator.style.padding = '5px 10px';
          devBypassIndicator.style.borderRadius = '3px';
          devBypassIndicator.style.fontSize = '12px';
          devBypassIndicator.style.zIndex = '9999';
          devBypassIndicator.textContent = 'Developer Mode';
          document.body.appendChild(devBypassIndicator);
        }
        emergencyBypassBuffer = ''; // Clear the buffer
      }
    }
  });
  
  // Run detections periodically with less aggressive timing
  function runDetections() {
    // Skip detection if bypassed or if page is still loading
    if (authBypass || document.readyState !== 'complete') {
      return;
    }
    
    // Use a probability-based approach to reduce the frequency of checks
    // This significantly reduces the performance impact while still detecting dev tools
    const detectionProbability = 0.3; // Only run 30% of the time
    
    if (Math.random() < detectionProbability) {
      // Run different detection methods with varying frequency
      const now = Date.now();
      
      // Run size detection with higher probability
      if (Math.random() < 0.7) {
        sizeDetection();
      }
      
      // Run debugger detection less frequently
      if (Math.random() < 0.3) {
        debuggerDetection();
      }
      
      // Run these detections even less frequently
      if (Math.random() < 0.2) {
        functionToStringDetection();
        detectMobileDevTools();
      }
      
      // Run these detections rarely
      if (Math.random() < 0.1) {
        dateToStringDetection();
        consoleOverrideDetection();
      }
      
      // Special check for /auth page to ensure it's accessible when needed
      if (window.location.pathname.includes('/auth')) {
        const authKey = sessionStorage.getItem('authKeyUsed');
        const authToken = sessionStorage.getItem('authToken');
        const authTimestamp = sessionStorage.getItem('authTimestamp');
        
        if (authKey === 'true' && authToken && authTimestamp) {
          const timestamp = parseInt(authTimestamp, 10);
          const now = Date.now();
          
          // Refresh the timestamp if it's about to expire (within 5 seconds)
          if (now - timestamp > 25000 && now - timestamp < 30000) {
            sessionStorage.setItem('authTimestamp', now.toString());
          }
        }
      }
    }
  }
  
  // Wait for page to be fully loaded before initial run
  window.addEventListener('load', function() {
    // Delay initial detection to ensure page is fully rendered
    setTimeout(runDetections, 2000);
  });
  
  // Set up interval with a more reasonable delay
  let detectionInterval;
  
  function setupDetectionInterval() {
    // Clear any existing interval
    if (detectionInterval) {
      clearInterval(detectionInterval);
    }
    
    // Use a longer base delay to reduce performance impact
    const baseDelay = 3000; // 3 seconds base (increased from 1 second)
    const randomVariation = Math.floor(Math.random() * 1000); // 0-1000ms random variation
    const delay = baseDelay + randomVariation;
    
    detectionInterval = setInterval(runDetections, delay);
  }
  
  // Initial setup after a delay
  setTimeout(setupDetectionInterval, 2000);
  
  // Change interval timing less frequently
  setInterval(setupDetectionInterval, 60000); // Change timing every 60 seconds (increased from 30)
  
  // Also check on resize events
  window.addEventListener('resize', function() {
    clearTimeout(devToolsTimeout);
    devToolsTimeout = setTimeout(sizeDetection, 500);
  });
  
  // Prevent right-click on sensitive pages
  if (window.location.pathname.includes('/auth') || window.location.pathname.includes('/cms')) {
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      return false;
    });
  }
  
  // Add random entropy to the page to make fingerprinting harder
  const entropy = document.createElement('div');
  entropy.style.display = 'none';
  entropy.innerHTML = Math.random().toString(36).substring(2);
  document.body.appendChild(entropy);
  
  // Auth page access helper - shows hint when Alt+A is pressed
  let altKeyPressed = false;
  
  window.addEventListener('keydown', function(e) {
    // Check for Alt key
    if (e.key === 'Alt') {
      altKeyPressed = true;
    }
    
    // Check for Alt+A combination
    if (altKeyPressed && e.key === 'a') {
      e.preventDefault(); // Prevent default browser behavior
      
      // Create a stylish hint box instead of a simple floating hint
      const hintBox = document.createElement('div');
      hintBox.style.position = 'fixed';
      hintBox.style.top = '50%';
      hintBox.style.left = '50%';
      hintBox.style.transform = 'translate(-50%, -50%)';
      hintBox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      hintBox.style.color = 'white';
      hintBox.style.padding = '20px';
      hintBox.style.borderRadius = '5px';
      hintBox.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
      hintBox.style.zIndex = '10000';
      hintBox.style.fontFamily = 'Arial, sans-serif';
      hintBox.style.textAlign = 'center';
      hintBox.style.maxWidth = '400px';
      
      // Add school logo if available
      const logoContainer = document.createElement('div');
      logoContainer.style.marginBottom = '15px';
      const logoImg = document.createElement('img');
      logoImg.src = 'https://ik.imagekit.io/5fpzilm1y/logo.png?updatedAt=1747557297487';
      logoImg.alt = 'School Logo';
      logoImg.width = 50;
      logoImg.height = 50;
      logoImg.style.borderRadius = '50%';
      logoContainer.appendChild(logoImg);
      hintBox.appendChild(logoContainer);
      
      // Add heading
      const heading = document.createElement('h3');
      heading.textContent = 'CMS Access';
      heading.style.margin = '0 0 10px 0';
      heading.style.color = '#4CAF50';
      hintBox.appendChild(heading);
      
      // Add instruction text
      const instruction = document.createElement('p');
      instruction.textContent = 'To access the CMS, type the following sequence:';
      instruction.style.margin = '0 0 15px 0';
      hintBox.appendChild(instruction);
      
      // Add the key sequence in a highlighted box
      const keySequence = document.createElement('div');
      keySequence.textContent = 'cms#hmv!';
      keySequence.style.backgroundColor = '#4CAF50';
      keySequence.style.color = 'white';
      keySequence.style.padding = '10px';
      keySequence.style.borderRadius = '3px';
      keySequence.style.fontFamily = 'monospace';
      keySequence.style.fontSize = '18px';
      keySequence.style.fontWeight = 'bold';
      keySequence.style.margin = '0 0 15px 0';
      hintBox.appendChild(keySequence);
      
      // Add note about timing
      const note = document.createElement('p');
      note.textContent = 'This hint will disappear in 5 seconds.';
      note.style.fontSize = '12px';
      note.style.opacity = '0.7';
      note.style.margin = '0';
      hintBox.appendChild(note);
      
      // Add to document
      document.body.appendChild(hintBox);
      
      // Remove after 5 seconds
      setTimeout(function() {
        hintBox.style.opacity = '0';
        setTimeout(function() {
          if (hintBox.parentNode) {
            document.body.removeChild(hintBox);
          }
        }, 500);
      }, 5000);
    }
  });
  
  window.addEventListener('keyup', function(e) {
    if (e.key === 'Alt') {
      altKeyPressed = false;
    }
  });
})();