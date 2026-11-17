---
title: "ReLinear"
full_title: "On Expressivity and Trainability of Quadratic Networks"
summary: "Theory showing why quadratic networks are more expressive than conventional ones, and ReLinear, a training strategy that keeps them from collapsing."

area: Deep Learning Theory and Methods
year: 2025
date: 2023-11-23
venue: "IEEE Transactions on Neural Networks and Learning Systems"
venue_detail: "36(1), 1228–1242 (2025)"
authors:
  - Fenglei Fan
  - Mengzhou Li
  - Fei Wang
  - Rongjie Lai
  - Ge Wang

thumbnail: relinear.png
figure_caption: "The ReLinear training strategy, from the repository: quadratic terms start from a conventional neuron and are learned gradually."

code: https://github.com/WANG-AXIS/ReLinear
code_status: released
code_scope: "Training code for quadratic networks with ReLinear"
framework: "PyTorch"

paper: https://doi.org/10.1109/TNNLS.2023.3331380

tags:
  - "Quadratic neurons"
  - "Expressivity"
  - "Training stability"

bibtex: |
  @article{fan2025expressivity,
    title   = {On Expressivity and Trainability of Quadratic Networks},
    author  = {Fan, Fenglei and Li, Mengzhou and Wang, Fei and Lai, Rongjie and Wang, Ge},
    journal = {IEEE Transactions on Neural Networks and Learning Systems},
    volume  = {36},
    number  = {1},
    pages   = {1228--1242},
    year    = {2025},
    doi     = {10.1109/TNNLS.2023.3331380}
  }
---
Quadratic neurons replace the inner product of a conventional neuron with a quadratic function. Networks built from them show promising results, but their advantage in expressivity had not been fully explained, and they are more prone to training collapse. Using spline theory and a measure from algebraic geometry, this paper proves two theorems showing that quadratic networks are more expressive than their conventional counterparts.

To stabilize training, the paper proposes ReLinear. Each quadratic neuron is initialized so that it behaves like a conventional neuron, and the quadratic terms are then regularized during training so that they are learned gradually and adaptively. Experiments on popular datasets support the analysis.

## What's in the repository

- Training quadratic networks with ReLinear
- A compact quadratic network variant
- A variant combining ReLinear with ReZero
