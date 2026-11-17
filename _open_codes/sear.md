---
title: "SEAR"
full_title: "Feasibility Analysis on Simultaneous Electron Density and Attenuation Coefficient Reconstruction"
summary: "A joint reconstruction of electron density and attenuation images for Compton scatter tomography, using a deep learning model inside an alternating iterative scheme."

area: CT Imaging and Reconstruction
year: 2021
date: 2021-09-26
venue: "Medical Physics"
venue_detail: "48(11), 7236–7249 (2021)"
authors:
  - Christopher Wiedeman
  - Wenxiang Cong
  - Ge Wang

thumbnail: sear.png
figure_caption: "System block diagram of the joint scatter and attenuation reconstruction (Fig. 2 of the paper)."

code: https://github.com/WANG-AXIS/SEAR
code_status: partial
code_scope: "Simulated data and reconstruction results (no code)"

paper: https://doi.org/10.1002/mp.15251

tags:
  - "Compton scatter tomography"
  - "Joint reconstruction"
  - "Electron density"

bibtex: |
  @article{wiedeman2021feasibility,
    title   = {Feasibility Analysis on Simultaneous Electron Density and Attenuation Coefficient Reconstruction},
    author  = {Wiedeman, Christopher and Cong, Wenxiang and Wang, Ge},
    journal = {Medical Physics},
    volume  = {48},
    number  = {11},
    pages   = {7236--7249},
    year    = {2021},
    doi     = {10.1002/mp.15251}
  }
---
Compton scatter tomography is hard to make practical when the attenuation map is unknown. This work proposes a joint reconstruction that exploits the structural similarity between the electron density image and the attenuation image. A deep learning model is embedded in an alternating iterative scheme and applied to a single-view CT scatter imaging procedure.

Tests on generated 2D phantoms and on data simulated from real CT images showed convergence and decent image quality, with features such as tumors and lesions distinguishable. The structural similarity index was at least 0.82 for the scatter reconstruction and 0.88 for the attenuation reconstruction.

## What's in the repository

- Ground-truth and reconstructed electron density and attenuation images, as MATLAB files
- Five experiments: regular and out-of-sample Shepp-Logan phantoms, abdominal CT images with and without an added lesion, and finite energy resolution
