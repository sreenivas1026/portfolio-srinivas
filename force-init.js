// Force initialization of navigation and three-dot menu
window.addEventListener('load', function() {
    console.log('Force init script loaded');
    
    // Try to initialize three-dot menu (named four-dot in the code)
    if (typeof initFourDotMenu === 'function') {
        console.log('Force initializing three-dot menu');
        initFourDotMenu();
    }
    
    // Wait a bit and try again
    setTimeout(function() {
        if (typeof initFourDotMenu === 'function') {
            console.log('Force initializing three-dot menu (delayed)');
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
