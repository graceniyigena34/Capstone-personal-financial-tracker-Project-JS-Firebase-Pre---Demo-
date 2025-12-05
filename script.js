// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc6ueFFbfkmrPcnO3LA6X1_GHOQx1olPc",
  authDomain: "capstone-2-fe382.firebaseapp.com",
  projectId: "capstone-2-fe382",
  storageBucket: "capstone-2-fe382.firebasestorage.app",
  messagingSenderId: "124019599126",
  appId: "1:124019599126:web:c960a45976734ca52f1237"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Sign Up Function
window.signUp = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User created:', userCredential.user);
    window.location.href = `dashboard.html?email=${encodeURIComponent(email)}`;
    return userCredential.user;
  } catch (error) {
    console.error('Sign up error:', error);
    alert('Error: ' + error.message);
  }
};

// Sign In Function
window.signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User signed in:', userCredential.user);
    window.location.href = `dashboard.html?email=${encodeURIComponent(email)}`;
    return userCredential.user;
  } catch (error) {
    console.error('Sign in error:', error);
    alert('Error: ' + error.message);
  }
};

// Google Sign In Function
window.signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log('Google sign in successful:', result.user);
    window.location.href = `dashboard.html?email=${encodeURIComponent(result.user.email)}`;
    return result.user;
  } catch (error) {
    console.error('Google sign in error:', error);
    alert('Error: ' + error.message);
  }
};
  