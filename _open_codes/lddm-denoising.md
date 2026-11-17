---
title: "LdDMDenoising"
full_title: "Impact of Loss Functions on the Performance of a Deep Neural Network Designed to Restore Low-Dose Digital Mammography"
summary: "A study of how the training loss affects noise and signal bias when a residual network restores low-dose digital mammograms."

area: Image Denoising
year: 2023
date: 2023-04-28
venue: "Artificial Intelligence in Medicine"
venue_detail: "142, 102555 (2023)"
authors:
  - Hongming Shan
  - Rodrigo B. Vimieiro
  - Lucas R. Borges
  - Marcelo A. C. Vieira
  - Ge Wang

thumbnail: lddm-denoising.png
figure_caption: "Architecture of the network used in the study (Fig. 1 of the paper)."

code: https://github.com/WANG-AXIS/LdDMDenoising
code_status: released
code_scope: "Training and testing code"
license: MIT
framework: "PyTorch"

paper: https://doi.org/10.1016/j.artmed.2023.102555

tags:
  - "Digital mammography"
  - "Low-dose imaging"
  - "Loss functions"

bibtex: |
  @article{shan2023impact,
    title   = {Impact of Loss Functions on the Performance of a Deep Neural Network Designed to Restore Low-Dose Digital Mammography},
    author  = {Shan, Hongming and Vimieiro, Rodrigo B. and Borges, Lucas R. and Vieira, Marcelo A. C. and Wang, Ge},
    journal = {Artificial Intelligence in Medicine},
    volume  = {142},
    pages   = {102555},
    year    = {2023},
    doi     = {10.1016/j.artmed.2023.102555}
  }
---
Digital mammography is the most common imaging tool for breast cancer screening, and its radiation dose should be kept as low as possible while preserving diagnostic value. This work restores low-dose digital mammograms with a standard residual network (ResNet) and evaluates how the choice of loss function affects the result. The network was trained on 256,000 patches from 400 images of retrospective clinical exams, with dose reductions of 75% and 50% simulated to form low-dose and standard-dose pairs.

The network was validated on real low-dose and full-dose images of a physical anthropomorphic breast phantom acquired on a commercial mammography system, and benchmarked against an analytical restoration model. Quality was assessed by the signal-to-noise ratio and the mean normalized squared error, decomposed into residual noise and bias. The perceptual loss PL4 differed significantly from all other losses and gave the residual noise closest to the standard dose. The perceptual loss PL3, the structural similarity index and one of the adversarial losses gave the lowest bias for both dose reduction factors.

## What's in the repository

- Training scripts for the pixel-wise and perceptual losses, and a testing script
- Supporting tools and an SSIM implementation
