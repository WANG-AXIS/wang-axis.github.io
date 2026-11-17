---
title: "Anticheating_in_DOT"
full_title: "Optimized Collusion Prevention for Online Exams during Social Distancing"
summary: "Optimization algorithms that sequence and assign exam questions so that collusion between students in online exams gains almost nothing."

area: AI for Education and Society
year: 2021
date: 2021-03-01
venue: "npj Science of Learning"
venue_detail: "6, 5 (2021)"
authors:
  - Mengzhou Li
  - Lei Luo
  - Sujoy Sikdar
  - Navid Ibtehaj Nizam
  - Shan Gao
  - Hongming Shan
  - Melanie Kruger
  - Uwe Kruger
  - Hisham Mohamed
  - Lirong Xia
  - Ge Wang

thumbnail: dot-anti-collusion.png
figure_caption: "Anti-collusion mechanisms with and without prior knowledge of students' competences (Fig. 1 of the paper)."

code: https://github.com/WANG-AXIS/Anticheating_in_DOT
code_status: released
code_scope: "Algorithm code and simulation data"
framework: "MATLAB and Python"

paper: https://doi.org/10.1038/s41539-020-00083-3

tags:
  - "Online exams"
  - "Optimization"
  - "Education"

bibtex: |
  @article{li2021optimized,
    title   = {Optimized Collusion Prevention for Online Exams during Social Distancing},
    author  = {Li, Mengzhou and Luo, Lei and Sikdar, Sujoy and Nizam, Navid Ibtehaj and Gao, Shan and Shan, Hongming and Kruger, Melanie and Kruger, Uwe and Mohamed, Hisham and Xia, Lirong and Wang, Ge},
    journal = {npj Science of Learning},
    volume  = {6},
    pages   = {5},
    year    = {2021},
    doi     = {10.1038/s41539-020-00083-3}
  }
---
Online exams taken at home invite cheating, especially collusion between students. Physical proctoring is impossible during social distancing, and online proctoring is costly and compromises privacy. This work presents an optimization-based anti-collusion approach for distanced online testing (DOT) that minimizes the collusion gain. It uses prior knowledge of student competences to optimize the sequences of questions and assign them to students in synchronized time slots.

The approach reduces the collusion gain by two to three orders of magnitude relative to a conventional exam in which all students receive the same questions at the same time, and the theory allows the gain to be held at a sufficiently low level. A final exam held in the DOT format was successful, as shown by statistical tests and a post-exam survey.

## What's in the repository

- MATLAB code for the grouping-based anti-collusion scheme and cyclic greedy searching
- Python code for min-max greedy matching and integer linear programming
- Simulation data for the results in the paper
