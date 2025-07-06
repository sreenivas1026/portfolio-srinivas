// Force initialization of navigation and four-dot menu
window.addEventListener('load', function() {
    console.log('Force init script loaded');
    
    // Try to initialize four-dot menu
    if (typeof initFourDotMenu === 'function') {
        console.log('Force initializing four-dot menu');
        initFourDotMenu();
    }
    
    // Wait a bit and try again
    setTimeout(function() {
        if (typeof initFourDotMenu === 'function') {
            console.log('Force initializing four-dot menu (delayed)');
            initFourDotMenu();
        }
    }, 1000);
    
    // Make sure header is fixed
    const header = document.querySelector('header');
    if (header) {
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.left = '0';
        header.style.width = '100%';
        header.style.zIndex = '1000';
    }
    
    // Make sure body has proper padding
    document.body.style.paddingTop = '60px';
    document.body.style.marginTop = '0';
    
    // Ensure hamburger button is visible and has standard size
    const menuButton = document.getElementById('mobile-menu-button');
    if (menuButton) {
        menuButton.style.zIndex = '1050';
        menuButton.style.minHeight = '44px';
        menuButton.style.minWidth = '44px';
        menuButton.style.height = '44px';
        menuButton.style.width = '44px';
        
        // Add direct touchstart handler for better mobile compatibility
        function emergencyToggleMenu(e) {
            console.log('Emergency hamburger toggle activated via', e.type);
            e.preventDefault();
            e.stopPropagation();
            
            const mobileMenu = document.getElementById('mobile-menu');
            const hamburgerIcon = document.querySelector('.hamburger-icon');
            
            if (mobileMenu) {
                const isHidden = mobileMenu.classList.contains('hidden') || 
                                getComputedStyle(mobileMenu).display === 'none';
                
                if (isHidden) {
                    // Show menu
                    mobileMenu.style.display = 'block';
                    mobileMenu.classList.remove('hidden');
                    mobileMenu.classList.remove('opacity-0', 'scale-95');
                    mobileMenu.classList.add('opacity-100', 'scale-100');
                    
                    if (hamburgerIcon) hamburgerIcon.classList.add('open');
                    menuButton.setAttribute('aria-expanded', 'true');
                } else {
                    // Hide menu
                    mobileMenu.classList.add('opacity-0', 'scale-95');
                    mobileMenu.classList.remove('opacity-100', 'scale-100');
                    
                    if (hamburgerIcon) hamburgerIcon.classList.remove('open');
                    menuButton.setAttribute('aria-expanded', 'false');
                    
                    setTimeout(function() {
                        mobileMenu.classList.add('hidden');
                        mobileMenu.style.display = 'none';
                    }, 300);
                }
            }
            
            return false;
        }
        
        // Add emergency handlers that will work regardless of other scripts
        menuButton.addEventListener('touchstart', emergencyToggleMenu);
        menuButton.addEventListener('click', emergencyToggleMenu);
    }
    
    // Fix all nav links to properly close menu
    const navLinks = document.querySelectorAll('#mobile-menu a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
                mobileMenu.style.display = 'none';
                
                const hamburgerIcon = document.querySelector('.hamburger-icon');
                if (hamburgerIcon) {
                    hamburgerIcon.classList.remove('open');
                }
            }
        });
    });
});
