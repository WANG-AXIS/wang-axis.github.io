---
title: "Dashboard"
layout: textlay
excerpt: "Dataset Browser"
sitemap: false
permalink: /dashboard.html
---

<h2>Remote Folder Browser</h2>
<p id="currentPath"></p>
<ul id="itemList"></ul>

<h3>Upload File to Current Folder</h3>
<input type="file" id="uploadFile">
<button onclick="uploadFile()">Upload</button>

<div id="result"></div>

<script>
let currentPath = "/remote/axis-data";

document.addEventListener("DOMContentLoaded", () => {
    loadPath(currentPath);
});

async function loadPath(path) {
    const res = await fetch('https://gewang-deepreconserver3.bme.rpi.edu:8000/browse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path }),
        mode: 'cors',
        credentials: 'include'
    });

    const data = await res.json();
    const list = document.getElementById('itemList');
    const currentPathDisplay = document.getElementById('currentPath');

    list.innerHTML = '';
    currentPathDisplay.textContent = `Current Path: ${data.path}`;

    if (path !== "/remote/axis-data") {
        const backLi = document.createElement('li');
        backLi.innerHTML = `<a href="#" onclick="goUp()">⬅️ Back</a>`;
        list.appendChild(backLi);
    }

    if (data.status === 'success') {
        currentPath = data.path;
        data.items.forEach(item => {
            const li = document.createElement('li');
            if (item.type === 'folder') {
                li.innerHTML = `📁 <a href="#" onclick="loadPath('${currentPath}/${item.name}')">${item.name}</a>`;
            } else {
                li.innerHTML = `📄 ${item.name} <button onclick="downloadFile('${currentPath}/${item.name}')">Download</button>`;
            }
            list.appendChild(li);
        });
    } else {
        alert("Failed to load directory: " + data.error);
    }
}

function goUp() {
    const parts = currentPath.split('/');
    if (parts.length > 1) {
        parts.pop();
        currentPath = parts.join('/');
        loadPath(currentPath);
    }
}

async function downloadFile(filepath) {
    const encodedPath = encodeURIComponent(filepath);
    window.location.href = `https://gewang-deepreconserver3.bme.rpi.edu:8000/download?path=${encodedPath}`;
}

async function uploadFile() {
    const fileInput = document.getElementById('uploadFile');
    const file = fileInput.files[0];
    if (!file) {
        alert("Please select a file to upload.");
        return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('path', currentPath);

    const res = await fetch('https://gewang-deepreconserver3.bme.rpi.edu:8000/upload', {
        method: 'POST',
        body: formData,
        mode: 'cors',
        credentials: 'include'
    });

    const data = await res.json();
    if (data.status === 'success') {
        alert("Upload successful!");
        loadPath(currentPath);
    } else {
        alert("Upload failed: " + data.error);
    }
}
</script>
