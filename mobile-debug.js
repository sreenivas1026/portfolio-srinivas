/**
 * Mobile Debug Helper
 * This script helps debug mobile touch interactions
 */

(function() {
    console.log('Mobile debug helper loaded');
    
    // Create a debug overlay
    function createDebugOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'mobile-debug-overlay';
        overlay.style.position = 'fixed';
        overlay.style.bottom = '10px';
        overlay.style.left = '10px';
        overlay.style.right = '10px';
        overlay.style.padding = '10px';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
        overlay.style.color = 'white';
        overlay.style.fontSize = '12px';
        overlay.style.fontFamily = 'monospace';
        overlay.style.zIndex = '9999';
        overlay.style.maxHeight = '30vh';
        overlay.style.overflow = 'auto';
        overlay.style.borderRadius = '8px';
        overlay.style.display = 'none'; // Start hidden
        
        document.body.appendChild(overlay);
        return overlay;
    }
    
    // Initialize debug functionality
    function initDebug() {
        const overlay = createDebugOverlay();
        let isActive = false;
        
        // Function to log messages to overlay
        function logToOverlay(message) {
            const log = document.createElement('div');
            log.textContent = `${new Date().toISOString().substr(11, 8)}: ${message}`;
            overlay.appendChild(log);
            overlay.scrollTop = overlay.scrollHeight;
            
            // Keep only last 20 messages
            while (overlay.childElementCount > 20) {
                overlay.removeChild(overlay.firstChild);
            }
        }
        
        // Toggle debug overlay
        function toggleDebug() {
            isActive = !isActive;
            overlay.style.display = isActive ? 'block' : 'none';
            logToOverlay(`Debug overlay ${isActive ? 'activated' : 'deactivated'}`);
        }
        
        // Activate by tapping 5 times in top-right corner
        let tapCount = 0;
        let lastTap = 0;
        
        function handleCornerTap(e) {
            const now = new Date().getTime();
            const x = e.touches ? e.touches[0].clientX : e.clientX;
            const y = e.touches ? e.touches[0].clientY : e.clientY;
            
            // Check if tap is in top-right corner (10% of screen)
            if (x > window.innerWidth * 0.9 && y < window.innerHeight * 0.1) {
                if (now - lastTap < 500) {
                    tapCount++;
                    if (tapCount >= 5) {
                        tapCount = 0;
                        toggleDebug();
                    }
                } else {
                    tapCount = 1;
                }
                lastTap = now;
            }
        }
        
        // Listen for tap events
        document.addEventListener('touchstart', handleCornerTap, {passive: true});
        
        // Monitor hamburger menu interactions
        const menuButton = document.getElementById('mobile-menu-button');
        const hamburgerIcon = document.querySelector('.hamburger-icon');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (menuButton) {
            ['touchstart', 'touchend', 'click'].forEach(eventType => {
                menuButton.addEventListener(eventType, function(e) {
                    if (isActive) {
                        logToOverlay(`Menu button ${eventType}: ${e.type}`);
                    }
                }, {passive: true});
            });
        }
        
        if (hamburgerIcon) {
            ['touchstart', 'touchend', 'click'].forEach(eventType => {
                hamburgerIcon.addEventListener(eventType, function(e) {
                    if (isActive) {
                        logToOverlay(`Hamburger icon ${eventType}: ${e.type}`);
                    }
                }, {passive: true});
            });
        }
        
        // Log menu state changes
        if (mobileMenu) {
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (isActive && 
                        (mutation.attributeName === 'class' || 
                         mutation.attributeName === 'style')) {
                        const isHidden = mobileMenu.classList.contains('hidden') || 
                                        getComputedStyle(mobileMenu).display === 'none';
                        logToOverlay(`Menu state changed: ${isHidden ? 'hidden' : 'visible'}`);
                    }
                });
            });
            
            observer.observe(mobileMenu, { 
                attributes: true,
                attributeFilter: ['class', 'style']
            });
        }
        
        console.log('Mobile debug initialized. Tap 5 times in top-right corner to activate.');
    }
    
    // Initialize after page load
    window.addEventListener('load', initDebug);
})();
