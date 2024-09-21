document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example validation (In reality, you will validate on the server)
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        window.location.href = "dashboard.html";  // Redirect to dashboard
    } else {
        alert("Invalid login credentials.");
    }
});

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form submission
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Example registration (In reality, send data to the server)
    if (username && email && password) {
        alert("Registration successful!");
        window.location.href = "login.html";  // Redirect to login
    } else {
        alert("Please fill all fields.");
    }
});