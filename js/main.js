document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Hardcoded credentials for testing
    const validUsername = 'user';
    const validPassword = 'password123';
    
    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
