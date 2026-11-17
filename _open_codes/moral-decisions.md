---
title: "Moral Decisions"
full_title: "Modeling of Moral Decisions with Deep Learning"
summary: "Neural networks learn group moral preferences in the autonomous-vehicle dilemma from observed decisions, and are compared with a hierarchical Bayesian model."

area: AI for Education and Society
year: 2020
date: 2020-11-20
venue: "Visual Computing for Industry, Biomedicine, and Art"
venue_detail: "3, 27 (2020)"
authors:
  - Christopher Wiedeman
  - Ge Wang
  - Uwe Kruger

thumbnail: moral-decisions.png
figure_caption: "Network architecture of the deep learning moral decision model (Fig. 6 of the paper)."

code: https://github.com/WANG-AXIS/Modeling-of-Moral-Decisions-with-Deep-Learning
code_status: partial
code_scope: "Generated data (no code)"

paper: https://doi.org/10.1186/s42492-020-00063-9

tags:
  - "Machine ethics"
  - "Autonomous vehicles"
  - "Decision modeling"

bibtex: |
  @article{wiedeman2020modeling,
    title   = {Modeling of Moral Decisions with Deep Learning},
    author  = {Wiedeman, Christopher and Wang, Ge and Kruger, Uwe},
    journal = {Visual Computing for Industry, Biomedicine, and Art},
    volume  = {3},
    pages   = {27},
    year    = {2020},
    doi     = {10.1186/s42492-020-00063-9}
  }
---
MIT's Moral Machine Experiment posed the autonomous-vehicle dilemma to a large public, and its results were modeled with a hierarchical Bayesian approach. This paper applies deep learning to the same problem, learning human ethics from observed decisions, and compares it with the Bayesian model. Both are tested on predicting the decisions of simulated populations of participants.

Neural networks proved effective at learning group morality through observation, and they outperformed the Bayesian model when its assumptions did not match the population.

## What's in the repository

- The generated moral principle vectors used in the tests, as MATLAB files
- Training and test sets for an abstract scenario and for the autonomous-vehicle scenario
