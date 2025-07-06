// Completely rewritten hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Hamburger menu script loaded');
    
    // Create a very simple direct implementation
    function initializeHamburgerMenu() {
        // Get menu elements
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const hamburgerIcon = document.querySelector('.hamburger-icon');
        const mobileMenu = document.getElementById('mobile-menu');
        
        // Log element availability
        console.log('Menu elements found:', {
            button: !!mobileMenuButton,
            icon: !!hamburgerIcon,
            menu: !!mobileMenu
        });
        
        // Exit if elements don't exist
        if (!mobileMenuButton || !hamburgerIcon || !mobileMenu) {
            console.error('Mobile menu elements not found');
            return;
        }
        
        // Ensure menu is hidden initially
        mobileMenu.style.display = 'none';
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.remove('open');
        
        // Simple toggle function
        function toggleMenu() {
            console.log('Toggle menu clicked');
            
            if (mobileMenu.classList.contains('hidden')) {
                // Show menu
                mobileMenu.style.display = 'block';
                mobileMenu.classList.remove('hidden');
                hamburgerIcon.classList.add('open');
                mobileMenuButton.setAttribute('aria-expanded', 'true');
            } else {
                // Hide menu
                mobileMenu.classList.add('hidden');
                mobileMenu.style.display = 'none';
                hamburgerIcon.classList.remove('open');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            }
        }
        
        // Attach click event
        mobileMenuButton.onclick = toggleMenu;
        
        // Add a click handler to each menu item
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', function(e) {
                // Execute the link's default action
                const href = this.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        // First hide the menu
                        toggleMenu();
                        
                        // Then scroll to the target section
                        setTimeout(() => {
                            target.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    }
                }
            });
        });
        
        // Add click handler directly to the icon as well for redundancy
        hamburgerIcon.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        });
    }
    
    // Call the function to initialize
    initializeHamburgerMenu();
    
    // And set up a backup initialization in case the DOM changes
    setTimeout(initializeHamburgerMenu, 1000);
});
