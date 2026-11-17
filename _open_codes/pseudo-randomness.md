---
title: "pseudo-Randomness"
full_title: "Learning From Pseudo-Randomness With an Artificial Neural Network – Does God Play Pseudo-Dice?"
summary: "A simple neural network learns hidden correlations in pseudo-random data and predicts later events, suggesting a test for telling pseudo-randomness from true randomness."

area: Deep Learning Theory and Methods
year: 2018
date: 2018-04-01
venue: "IEEE Access"
venue_detail: "6, 22987–22992 (2018)"
authors:
  - Fenglei Fan
  - Ge Wang

thumbnail: pseudo-randomness.png
figure_caption: "Learning from the pseudo-randomness of π (Fig. 1 of the paper)."

code: https://github.com/WANG-AXIS/pseudo-Randomness
code_status: released
code_scope: "MATLAB scripts and data"
license: Apache 2.0
framework: "MATLAB"

paper: https://doi.org/10.1109/ACCESS.2018.2826448

tags:
  - "Randomness"
  - "Neural networks"
  - "Prediction"

bibtex: |
  @article{fan2018learning,
    title   = {Learning From Pseudo-Randomness With an Artificial Neural Network – Does God Play Pseudo-Dice?},
    author  = {Fan, Fenglei and Wang, Ge},
    journal = {IEEE Access},
    volume  = {6},
    pages   = {22987--22992},
    year    = {2018},
    doi     = {10.1109/ACCESS.2018.2826448}
  }
---
Inspired by the success of neural networks in machine learning, this paper uses them to decode hidden correlations in pseudo-random data and to predict events accordingly. With a simple network structure and a typical training procedure, the network learns and predicts in pseudo-random environments.

The authors suggest that the sensitivity and efficiency of neural networks may allow learning on a low-dimensional manifold inside a high-dimensional space of pseudo-random events, and that this offers a way to probe whether quantum randomness and pseudo-randomness differ fundamentally.

## What's in the repository

- MATLAB training scripts
- Digit sequences of π and e, and recorded results
