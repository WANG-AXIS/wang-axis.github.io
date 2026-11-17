---
title: "GATCluster"
full_title: "GATCluster: Self-Supervised Gaussian-Attention Network for Image Clustering"
summary: "A self-supervised clustering network with a Gaussian attention mechanism that outputs semantic cluster labels directly, with no separate clustering step."

area: Deep Learning Theory and Methods
year: 2020
date: 2020-11-19
venue: "European Conference on Computer Vision (ECCV)"
venue_detail: "pp. 735–751 (2020)"
authors:
  - Chuang Niu
  - Jun Zhang
  - Ge Wang
  - Jimin Liang

thumbnail: gatcluster.png
figure_caption: "The GATCluster framework (Fig. 2 of the paper)."

code: https://github.com/WANG-AXIS/GATCluster
code_status: released
code_scope: "Training and visualization code with a trained model"
framework: "PyTorch"

paper: https://doi.org/10.1007/978-3-030-58595-2_44

tags:
  - "Image clustering"
  - "Self-supervised learning"
  - "Attention"

bibtex: |
  @inproceedings{niu2020gatcluster,
    title   = {GATCluster: Self-Supervised Gaussian-Attention Network for Image Clustering},
    author  = {Niu, Chuang and Zhang, Jun and Wang, Ge and Liang, Jimin},
    booktitle = {European Conference on Computer Vision (ECCV)},
    pages   = {735--751},
    year    = {2020},
    doi     = {10.1007/978-3-030-58595-2_44}
  }
---
GATCluster is a self-supervised image clustering method that outputs semantic cluster labels directly, instead of first extracting intermediate features and then running a traditional clustering algorithm. A Label Feature Theorem guarantees that the learned features are one-hot encoded vectors and that trivial solutions are avoided.

The network is trained without any labels through four self-learning tasks: transformation invariance, separability maximization, entropy analysis and attention mapping. A self-supervised attention mechanism, with a parameterized attention module and a soft-attention loss, captures object-oriented semantics. A memory-efficient two-step learning algorithm handles large images.

## What's in the repository

- Training code with configurations for STL-10 and ImageNet-10
- A script that visualizes attention maps, and a link to a trained STL-10 model
