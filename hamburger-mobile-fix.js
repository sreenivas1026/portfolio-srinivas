// Ultra-reliable hamburger menu implementation for mobile
(function() {
    // Run immediately and also on DOMContentLoaded
    function initHamburgerMenu() {
        // Get elements
        const menuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const hamburgerIcon = document.querySelector('.hamburger-icon');
        
        // Log whether we found the elements
        console.log('Mobile menu elements:', {
            button: !!menuButton,
            menu: !!mobileMenu,
            icon: !!hamburgerIcon
        });
        
        // Exit if we can't find the required elements
        if (!menuButton || !mobileMenu) {
            console.error('Mobile menu elements not found!');
            return;
        }
        
        // Set initial state - ensure menu is hidden
        mobileMenu.style.display = 'none';
        mobileMenu.classList.add('hidden');
        
        if (hamburgerIcon) {
            hamburgerIcon.classList.remove('open');
        }
        
        menuButton.setAttribute('aria-expanded', 'false');
        
        // Direct click handler with no dependencies
        function toggleMenu(e) {
            // Prevent default for touchend events
            if (e) {
                e.preventDefault();
            }
            
            console.log('Toggle menu clicked, current display:', mobileMenu.style.display);
            
            // Check if menu is currently visible
            const isVisible = mobileMenu.style.display !== 'none';
            
            if (isVisible) {
                // Hide the menu
                mobileMenu.style.display = 'none';
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.add('opacity-0');
                mobileMenu.classList.remove('opacity-100');
                
                if (hamburgerIcon) {
                    hamburgerIcon.classList.remove('open');
                }
                
                menuButton.setAttribute('aria-expanded', 'false');
            } else {
                // Show the menu
                mobileMenu.style.display = 'block';
                mobileMenu.classList.remove('hidden');
                
                // Trigger reflow
                void mobileMenu.offsetWidth;
                
                mobileMenu.classList.add('opacity-100');
                mobileMenu.classList.remove('opacity-0');
                
                if (hamburgerIcon) {
                    hamburgerIcon.classList.add('open');
                }
                
                menuButton.setAttribute('aria-expanded', 'true');
            }
        }
        
        // Remove existing event listeners
        menuButton.removeEventListener('click', toggleMenu);
        menuButton.removeEventListener('touchstart', toggleMenu);
        
        // Add fresh event listeners with direct reference to our function
        menuButton.addEventListener('click', toggleMenu);
        menuButton.addEventListener('touchstart', toggleMenu, { passive: false });
        
        // Close menu when clicking menu items
        const menuItems = mobileMenu.querySelectorAll('a');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                mobileMenu.style.display = 'none';
                mobileMenu.classList.add('hidden');
                
                if (hamburgerIcon) {
                    hamburgerIcon.classList.remove('open');
                }
                
                menuButton.setAttribute('aria-expanded', 'false');
            });
        });
        
        console.log('Hamburger menu initialized successfully');
    }
    
    // Run immediately
    initHamburgerMenu();
    
    // Also run on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', initHamburgerMenu);
    
    // And run after a short delay to ensure everything is loaded
    setTimeout(initHamburgerMenu, 1000);
})();
