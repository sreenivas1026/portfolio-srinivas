// Improved navigation and scrolling system
document.addEventListener('DOMContentLoaded', function() {
    console.log('Improved navigation script loaded');
    
    // Get all navigation links with hash (#) references
    const navLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    // Enhanced smooth scrolling function
    function smoothScrollTo(targetElement, duration = 800) {
        // Safety check
        if (!targetElement) return;
        
        // Get header height for offset calculation
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 60;
        
        // Calculate scroll target position
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - headerHeight - 20; // Additional 20px buffer
        
        // Get current position
        const startPosition = window.pageYOffset;
        const distance = offsetPosition - startPosition;
        
        // Don't scroll if already at position
        if (Math.abs(distance) < 10) return;
        
        let startTime = null;
        
        // Animation function using requestAnimationFrame
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Easing function - easeInOutQuad
            const ease = progress < 0.5
                ? 2 * progress * progress
                : -1 + (4 - 2 * progress) * progress;
            
            window.scrollTo(0, startPosition + distance * ease);
            
            // Continue animation if not finished
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }
        
        // Use native smooth scrolling if supported
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        } else {
            // Fallback animation
            requestAnimationFrame(animation);
        }
        
        // Update URL hash after scrolling (without jumping)
        const targetId = targetElement.id;
        if (targetId) {
            setTimeout(() => {
                history.pushState(null, null, '#' + targetId);
            }, duration + 100);
        }
    }
    
    // Add click event listeners to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            console.log('Navigation link clicked:', this.getAttribute('href'));
            
            // Get target section
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if it's open
                const mobileMenu = document.getElementById('mobile-menu');
                const hamburgerIcon = document.querySelector('.hamburger-icon');
                const mobileMenuButton = document.getElementById('mobile-menu-button');
                
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('opacity-0', 'scale-95');
                    mobileMenu.classList.remove('opacity-100', 'scale-100');
                    
                    if (hamburgerIcon) hamburgerIcon.classList.remove('open');
                    if (mobileMenuButton) mobileMenuButton.setAttribute('aria-expanded', 'false');
                    
                    setTimeout(() => {
                        mobileMenu.classList.add('hidden');
                        mobileMenu.style.display = 'none';
                        
                        // Scroll after menu closes
                        smoothScrollTo(targetElement);
                    }, 300);
                } else {
                    // Menu not open, scroll immediately
                    smoothScrollTo(targetElement);
                }
            }
        });
    });
    
    // Handle initial page load with hash in URL
    window.addEventListener('load', function() {
        if (location.hash) {
            const targetElement = document.querySelector(location.hash);
            if (targetElement) {
                // Delay slightly to ensure page is fully loaded
                setTimeout(() => {
                    smoothScrollTo(targetElement, 500);
                }, 300);
            }
        }
    });
});
