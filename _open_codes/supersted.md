---
title: "SuperSTED"
full_title: "Deep Adversarial Network for Super Stimulated Emission Depletion Imaging"
summary: "A deep adversarial network, trained on physically simulated image pairs, that doubles the resolution of STED microscopy images."

area: MRI and Optical Imaging
year: 2020
date: 2020-02-14
venue: "Journal of Nanophotonics"
venue_detail: "14(1), 016009 (2020)"
authors:
  - Mengzhou Li
  - Hongming Shan
  - Sergey Pryshchep
  - Maria M. Lopez
  - Ge Wang

thumbnail: supersted.png
figure_caption: "The deep neural network structure (Fig. 2 of the paper)."

code: https://github.com/WANG-AXIS/SuperSTED
code_status: released
code_scope: "Training and testing notebooks"
framework: "TensorFlow"

paper: https://doi.org/10.1117/1.JNP.14.016009

tags:
  - "Super-resolution microscopy"
  - "STED"
  - "Generative adversarial network"

bibtex: |
  @article{li2020deep,
    title   = {Deep Adversarial Network for Super Stimulated Emission Depletion Imaging},
    author  = {Li, Mengzhou and Shan, Hongming and Pryshchep, Sergey and Lopez, Maria M. and Wang, Ge},
    journal = {Journal of Nanophotonics},
    volume  = {14},
    number  = {1},
    pages   = {016009},
    year    = {2020},
    doi     = {10.1117/1.JNP.14.016009}
  }
---
STED microscopy can reach a lateral resolution of about 20 nm, but in live-cell imaging it typically reaches about 100 nm because of phototoxicity, leaving many structures unresolved. This work proposes a deep adversarial network that refines a STED image to a higher resolution. Training pairs are simulated from physical models of the point spread function and of cell structures.

The network achieved 30-nm resolution from 60-nm STED images, with structural similarity index values of about 0.98, higher than Lucy–Richardson deconvolution and a UNet-based network.

## What's in the repository

- A notebook for network training and one for testing
- The data are described in the README: shuffled training patch pairs, plus validation and test sets
