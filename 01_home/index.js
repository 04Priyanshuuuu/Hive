import { auth } from "/04_Backend/backend.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
    if (!user) {
        // ❌ Not logged in → send back to login
        window.location.href = "../03_login/login.html";
    }
});
