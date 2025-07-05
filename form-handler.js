// Form submission handler - works across all devices
document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const contactForm = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const sendAnotherBtn = document.getElementById('sendAnotherBtn');
    
    if (contactForm) {
        // Add submit event listener to the form
        contactForm.addEventListener('submit', function(e) {
            // Prevent default form submission behavior
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // Submit the form data to Formspree using fetch API
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    // Show success message
                    contactForm.style.display = 'none';
                    thankYouMessage.classList.remove('hidden');
                    
                    // Clear form fields
                    contactForm.reset();
                    
                    // Add typing animation to the message
                    const typingText = document.querySelector('.typing-text');
                    if (typingText) {
                        const message = "Thank you for your message! I'll respond as soon as possible.";
                        let i = 0;
                        const typingSpeed = 40; // milliseconds per character
                        
                        function typeWriter() {
                            if (i < message.length) {
                                typingText.textContent += message.charAt(i);
                                i++;
                                setTimeout(typeWriter, typingSpeed);
                            }
                        }
                        
                        typingText.textContent = '';
                        setTimeout(typeWriter, 500);
                    }
                } else {
                    // Show error message
                    const errorDiv = document.getElementById('formValidationError');
                    const validationMessage = document.getElementById('validationMessage');
                    if (errorDiv && validationMessage) {
                        validationMessage.textContent = 'Something went wrong. Please try again later.';
                        errorDiv.classList.remove('hidden');
                        setTimeout(() => {
                            errorDiv.classList.add('hidden');
                        }, 5000);
                    }
                }
            }).catch(error => {
                console.error('Form submission error:', error);
                // Show error message
                const errorDiv = document.getElementById('formValidationError');
                const validationMessage = document.getElementById('validationMessage');
                if (errorDiv && validationMessage) {
                    validationMessage.textContent = 'Network error. Please check your connection and try again.';
                    errorDiv.classList.remove('hidden');
                    setTimeout(() => {
                        errorDiv.classList.add('hidden');
                    }, 5000);
                }
            });
        });
    }
    
    // Add click event to "Send Another Message" button
    if (sendAnotherBtn) {
        sendAnotherBtn.addEventListener('click', function() {
            thankYouMessage.classList.add('hidden');
            contactForm.style.display = 'block';
        });
    }
});
