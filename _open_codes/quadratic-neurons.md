---
title: "QuadraticNeurons"
full_title: "Superiority of Quadratic over Conventional Neural Networks for Classification of Gaussian Mixture Data"
summary: "A comparison showing that networks of quadratic neurons classify Gaussian mixture data more effectively and efficiently than conventional networks."

area: Deep Learning Theory and Methods
year: 2022
date: 2022-09-28
venue: "Visual Computing for Industry, Biomedicine, and Art"
venue_detail: "5, 23 (2022)"
authors:
  - Tianrui Qi
  - Ge Wang

thumbnail: quadratic-neurons.png
figure_caption: "The affine layer of a conventional neuron (left) and a quadratic neuron (right) (Fig. 3 of the paper)."

code: https://github.com/WANG-AXIS/QuadraticNeurons
code_status: released
code_scope: "Code and notebooks for all experiments"
license: MIT

paper: https://doi.org/10.1186/s42492-022-00118-z

tags:
  - "Quadratic neurons"
  - "Gaussian mixture"
  - "Classification"

bibtex: |
  @article{qi2022superiority,
    title   = {Superiority of Quadratic over Conventional Neural Networks for Classification of Gaussian Mixture Data},
    author  = {Qi, Tianrui and Wang, Ge},
    journal = {Visual Computing for Industry, Biomedicine, and Art},
    volume  = {5},
    pages   = {23},
    year    = {2022},
    doi     = {10.1186/s42492-022-00118-z}
  }
---
A quadratic neuron replaces the inner product between inputs and weights with a quadratic operation, which adds diversity to the building blocks of a network. This study trains quadratic and conventional networks with an adapted backpropagation algorithm and compares them on the classification of Gaussian mixture data.

In this setting the quadratic networks perform remarkably better than conventional networks in both efficacy and efficiency.

## What's in the repository

- Implementations of the neural networks, the Gaussian mixture data generator and an expectation-maximization baseline
- Notebooks for the illustrative and systematic experiments and for three real datasets (ISOLET, Pendigits, Yeast)
