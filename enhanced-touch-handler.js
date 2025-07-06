/**
 * Enhanced Touch Handler for Hamburger Menu
 * This script provides reliable touch handling specifically for the hamburger menu
 */

(function() {
    console.log('Enhanced touch handler loaded');
    
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', initTouchHandler);
    window.addEventListener('load', initTouchHandler);
    
    function initTouchHandler() {
        console.log('Initializing enhanced touch handler');
        
        // Get hamburger elements
        const menuButton = document.getElementById('mobile-menu-button');
        const hamburgerIcon = document.querySelector('.hamburger-icon');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (!menuButton || !hamburgerIcon) {
            console.error('Cannot find hamburger menu elements');
            return;
        }
        
        // Create a larger touch target overlay
        const touchTarget = document.createElement('div');
        touchTarget.id = 'hamburger-touch-target';
        touchTarget.style.position = 'absolute';
        touchTarget.style.top = '-10px';
        touchTarget.style.left = '-10px';
        touchTarget.style.right = '-10px';
        touchTarget.style.bottom = '-10px';
        touchTarget.style.zIndex = '1052';
        touchTarget.style.cursor = 'pointer';
        touchTarget.setAttribute('role', 'button');
        touchTarget.setAttribute('aria-label', 'Toggle navigation menu');
        
        // Insert touch target
        menuButton.style.position = 'relative';
        menuButton.appendChild(touchTarget);
        
        // Variables for tracking touch/click state
        let touchStartTime = 0;
        let touchStartX = 0;
        let touchStartY = 0;
        let isTouching = false;
        let lastToggleTime = 0;
        const DEBOUNCE_TIME = 400; // ms
        
        // Function to toggle menu with debouncing
        function toggleMenu(e) {
            const now = Date.now();
            if (now - lastToggleTime < DEBOUNCE_TIME) {
                console.log('Touch debounced');
                return;
            }
            lastToggleTime = now;
            
            // Log event for debugging
            console.log('Touch handler toggle:', e.type);
            
            // Execute menu toggle using different functions based on availability
            if (typeof toggleMenuHandler === 'function') {
                console.log('Using toggleMenuHandler');
                toggleMenuHandler(e);
            } else if (typeof toggleMobileMenu === 'function') {
                console.log('Using toggleMobileMenu');
                toggleMobileMenu(e);
            } else {
                console.log('Using fallback toggle');
                
                if (mobileMenu) {
                    const isHidden = mobileMenu.classList.contains('hidden') || 
                                    getComputedStyle(mobileMenu).display === 'none';
                                    
                    if (isHidden) {
                        // Show menu
                        mobileMenu.style.display = 'block';
                        mobileMenu.classList.remove('hidden');
                        
                        setTimeout(() => {
                            mobileMenu.classList.remove('opacity-0', 'scale-95');
                            mobileMenu.classList.add('opacity-100', 'scale-100');
                            
                            if (hamburgerIcon) {
                                hamburgerIcon.classList.add('open');
                            }
                        }, 10);
                    } else {
                        // Hide menu
                        mobileMenu.classList.add('opacity-0', 'scale-95');
                        mobileMenu.classList.remove('opacity-100', 'scale-100');
                        
                        if (hamburgerIcon) {
                            hamburgerIcon.classList.remove('open');
                        }
                        
                        setTimeout(() => {
                            mobileMenu.classList.add('hidden');
                            mobileMenu.style.display = 'none';
                        }, 300);
                    }
                }
            }
            
            // Provide haptic feedback if available
            if ('vibrate' in navigator) {
                navigator.vibrate(50);
            }
        }
        
        // Touch event handlers
        function handleTouchStart(e) {
            isTouching = true;
            touchStartTime = Date.now();
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            
            // Visual feedback
            hamburgerIcon.style.transform = 'scale(0.95)';
            
            e.preventDefault();
        }
        
        function handleTouchEnd(e) {
            if (!isTouching) return;
            
            const touchEndTime = Date.now();
            const touchDuration = touchEndTime - touchStartTime;
            
            // Reset visual state
            hamburgerIcon.style.transform = '';
            
            // Only trigger if it was a tap (short duration, little movement)
            if (touchDuration < 300) {
                toggleMenu(e);
            }
            
            isTouching = false;
            e.preventDefault();
        }
        
        function handleTouchCancel() {
            isTouching = false;
            hamburgerIcon.style.transform = '';
        }
        
        // Handle clicks separately from touches
        function handleClick(e) {
            // Only handle click if not recently handled a touch
            if (Date.now() - touchStartTime > 300) {
                toggleMenu(e);
            }
            e.preventDefault();
        }
        
        // Add event listeners to the touch target
        touchTarget.addEventListener('touchstart', handleTouchStart, { passive: false });
        touchTarget.addEventListener('touchend', handleTouchEnd, { passive: false });
        touchTarget.addEventListener('touchcancel', handleTouchCancel, { passive: true });
        touchTarget.addEventListener('click', handleClick);
        
        // Also add to menu button for redundancy
        menuButton.addEventListener('touchstart', handleTouchStart, { passive: false });
        menuButton.addEventListener('touchend', handleTouchEnd, { passive: false });
        menuButton.addEventListener('touchcancel', handleTouchCancel, { passive: true });
        menuButton.addEventListener('click', handleClick);
        
        // Also add to hamburger icon for redundancy
        hamburgerIcon.addEventListener('touchstart', handleTouchStart, { passive: false });
        hamburgerIcon.addEventListener('touchend', handleTouchEnd, { passive: false });
        hamburgerIcon.addEventListener('touchcancel', handleTouchCancel, { passive: true });
        hamburgerIcon.addEventListener('click', handleClick);
        
        console.log('Enhanced touch handler initialized');
    }
})();
