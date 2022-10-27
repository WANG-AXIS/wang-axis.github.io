---
title: "Ge Wang"
layout: gridlay
excerpt: "WANG-AXIS Lab: Members"
sitemap: false
permalink: bio_GeWang.html
---

<br/>
<br/>
<br/>

{% for member in site.data.team_members %}

{% if member.name == "Ge Wang" %}

<!--<div class="row">-->
  
<div class="col-sm-6 clearfix" style="width:100%;">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="15%" style="float: left" />
   
  {% if member.url != null %}
  <table>
    <tr>
        <td><h4><b>{{ member.name }} </b></h4></td>
        <td><a href = " {{ member.url }}" > &nbsp;[Google Scholar] </a></td>
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
  
Ge Wang is Clark & Crossan Chair Professor and Director of Biomedical Imaging Center, RPI, USA. He focuses on medical imaging and AI. He published the first spiral cone-beam CT algorithm in the early 1990s. There are ~200 million CT scans yearly, with a majority in the spiral cone-beam mode. He published the first perspective on deep imaging in 2016 and many follow-up papers. He is a Fellow of IEEE, SPIE, AAPM, OSA, AIMBE, AAAS, and NAI. His recent honors include IEEE R1 Outstanding Teaching Award, EMBS Career Achievement Award, SPIE Meinel Technology Award, and Sigma Xi Chubb Award for Innovation.
  
<br/>
<br/>
  
## Two Interesting Projects
  
<br/>
  
# Deep Silicon Detectors for Computed Tomography
<img src="https://raw.githubusercontent.com/WANG-AXIS/wang-axis.github.io/master/bios/bio_GeWang_001.png" class="img-responsive" width="80%" style="border:0px solid white; box-shadow: 0 0px 0px 0 rgba(255, 255, 255, 0.2), 0 0px 0px 0 rgba(255, 255, 255, 0.19)"/>
     
Photon-counting CT provides higher-quality images of biological tissues with x-ray energy-dependent (spectral) information and promises to revolutionize x-ray imaging. In this work, we resolve the energy distribution of transmitted x-ray photons through an edge-on deep silicon detector for spectral CT, based on the maturity and merits of the silicon technology. Our results show that the proposed design is feasible.

Shi ZF, Yang HY, Cong WX, Wang G: A novel edge-on structure for energy-resolved x-ray detection. PMB 61:4183-4200, 2016.

  
# Deep Neural Networks of Quasi-duality
<img src="https://raw.githubusercontent.com/WANG-AXIS/wang-axis.github.io/master/bios/bio_GeWang_002.png" class="img-responsive" width="80%" style="border:0px solid white; box-shadow: 0 0px 0px 0 rgba(255, 255, 255, 0.2), 0 0px 0px 0 rgba(255, 255, 255, 0.19)"/> 
  
While wide networks already allow universal approximation, the successes of deep learning demonstrate the power of deep networks. We are investigating if the design of artificial neural networks has a directional preference and what the mechanism of interaction is between the width and depth of a network.
  
Fan FL, Lai RJ, Wang G: Quasi-Equivalence of Width and Depth of Neural Networks, [https://arxiv.org/abs/2002.02515](https://arxiv.org/abs/2002.02515), 2022


<!--
<img src="https://raw.githubusercontent.com/WANG-AXIS/wang-axis.github.io/master/bios/bio_GeWang.png" class="img-responsive" width="80%" style="border:0px solid white; box-shadow: 0 0px 0px 0 rgba(255, 255, 255, 0.2), 0 0px 0px 0 rgba(255, 255, 255, 0.19)" />
-->
  
<br/>
<br/>
YouTube Channel: [https://www.youtube.com/channel/UC53SN_avgBiU-Wx3fNGZ10A](https://www.youtube.com/channel/UC53SN_avgBiU-Wx3fNGZ10A)

<br/>
<br/>
<br/>
  
<br/>
<br/>
<br/>
