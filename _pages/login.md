---
title: "Login"
layout: textlay
excerpt: "Login to Remote Server"
sitemap: false
permalink: /login.html
---

<!-- HTML Starts Here -->
<h2>Login to View Remote Dataset</h2>
<input type="text" id="username" placeholder="Username"><br><br>
<input type="password" id="password" placeholder="Password"><br><br>
<button onclick="login()">Login</button>

<div id="result"></div>

<script>
  async function login() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      const res = await fetch('http://128.113.177.122:5000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
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
