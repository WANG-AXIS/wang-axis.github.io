---
title: "Login"
layout: textLay
excerpt: "Login"
sitemap: false
permalink: /login.html
---

## Login Page


<style>
body, input, button, label {
    border: 1px solid red; /* This will put a red border around all these elements */
}
</style>

<form id="loginForm" onsubmit="return false;">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required><br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required><br>
    <button type="submit" onclick="login()">Login</button>
</form>

<script src="/js/login-script.js"></script>
