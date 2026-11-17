---
title: "DEER"
full_title: "Deep Efficient End-to-End Reconstruction (DEER) Network for Few-View Breast CT Image Reconstruction"
summary: "An end-to-end network that reconstructs breast CT images from few views with far fewer parameters than other methods that map raw data directly to images."

area: CT Imaging and Reconstruction
year: 2020
date: 2020-10-01
venue: "IEEE Access"
venue_detail: "8, 196633–196646 (2020)"
authors:
  - Huidong Xie
  - Hongming Shan
  - Wenxiang Cong
  - Chi Liu
  - Xiaohua Zhang
  - Shaohua Liu
  - Ruola Ning
  - Ge Wang

thumbnail: deer.png
figure_caption: "Workflow of the DEER network (Fig. 1 of the paper)."

code: https://github.com/WANG-AXIS/DEER
code_status: released
code_scope: "Network and training script"
framework: "TensorFlow"

paper: https://doi.org/10.1109/ACCESS.2020.3033795

tags:
  - "Breast CT"
  - "Few-view reconstruction"
  - "Dose reduction"

bibtex: |
  @article{xie2020deer,
    title   = {Deep Efficient End-to-End Reconstruction (DEER) Network for Few-View Breast CT Image Reconstruction},
    author  = {Xie, Huidong and Shan, Hongming and Cong, Wenxiang and Liu, Chi and Zhang, Xiaohua and Liu, Shaohua and Ning, Ruola and Wang, Ge},
    journal = {IEEE Access},
    volume  = {8},
    pages   = {196633--196646},
    year    = {2020},
    doi     = {10.1109/ACCESS.2020.3033795}
  }
---
Breast CT gives high-contrast, isotropic volumes that reveal tiny calcifications and subtle density differences, but radiation dose is a concern, and scanning with few views is the main way to reduce it. DEER is an end-to-end network for few-view breast CT reconstruction designed for efficiency, image quality and low model complexity. For an image of side length N, the number of parameters it needs to learn the reconstruction grows only linearly with N.

This is orders of magnitude more parameter-efficient than other deep learning methods that map raw data directly to images. DEER shows competitive image quality on a cone-beam breast CT dataset from a commercial scanner.

## What's in the repository

- The network and training script
- A description of the expected data format
