---
title: "DNA"
full_title: "Disrupting Adversarial Transferability in Deep Neural Networks"
summary: "Adversarial examples transfer between models because their features are highly correlated; a dual-neck autoencoder (DNA) trained with a feature correlation loss reduces that transfer."

area: Trustworthy AI
year: 2022
date: 2022-03-24
venue: "Patterns"
venue_detail: "3(5), 100472 (2022)"
authors:
  - Christopher Wiedeman
  - Ge Wang

thumbnail: dna.png
figure_caption: "The proposed dual-neck autoencoder (Fig. 5 of the paper)."

code: https://github.com/WANG-AXIS/DNA
code_status: released
code_scope: "Code, notebooks and trained models"
framework: "PyTorch"

paper: https://doi.org/10.1016/j.patter.2022.100472

tags:
  - "Adversarial robustness"
  - "Feature decorrelation"
  - "Autoencoder"

bibtex: |
  @article{wiedeman2022disrupting,
    title   = {Disrupting Adversarial Transferability in Deep Neural Networks},
    author  = {Wiedeman, Christopher and Wang, Ge},
    journal = {Patterns},
    volume  = {3},
    number  = {5},
    pages   = {100472},
    year    = {2022},
    doi     = {10.1016/j.patter.2022.100472}
  }
---
An adversarial example crafted for one network often fools another. Earlier explanations pointed to shared adversarial subspaces and correlated decision boundaries, but the mechanism remained largely unclear. This paper argues that transferability comes from a high linear correlation between the features that different models extract, which are related by simple affine transformations between latent spaces.

A feature correlation loss reduces this transferability. The paper introduces a dual-neck autoencoder (DNA) that uses the loss to produce two meaningfully different encodings of the same input, with reduced transfer of attacks between them.

## What's in the repository

- Classifier experiments: training of regular and decorrelated models, and attack algorithms
- Notebooks for the CIFAR and MNIST experiments with the DNA and a matching autoencoder
- Trained models for evaluation
