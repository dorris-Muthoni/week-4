function validateRegistration() {
    // Clear previous error messages
    clearErrors();

    let isValid = true;

    // Validate Name
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').innerText = 'Name is required.';
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format.';
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long.';
        isValid = false;
    }

    // Validate Confirm Password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
        isValid = false;
    }

    // Validate Age
    const age = document.getElementById('age').value;
    if (age < 18 || age > 100) {
        document.getElementById('ageError').innerText = 'Age must be between 18 and 100.';
        isValid = false;
    }

    // Validate Gender
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('genderError').innerText = 'Gender is required.';
        isValid = false;
    }

    // Validate Country
    const country = document.getElementById('country').value;
    if (country === '') {
        document.getElementById('countryError').innerText = 'Country is required.';
        isValid = false;
    }

    // Validate Terms and Conditions
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('termsError').innerText = 'You must agree to the terms and conditions.';
        isValid = false;
    }

    return isValid;
}

function validateLogin() {
    // Clear previous error messages
    clearErrors();

    let isValid = true;

    // Validate Login Email
    const loginEmail = document.getElementById('loginEmail').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(loginEmail)) {
        document.getElementById('loginEmailError').innerText = 'Invalid email format.';
        isValid = false;
    }

    // Validate Login Password
    const loginPassword = document.getElementById('loginPassword').value;
    if (loginPassword.length < 8) {
        document.getElementById('loginPasswordError').innerText = 'Password must be at least 8 characters long.';
        isValid = false;
    }

    return isValid;
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(error => error.innerText = '');
}
