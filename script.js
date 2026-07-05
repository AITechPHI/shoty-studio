// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCqwO3TFoRl93NgQklp_KcLlGO47gorQrM",
  authDomain: "starry-being-501319-d4-82d6d.firebaseapp.com",
  projectId: "starry-being-501319-d4-82d6d",
  storageBucket: "starry-being-501319-d4-82d6d.firebasestorage.app",
  messagingSenderId: "256981728828",
  appId: "1:256981728828:web:addc1ed6c357405f464d39",
  measurementId: "G-8D
// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

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

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      alert("Welcome, " + result.user.displayName);
    } catch (error) {
      alert(error.message);
    }
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully.");
    } catch (error) {
      alert(error.message);
    }
  });
}
