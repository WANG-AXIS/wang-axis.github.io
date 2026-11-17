---
title: M3FM
full_title: Medical Multimodal Multitask Foundation Model for Lung Cancer Screening
summary: >-
  A foundation model that reads 3D low-dose chest CT together with clinical text
  and answers lung cancer screening questions posed in plain language.

area: Medical Foundation Models
year: 2025
date: 2025-02-11
venue: Nature Communications
venue_detail: "16, 1523 (2025)"
authors:
  - Chuang Niu
  - Qing Lyu
  - Christopher D. Carothers
  - Parisa Kaviani
  - Josh Tan
  - Pingkun Yan
  - Mannudeep K. Kalra
  - Christopher T. Whitlow
  - Ge Wang

thumbnail: m3fm.png
figure_caption: >-
  M3FM architecture. A CT Vision Transformer (CTViT) and a Text Transformer
  encode the CT volume, the clinical text and the question. The Task Encoder
  fuses them into a task-specific embedding, and the Predictors return the answers.

code: https://github.com/WANG-AXIS/M3FM
code_status: released
code_scope: Model definitions, inference API and demo notebook
license: MIT
framework: PyTorch

paper: https://doi.org/10.1038/s41467-025-56822-w
links:
  - label: Code archive (Zenodo)
    url: https://doi.org/10.5281/zenodo.14366852

tags:
  - Chest CT
  - Lung cancer screening
  - Multimodal

bibtex: |
  @article{niu2025m3fm,
    title   = {Medical multimodal multitask foundation model for lung cancer screening},
    author  = {Niu, Chuang and Lyu, Qing and Carothers, Christopher D. and Kaviani, Parisa and Tan, Josh and Yan, Pingkun and Kalra, Mannudeep K. and Whitlow, Christopher T. and Wang, Ge},
    journal = {Nature Communications},
    volume  = {16},
    pages   = {1523},
    year    = {2025},
    doi     = {10.1038/s41467-025-56822-w}
  }
---

A lung cancer screening exam produces more than images. Each low-dose CT scan
comes with demographics, smoking history, disease history and radiology reports.
M3FM (medical multimodal-multitask foundation model) is built to use all of this
at once. It takes a 3D CT volume, free-text clinical data and a task written as
a plain-language question, and returns the answer.

The model has four parts: a CT Vision Transformer (CTViT) that encodes CT
volumes at multiple scales, a Text Transformer for clinical text and questions,
a Task Encoder that fuses them into a task-specific multimodal embedding, and
lightweight Predictors. It was trained on a curated dataset covering 49 types of
clinical data, 163,725 chest CT series and 17 screening-related tasks, from lung
nodule characterization and Lung-RADS categorization to lung cancer risk and
cardiovascular disease mortality risk.

Compared with previous state-of-the-art models, M3FM improves lung cancer risk
prediction by up to 20% and cardiovascular disease mortality risk prediction by
up to 10%. It also works with different combinations of input data, identifies
the data elements that inform a prediction, and adapts to new out-of-distribution
tasks from a small dataset.

## What's in the repository

- Model definitions: CTViT, Text Transformer, Task Encoder and Predictors
- An inference API with configurations for six-year lung cancer risk and cardiovascular abnormality prediction
- Two demo cases from the NLST dataset, and a notebook that draws relevance maps on the CT volume and the clinical text
