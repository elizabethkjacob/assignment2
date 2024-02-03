const form = document.getElementById("myForm");
const passwordInput = document.getElementById("password");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const passwordError = document.getElementById("passwordError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", function(event) {
    // Prevent the form from submitting by default
    event.preventDefault();

    // Reset previous error messages
    passwordError.textContent = "";
    phoneError.textContent = "";
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

    // Validate phone number
    if (!validatePasswordreg(passwordInput.value)) {
      passwordError.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.";
      passwordError.style.color="red"
      return;
    }
    // Validate phone number
    if (!validatePhone(phoneInput.value)) {
        phoneError.textContent = "Please enter a valid phone number in the format 123-456-7890.";
        phoneError.style.color="red"
        return;
    }

    // Validate email
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.color="red"
        return;
    }

    // If all validations pass, submit the form
    alert("Form submitted successfully!");
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

function validatePhone(phone) {
    // Regular expression for phone number validation
    const pattern = /^\d{3}-\d{3}-\d{4}$/;
    return pattern.test(phone);
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




