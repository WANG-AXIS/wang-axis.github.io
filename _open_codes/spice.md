---
title: "SPICE"
full_title: "SPICE: Semantic Pseudo-Labeling for Image Clustering"
summary: "An image clustering framework that separates feature learning from a clustering head and trains it with semantics-aware pseudo-labels, without any annotation."

area: Deep Learning Theory and Methods
year: 2022
date: 2022-11-01
venue: "IEEE Transactions on Image Processing"
venue_detail: "31, 7264–7278 (2022)"
authors:
  - Chuang Niu
  - Hongming Shan
  - Ge Wang

thumbnail: spice.png
figure_caption: "The SPICE framework, from the repository."

code: https://github.com/WANG-AXIS/SPICE
code_status: released
code_scope: "Training and evaluation code"
framework: "PyTorch"

paper: https://doi.org/10.1109/TIP.2022.3221290

tags:
  - "Image clustering"
  - "Self-supervised learning"
  - "Pseudo-labeling"

bibtex: |
  @article{niu2022spice,
    title   = {SPICE: Semantic Pseudo-Labeling for Image Clustering},
    author  = {Niu, Chuang and Shan, Hongming and Wang, Ge},
    journal = {IEEE Transactions on Image Processing},
    volume  = {31},
    pages   = {7264--7278},
    year    = {2022},
    doi     = {10.1109/TIP.2022.3221290}
  }
---
Deep clustering methods often misjudge either the similarity of features or the semantic discrepancy between clusters. SPICE splits the network into a feature model that measures instance-level similarity and a clustering head that captures cluster-level discrepancy. Two semantics-aware algorithms, prototype pseudo-labeling and reliable pseudo-labeling, supply the training signal.

Training has three stages, none of which uses labels: contrastive learning of the feature model, prototype-based training of the clustering head, and joint refinement. SPICE improves on existing methods by about 10% and sets the state of the art on six balanced benchmarks. On CIFAR-10 the unsupervised model reaches 91.8% accuracy, against 93.8% for fully supervised classification.

## What's in the repository

- The SPICE implementation with configurations
- Guides for dataset preparation, training and evaluation
- Bundled MoCo and FixMatch code used in the pipeline
