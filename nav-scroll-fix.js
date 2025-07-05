// Improved navigation and scrolling for mobile and desktop
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links with hash (#) references
    const navLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    // Enhanced smooth scrolling function with better mobile support
    function smoothScrollTo(element, offset = 70) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const adjustedOffset = headerHeight + offset;
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - adjustedOffset;
        
        // Check if smooth scrolling is supported natively
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        } else {
            // Fallback for browsers without smooth scrolling support
            window.scrollTo(0, targetPosition);
        }
    }
    
    // Add click event listeners to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section ID
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // First close mobile menu if it's open
                const mobileMenu = document.getElementById('mobile-menu');
                const hamburgerIcon = document.querySelector('.hamburger');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('opacity-0', 'scale-95');
                    mobileMenu.classList.remove('opacity-100', 'scale-100');
                    hamburgerIcon.classList.remove('open');
                    setTimeout(() => {
                        mobileMenu.classList.add('hidden');
                        // Scroll after menu closes
                        smoothScrollTo(targetElement);
                    }, 300);
                } else {
                    // Menu not open, scroll immediately
                    smoothScrollTo(targetElement);
                }
            }
        });
        
        // Add touchend event for mobile devices
        link.addEventListener('touchend', function(e) {
            // Don't handle the event if it has a parent with click handler
            if (e.currentTarget === e.target) {
                e.preventDefault();
                
                // Get the target section ID
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // First close mobile menu if it's open
                    const mobileMenu = document.getElementById('mobile-menu');
                    const hamburgerIcon = document.querySelector('.hamburger');
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('opacity-0', 'scale-95');
                        mobileMenu.classList.remove('opacity-100', 'scale-100');
                        hamburgerIcon.classList.remove('open');
                        setTimeout(() => {
                            mobileMenu.classList.add('hidden');
                            // Scroll after menu closes
                            smoothScrollTo(targetElement);
                        }, 300);
                    } else {
                        // Menu not open, scroll immediately
                        smoothScrollTo(targetElement);
                    }
                }
            }
        });
    });
    
    // Highlight the active section in the navigation
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.pageYOffset + 100; // Adding offset for better accuracy
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Adjusting for header
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`a[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom && navLink) {
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('text-blue-400', 'font-semibold');
                    link.classList.add('text-gray-300');
                });
                navLink.classList.remove('text-gray-300');
                navLink.classList.add('text-blue-400', 'font-semibold');
            }
        });
    }
    
    // Initial highlight and scroll position check
    highlightActiveSection();
    
    // Update on scroll with throttling for performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                highlightActiveSection();
                scrollTimeout = null;
            }, 100);
        }
    }, { passive: true });
});
