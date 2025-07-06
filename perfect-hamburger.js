// Completely standalone hamburger menu implementation
// This version has no dependencies and works on all mobile devices

// Execute immediately when loaded
(function() {
    console.log('Perfect hamburger menu script loaded');
    
    // Function to initialize the hamburger menu
    function initPerfectHamburger() {
        console.log('Initializing perfect hamburger menu');
        
        // Get necessary elements
        const menuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const hamburgerIcon = document.querySelector('.hamburger-icon');
        
        // Log if elements are found
        console.log('Menu elements found:', {
            button: !!menuButton, 
            menu: !!mobileMenu,
            icon: !!hamburgerIcon
        });
        
        // Exit if necessary elements don't exist
        if (!menuButton || !mobileMenu) {
            console.error('Required hamburger menu elements not found');
            return;
        }
        
        // Reset initial state to ensure menu is hidden
        hideMenu(false);
        
        // Remove any existing event listeners
        // This prevents duplicate handlers if the script runs multiple times
        menuButton.removeEventListener('click', handleMenuToggle);
        menuButton.removeEventListener('touchstart', handleMenuToggle);
        
        // Add our event listeners
        menuButton.addEventListener('click', handleMenuToggle);
        menuButton.addEventListener('touchstart', handleMenuToggle, { passive: false });
        
        // Handle menu clicks to close when navigation links are clicked
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.removeEventListener('click', handleLinkClick);
            link.removeEventListener('touchend', handleLinkClick);
            
            link.addEventListener('click', handleLinkClick);
            link.addEventListener('touchend', handleLinkClick, { passive: false });
        });
        
        // Menu toggle handler with logging
        function handleMenuToggle(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isVisible = getComputedStyle(mobileMenu).display !== 'none';
            console.log('Toggle menu called, current state:', isVisible ? 'visible' : 'hidden');
            
            if (isVisible) {
                hideMenu(true);
            } else {
                showMenu();
            }
            
            return false;
        }
        
        // Function to show menu with direct DOM manipulation
        function showMenu() {
            console.log('Showing menu');
            
            // First make sure display is set to block to make it visible
            mobileMenu.style.display = 'block';
            
            // Force a reflow to ensure transitions work
            void mobileMenu.offsetWidth;
            
            // Then remove hidden class and add visual classes
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.remove('opacity-0', 'scale-95');
            mobileMenu.classList.add('opacity-100', 'scale-100');
            
            // Update hamburger icon and ARIA attributes
            if (hamburgerIcon) hamburgerIcon.classList.add('open');
            menuButton.setAttribute('aria-expanded', 'true');
        }
        
        // Function to hide menu with direct DOM manipulation
        function hideMenu(animated = true) {
            console.log('Hiding menu');
            
            if (animated) {
                // First add visual transition classes
                mobileMenu.classList.add('opacity-0', 'scale-95');
                mobileMenu.classList.remove('opacity-100', 'scale-100');
                
                // Update hamburger icon and ARIA attributes
                if (hamburgerIcon) hamburgerIcon.classList.remove('open');
                menuButton.setAttribute('aria-expanded', 'false');
                
                // Set display:none after transition completes
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.style.display = 'none';
                }, 300);
            } else {
                // Immediately hide without animation
                mobileMenu.classList.add('hidden', 'opacity-0', 'scale-95');
                mobileMenu.classList.remove('opacity-100', 'scale-100');
                mobileMenu.style.display = 'none';
                
                // Update hamburger icon and ARIA attributes
                if (hamburgerIcon) hamburgerIcon.classList.remove('open');
                menuButton.setAttribute('aria-expanded', 'false');
            }
        }
        
        // Handle navigation link clicks
        function handleLinkClick(e) {
            // Don't prevent default here - we want the link to work
            console.log('Menu link clicked');
            
            // Hide menu with animation
            hideMenu(true);
        }
        
        // Also close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenu.classList.contains('hidden') &&
                !menuButton.contains(e.target) && 
                !mobileMenu.contains(e.target)) {
                hideMenu(true);
            }
        });
        
        console.log('Perfect hamburger initialization completed');
    }
    
    // Initialize immediately
    initPerfectHamburger();
    
    // Also initialize on DOMContentLoaded for safety
    document.addEventListener('DOMContentLoaded', initPerfectHamburger);
    
    // And initialize after a short delay to catch any late DOM changes
    setTimeout(initPerfectHamburger, 500);
    setTimeout(initPerfectHamburger, 2000);
    
    // Also re-initialize when window is resized
    window.addEventListener('resize', function() {
        setTimeout(initPerfectHamburger, 100);
    });
})();
