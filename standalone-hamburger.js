/**
 * Standalone Hamburger Menu Implementation
 * This script is completely self-contained and doesn't depend on any other scripts
 */

// Wait for page to load
window.addEventListener('load', function() {
    console.log('Standalone hamburger menu loaded');
    
    // Initialize the menu
    initStandaloneMenu();
});

// Also initialize on DOMContentLoaded for faster loading
document.addEventListener('DOMContentLoaded', function() {
    console.log('Standalone hamburger menu initialized on DOMContentLoaded');
    
    // Initialize the menu
    initStandaloneMenu();
});

// Main function to initialize the hamburger menu
function initStandaloneMenu() {
    // Get required elements
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    
    // Log element status
    console.log('Hamburger elements found:', {
        button: !!menuButton,
        menu: !!mobileMenu,
        icon: !!hamburgerIcon
    });
    
    // Exit if elements don't exist
    if (!menuButton || !mobileMenu) {
        console.error('Critical hamburger menu elements missing');
        return;
    }
    
    // Ensure the menu is initially hidden
    forceHideMenu();
    
    // Add multiple event listeners for better mobile compatibility
    function toggleMenuHandler(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Log touch/click details for debugging
        console.log('Menu interaction detected:', e.type, 'on element:', e.target.tagName || 'unknown');
        
        // Check if menu is currently visible
        const isVisible = mobileMenu.style.display === 'block' || 
                         getComputedStyle(mobileMenu).display !== 'none';
                         
        console.log('Menu button activated, menu is', isVisible ? 'visible' : 'hidden');
        
        // Toggle menu visibility
        if (isVisible) {
            forceHideMenu();
        } else {
            forceShowMenu();
        }
        
        return false;
    }
    
    // Add multiple event types for better mobile compatibility
    menuButton.addEventListener('click', toggleMenuHandler);
    menuButton.addEventListener('touchstart', toggleMenuHandler);
    
    // Also add events directly to the hamburger icon for redundancy
    if (hamburgerIcon) {
        hamburgerIcon.addEventListener('click', toggleMenuHandler);
        hamburgerIcon.addEventListener('touchstart', toggleMenuHandler);
    }
    
    // Function to force show the menu
    function forceShowMenu() {
        console.log('Showing menu');
        
        // Make the menu visible
        mobileMenu.style.display = 'block';
        
        // Force reflow
        void mobileMenu.offsetWidth;
        
        // Remove hidden class
        mobileMenu.classList.remove('hidden');
        
        // Add animation classes
        mobileMenu.classList.remove('opacity-0', 'scale-95');
        mobileMenu.classList.add('opacity-100', 'scale-100');
        
        // Update hamburger icon
        if (hamburgerIcon) {
            hamburgerIcon.classList.add('open');
        }
        
        // Update accessibility
        menuButton.setAttribute('aria-expanded', 'true');
    }
    
    // Function to force hide the menu
    function forceHideMenu() {
        console.log('Hiding menu');
        
        // Add animation classes
        mobileMenu.classList.add('opacity-0', 'scale-95');
        mobileMenu.classList.remove('opacity-100', 'scale-100');
        
        // Update hamburger icon
        if (hamburgerIcon) {
            hamburgerIcon.classList.remove('open');
        }
        
        // Update accessibility
        menuButton.setAttribute('aria-expanded', 'false');
        
        // After animation, completely hide the menu
        setTimeout(function() {
            mobileMenu.classList.add('hidden');
            mobileMenu.style.display = 'none';
        }, 300);
    }
    
    // Add click events to all navigation links to close the menu
    const navLinks = document.querySelectorAll('#mobile-menu a[href^="#"]');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            console.log('Navigation link clicked:', this.getAttribute('href'));
            forceHideMenu();
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
    
    // Update menu height on resize
    function updateMenuHeight() {
        const viewportHeight = window.innerHeight;
        const headerHeight = document.querySelector('header').offsetHeight || 60;
        mobileMenu.style.maxHeight = (viewportHeight - headerHeight) + 'px';
    }
    
    // Set initial height and update on resize
    updateMenuHeight();
    window.addEventListener('resize', updateMenuHeight);
}
