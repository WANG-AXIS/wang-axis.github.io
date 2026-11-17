---
title: "LDM_privacy"
full_title: "Privacy-Preserving Latent Diffusion-Based Synthetic Medical Image Generation"
summary: "Latent diffusion models generate synthetic CT, MRI and PET images that train denoising and super-resolution networks as well as real data, with a safeguard for patient privacy."

area: Trustworthy AI
year: 2026
date: 2025-10-06
venue: "IEEE Transactions on Medical Imaging"
venue_detail: "45(3), 1140–1151 (2026)"
authors:
  - Yongyi Shi
  - Wenjun Xia
  - Chuang Niu
  - Christopher Wiedeman
  - Ge Wang

thumbnail: ldm-privacy.png
figure_caption: "The latent diffusion model and sample images: (a) the VAE, (b) the LDM, (c) original and synthetic chest CT, brain MRI and brain PET samples (Fig. 1 of the manuscript)."

code: https://github.com/WANG-AXIS/LDM_privacy
code_status: released
code_scope: "Full pipeline from data preparation to downstream evaluation, with pretrained checkpoints"
license: MIT
framework: "PyTorch"

paper: https://doi.org/10.1109/TMI.2025.3618511

tags:
  - "Synthetic data"
  - "Patient privacy"
  - "Latent diffusion"

bibtex: |
  @article{shi2026privacy,
    title   = {Privacy-Preserving Latent Diffusion-Based Synthetic Medical Image Generation},
    author  = {Shi, Yongyi and Xia, Wenjun and Niu, Chuang and Wiedeman, Christopher and Wang, Ge},
    journal = {IEEE Transactions on Medical Imaging},
    volume  = {45},
    number  = {3},
    pages   = {1140--1151},
    year    = {2026},
    doi     = {10.1109/TMI.2025.3618511}
  }
---
Deep learning for tasks such as denoising and super-resolution needs large datasets, which are costly to share and put patient privacy at risk. This work synthesizes training data with latent diffusion models instead. The models generate CT, MRI and PET images from publicly available datasets.

State-of-the-art denoising and super-resolution networks trained on the synthetic images reach image quality equivalent to that of the same networks trained on the original data. A safeguard mechanism embedded in the diffusion model guarantees that every synthetic image differs by a prespecified threshold from its closest counterpart in the original patient dataset. This allows datasets to be shared publicly without exposing patients, and could enable federated learning at the level of input data instead of local network weights.

## What's in the repository

- Data preparation, latent diffusion model training and the privacy enhancement step
- Low-dose CT simulation, and the denoising and MRI/PET super-resolution networks used for evaluation
- A link to pretrained checkpoints for the main models
