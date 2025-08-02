function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

function validateForm() {
    // Inputs
    const username = document.getElementById("n1").value.trim();
    const email = document.getElementById("n2").value.trim();
    const password = document.getElementById("n3").value.trim();
    const confirmPassword = document.getElementById("n4").value.trim();

    // Error elements
    const userError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passError = document.getElementById("passwordError");
    const confirmError = document.getElementById("confirmError");

    // Clear previous errors
    userError.textContent = "";
    emailError.textContent = "";
    passError.textContent = "";
    confirmError.textContent = "";

    let valid = true;

    // Username validation
    if (username.length < 3) {
        userError.textContent = "Username must be at least 3 characters.";
        valid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }

    // Password must be numeric and at least 6 digits
    if (!/^\d+$/.test(password)) {
        passError.textContent = "Password must contain only numbers.";
        valid = false;
    } else if (password.length < 6) {
        passError.textContent = "Password must be at least 6 digits.";
        valid = false;
    }

    // Confirm password match
    if (password !== confirmPassword) {
        confirmError.textContent = "Passwords do not match.";
        valid = false;
    }

    if (valid) {
        alert("Sign up successful!");
    }

    return valid;
}