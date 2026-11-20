---
title: "Motif-Detection"
full_title: "Functional Motif Detection via In Silico Ablation Using AlphaGenome"
summary: "Candidate transcription factor motifs are cut out of the DNA sequence in silico, and AlphaGenome predicts how enhancer activity changes, to tell activating, repressive and neutral motifs apart."

area: Computational Biology
year: 2026
date: 2026-07-01
venue: "Briefings in Bioinformatics"
venue_detail: "27(4), bbag422 (2026)"
authors:
  - Yuxuan Liang
  - Sebastian A. Dziadowicz
  - Lei Wang
  - Gangqing Hu
  - Pingkun Yan
  - Ge Wang

thumbnail: motif-detection.png
figure_caption: "Graphical abstract, from the repository: motif nomination with FIMO, in silico ablation and AlphaGenome prediction, and motif effect calling with biological cross-comparison against CUT&RUN data."

code: https://github.com/WANG-AXIS/Motif-Detection
code_status: released
code_scope: "Full pipeline with configurations, sample inputs and outputs"
license: MIT
framework: "Python, AlphaGenome API"

paper: https://doi.org/10.1093/bib/bbag422
links:
  - label: "CUT&RUN data (GEO GSE312300)"
    url: https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE312300

tags:
  - "Gene regulation"
  - "Transcription factor motifs"
  - "AlphaGenome"

bibtex: |
  @article{liang2026functional,
    title   = {Functional Motif Detection via In Silico Ablation Using AlphaGenome},
    author  = {Liang, Yuxuan and Dziadowicz, Sebastian A. and Wang, Lei and Hu, Gangqing and Yan, Pingkun and Wang, Ge},
    journal = {Briefings in Bioinformatics},
    volume  = {27},
    number  = {4},
    pages   = {bbag422},
    year    = {2026},
    doi     = {10.1093/bib/bbag422}
  }
---

Finding which transcription factor (TF) motif instances an enhancer actually needs usually requires ChIP-based assays or laborious perturbation experiments. This work proposes a virtual motif-perturbation framework built on AlphaGenome, a large sequence-to-function foundation model, that estimates the regulatory contribution of individual motifs from DNA sequence alone.

Candidate C/EBPβ motifs in chromatin-active regions are excised in silico within their genomic context, and AlphaGenome predicts the resulting change in chromatin activity such as H3K27ac. Each change is compared with a null distribution from sham deletions to assign statistical confidence and to classify motifs as activating, repressive or neutral. The predictions were compared with H3K27ac CUT&RUN measurements after CEBPB knockout in multiple myeloma cells: key activating motifs showed concordant loss of signal, and the remaining discrepancies reflected interpretable biological mechanisms. Sequence-only virtual ablation can thus scale as a tool for hypothesis generation and regulatory annotation, and extend to other TFs, cell types and chromatin modalities.

## What's in the repository

- Scripts for each step: enhancer calling and FIMO motif nomination, AlphaGenome in silico ablation with sham-deletion null models and multi-window log-fold-change estimates, enhancer and motif overlap in RPMI 8226 cells, and comparison with experimental H3K27ac data
- Typed YAML configurations for different numbers of sham deletions, with measured runtimes
- Sample inputs and outputs; reference genome and bigWig tracks are downloaded separately
