---
title: "Yongyi Shi"
layout: gridlay
excerpt: "WANG-AXIS Lab: Members"
sitemap: false
permalink: bio_YongyiShi.html
---

<br/>
<br/>
<br/>

{% for member in site.data.team_members %}

{% if member.name == "Yongyi Shi" %}

<!--<div class="row">-->
  
<div class="col-sm-6 clearfix" style="width:100%;">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="15%" style="float: left" />
   
  {% if member.url != null %}
  <table>
    <tr>
        <td><h4><b>{{ member.name }}&nbsp; </b></h4></td>
        <td><a href = " {{ member.url }}" > [Google Scholar] </a></td>
    </tr>
  </table>
  {% endif %}
  {% if member.url == null %}
  <h4><b>{{ member.name }}</b></h4>
  {% endif %}
  
  <i>{{ member.info }}<br><{{ member.email }}></i>
  <ul style="overflow: hidden; list-style-type: none; padding-left: 0">

  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}

  {% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}

  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}

  </ul>
</div>
<!--</div>-->

{% endif %}
{% endfor %}
  
Yongyi is a Postdoctoral Research Associate in the Biomedical Imaging Center, RPI, USA. Before that, He received his Ph.D. degree from Xi’an Jiaotong University, China, in 2022, under the supervision of Prof. Xuanqin Mou. He focuses on spectral CT reconstruction and material decomposition. He is a reviewer for TMI, TCI, JVCI, etc.

<br/>
<br/>
  
## Two Interesting Projects
  
<br/>
  
# Tensor Neural Network (TNN) for PCCT Reconstruction
<img src="https://raw.githubusercontent.com/WANG-AXIS/wang-axis.github.io/master/bios/bio_YongyiShi_001.png" class="img-responsive" width="80%" style="border:0px solid white; border-radius: 0%; box-shadow: 0 0px 0px 0 rgba(255, 255, 255, 0.2), 0 0px 0px 0 rgba(255, 255, 255, 0.19)"/>
     
Photon-counting CT (PCCT) has limited photons in each individual energy channel. In this work, we use a tensor neural network to consider the inner-channel relationship and inter-channel correction.

Shi YY, Gao YF, Mou XQ, Liang ZR: Tensor convolutional neural network architecture for spectral CT reconstruction. SPIE 2020.

  
# Ratio of Multi-Channel Representation (RMCR) for PCCT Material Decomposition
<img src="https://raw.githubusercontent.com/WANG-AXIS/wang-axis.github.io/master/bios/bio_YongyiShi_002.png" class="img-responsive" width="80%" style="border:0px solid white; border-radius: 0%; box-shadow: 0 0px 0px 0 rgba(255, 255, 255, 0.2), 0 0px 0px 0 rgba(255, 255, 255, 0.19)"/> 
  
We proposed a one-step method for PCCT material decomposition, without knowing the spectrum information. With the help of RMCR, the beam hardening artifacts and ring artifacts could be suppressed. The proposed method is also robust to basic material selection. 

Shi YY, Xu Q, Zhang YB, Liang ZR, Mou XQ: Ratio of Multi-Channel Representation for Spectral CT Material Decomposition. FULLY3D 2021

<br/>
Two of recent papers:
1.	Shi Y, Gao Y, Zhang Y, et al. Spectral CT reconstruction via low-rank representation and region-specific texture preserving Markov random field regularization[J]. IEEE transactions on medical imaging, 2020, 39(10): 2996-3007.
2.	Y. Shi, Q. Xu, Y. Zhang, Z. Liang, X. Mou. Ratio of Multi-Channel Representation for Spectral CT Material Decomposition, 16th Annual Fully Three-Dimensional Image Reconstruction in Radiology and Nuclear Medicine, pp. 138-143, 2021.

<!--
<img src="https://raw.githubusercontent.com/WANG-AXIS/wang-axis.github.io/master/bios/bio_GeWang.png" class="img-responsive" width="80%" style="border:0px solid white; box-shadow: 0 0px 0px 0 rgba(255, 255, 255, 0.2), 0 0px 0px 0 rgba(255, 255, 255, 0.19)" />
-->
  
<br/>
<br/>


<br/>
<br/>
<br/>
  
<br/>
<br/>
<br/>
