---
title: "Login"
layout: textLay
excerpt: "Login"
sitemap: false
permalink: /login.html
---

## Login Page

<style>
body {
    font-family: Arial, sans-serif;
}

label {
    margin-top: 10px;
    display: block;
    font-size: 14px;
    color: #333;
}

input[type="text"], input[type="password"] {
    width: 90%;
    padding: 8px;
    margin-top: 6px;
    margin-bottom: 16px;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 18px;
    margin-top: 8px;
    border: none;
    cursor: pointer;
    width: 93%;
}

button:hover {
    opacity: 0.8;
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
