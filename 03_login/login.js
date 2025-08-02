function validator() {
    var email = document.getElementById("n1").value.trim();
    var password = document.getElementById("n2").value.trim();
    var userError = document.getElementById("userError");
    var passError = document.getElementById("passError");
    let valid = true;

    // Clear previous messages
    userError.textContent = "";
    passError.textContent = "";

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        userError.textContent = "Enter a valid email address.";
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


    if (valid) {
        alert("Login successful!");
    }
    return valid;
}

// 🌙 Toggle Dark Mode
function toggleMode() {
    document.body.classList.toggle("dark-mode");
}