// Initialize Firebase
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
    userPhoto.src = user.photoURL || "";
    userPhoto.style.display = "block";
    userName.textContent = user.displayName || "";

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
      profileMenu.classList.remove("show");
    } catch (error) {
      alert(error.message);
    }
  });
}
