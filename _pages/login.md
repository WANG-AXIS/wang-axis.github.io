    <div class="login-container">
        <h1>Login</h1>
        <form id="loginForm">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
        <p class="error-message" id="errorMessage"></p>
    </div>
    <script>
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            document.getElementById('errorMessage').textContent = 'User not found!';
        });
    </script>
