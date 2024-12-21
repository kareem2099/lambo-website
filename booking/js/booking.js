// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const loginTab = document.getElementById("login-tab");
    const registerTab = document.getElementById("register-tab");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    // Tab Switching Logic
    loginTab.addEventListener("click", () => {
        loginTab.classList.add("active-tab");
        registerTab.classList.remove("active-tab");
        loginForm.classList.add("active-content");
        registerForm.classList.remove("active-content");
    });

    registerTab.addEventListener("click", () => {
        registerTab.classList.add("active-tab");
        loginTab.classList.remove("active-tab");
        registerForm.classList.add("active-content");
        loginForm.classList.remove("active-content");
    });
});
