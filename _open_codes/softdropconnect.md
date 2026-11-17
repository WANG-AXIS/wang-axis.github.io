---
title: "SoftDropConnect"
full_title: "SoftDropConnect (SDC) – Effective and Efficient Quantification of the Network Uncertainty in Deep MR Image Analysis"
summary: "A Bayesian inference method that modulates network parameters continuously instead of switching them off, giving better uncertainty estimates in MR image analysis."

area: MRI and Optical Imaging
year: 2022
date: 2022-01-20
venue: "arXiv preprint"
venue_detail: "arXiv:2201.08418 (2022)"
authors:
  - Qing Lyu
  - Christopher T. Whitlow
  - Ge Wang

thumbnail: softdropconnect.png
figure_caption: "Dropout (left), DropConnect (middle) and SoftDropConnect (right). In Dropout and DropConnect the drop mask weights are either one or zero; in SoftDropConnect they are continuous (Fig. 1 of the paper)."

code: https://github.com/WANG-AXIS/SoftDropConnect
code_status: released
code_scope: "Code for the segmentation and classification experiments"
framework: "PyTorch"

arxiv: https://arxiv.org/abs/2201.08418

tags:
  - "Uncertainty quantification"
  - "Brain MRI"
  - "Bayesian deep learning"

bibtex: |
  @article{lyu2022softdropconnect,
    title   = {SoftDropConnect (SDC) – Effective and Efficient Quantification of the Network Uncertainty in Deep MR Image Analysis},
    author  = {Lyu, Qing and Whitlow, Christopher T. and Wang, Ge},
    journal = {arXiv preprint arXiv:2201.08418},
    year    = {2022}
  }
---
SoftDropConnect (SDC) is a simple Bayesian inference method for quantifying the uncertainty of a neural network in medical imaging. Dropout and DropConnect disable parameters at random. SDC instead modulates them continuously during training and testing, so the affected channels keep operating.

SDC was tested on glioma segmentation and brain metastasis classification. Compared with Bayes by Backprop, Dropout and DropConnect, it improved whole-tumor segmentation Dice by 3.4%, 2.5% and 6.7%, and metastasis classification accuracy by 11.7%, 3.9% and 8.7%, while greatly reducing epistemic and aleatoric uncertainty.

## What's in the repository

- Code for brain tumor segmentation
- Code for a digit recognition experiment
