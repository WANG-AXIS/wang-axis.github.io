---
title: "CINE_MRI_CONVLSTM"
full_title: "Cine Cardiac MRI Motion Artifact Reduction Using a Recurrent Neural Network"
summary: "A recurrent generative adversarial network with bi-directional ConvLSTMs that removes motion artifacts from cine cardiac MRI and can generate missing frames."

area: MRI and Optical Imaging
year: 2021
date: 2021-04-16
venue: "IEEE Transactions on Medical Imaging"
venue_detail: "40(8), 2170–2181 (2021)"
authors:
  - Qing Lyu
  - Hongming Shan
  - Yibin Xie
  - Alan C. Kwan
  - Yuka Otaki
  - Keiichiro Kuronuma
  - Debiao Li
  - Ge Wang

thumbnail: cine-mri-convlstm.png
figure_caption: "Architecture of the proposed recurrent network, with two ConvLSTM branches and an encoder-decoder sub-network (Fig. 2 of the paper)."

code: https://github.com/WANG-AXIS/CINE_MRI_CONVLSTM
code_status: released
code_scope: "Network and training code"
framework: "PyTorch"

paper: https://doi.org/10.1109/TMI.2021.3073381

tags:
  - "Cardiac MRI"
  - "Motion artifact"
  - "Recurrent network"

bibtex: |
  @article{lyu2021cine,
    title   = {Cine Cardiac MRI Motion Artifact Reduction Using a Recurrent Neural Network},
    author  = {Lyu, Qing and Shan, Hongming and Xie, Yibin and Kwan, Alan C. and Otaki, Yuka and Kuronuma, Keiichiro and Li, Debiao and Wang, Ge},
    journal = {IEEE Transactions on Medical Imaging},
    volume  = {40},
    number  = {8},
    pages   = {2170--2181},
    year    = {2021},
    doi     = {10.1109/TMI.2021.3073381}
  }
---
Cine cardiac MRI is widely used for diagnosis, but its long scan time leads to motion artifacts and patient discomfort. This work proposes a recurrent generative adversarial network to reduce those artifacts. Bi-directional ConvLSTMs capture long-range temporal features across frames, and multi-scale convolutions gather local and global features.

Experiments show better image quality than existing state-of-the-art methods. The model can also generate missing intermediate frames from adjacent frames, which improves temporal resolution.

## What's in the repository

- The network and training code
- An SSIM implementation used by the loss
