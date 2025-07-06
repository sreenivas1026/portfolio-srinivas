/**
 * Three-dot hamburger menu with animation
 * This script handles the three-dot menu that transforms into an X
 */

// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', initFourDotMenu);
// Also initialize on window load for redundancy
window.addEventListener('load', initFourDotMenu);

function initFourDotMenu() {
    console.log('Initializing three-dot menu');
    
    // Remove the old hamburger menu button if it exists
    const oldMenuButton = document.getElementById('mobile-menu-button');
    if (oldMenuButton) {
        oldMenuButton.style.display = 'none';
    }
    
    // Create the new three-dot menu
    createFourDotMenu();
    
    // Set up the mobile menu for right alignment
    setupRightAlignedMenu();
}

function createFourDotMenu() {
    // Check if the menu already exists
    if (document.querySelector('.four-dot-menu')) {
        console.log('Three-dot menu already exists');
        return;
    }
    
    // Create the four-dot menu container
    const fourDotMenu = document.createElement('div');
    fourDotMenu.className = 'four-dot-menu';
    fourDotMenu.id = 'four-dot-menu-button';
    fourDotMenu.setAttribute('aria-label', 'Toggle navigation menu');
    fourDotMenu.setAttribute('role', 'button');
    fourDotMenu.setAttribute('tabindex', '0');
    
    // Create the four dots
    for (let i = 0; i < 4; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        fourDotMenu.appendChild(dot);
    }
    
    // Add the menu to the header
    const header = document.querySelector('header');
    if (header) {
        header.appendChild(fourDotMenu);
    } else {
        document.body.appendChild(fourDotMenu);
    }
    
    // Add event listeners
    fourDotMenu.addEventListener('click', toggleMobileMenu);
    fourDotMenu.addEventListener('touchstart', function(e) {
        e.preventDefault();
    }, { passive: false });
    fourDotMenu.addEventListener('touchend', function(e) {
        e.preventDefault();
        toggleMobileMenu(e);
    }, { passive: false });
    
    console.log('Three-dot menu created');
}

function setupRightAlignedMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenu) {
        console.error('Mobile menu not found');
        return;
    }
    
    // Add right-aligned class
    mobileMenu.classList.add('right-aligned');
    
    // Make sure it's initially hidden
    mobileMenu.classList.add('hidden');
    mobileMenu.style.display = 'none';
    
    // Add click events to menu items to close the menu when clicked
    const menuItems = mobileMenu.querySelectorAll('a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            hideMobileMenu();
        });
    });
    
    console.log('Right-aligned menu setup complete');
}

function toggleMobileMenu(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    const fourDotMenu = document.getElementById('four-dot-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!fourDotMenu || !mobileMenu) {
        console.error('Menu elements not found');
        return;
    }
    
    // Check if menu is currently visible
    const isVisible = !mobileMenu.classList.contains('hidden') && 
                      getComputedStyle(mobileMenu).display !== 'none';
    
    console.log('Toggling menu, currently visible:', isVisible);
    
    if (isVisible) {
        hideMobileMenu();
    } else {
        showMobileMenu();
    }
    
    // Provide haptic feedback if available
    if ('vibrate' in navigator) {
        navigator.vibrate(50);
    }
}

function showMobileMenu() {
    const fourDotMenu = document.getElementById('four-dot-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!fourDotMenu || !mobileMenu) return;
    
    // Update button state
    fourDotMenu.classList.add('open');
    
    // Show menu
    mobileMenu.style.display = 'block';
    
    // Force reflow
    void mobileMenu.offsetWidth;
    
    // Add visible class and remove hidden class
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('visible');
    
    // Update accessibility
    fourDotMenu.setAttribute('aria-expanded', 'true');
    
    // Add click outside to close
    setTimeout(() => {
        document.addEventListener('click', handleOutsideClick);
    }, 100);
    
    console.log('Menu shown');
}

function hideMobileMenu() {
    const fourDotMenu = document.getElementById('four-dot-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!fourDotMenu || !mobileMenu) return;
    
    // Update button state
    fourDotMenu.classList.remove('open');
    
    // Hide menu with animation
    mobileMenu.classList.remove('visible');
    mobileMenu.classList.add('hidden');
    
    // Update accessibility
    fourDotMenu.setAttribute('aria-expanded', 'false');
    
    // After animation, fully hide the menu
    setTimeout(() => {
        mobileMenu.style.display = 'none';
    }, 300);
    
    // Remove click outside handler
    document.removeEventListener('click', handleOutsideClick);
    
    console.log('Menu hidden');
}

function handleOutsideClick(e) {
    const fourDotMenu = document.getElementById('four-dot-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!fourDotMenu || !mobileMenu) return;
    
    // If click is outside menu and button
    if (!mobileMenu.contains(e.target) && !fourDotMenu.contains(e.target)) {
        hideMobileMenu();
    }
}

// Make functions available globally
window.toggleFourDotMenu = toggleMobileMenu;
window.showFourDotMenu = showMobileMenu;
window.hideFourDotMenu = hideMobileMenu;
