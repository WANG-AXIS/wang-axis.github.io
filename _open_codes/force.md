---
title: "FORCE"
full_title: "Tomographic Foundation Model—FORCE: Flow-Oriented Reconstruction Conditioning Engine"
summary: "A CT reconstruction framework that combines data fidelity with a Poisson flow generative model (PFGM++), usable for low-dose, sparse-view and metal-artifact tasks without paired training data."

area: CT Imaging and Reconstruction
year: 2026
date: 2026-03-02
venue: "IEEE Transactions on Medical Imaging"
venue_detail: "45(6), 3137–3149 (2026)"
authors:
  - Wenjun Xia
  - Chuang Niu
  - Ge Wang

thumbnail: force.png
figure_caption: "Conditioned sampling trajectories in FORCE (Fig. 2 of the paper)."

code: https://github.com/WANG-AXIS/FORCE
code_status: released
code_scope: "Training, sampling and reconstruction code"
license: MIT
framework: "PyTorch"

paper: https://doi.org/10.1109/TMI.2026.3669463

tags:
  - "CT reconstruction"
  - "Foundation model"
  - "Diffusion model"

bibtex: |
  @article{xia2026force,
    title   = {Tomographic Foundation Model—FORCE: Flow-Oriented Reconstruction Conditioning Engine},
    author  = {Xia, Wenjun and Niu, Chuang and Wang, Ge},
    journal = {IEEE Transactions on Medical Imaging},
    volume  = {45},
    number  = {6},
    pages   = {3137--3149},
    year    = {2026},
    doi     = {10.1109/TMI.2026.3669463}
  }
---
Clinical CT scenarios such as low-dose screening, sparse-view scanning and metal implants lead to severe noise and artifacts. Deep learning has advanced CT reconstruction, but paired training data are hard to obtain, and networks trained on approximately paired data carry a risk of hallucination. FORCE (Flow-Oriented Reconstruction Conditioning Engine) integrates data fidelity with a state-of-the-art generative model, the Poisson flow generative model in its generalized form PFGM++.

During sampling, the current image estimate is repeatedly corrected by a reconstruction conditioning step built on analytical CT operators, so one generative prior can be conditioned for different CT tasks. In the experiments, FORCE shows superior performance in various CT imaging tasks and outperforms existing unsupervised reconstruction approaches.

## What's in the repository

- Diffusion code based on guided-diffusion, with an EDM/PFGM-compatible sampler and a PFGM++ prior
- CT data-consistency and regularization steps, and the FORCE reconstruction sampler
- Training and sampling scripts, configurations, and notes on checkpoints
