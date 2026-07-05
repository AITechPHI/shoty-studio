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
const provider = new GoogleAuthProvider(
  onAuthStateChanged(auth, (user) => {
  const photo = document.getElementById("userPhoto");
  const name = document.getElementById("userName");

  if (user) {
    photo.src = user.photoURL;
    photo.style.display = "block";
    name.textContent = user.displayName;
  } else {
    photo.style.display = "none";
    photo.src = "";
    name.textContent = "";
  }
});
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    try {
      await signOut(auth);

      document.getElementById("userPhoto").src = "";
      document.getElementById("userPhoto").style.display = "none";
      document.getElementById("userName").textContent = "";

      alert("Logged out successfully.");
    } catch (error) {
      alert(error.message);
    }
      await signOut(auth);

      document.getElementById("userPhoto").src = "";
      document.getElementById("userPhoto").style.display = "none";
      document.getElementById("userName").textContent = "";

      alert("Logged out successfully.");
    } catch (error) {
      alert(error.message);
    }
  });
if (loginBtn) {
    ...
}


const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, provider);
     document.getElementById("userPhoto").src = result.user.photoURL;
document.getElementById("userPhoto").style.display = "block";
document.getElementById("userName").textContent = result.user.displayName;
      alert("Welcome, " + result.user.displayName);
    } catch (error) {
      alert(error.message);
   if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    try {
      await signOut(auth);

      document.getElementById("userPhoto").src = "";
      document.getElementById("userPhoto").style.display = "none";
      document.getElementById("userName").textContent = "";

      alert("Logged out successfully.");
    } catch (error) {
      alert(error.message);
    }
  });
}
  });
}

