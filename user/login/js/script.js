// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Login page script loaded.");

    const form = document.querySelector("#login-form");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");

    // Form validation
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validation messages
        const emailError = "Please enter a valid email address.";
        const passwordError = "Password must be at least 6 characters long.";

        if (!validateEmail(email)) {
            console.error(emailError);
            alert(emailError);
            emailInput.focus();
            return;
        }

        if (!validatePassword(password)) {
            console.error(passwordError);
            alert(passwordError);
            passwordInput.focus();
            return;
        }

        // Simulated login success
        console.log("Form submitted successfully:", { email, password });
        alert("Login successful!");
        form.reset();
    });
});



// Validate email address using regex
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Validate password length
function validatePassword(password) {
    return password.length >= 6;
}
