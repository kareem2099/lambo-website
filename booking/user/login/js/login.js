document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Collect form data
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate email and password (simplified for demonstration)
    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Simulated login process
    if (email === "test@lamborghini.com" && password === "password123") {
        alert("Login successful! Redirecting...");
        // Redirect to booking page
        window.location.href = "booking.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
