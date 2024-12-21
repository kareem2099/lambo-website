document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Registration successful! You can now log in.');
    // Redirect to login page
    window.location.href = 'login.html';
});
