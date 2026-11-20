---
title: "EGL"
full_title: "LLM-Steered Clinical Knowledge Discovery for CVD Outcome Modeling"
summary: "Evidence-Grounded Learning collects auditable evidence on clinical and CT features for cardiovascular disease outcomes, and an LLM steers which features and interactions to probe next."

area: Medical Foundation Models
year: 2026
date: 2026-09-23
venue: "MICCAI"
venue_detail: "Medical Image Computing and Computer Assisted Intervention 2026, LNCS, pp. 397–407"
authors:
  - Yuxuan Liang
  - Xuanang Xu
  - Ge Wang
  - Pingkun Yan

thumbnail: egl.png
figure_caption: "Overview of the EGL framework, from the repository: the EGL baseline (sampling policy, paired probing and evaluation, evidence ledger) and the LLM control plane that reshapes sampling and guides probing."

code: https://github.com/WANG-AXIS/EGL
code_status: released
code_scope: "Experiment, evidence-graph and plotting code with preprocessing templates; COPDGene data not included"
license: MIT
framework: "Python, Qwen (OpenAI-compatible API)"

paper: https://doi.org/10.1007/978-3-032-38172-9_38

tags:
  - "Cardiovascular disease"
  - "Large language models"
  - "Knowledge discovery"

bibtex: |
  @inproceedings{liang2026egl,
    title     = {LLM-Steered Clinical Knowledge Discovery for CVD Outcome Modeling},
    author    = {Liang, Yuxuan and Xu, Xuanang and Wang, Ge and Yan, Pingkun},
    booktitle = {Medical Image Computing and Computer Assisted Intervention -- MICCAI 2026},
    pages     = {397--407},
    year      = {2026},
    doi       = {10.1007/978-3-032-38172-9_38}
  }
---

EGL (Evidence-Grounded Learning) discovers clinical knowledge for cardiovascular disease (CVD) outcome modeling from repeated, fixed-budget evaluations of a predictive model. Starting from a pool of clinical variables and CT imaging biomarkers, it samples feature subsets, evaluates them in paired probes, and accumulates auditable evidence about individual features (nodes) and feature interactions (edges) in an evidence graph. The result is a stable set of clinical knowledge with marginal and interaction evidence.

EGL-LLM adds a large language model as a semantic control plane. Reading snapshots of the current evidence, the LLM sets an agenda of features and interactions to include, exclude or explore, which steers node and edge probing and reshapes the subset sampling. The fixed evaluator and the definitions of evidence stay unchanged, so the steered search remains auditable. The paper reports the method on CVD status in the COPDGene cohort.

## What's in the repository

- The EGL and EGL-LLM search loop, driven by a YAML experiment configuration, with the fixed evaluator, evidence-graph utilities and an evaluation cache
- Plotting scripts for iteration traces, stable evidence graphs, probing agendas and edge interaction effects
- Preprocessing templates for COPDGene and NLST tables; the data themselves must be obtained under the cohorts' data-use agreements
