---
title: "LEARN"
full_title: "LEARN: Learned Experts' Assessment-Based Reconstruction Network for Sparse-Data CT"
summary: "An iterative CT reconstruction scheme unfolded into a network, in which the regularization terms and parameters are learned from data."

area: CT Imaging and Reconstruction
year: 2018
date: 2018-02-13
venue: "IEEE Transactions on Medical Imaging"
venue_detail: "37(6), 1333–1347 (2018)"
authors:
  - Hu Chen
  - Yi Zhang
  - Yunjin Chen
  - Junfeng Zhang
  - Weihua Zhang
  - Huaiqiang Sun
  - Yang Lv
  - Peixi Liao
  - Jiliu Zhou
  - Ge Wang

thumbnail: learn.png
figure_caption: "Overall structure of the LEARN network (Fig. 2 of the paper)."

code: https://github.com/WANG-AXIS/LEARN
code_status: released
code_scope: "MATLAB code, trained model and demo data"
license: Apache 2.0
framework: "MATLAB (MatConvNet)"

paper: https://doi.org/10.1109/TMI.2018.2805692

tags:
  - "Sparse-data CT"
  - "Unrolled network"
  - "Iterative reconstruction"

bibtex: |
  @article{chen2018learn,
    title   = {LEARN: Learned Experts' Assessment-Based Reconstruction Network for Sparse-Data CT},
    author  = {Chen, Hu and Zhang, Yi and Chen, Yunjin and Zhang, Junfeng and Zhang, Weihua and Sun, Huaiqiang and Lv, Yang and Liao, Peixi and Zhou, Jiliu and Wang, Ge},
    journal = {IEEE Transactions on Medical Imaging},
    volume  = {37},
    number  = {6},
    pages   = {1333--1347},
    year    = {2018},
    doi     = {10.1109/TMI.2018.2805692}
  }
---
Compressive sensing is effective for sparse-data CT, such as few-view CT, tomosynthesis and interior tomography, but choosing the regularization parameters adaptively remains a major open problem. LEARN unfolds a fields-of-experts iterative reconstruction scheme into a fixed number of iterations (50 in the experiments) and trains it from data.

On the Mayo Clinic low-dose challenge data, LEARN outperforms several state-of-the-art methods in artifact reduction, feature preservation and computational speed. Because all regularization terms and parameters of the iterative reconstruction are learned from the training data, the network uses application-oriented knowledge more effectively than competing algorithms.

## What's in the repository

- MATLAB code for data generation, training and testing, built on MatConvNet
- A trained model, a test image and a projection matrix for the demo
