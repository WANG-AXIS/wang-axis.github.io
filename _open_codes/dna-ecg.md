---
title: "DNA_ECG"
full_title: "Decorrelative Network Architecture for Robust Electrocardiogram Classification"
summary: "Ensembles trained with feature decorrelation and Fourier partitioning learn diverse features, giving better uncertainty estimates for ECG classification under adversarial attack."

area: Trustworthy AI
year: 2024
date: 2024-12-01
venue: "Patterns"
venue_detail: "5(12), 101116 (2024)"
authors:
  - Christopher Wiedeman
  - Ge Wang

thumbnail: dna-ecg.png
figure_caption: "The decorrelation training process (Fig. 6 of the paper)."

code: https://github.com/WANG-AXIS/DNA_ECG
code_status: released
code_scope: "Training and adversarial evaluation code"
license: MIT
framework: "PyTorch"

paper: https://doi.org/10.1016/j.patter.2024.101116

tags:
  - "ECG"
  - "Adversarial robustness"
  - "Uncertainty estimation"

bibtex: |
  @article{wiedeman2024decorrelative,
    title   = {Decorrelative Network Architecture for Robust Electrocardiogram Classification},
    author  = {Wiedeman, Christopher and Wang, Ge},
    journal = {Patterns},
    volume  = {5},
    number  = {12},
    pages   = {101116},
    year    = {2024},
    doi     = {10.1016/j.patter.2024.101116}
  }
---
Medical AI needs to recognize when it cannot operate with confidence. Ensembles can estimate uncertainty, but their members often share the same vulnerabilities to adversarial perturbations. This work trains ensemble members to learn different features by combining feature decorrelation with Fourier partitioning, which lowers the chance that one perturbation fools all of them.

The method is tested on single-channel and multi-channel ECG classification, and compared with adversarial training and DVERGE adapted to the same ensemble framework. It generally maintains performance on unperturbed data and shows superior robustness and uncertainty estimation under projected gradient descent and smooth adversarial attacks of various magnitudes. It needs no costly optimization with adversarial samples, so it adds much less computation to training than adversarial training or DVERGE.

## What's in the repository

- Ensemble training and adversarial evaluation scripts
- Filters for Fourier partitioning and the feature decorrelation functions
- Scripts to extract and visualize results; raw ECG inputs are downloaded separately
