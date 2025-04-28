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

      try {
          const res = await fetch('http://128.113.177.122:8000/login', {  
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username, password }),
              mode: 'cors',   // ✅ Explicitly enable CORS
              credentials: 'include'  // ✅ Optional, if your server uses sessions (safe to add)
          });

          const data = await res.json();
          console.log("Response from server:", data);  // Debug output

          if (data.status === 'success') {
              console.log("Login success! Redirecting...");
              localStorage.setItem('folders', JSON.stringify(data.folders));
              window.location.href = "https://wang-axis.github.io/dashboard.html";  // Redirect after login
          } else {
              console.log("Login failed:", data.error);
              document.getElementById('result').innerHTML = `<p style="color:red;">Login failed: ${data.error}</p>`;
          }
      } catch (err) {
          console.error("Fetch error:", err);
          document.getElementById('result').innerHTML = `<p style="color:red;">Server not reachable or CORS error: ${err.message}</p>`;
      }
  }
</script>
