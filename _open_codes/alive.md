---
title: "ALIVE"
full_title: "ALIVE: An Avatar-Lecture Interactive Video Engine with Content-Aware Retrieval for Real-Time Interaction"
summary: "An interactive lecture video system that lets students pause, ask a question by text or voice, and get a lecture-grounded answer, optionally delivered by a talking-head avatar."

area: AI for Education and Society
year: 2025
date: 2025-12-24
venue: "arXiv preprint"
venue_detail: "arXiv:2512.20858 (2025)"
authors:
  - Md Zabirul Islam
  - Md Motaleb Hossen Manik
  - Ge Wang

thumbnail: alive.png
figure_caption: "System overview of ALIVE (Fig. 1 of the paper)."

code: https://github.com/WANG-AXIS/alive-system
code_status: released
code_scope: "Backend service, evaluation scripts and audit artifacts"
license: MIT
framework: "PyTorch"

arxiv: https://arxiv.org/abs/2512.20858

tags:
  - "Education"
  - "Retrieval-augmented generation"
  - "Avatar"

bibtex: |
  @article{islam2025alive,
    title   = {ALIVE: An Avatar-Lecture Interactive Video Engine with Content-Aware Retrieval for Real-Time Interaction},
    author  = {Islam, Md Zabirul and Manik, Md Motaleb Hossen and Wang, Ge},
    journal = {arXiv preprint arXiv:2512.20858},
    year    = {2025}
  }
---
Recorded lectures are flexible but give students no way to ask for clarification on the spot. ALIVE (Avatar-Lecture Interactive Video Engine) adds that interaction and runs entirely on local hardware. It generates avatar-delivered lecture segments from speech transcription, language-model refinement and talking-head synthesis.

Content-aware retrieval grounds each answer in the lecture material. Students can pause the video, ask by text or voice, and receive a concise answer as text or from the avatar. The system was evaluated on a complete medical imaging course for accuracy, latency and user experience.

## What's in the repository

- The deployed backend: retrieval, answer generation, and audio and avatar routing
- Scripts for building the retrieval index, LoRA fine-tuning, and the question-answer data pipeline
- Evaluation and latency benchmarks with the result summaries used in the paper
