function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const correctUsername = "GENERALRE";  // Set your actual username
    const correctPassword = "1@";  // Set your actual password

    if (username === correctUsername && password === correctPassword) {
        window.location.href = "home.html"; // Redirect to home page after successful login
    } else {
        document.getElementById("error-message").innerText = "Incorrect Username or Password!";
    }
}
