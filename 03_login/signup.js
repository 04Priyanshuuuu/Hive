import { auth, db } from '/04_Backend/backend.js';
import {
    createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

import {
    collection,
    setDoc,
    doc,
    getDocs,
    query,
    where
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";


// Dark mode toggle
window.toggleMode = function () {
    const body = document.body;
    const toggleButton = document.querySelector(".toggle-mode");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️ Light Mode";
    } else {
        toggleButton.textContent = "🌙 Dark Mode";
    }
};

document.querySelector("form").addEventListener("submit", async function (e) {
    e.preventDefault();

    // Input values
    const username = document.getElementById("username").value.trim();
    const rollno = document.getElementById("rollno").value.trim();
    const branch = document.getElementById("branch").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Clear previous errors
    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    // Basic validation
    let hasError = false;
    if (!username) {
        document.getElementById("usernameError").textContent = "Username is required.";
        hasError = true;
    }
    if (!rollno) {
        document.getElementById("rollnoError").textContent = "Roll number is required.";
        hasError = true;
    }
    if (!branch) {
        document.getElementById("branchError").textContent = "Branch is required.";
        hasError = true;
    }
    if (!email) {
        document.getElementById("emailError").textContent = "Email is required.";
        hasError = true;
    }
    if (!password || password.length < 6 || isNaN(password)) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 digits and numbers only.";
        hasError = true;
    }
    if (password !== confirmPassword) {
        document.getElementById("confirmError").textContent = "Passwords do not match.";
        hasError = true;
    }

    if (hasError) return;

    try {
        // Check if username or rollno already exists in Firestore
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("username", "==", username));
        const q2 = query(usersRef, where("rollno", "==", rollno));
        const snap1 = await getDocs(q);
        const snap2 = await getDocs(q2);

        if (!snap1.empty) {
            document.getElementById("usernameError").textContent = "Username already exists.";
            return;
        }
        if (!snap2.empty) {
            document.getElementById("rollnoError").textContent = "Roll number already exists.";
            return;
        }

        // Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Firestore user data
        await setDoc(doc(db, "users", user.uid), {
            username: username,
            rollno: rollno,
            branch: branch,
            email: email,
            uid: user.uid,
            createdAt: new Date().toISOString()
        });

        alert("Account created successfully!");
        window.location.href = "login.html";

    } catch (error) {
        if (error.code === "auth/email-already-in-use") {
            document.getElementById("error-popup").style.display = "block";
        } else {
            alert("Error: " + error.message);
        }
    }
});
