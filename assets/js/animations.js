// Scroll-triggered animations for demo sections
(function() {
    // Configuration for each animated section
    var sections = [
        {
            id: 'digest-demo',
            selectors: ['.digest-item']
        },
        {
            id: 'pr-guidance',
            selectors: ['.pr-item', '.pr-slide-left']
        },
        {
            id: 'conversations',
            selectors: ['.chat-item', '.chat-user', '.chat-bot']
        }
    ];

    sections.forEach(function(config) {
        var section = document.getElementById(config.id);
        if (!section) return;

        // Collect all animated items within this section
        var items = [];
        config.selectors.forEach(function(selector) {
            var found = section.querySelectorAll(selector);
            found.forEach(function(item) {
                items.push(item);
            });
        });

        if (items.length === 0) return;

        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // Add animate-visible class to trigger animations
                    items.forEach(function(item) {
                        item.classList.add('animate-visible');
                    });
                    // Stop observing after animation triggers
                    observer.disconnect();
                }
            });
        }, {
            threshold: 0.15 // Trigger when 15% of section is visible
        });

        observer.observe(section);
    });
})();

// Contact form validation
(function() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var nameError = document.getElementById('name-error');
    var emailError = document.getElementById('email-error');
    var submitBtn = form.querySelector('button[type="submit"]');

    // Email regex pattern
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function showError(input, errorEl, message) {
        input.classList.add('border-red-500', 'dark:border-red-500');
        input.classList.remove('border-gray-300', 'dark:border-gray-600');
        errorEl.textContent = message;
        errorEl.classList.remove('hidden');
    }

    function clearError(input, errorEl) {
        input.classList.remove('border-red-500', 'dark:border-red-500');
        input.classList.add('border-gray-300', 'dark:border-gray-600');
        errorEl.textContent = '';
        errorEl.classList.add('hidden');
    }

    function validateName() {
        var value = nameInput.value.trim();
        if (!value) {
            showError(nameInput, nameError, 'Please enter your name');
            return false;
        }
        clearError(nameInput, nameError);
        return true;
    }

    function validateEmail() {
        var value = emailInput.value.trim();
        if (!value) {
            showError(emailInput, emailError, 'Please enter your email');
            return false;
        }
        if (!emailPattern.test(value)) {
            showError(emailInput, emailError, 'Please enter a valid email address');
            return false;
        }
        clearError(emailInput, emailError);
        return true;
    }

    // Validate on blur
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);

    // Clear error on input
    nameInput.addEventListener('input', function() {
        if (nameInput.value.trim()) {
            clearError(nameInput, nameError);
        }
    });
    emailInput.addEventListener('input', function() {
        if (emailPattern.test(emailInput.value.trim())) {
            clearError(emailInput, emailError);
        }
    });

    // Handle form submission via AJAX
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var isNameValid = validateName();
        var isEmailValid = validateEmail();

        if (!isNameValid || !isEmailValid) {
            // Focus first invalid field
            if (!isNameValid) {
                nameInput.focus();
            } else if (!isEmailValid) {
                emailInput.focus();
            }
            return;
        }

        // Show loading state
        submitBtn.disabled = true;
        var originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Sending...';

        // Submit via AJAX
        var formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(function(response) {
            if (response.ok) {
                // Show success message
                var success = document.getElementById('form-success');
                form.classList.add('hidden');
                success.classList.remove('hidden');
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(function(error) {
            // Reset button and show error
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            alert('There was a problem submitting the form. Please try again.');
        });
    });
})();
