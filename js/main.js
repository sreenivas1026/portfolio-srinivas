document.addEventListener('DOMContentLoaded', function() {
  // Send notification when the page loads
  sendVisitorNotification();
  
  // Initialize animations and interactions
  initializeAnimations();
});

function sendVisitorNotification() {
  // Send a request to the notification API endpoint
  fetch('/api/notify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => {
    // Don't need to do anything with the response
    console.log('Notification sent');
  })
  .catch(error => {
    // Silently fail - don't affect user experience if notification fails
    console.error('Notification error:', error);
  });
}

function initializeAnimations() {
  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Initialize any other animations or interactions
  const skillElements = document.querySelectorAll('.skill-badge');
  skillElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 100}ms`;
    element.classList.add('animate-fadeIn');
  });
}
