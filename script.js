// script.js

function login() {
    const checkbox = document.getElementById("termsCheckbox");
    if (!checkbox.checked) {
      alert("Please agree to the Terms and Conditions before logging in.");
      return;
    }
    alert("Login successful! (Simulation)");
  }
  