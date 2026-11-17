---
title: "ZS-KAN"
full_title: "ZS-KAN: Zero-Shot Image Denoising With Lightweight Kolmogorov–Arnold Networks"
summary: "A lightweight zero-shot denoiser that combines convolutions with Kolmogorov–Arnold networks and needs only 1% to 25% of the parameters of comparable methods."

area: Image Denoising
year: 2026
date: 2025-12-04
venue: "IEEE Transactions on Biomedical Engineering"
venue_detail: "73(7), 2602–2611 (2026)"
authors:
  - Jianxu Wang
  - Ge Wang

thumbnail: zs-kan.png
figure_caption: "Overview of the denoising process performed by ZS-KAN (Fig. 2 of the paper)."

code: https://github.com/WANG-AXIS/ZS-KAN
code_status: released
code_scope: "Denoising and evaluation code with a command-line tool"
license: MIT
framework: "PyTorch"

paper: https://doi.org/10.1109/TBME.2025.3640551

tags:
  - "Zero-shot denoising"
  - "Kolmogorov–Arnold network"
  - "Lightweight model"

bibtex: |
  @article{wang2026zskan,
    title   = {ZS-KAN: Zero-Shot Image Denoising With Lightweight Kolmogorov–Arnold Networks},
    author  = {Wang, Jianxu and Wang, Ge},
    journal = {IEEE Transactions on Biomedical Engineering},
    volume  = {73},
    number  = {7},
    pages   = {2602--2611},
    year    = {2026},
    doi     = {10.1109/TBME.2025.3640551}
  }
---
Learning-based denoisers usually depend on deep architectures and large datasets, which limits them where data are scarce or computing is constrained. ZS-KAN is a self-supervised, zero-shot alternative: it denoises a single noisy image without any training set, using a hybrid of convolutional layers and Kolmogorov–Arnold networks (KANs).

On synthetic and real noisy images, ZS-KAN performs comparably to or better than state-of-the-art zero-shot denoisers while using only 1% to 25% of their parameters, and it typically preserves more fine detail. The small footprint makes it a practical candidate for medical imaging workflows and edge devices.

## What's in the repository

- A unified command-line tool, `zskan`, for single-image denoising and dataset-level evaluation
- Network source code, scripts and tests
- Instructions for data preparation
