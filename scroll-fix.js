// Mobile scroll fix - include before the closing body tag
(function() {
    // Force mobile scrolling
    function enableMobileScroll() {
        // Enable scrolling
        document.body.style.overflow = 'auto';
        document.body.style.position = 'static';
        document.body.style.height = 'auto';
        document.documentElement.style.overflow = 'auto';
        document.documentElement.style.position = 'static';
        document.documentElement.style.height = 'auto';
        
        // Remove any listeners that might be blocking scroll
        document.removeEventListener('touchmove', preventScroll, { passive: false });
        document.removeEventListener('touchmove', preventScroll, false);
        
        // Add passive listeners to improve performance
        document.addEventListener('touchmove', function() {}, {passive: true});
        document.addEventListener('wheel', function() {}, {passive: true});
        document.addEventListener('scroll', function() {}, {passive: true});
    }
    
    // Function to prevent default scroll behavior
    function preventScroll(e) {
        e.preventDefault();
    }
    
    // Add event listener for orientation change
    window.addEventListener('orientationchange', function() {
        setTimeout(enableMobileScroll, 300);
    });
    
    // Add event listener for resize
    window.addEventListener('resize', function() {
        setTimeout(enableMobileScroll, 300);
    });
    
    // Initial call
    enableMobileScroll();
    
    // Call again after a short delay (in case something else disables scrolling)
    setTimeout(enableMobileScroll, 1000);
    setTimeout(enableMobileScroll, 2000);
    setTimeout(enableMobileScroll, 5000);
})();
