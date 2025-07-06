// Force initialization of navigation and hamburger menu
window.addEventListener('load', function() {
    console.log('Force init script loaded');
    
    // Try to initialize immediately
    if (typeof initializeUltraHamburger === 'function') {
        console.log('Force initializing ultra hamburger menu');
        initializeUltraHamburger();
    }
    
    // Wait a bit and try again
    setTimeout(function() {
        if (typeof initializeUltraHamburger === 'function') {
            console.log('Force initializing ultra hamburger menu (delayed)');
            initializeUltraHamburger();
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
    
    // Ensure hamburger button is visible and positioned correctly
    const menuButton = document.getElementById('mobile-menu-button');
    if (menuButton) {
        menuButton.style.zIndex = '1050';
        menuButton.style.minHeight = '55px';
        menuButton.style.minWidth = '55px';
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
