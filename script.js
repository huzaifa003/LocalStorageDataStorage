document.getElementById('loginForm').addEventListener('click', function(event) {
    event.preventDefault();

    // Capture the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulated server-side credential handling
    const message = document.getElementById('message');
    if (username === "testuser" && password === "testpassword") {
        message.style.color = "green";
        message.textContent = "Login Successful! This is a simulation.";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid credentials. Avoid entering real credentials!";
    }

    // Educating about phishing
    alert("In a real phishing attack, your credentials would be sent to an attacker's server. Stay cautious and never share sensitive information on unknown sites!");

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

});

