// ========== Mobile Menu Toggle ==========
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');
if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('show');
    });
}

// ========== Contact Form Validation ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const formFeedback = document.getElementById('formFeedback');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');

    function showError(input, span, msg) {
        input.style.borderColor = '#e74c3c';
        span.textContent = msg;
    }
    function clearError(input, span) {
        input.style.borderColor = '';
        span.textContent = '';
    }

    function validateName() {
        const val = nameInput.value.trim();
        if (val === '') { showError(nameInput, nameError, 'Name is required.'); return false; }
        if (val.length < 2) { showError(nameInput, nameError, 'Min 2 characters.'); return false; }
        clearError(nameInput, nameError); return true;
    }

    function validateEmail() {
        const val = emailInput.value.trim();
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (val === '') { showError(emailInput, emailError, 'Email is required.'); return false; }
        if (!pattern.test(val)) { showError(emailInput, emailError, 'Invalid email format.'); return false; }
        clearError(emailInput, emailError); return true;
    }

    function validatePhone() {
        const val = phoneInput.value.trim();
        if (val !== '' && !/^\d{10}$/.test(val)) {
            showError(phoneInput, phoneError, 'Must be 10 digits.'); return false;
        }
        clearError(phoneInput, phoneError); return true;
    }

    function validateMessage() {
        const val = messageInput.value.trim();
        if (val === '') { showError(messageInput, messageError, 'Message is required.'); return false; }
        if (val.length < 10) { showError(messageInput, messageError, 'Min 10 characters.'); return false; }
        clearError(messageInput, messageError); return true;
    }

    // Blur events
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    phoneInput.addEventListener('blur', validatePhone);
    messageInput.addEventListener('blur', validateMessage);

    // Submit
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const valid = validateName() & validateEmail() & validatePhone() & validateMessage();
        if (valid) {
            formFeedback.textContent = '✅ Message sent successfully! (demo)';
            formFeedback.className = 'form-feedback success';
            contactForm.reset();
            [nameError, emailError, phoneError, messageError].forEach(s => s.textContent = '');
            [nameInput, emailInput, phoneInput, messageInput].forEach(inp => inp.style.borderColor = '');
        } else {
            formFeedback.textContent = '❌ Please fix the errors above.';
            formFeedback.className = 'form-feedback error';
        }
    });
}