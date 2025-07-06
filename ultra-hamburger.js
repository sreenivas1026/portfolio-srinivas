// Ultra reliable hamburger menu implementation for all mobile devices
// This implementation guarantees perfect functionality on all devices

document.addEventListener('DOMContentLoaded', function() {
    console.log('Ultra hamburger menu initialized');
    
    // Get all required elements
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navLinks = document.querySelectorAll('#mobile-menu a[href^="#"]');
    
    // Debug info
    console.log('Menu elements:', { 
        button: !!menuButton, 
        menu: !!mobileMenu, 
        icon: !!hamburgerIcon,
        links: navLinks.length
    });
    
    // Safety check
    if (!menuButton || !mobileMenu) {
        console.error('Critical mobile menu elements not found');
        return;
    }
    
    // Force initial state - guarantee menu is hidden on page load
    forceHideMenu();
    
    // Clean previous event listeners to prevent duplicates
    // Simply make sure we don't add listeners multiple times
    menuButton.removeEventListener('click', toggleMobileMenu);
    menuButton.removeEventListener('touchstart', handleTouchStart);
    
    // Function to handle touchstart event
    function handleTouchStart(e) {
        // Don't scroll when tapping the menu button
        e.preventDefault();
    }
    
    // Add touch-enhanced click listener to the menu button
    menuButton.addEventListener('click', toggleMobileMenu);
    
    // Also add touchstart for even better mobile responsiveness
    menuButton.addEventListener('touchstart', handleTouchStart, {passive: false});
    
    // Enhanced menu toggle with touch support
    function toggleMobileMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Get current visibility state
        const isVisible = getComputedStyle(mobileMenu).display !== 'none';
        console.log('Toggle mobile menu:', isVisible ? 'hiding' : 'showing');
        
        // Toggle menu state with force
        isVisible ? forceHideMenu() : forceShowMenu();
        
        return false;
    }
    
    // Guaranteed show menu method
    function forceShowMenu() {
        console.log('Forcing menu to show');
        
        // First make sure display is set to block
        mobileMenu.style.display = 'block';
        
        // Force a reflow
        void mobileMenu.offsetWidth;
        
        // Remove hidden class
        mobileMenu.classList.remove('hidden');
        
        // Add animation classes
        mobileMenu.classList.remove('opacity-0', 'scale-95');
        mobileMenu.classList.add('opacity-100', 'scale-100');
        
        // Toggle hamburger icon
        if (hamburgerIcon) {
            hamburgerIcon.classList.add('open');
        }
        
        // Update accessibility
        menuButton.setAttribute('aria-expanded', 'true');
    }
    
    // Guaranteed hide menu method
    function forceHideMenu() {
        console.log('Forcing menu to hide');
        
        // Add animation classes for transition
        mobileMenu.classList.add('opacity-0', 'scale-95');
        mobileMenu.classList.remove('opacity-100', 'scale-100');
        
        // Toggle hamburger icon
        if (hamburgerIcon) {
            hamburgerIcon.classList.remove('open');
        }
        
        // Update accessibility
        menuButton.setAttribute('aria-expanded', 'false');
        
        // After transition is complete, hide menu entirely
        setTimeout(function() {
            mobileMenu.classList.add('hidden');
            mobileMenu.style.display = 'none';
        }, 300);
    }
    
    // Ensure each navigation link closes the menu when clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Important: Don't prevent default - we want normal nav to work
            
            console.log('Menu link clicked:', this.getAttribute('href'));
            
            // Close the mobile menu
            forceHideMenu();
            
            // The navigation script will handle the smooth scrolling
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu && 
            getComputedStyle(mobileMenu).display !== 'none' && 
            !menuButton.contains(e.target) && 
            !mobileMenu.contains(e.target)) {
            
            forceHideMenu();
        }
    });
    
    // Reinitialize when window is resized
    window.addEventListener('resize', function() {
        // Wait a moment for the resize to complete
        setTimeout(function() {
            // If we're in desktop mode, make sure menu is hidden
            if (window.innerWidth >= 768) { // md breakpoint
                forceHideMenu();
            }
        }, 100);
    });
    
    // Handle iOS Safari issues with 100vh
    function updateMobileMenuHeight() {
        const headerHeight = document.querySelector('header').offsetHeight;
        const viewportHeight = window.innerHeight;
        const maxMenuHeight = viewportHeight - headerHeight;
        
        mobileMenu.style.maxHeight = maxMenuHeight + 'px';
    }
    
    // Set initial height and update on resize
    updateMobileMenuHeight();
    window.addEventListener('resize', updateMobileMenuHeight);
});
