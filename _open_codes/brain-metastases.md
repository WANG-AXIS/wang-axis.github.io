---
title: "Brain Metastases Classification"
full_title: "A Transformer-Based Deep-Learning Approach for Classifying Brain Metastases into Primary Organ Sites Using Clinical Whole-Brain MRI Images"
summary: "An end-to-end workflow that segments brain metastases on whole-brain MRI and classifies them into five primary organ sites, as a possible non-invasive alternative to biopsy."

area: MRI and Optical Imaging
year: 2022
date: 2022-10-27
venue: "Patterns"
venue_detail: "3(11), 100613 (2022)"
authors:
  - Qing Lyu
  - Sanjeev V. Namjoshi
  - Emory McTyre
  - Umit Topaloglu
  - Richard Barcus
  - Michael D. Chan
  - Christina K. Cramer
  - Waldemar Debinski
  - Metin N. Gurcan
  - Glenn J. Lesser
  - Hui-Kuan Lin
  - Reginald F. Munden
  - Boris C. Pasche
  - Kiran K. S. Sai
  - Roy E. Strowd
  - Stephen B. Tatter
  - Kounosuke Watabe
  - Wei Zhang
  - Ge Wang
  - Christopher T. Whitlow

thumbnail: brain-metastases.png
figure_caption: "Workflow of the approach and selection of the data, from the paper."

code: https://github.com/WANG-AXIS/whole-brain-MRI_metastases_cls
code_status: released
code_scope: "Segmentation, modality transfer and classification networks"
framework: "PyTorch"

paper: https://doi.org/10.1016/j.patter.2022.100613

tags:
  - "Brain MRI"
  - "Vision transformer"
  - "Cancer"

bibtex: |
  @article{lyu2022transformer,
    title   = {A Transformer-Based Deep-Learning Approach for Classifying Brain Metastases into Primary Organ Sites Using Clinical Whole-Brain MRI Images},
    author  = {Lyu, Qing and Namjoshi, Sanjeev V. and McTyre, Emory and Topaloglu, Umit and Barcus, Richard and Chan, Michael D. and Cramer, Christina K. and Debinski, Waldemar and Gurcan, Metin N. and Lesser, Glenn J. and Lin, Hui-Kuan and Munden, Reginald F. and Pasche, Boris C. and Sai, Kiran K. S. and Strowd, Roy E. and Tatter, Stephen B. and Watabe, Kounosuke and Zhang, Wei and Wang, Ge and Whitlow, Christopher T.},
    journal = {Patterns},
    volume  = {3},
    number  = {11},
    pages   = {100613},
    year    = {2022},
    doi     = {10.1016/j.patter.2022.100613}
  }
---
Treatment decisions for brain metastases depend on the primary organ site, which today is identified by biopsy and histology. This work builds an end-to-end deep-learning workflow on clinical whole-brain MRI. It segments the tumors, transfers image modality, and classifies each case into one of five primary-site classes.

The workflow was evaluated on 1,582 preprocessed contrast-enhanced T1-weighted MRI exams. Tenfold cross-validation gave an overall AUC of 0.878 (95% CI 0.873 to 0.883), suggesting the approach could become a non-invasive tool for identifying primary cancer sites.

## What's in the repository

- The segmentation network
- A CycleGAN for modality transfer
- The classification network
