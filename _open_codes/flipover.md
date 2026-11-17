---
title: "Flipover"
full_title: "Flipover Outperforms Dropout in Deep Learning"
summary: "A stronger form of dropout: instead of zeroing selected neurons, Flipover reverses their outputs with a negative multiplier during training."

area: Deep Learning Theory and Methods
year: 2024
date: 2024-02-22
venue: "Visual Computing for Industry, Biomedicine, and Art"
venue_detail: "7, 4 (2024)"
authors:
  - Yuxuan Liang
  - Chuang Niu
  - Pingkun Yan
  - Ge Wang

thumbnail: flipover.png
figure_caption: "Flipover operations. Left: a standard feedforward network. Middle: the network with dropout. Right: the network with flipover (Fig. 1 of the paper)."

code: https://github.com/WANG-AXIS/Flipover
code_status: released
code_scope: "Notebooks and models for the experiments"
framework: "PyTorch"

paper: https://doi.org/10.1186/s42492-024-00153-y

tags:
  - "Regularization"
  - "Dropout"
  - "Adversarial robustness"

bibtex: |
  @article{liang2024flipover,
    title   = {Flipover Outperforms Dropout in Deep Learning},
    author  = {Liang, Yuxuan and Niu, Chuang and Yan, Pingkun and Wang, Ge},
    journal = {Visual Computing for Industry, Biomedicine, and Art},
    volume  = {7},
    pages   = {4},
    year    = {2024},
    doi     = {10.1186/s42492-024-00153-y}
  }
---
Dropout regularizes a network by randomly removing neurons and their connections during training. Flipover selects neurons in the same way but, instead of removing them, reverses their outputs with a negative multiplier.

This gives stronger regularization. In experiments across several network types, Flipover matches or exceeds dropout in reducing overfitting, and improves robustness to noise and to adversarial attacks.

## What's in the repository

- Notebooks for the MNIST and CIFAR-10 experiments, including FGSM attacks and Poisson noise
- Model definitions
