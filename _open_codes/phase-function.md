---
title: "Phase Function Estimation"
full_title: "Phase Function Estimation from a Diffuse Optical Image via Deep Learning"
summary: "A convolutional network estimates the scattering phase function of tissue directly from one diffuse optical image, without assuming the form of the function."

area: MRI and Optical Imaging
year: 2022
date: 2022-03-07
venue: "Physics in Medicine and Biology"
venue_detail: "67(7), 074001 (2022)"
authors:
  - Yuxuan Liang
  - Chuang Niu
  - Chen Wei
  - Shenghan Ren
  - Wenxiang Cong
  - Ge Wang

thumbnail: phase-function.png
figure_caption: "Example results: diffuse optical images with the ground-truth and estimated phase functions (Fig. 2 of the paper)."

code: https://github.com/WANG-AXIS/phasefunction2
code_status: released
code_scope: "Simulation, training and testing code with results"
framework: "PyTorch"

paper: https://doi.org/10.1088/1361-6560/ac5b21

tags:
  - "Optical imaging"
  - "Light scattering"
  - "Monte Carlo simulation"

bibtex: |
  @article{liang2022phase,
    title   = {Phase Function Estimation from a Diffuse Optical Image via Deep Learning},
    author  = {Liang, Yuxuan and Niu, Chuang and Wei, Chen and Ren, Shenghan and Cong, Wenxiang and Wang, Ge},
    journal = {Physics in Medicine and Biology},
    volume  = {67},
    number  = {7},
    pages   = {074001},
    year    = {2022},
    doi     = {10.1088/1361-6560/ac5b21}
  }
---
The phase function describes how light is deflected when it scatters in tissue. This work estimates it with a convolutional neural network directly from a diffuse optical image, without assuming a fixed form. A Gaussian mixture model represents the phase function flexibly and still gives an analytic expression for sampling deflection angles in Monte Carlo simulation.

The method was validated on Monte Carlo-simulated reflectance images of typical biological tissues with different anisotropy factors. It reached a mean squared error of 0.01 for the phase function and a relative error of 3.28% for the anisotropy factor. The study also analyzes how field of view and spatial resolution affect the estimate.

## What's in the repository

- A modified CUDAMCML program and scripts that generate the simulated diffuse reflectance data
- Training, cross-validation and testing code
- Scripts that produce the figures, and saved test results
