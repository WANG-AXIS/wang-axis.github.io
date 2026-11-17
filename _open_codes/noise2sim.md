---
title: Noise2Sim
full_title: Noise Suppression With Similarity-Based Self-Supervised Deep Learning
summary: >-
  A self-supervised denoising method that learns from similar noisy sub-images
  instead of clean references, and suppresses both independent and correlated noise.

area: Image Denoising
year: 2023
date: 2022-12-21
venue: IEEE Transactions on Medical Imaging
venue_detail: "42(6), 1590–1602 (2023)"
authors:
  - Chuang Niu
  - Mengzhou Li
  - Fenglei Fan
  - Weiwen Wu
  - Xiaodong Guo
  - Qing Lyu
  - Ge Wang

thumbnail: noise2sim.png
figure_caption: >-
  Noise2Sim training process on LDCT and PCCT (Fig. 1 of the paper).

code: https://github.com/WANG-AXIS/Noise2Sim
code_status: released
code_scope: Training and test code, pretrained models, pip package
license: BSD 3-Clause
framework: PyTorch

paper: https://doi.org/10.1109/TMI.2022.3231428
links:
  - label: Python package (PyPI)
    url: https://pypi.org/project/noise2sim/

tags:
  - Low-dose CT
  - Photon-counting CT
  - Self-supervised learning

bibtex: |
  @article{niu2023noise2sim,
    title   = {Noise Suppression With Similarity-Based Self-Supervised Deep Learning},
    author  = {Niu, Chuang and Li, Mengzhou and Fan, Fenglei and Wu, Weiwen and Guo, Xiaodong and Lyu, Qing and Wang, Ge},
    journal = {IEEE Transactions on Medical Imaging},
    volume  = {42},
    number  = {6},
    pages   = {1590--1602},
    year    = {2023},
    doi     = {10.1109/TMI.2022.3231428}
  }
---

Deep denoising networks usually learn from paired noisy and clean images. Such
pairs are rarely available for clinical low-dose CT (LDCT) and photon-counting
CT (PCCT). Noise2Sim removes that requirement. It searches the noisy images for
sub-images that are similar to each other, and trains the network to map each
one to its similar counterparts.

Because the training pairs come from similarity in the data, the method
suppresses both independent and correlated noise. Under mild conditions,
Noise2Sim is asymptotically equivalent to supervised learning with clean targets.

In experiments on LDCT and PCCT data, Noise2Sim performs as well as or better
than supervised methods in visual, quantitative and statistical comparisons.

## What's in the repository

- The `noise2sim` Python package, installable with `pip install noise2sim`
- Training and test scripts with configurations for LDCT (Mayo and FDA data), PCCT (mouse and chicken leg scans) and natural images (BSD)
- Links to pretrained models and preprocessed datasets
