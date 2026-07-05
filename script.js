// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCqwO3TFoRl93NgQklp_KcLlGO47gorQrM",
  authDomain: "starry-being-501319-d4-82d6d.firebaseapp.com",
  projectId: "starry-being-501319-d4-82d6d",
  storageBucket: "starry-being-501319-d4-82d6d.firebasestorage.app",
  messagingSenderId: "256981728828",
  appId: "1:256981728828:web:addc1ed6c357405f464d39",
  measurementId: "G-8D5LFF43LJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Elements
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const userPhoto = document.getElementById("userPhoto");
const userName = document.getElementById("userName");

// Check login state
onAuthStateChanged(auth, (user) => {
    if (user) {
        userPhoto.src = user.photoURL;
        userPhoto.style.display = "block";
        userName.textContent = user.displayName;

        loginBtn.style.display = "none";
        logoutBtn.style.display = "inline-block";
    } else {
        userPhoto.src = "";
        userPhoto.style.display = "none";
        userName.textContent = "";

        loginBtn.style.display = "inline-block";
        logoutBtn.style.display = "none";
    }
});

// Login
if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      userPhoto.src = result.user.photoURL;
      userPhoto.style.display = "block";
      userName.textContent = result.user.displayName;

      alert("Welcome, " + result.user.displayName);
    } catch (error) {
      alert(error.message);
    }
  });
}

// Logout
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    try {
      await signOut(auth);

      userPhoto.src = "";
      userPhoto.style.display = "none";
      userName.textContent = "";

      alert("Logged out successfully.");
    } catch (error) {
      alert(error.message);
    }
  });
}
