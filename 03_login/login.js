// login.js
import { auth } from '/04_backend/backend.js'; // path adjust karo apne hisaab se
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

window.validator = function () {
    const email = document.getElementById("n1").value.trim();
    const password = document.getElementById("n2").value.trim();

    const userError = document.getElementById("userError");
    const passError = document.getElementById("passError");

    // Clear old errors
    userError.textContent = "";
    passError.textContent = "";

    let valid = true;

    if (!email) {
        userError.textContent = "Please enter your email.";
        valid = false;
    }

    if (!password) {
        passError.textContent = "Please enter your password.";
        valid = false;
    }

    if (!valid) return false;

    // Firebase login
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User exists, redirect to index.html
            window.location.href = "/01_home/index.html";
        })
        .catch((error) => {
            const errorCode = error.code;

            if (errorCode === "auth/user-not-found") {
                userError.textContent = "User does not exist.";
            } else if (errorCode === "auth/wrong-password") {
                passError.textContent = "Incorrect password.";
            } else if (errorCode === "auth/invalid-email") {
                userError.textContent = "Invalid email format.";
            } else {
                userError.textContent = "Login failed: " + error.message;
            }
        });

    return false; // prevent default form submit
};
