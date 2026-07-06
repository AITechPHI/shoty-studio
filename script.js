import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCqwO3TFoRl93NgQklp_KcLlGO47gorQrM",
  authDomain: "starry-being-501319-d4-82d6d.firebaseapp.com",
  projectId: "starry-being-501319-d4-82d6d",
  storageBucket: "starry-being-501319-d4-82d6d.firebasestorage.app",
  messagingSenderId: "256981728828",
  appId: "1:256981728828:web:addc1ed6c357405f464d39",
  measurementId: "G-8D5LFF43LJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// Elements
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const userPhoto = document.getElementById("userPhoto");
const userName = document.getElementById("userName");
const profile = document.getElementById("profile");
const profileMenu = document.getElementById("profileMenu");

// Toggle profile menu
if (profile && profileMenu) {
  profile.addEventListener("click", (e) => {
    e.stopPropagation();
    profileMenu.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!profile.contains(e.target)) {
      profileMenu.classList.remove("show");
    }
  });
}

// Check login state
onAuthStateChanged(auth, (user) => {
  if (user) {
    if (userPhoto) {
      userPhoto.src = user.photoURL || "";
      userPhoto.style.display = "block";
    }

    if (userName) {
      userName.textContent = user.displayName || "";
    }

    if (loginBtn) loginBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-block";
  } else {
    if (userPhoto) userPhoto.style.display = "none";
    if (userName) userName.textContent = "";

    if (loginBtn) loginBtn.style.display = "inline-block";
    if (logoutBtn) logoutBtn.style.display = "none";
  }
});

// Login
if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    try {
      await signInWithPopup(auth, provider);
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
      if (profileMenu) profileMenu.classList.remove("show");
    } catch (error) {
      alert(error.message);
    }
  });
}
