// Load the header dynamically
function loadHeader() {
    console.log("Current script directory:", window.location.pathname); // Debugging statement
    console.log("Attempting to load header from: ../../header.html");

    fetch("../../header.html")
        .then(response => {
            if (!response.ok) {
                console.error("Failed to load header with status:", response.status);
                throw new Error("Failed to load header.");
            }
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
            console.log("Header loaded successfully.");
        })
        .catch(err => console.error("Error loading header:", err));
}

// Redirect to login or register pages
function handleLogin() {
    console.log("Redirecting to login page...");
    window.location.href = "/user/login/login.html";
}

function handleRegister() {
    console.log("Redirecting to register page...");
    window.location.href = "/user/reg/register.html";
}

// Call loadHeader on page load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Document fully loaded. Calling loadHeader...");
    loadHeader();
});
