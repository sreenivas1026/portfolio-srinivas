// Enhanced hamburger menu functionality for mobile
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!mobileMenuButton || !hamburgerIcon || !mobileMenu) {
        console.error('Mobile menu elements not found');
        return;
    }
    
    // Clear any existing listeners to avoid duplicates
    const newMobileMenuButton = mobileMenuButton.cloneNode(true);
    mobileMenuButton.parentNode.replaceChild(newMobileMenuButton, mobileMenuButton);
    
    // Function to toggle menu visibility with animation
    function toggleMobileMenu(e) {
        if (e) {
            e.preventDefault(); // Prevent default behavior
            e.stopPropagation(); // Stop event from propagating
        }
        
        console.log('Toggle mobile menu clicked');
        
        if (mobileMenu.classList.contains('hidden')) {
            // Show menu with animation
            mobileMenu.classList.remove('hidden');
            setTimeout(() => {
                mobileMenu.classList.remove('opacity-0', 'scale-95');
                mobileMenu.classList.add('opacity-100', 'scale-100');
                hamburgerIcon.classList.add('open');
            }, 10); // Small delay to ensure transition works
        } else {
            // Hide menu with animation
            mobileMenu.classList.add('opacity-0', 'scale-95');
            mobileMenu.classList.remove('opacity-100', 'scale-100');
            hamburgerIcon.classList.remove('open');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300); // Match transition duration
        }
    }
    
    // Add both click and touch events for better mobile support
    newMobileMenuButton.addEventListener('click', toggleMobileMenu, { capture: true });
    
    // Handle mobile menu item clicks
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', function() {
            // Close menu when a link is clicked
            mobileMenu.classList.add('opacity-0', 'scale-95');
            mobileMenu.classList.remove('opacity-100', 'scale-100');
            hamburgerIcon.classList.remove('open');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenu.classList.contains('hidden') && 
            !mobileMenu.contains(e.target) && 
            !newMobileMenuButton.contains(e.target)) {
            toggleMobileMenu();
        }
    });
});
