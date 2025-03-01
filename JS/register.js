
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDFlzZSeAyQV504AiktF54vAV8-_8dIbY",
  authDomain: "foodiehunter-114.firebaseapp.com",
  projectId: "foodiehunter-114",
  storageBucket: "foodiehunter-114.appspot.com",
  messagingSenderId: "460708738788",
  appId: "1:460708738788:web:722151a1406d011c699ef1",
  measurementId: "G-64629PM39M"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let submit = document.querySelector('#signup-btn');

submit.addEventListener("click", function (event) {
    event.preventDefault();

    // Get email and password values after clicking the submit button
    const email = document.querySelector('#email-reg').value;
    const password = document.querySelector('#password-reg').value;
    const confpass = document.querySelector('#confpass-reg').value;
    if(password != confpass){
      alert('passowrd and confirm password not matching');
      return;
    }

    // Check if email and password are not empty
    if (email.trim() === "" || password.trim() === "") {
        alert("Email and password cannot be empty");
        return;
    }

    // Check if the email is in the correct format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return;
    }

    // Check if the password is at least 6 characters long
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return;
    }

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            alert("Creating Account.....");
            window.location.href = "login_page.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
});
