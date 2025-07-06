// Completely rewritten and simplified hamburger menu script
document.addEventListener('DOMContentLoaded', function() {
    console.log('Improved hamburger menu script loaded');
    
    // Get required elements
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    
    // Log if elements are found
    console.log('Menu elements:', {
        button: !!mobileMenuButton,
        menu: !!mobileMenu,
        icon: !!hamburgerIcon
    });
    
    // Exit if required elements don't exist
    if (!mobileMenuButton || !mobileMenu) {
        console.error('Mobile menu elements not found');
        return;
    }
    
    // Simple toggle function with forced display properties
    function toggleMenu(event) {
        event.preventDefault();
        event.stopPropagation();
        
        console.log('Menu button clicked, current state:', {
            menuHidden: mobileMenu.classList.contains('hidden'),
            menuStyle: mobileMenu.style.display
        });
        
        if (mobileMenu.classList.contains('hidden')) {
            // Show menu with explicit styles
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.remove('opacity-0', 'scale-95');
            mobileMenu.classList.add('opacity-100', 'scale-100');
            mobileMenu.style.display = 'block';
            
            if (hamburgerIcon) hamburgerIcon.classList.add('open');
            mobileMenuButton.setAttribute('aria-expanded', 'true');
            
            // Force reflow
            void mobileMenu.offsetWidth;
        } else {
            // Hide menu with explicit styles
            mobileMenu.classList.add('opacity-0', 'scale-95');
            mobileMenu.classList.remove('opacity-100', 'scale-100');
            
            if (hamburgerIcon) hamburgerIcon.classList.remove('open');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            
            // Delay adding hidden class to allow transition
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                mobileMenu.style.display = 'none';
            }, 300);
        }
    }
    
    // Handle click event
    mobileMenuButton.addEventListener('click', toggleMenu);
    
    // Handle touch event separately to ensure it works on mobile
    mobileMenuButton.addEventListener('touchstart', function(e) {
        e.preventDefault(); // Prevent default touch behavior
        toggleMenu(e);
    }, {passive: false});
    
    // Close menu when clicking anywhere else
    document.addEventListener('click', function(e) {
        if (!mobileMenu.classList.contains('hidden') &&
            !mobileMenuButton.contains(e.target) &&
            !mobileMenu.contains(e.target)) {
            
            // Hide menu
            mobileMenu.classList.add('opacity-0', 'scale-95');
            mobileMenu.classList.remove('opacity-100', 'scale-100');
            
            if (hamburgerIcon) hamburgerIcon.classList.remove('open');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                mobileMenu.style.display = 'none';
            }, 300);
        }
    });
    
    // Handle mobile menu links
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Hide menu after clicking a link
            mobileMenu.classList.add('opacity-0', 'scale-95');
            mobileMenu.classList.remove('opacity-100', 'scale-100');
            
            if (hamburgerIcon) hamburgerIcon.classList.remove('open');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                mobileMenu.style.display = 'none';
            }, 300);
        });
    });
    
    // Initialize menu state properly
    mobileMenu.classList.add('hidden');
    mobileMenu.style.display = 'none';
    if (hamburgerIcon) hamburgerIcon.classList.remove('open');
    mobileMenuButton.setAttribute('aria-expanded', 'false');
});
