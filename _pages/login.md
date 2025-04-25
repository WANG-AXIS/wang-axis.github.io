<!-- Updated login.md for GitHub Pages -->
---
title: "Login"
layout: textlay
excerpt: "Login"
sitemap: false
permalink: /login.html
---

# Data Storage Login

<label for="username">Username:</label>
<input type="text" id="username" name="username" required><br><br>
<label for="password">Password:</label>
<input type="password" id="password" name="password" required><br><br>
<button type="submit" onclick="login()">Login</button>

<div id="result"></div>

<script>
  async function login() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      const res = await fetch('http://128.113.177.122:5000/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (data.status === 'success') {
          localStorage.setItem('folders', JSON.stringify(data.folders));
          window.location.href = "/dashboard.html";
      } else {
          document.getElementById('result').innerHTML = `<p style="color:red;">Login failed: ${data.error}</p>`;
      }
  }
</script>

<!-- Save this in your GitHub repo under _pages/login.md -->
