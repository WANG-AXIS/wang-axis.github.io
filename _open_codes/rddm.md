---
title: "RDDM"
full_title: "RDDM: A Residual-Driven Drifting Model for High-Fidelity Low-Dose CT Denoising"
summary: "A residual-driven drifting model for low-dose CT that matches residual distributions during training and denoises a slice in a single forward pass."

area: Image Denoising
year: 2026
date: 2026-05-16
venue: "arXiv preprint"
venue_detail: "arXiv:2605.17188 (2026)"
authors:
  - Jianxu Wang
  - Qing Lyu
  - Ge Wang

thumbnail: rddm.png
figure_caption: "Overview of RDDM. (a) Training pipeline. (b) Surrogate training dynamics: generated residuals drift toward the real residual distribution. (c) One-step inference with the three RDDM variants."

code: https://github.com/WANG-AXIS/RDDM
code_status: released
code_scope: "Training, inference and evaluation code, pretrained weights, pip package"
license: MIT
framework: "PyTorch"

arxiv: https://arxiv.org/abs/2605.17188
links:
  - label: "Python package (PyPI)"
    url: https://pypi.org/project/rddm/

tags:
  - "Low-dose CT"
  - "Generative model"
  - "One-step denoising"

bibtex: |
  @article{wang2026rddm,
    title   = {RDDM: A Residual-Driven Drifting Model for High-Fidelity Low-Dose CT Denoising},
    author  = {Wang, Jianxu and Lyu, Qing and Wang, Ge},
    journal = {arXiv preprint arXiv:2605.17188},
    year    = {2026}
  }
---
Low-dose CT denoisers trained with conventional reconstruction objectives often produce overly smooth images. Diffusion and flow-based generative models improve fidelity but typically need costly multi-step inference. RDDM (Residual-Driven Drifting Model) extends drifting-based generation to efficient, high-fidelity low-dose CT denoising.

RDDM uses a surrogate training strategy, so that the target residual distribution of each input does not have to be estimated from a single observation. During training, generated and target residuals are pooled separately across inputs to build a drifting field, which aligns the two distributions through attraction toward target residuals and repulsion among generated residuals. A reconstruction loss draws each generated residual toward its observed target and anchors the result to the input. Adjusting the drifting temperature and the anchoring weight controls the trade-off between fidelity to the reference and noise suppression.

At inference, RDDM predicts the residual in a single forward pass. In experiments on two CT datasets it achieves favorable overall denoising performance compared with the evaluated baselines, its three variants balance pixel-level and distributional fidelity while preserving local anatomical structures, and a 512×512 slice is denoised in approximately 15 ms.

## What's in the repository

- The `rddm` package, installable with `pip install rddm`
- Training scripts for the three variants (Fine, Balanced, Smooth), single-image inference and dataset evaluation
- Links to pretrained weights and instructions for preparing the AAPM Low Dose CT Grand Challenge data
