const form = document.getElementById("myForm");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
const passwordError = document.getElementById("passwordError");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", function(event) {
    // Prevent the form from submitting by default
    event.preventDefault();

    // Reset previous error messages
    passwordError.textContent = "";
    emailError.textContent = "";
   
    // Validate password
    const passwordStrength = validatePassword(passwordInput.value);
    if (passwordStrength === "short") {
        passwordError.textContent = "Password is too short.";
        passwordError.style.color = "red";
        return;
    } else if (passwordStrength === "medium") {
        passwordError.textContent = "Password is medium.";
        passwordError.style.color = "orange";
        return;
    } else if (passwordStrength === "strong") {
        passwordError.textContent = "Password is strong.";
        passwordError.style.color = "green";
    }

 
    
    // Validate email
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.color="red"
        return;
    }

    // If all validations pass, submit the form
    alert("login successfully!");
    // You can uncomment the line below to actually submit the form
    // form.submit();
});

function validatePassword(password) {
    if (email.value=="") {
        alert("please fill the field")
    }
    // Check password length
    if (password.length <= 3) {
        return "short";
    } else if (password.length <= 7) {
        return "medium";
    } else if (password.length === 8) {
        return "strong";
    } else {
        return "too_long";
    }
}


function validateEmail(email) {
    // Regular expression for email validation
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
}

function validatePasswordreg(password) {
  // Regular expression for password validation
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8}$/;
  return pattern.test(password);
}




