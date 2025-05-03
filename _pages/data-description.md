---
title: "Lab Datasets"
layout: null
permalink: /datasets/
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Lab Datasets</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      padding: 20px;
    }

    .card-img-container {
      width: 100%;
      height: 140px;
      padding: 8px;
      background-color: #f8f9fa;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card-img-top {
      object-fit: contain;
      width: 100%;
      height: 100%;
      padding: 0;
    }

    .badge-private {
      background-color: crimson;
    }

    .badge-public {
      background-color: seagreen;
    }

    .card-body p.description {
      font-size: 0.875rem;
      margin-bottom: 4px;
      color: #555;
    }

    .card-body p.details {
      font-size: 0.75rem;
      color: #777;
    }

    h1 {
      font-size: 1.75rem;
    }
  </style>
</head>
<body>
  <h1 class="mb-4">🧪 Lab Datasets Overview</h1>
  <div id="datasetGrid" class="row g-3"></div>

  <script>
    axios.get('datasets.json')
      .then(response => {
        const container = document.getElementById('datasetGrid');
        response.data.forEach(ds => {
          const badge = ds.access === 'Private'
            ? `<span class="badge badge-private">Private</span>`
            : `<span class="badge badge-public">Public</span>`;

          const card = `
          <div class="col-md-4">
            <div class="card shadow-sm h-100">
              <div class="card-img-container">
                <img src="${ds.thumbnail}" class="card-img-top" alt="${ds.name}">
              </div>
              <div class="card-body pb-2">
                <h6 class="card-title mb-1">${ds.name}</h6>
                <p class="description">${ds.description}</p>
                <p class="details">${ds.details || ''}</p>
                <ul class="list-group list-group-flush small">
                  <li class="list-group-item"><strong>Size:</strong> ${ds.size}</li>
                  <li class="list-group-item"><strong>Project:</strong> ${ds.project}</li>
                  <li class="list-group-item"><strong>Contributors:</strong> ${ds.contributors.join(', ')}</li>
                  <li class="list-group-item"><strong>Access:</strong> ${badge}</li>
                </ul>
              </div>
              <div class="card-footer bg-white border-0 text-end">
                ${ds.link ? `<a href="${ds.link}" target="_blank" class="btn btn-outline-primary btn-sm">More Info</a>` : ''}
              </div>
            </div>
          </div>
          `;
          container.insertAdjacentHTML('beforeend', card);
        });
      })
      .catch(err => {
        document.getElementById('datasetGrid').innerHTML = "<p class='text-danger'>Failed to load dataset info.</p>";
        console.error(err);
      });
  </script>
</body>
</html>
