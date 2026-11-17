---
title: "DRONE"
full_title: "DRONE: Dual-Domain Residual-based Optimization NEtwork for Sparse-View CT Reconstruction"
summary: "A three-module network that works in both the sinogram and image domains to reconstruct CT images from only a few projection views."

area: CT Imaging and Reconstruction
year: 2021
date: 2021-05-06
venue: "IEEE Transactions on Medical Imaging"
venue_detail: "40(11), 3002–3014 (2021)"
authors:
  - Weiwen Wu
  - Dianlin Hu
  - Chuang Niu
  - Hengyong Yu
  - Varut Vardhanabhuti
  - Ge Wang

thumbnail: drone.png
figure_caption: "The DRONE architecture (Fig. 1 of the paper)."

code: https://github.com/WANG-AXIS/DRONE
code_status: released
code_scope: "Code, trained models and test data are hosted on Zenodo"
framework: "TensorFlow"

paper: https://doi.org/10.1109/TMI.2021.3078067
links:
  - label: "Code and data (Zenodo)"
    url: https://zenodo.org/record/4724096

tags:
  - "Sparse-view CT"
  - "Dual-domain network"
  - "Compressed sensing"

bibtex: |
  @article{wu2021drone,
    title   = {DRONE: Dual-Domain Residual-based Optimization NEtwork for Sparse-View CT Reconstruction},
    author  = {Wu, Weiwen and Hu, Dianlin and Niu, Chuang and Yu, Hengyong and Vardhanabhuti, Varut and Wang, Ge},
    journal = {IEEE Transactions on Medical Imaging},
    volume  = {40},
    number  = {11},
    pages   = {3002--3014},
    year    = {2021},
    doi     = {10.1109/TMI.2021.3078067}
  }
---
Sparse-view CT remains difficult when only a few projections are available. DRONE addresses it with three modules. The embedding module extends the sparse sinogram and suppresses artifacts in the image domain. The refinement module recovers details in the residual image and data domains. The awareness module enforces consistency between measurements and images using compressed-sensing kernel awareness.

DRONE was trained, validated and tested on preclinical and clinical datasets, where it showed advantages in edge preservation, feature recovery and reconstruction accuracy.

## What's in the repository

- A README describing the environment and the five folders of the release
- The code, trained networks and test datasets themselves are downloaded from Zenodo
