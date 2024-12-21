// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Registration page script loaded.");

    const form = document.querySelector("form");
    const firstNameInput = document.querySelector("#first-name");
    const lastNameInput = document.querySelector("#last-name");
    const emailInput = document.querySelector("#email");
    const phoneInput = document.querySelector("#phone");
    const locationInput = document.querySelector("#location");

    // Form validation
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission for custom validation

        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const location = locationInput.value.trim();

        if (!firstName || !lastName) {
            alert("Please enter your first and last name.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            return;
        }

        if (!validatePhone(phone)) {
            alert("Please enter a valid phone number.");
            phoneInput.focus();
            return;
        }

        if (!location) {
            alert("Please enter your location.");
            locationInput.focus();
            return;
        }

        // Handle successful registration
        console.log("Form submitted successfully:", { firstName, lastName, email, phone, location });
        alert("Registration successful!");
        form.reset(); // Clear form fields
    });
});

// Validate email address using regex
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Validate phone number (basic validation)
function validatePhone(phone) {
    const phonePattern = /^\d{10,15}$/;
    return phonePattern.test(phone);
}
