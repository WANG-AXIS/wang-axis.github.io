---
title: "Interpretability Survey"
full_title: "On Interpretability of Artificial Neural Networks: A Survey"
summary: "A survey that proposes a taxonomy of interpretability research for neural networks, with an independent evaluation of selected methods and a view on medical applications."

area: Deep Learning Theory and Methods
year: 2021
date: 2021-03-17
venue: "IEEE Transactions on Radiation and Plasma Medical Sciences"
venue_detail: "5(6), 741–760 (2021)"
authors:
  - Fenglei Fan
  - Jinjun Xiong
  - Mengzhou Li
  - Ge Wang

thumbnail: interpretability-survey.png
figure_caption: "Taxonomy used for the interpretability review (Fig. 2 of the paper)."

code: https://github.com/WANG-AXIS/IndependentEvaluation
code_status: released
code_scope: "Code that reproduces the evaluation figures"
framework: "TensorFlow and PyTorch"

paper: https://doi.org/10.1109/TRPMS.2021.3066428

tags:
  - "Interpretability"
  - "Survey"
  - "Explainable AI"

bibtex: |
  @article{fan2021interpretability,
    title   = {On Interpretability of Artificial Neural Networks: A Survey},
    author  = {Fan, Fenglei and Xiong, Jinjun and Li, Mengzhou and Wang, Ge},
    journal = {IEEE Transactions on Radiation and Plasma Medical Sciences},
    volume  = {5},
    number  = {6},
    pages   = {741--760},
    year    = {2021},
    doi     = {10.1109/TRPMS.2021.3066428}
  }
---
Deep neural networks succeed with text, images, video and graphs, but their black-box nature holds back their use in high-stakes settings such as diagnosis and therapy. This survey proposes a taxonomy of interpretability, reviews recent work on improving it, describes applications in medicine, and discusses future directions, including links to fuzzy logic and brain science.

The repository holds the authors' independent evaluation of several existing interpretability methods, which accompanies the survey.

## What's in the repository

- Code for the evaluation figures in the survey, one folder per figure
- A link to the complete files, including a saved model that is too large for the repository
