---
title: "Login"
layout: textLay
excerpt: "Login"
sitemap: false
permalink: /login.html
---

## Login Page

<link rel="stylesheet" href="/css/login.css">

<form id="loginForm" onsubmit="return false;">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required><br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required><br>
    <button type="submit" onclick="login()">Login</button>
</form>

<script src="/js/login-script.js"></script>
