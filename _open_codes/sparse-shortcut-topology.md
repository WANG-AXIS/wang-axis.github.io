---
title: "SparseShortcutTopology"
full_title: "On a Sparse Shortcut Topology of Artificial Neural Networks"
summary: "A sparse shortcut topology that makes a one-neuron-wide deep network a universal approximator and generalizes well in practice."

area: Deep Learning Theory and Methods
year: 2022
date: 2021-11-15
venue: "IEEE Transactions on Artificial Intelligence"
venue_detail: "3(4), 595–608 (2022)"
authors:
  - Fenglei Fan
  - Dayang Wang
  - Hengtao Guo
  - Qikui Zhu
  - Pingkun Yan
  - Ge Wang
  - Hengyong Yu

thumbnail: sparse-shortcut-topology.png
figure_caption: "The proposed sparse shortcut topology, from the repository."

code: https://github.com/WANG-AXIS/SparseShortcutTopology
code_status: released
code_scope: "Code for the expressibility, generalizability and interpretability experiments"
framework: "PyTorch"

paper: https://doi.org/10.1109/TAI.2021.3128132

tags:
  - "Network architecture"
  - "Shortcut connections"
  - "Universal approximation"

bibtex: |
  @article{fan2022sparse,
    title   = {On a Sparse Shortcut Topology of Artificial Neural Networks},
    author  = {Fan, Fenglei and Wang, Dayang and Guo, Hengtao and Zhu, Qikui and Yan, Pingkun and Wang, Ge and Yu, Hengyong},
    journal = {IEEE Transactions on Artificial Intelligence},
    volume  = {3},
    number  = {4},
    pages   = {595--608},
    year    = {2022},
    doi     = {10.1109/TAI.2021.3128132}
  }
---
Shortcut connections feed the outputs of earlier layers into later layers, and they work remarkably well. This paper studies a sparse shortcut topology for its expressivity and generalizability. It shows that the topology lets a one-neuron-wide deep network approximate any univariate continuous function, and presents a width-bounded universal approximator.

Generalization bound theory, comparisons with ResNet and DenseNet on benchmarks, and saliency map analysis indicate that the topology generalizes well and suggest ways to design new architectures.

## What's in the repository

- Expressibility experiments in the neural tangent kernel setting
- Generalizability experiments on CIFAR-100, Tiny ImageNet and ImageNet
- Interpretability experiments with saliency maps
