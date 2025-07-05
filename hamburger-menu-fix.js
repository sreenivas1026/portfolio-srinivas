// Enhanced hamburger menu functionality for mobile
document.addEventListener('DOMContentLoaded', function() {
    console.log('Hamburger menu script loaded');
    
    // Direct implementation without using existing code
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!mobileMenuButton || !hamburgerIcon || !mobileMenu) {
        console.error('Mobile menu elements not found:', {
            button: !!mobileMenuButton,
            icon: !!hamburgerIcon,
            menu: !!mobileMenu
        });
        return;
    }
    
    console.log('Menu elements found, initializing');
    
    // Force initialization state
    mobileMenu.classList.add('hidden');
    hamburgerIcon.classList.remove('open');
    let menuOpen = false;
    
    // Improved toggle function with direct manipulation
    function toggleMobileMenu(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        menuOpen = !menuOpen;
        console.log('Menu toggled:', menuOpen ? 'open' : 'closed');
        
        if (menuOpen) {
            // Show menu
            mobileMenu.style.display = 'block';
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.remove('opacity-0', 'scale-95');
            mobileMenu.classList.add('opacity-100', 'scale-100');
            hamburgerIcon.classList.add('open');
            mobileMenuButton.setAttribute('aria-expanded', 'true');
        } else {
            // Hide menu
            mobileMenu.classList.add('opacity-0', 'scale-95');
            mobileMenu.classList.remove('opacity-100', 'scale-100');
            hamburgerIcon.classList.remove('open');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                mobileMenu.style.display = '';
            }, 300);
        }
    }
    
    // Direct event binding without cloning
    mobileMenuButton.addEventListener('click', toggleMobileMenu, { passive: false });
    
    // Add touch events specifically for mobile
    mobileMenuButton.addEventListener('touchend', function(e) {
        e.preventDefault();
        toggleMobileMenu();
    }, { passive: false });
    
    // Handle links in mobile menu
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', function() {
            menuOpen = false;
            mobileMenu.classList.add('opacity-0', 'scale-95');
            mobileMenu.classList.remove('opacity-100', 'scale-100');
            hamburgerIcon.classList.remove('open');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                mobileMenu.style.display = '';
            }, 300);
        });
    });
    
    // Show/hide menu on resize (in case screen size changes)
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) { // md breakpoint
            if (menuOpen) {
                menuOpen = false;
                mobileMenu.classList.add('hidden');
                hamburgerIcon.classList.remove('open');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            }
        }
    });
    
    console.log('Hamburger menu initialization complete');
});
