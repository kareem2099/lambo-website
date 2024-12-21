// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Login page script loaded.");

    const form = document.querySelector("form");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");

    // Form validation
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission for custom validation

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            return;
        }

        if (!validatePassword(password)) {
            alert("Password must be at least 6 characters long.");
            passwordInput.focus();
            return;
        }

        // Handle successful login (e.g., send data to server)
        console.log("Form submitted successfully:", { email, password });
        alert("Login successful!");
        form.reset(); // Clear form fields
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
