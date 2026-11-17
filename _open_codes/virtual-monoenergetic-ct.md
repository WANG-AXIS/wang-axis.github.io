---
title: "Virtual Monoenergetic CT"
full_title: "Virtual Monoenergetic CT Imaging via Deep Learning"
summary: "A residual network maps conventional single-spectrum CT images to virtual monoenergetic images, giving dual-energy-like information without a dual-energy scanner."

area: CT Imaging and Reconstruction
year: 2020
date: 2020-10-19
venue: "Patterns"
venue_detail: "1(8), 100128 (2020)"
authors:
  - Wenxiang Cong
  - Yan Xi
  - Paul Fitzgerald
  - Bruno De Man
  - Ge Wang

thumbnail: virtual-monoenergetic-ct.png
figure_caption: "Architecture of the modified residual network, from the figure file in the repository."

code: https://github.com/WANG-AXIS/Deep-Learning
code_status: released
code_scope: "Model, training and validation code with data"
framework: "TensorFlow"

paper: https://doi.org/10.1016/j.patter.2020.100128

tags:
  - "Spectral CT"
  - "Virtual monoenergetic imaging"
  - "Material decomposition"

bibtex: |
  @article{cong2020virtual,
    title   = {Virtual Monoenergetic CT Imaging via Deep Learning},
    author  = {Cong, Wenxiang and Xi, Yan and Fitzgerald, Paul and Man, Bruno De and Wang, Ge},
    journal = {Patterns},
    volume  = {1},
    number  = {8},
    pages   = {100128},
    year    = {2020},
    doi     = {10.1016/j.patter.2020.100128}
  }
---
Conventional single-spectrum CT shows morphology but not the elemental composition of tissue. Dual-energy CT provides energy-selective and material-selective images, at the cost of a more complex system and a higher radiation dose. This work uses a modified residual network, trained on clinical dual-energy data, to map single-spectrum CT images to virtual monoenergetic images at chosen energy levels.

The relative error of the virtual monoenergetic images is below 2%. The model also supports decomposition into three tissue classes with accuracy comparable to dual-energy CT.

## What's in the repository

- The residual network model, with training and validation scripts
- Data archives and the labels for two energy levels
