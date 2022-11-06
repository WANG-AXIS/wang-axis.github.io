---
title: "Christopher Wiedeman"
layout: gridlay
excerpt: "WANG-AXIS Lab: Members"
sitemap: false
permalink: bio_ChristopherWiedeman.html
---

<br/>
<br/>
<br/>

{% for member in site.data.team_members %}

{% if member.name == "Christopher Wiedeman" %}

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
  
Christopher Wiedeman is a PhD student in the Electrical and Computer Systems Engineering Department at Rensselaer Polytechnic Institute. He earned his undergraduate in biomedical engineering at Arizona State University in 2018, and has received the Arjun Saxena Fellowship (2019), the National Science Foundation Graduate Research Fellowship (2020), and the Dr. Alireza Seyedi Teaching Assistant Award (2020). His current research interests are in deep learning for computed tomography and photon-counting computed tomography as well as deep learning stability.  

<br/>
<br/>
  
## Two of Active Projects
  
<br/>
  
# Neural Network Decorrelation for Adversarial Attack Stability
<img src="https://raw.githubusercontent.com/WANG-AXIS/wang-axis.github.io/master/bios/bio_ChristopherWiedeman_001.png" class="img-responsive" width="80%" style="border:0px solid white; border-radius: 0%; box-shadow: 0 0px 0px 0 rgba(255, 255, 255, 0.2), 0 0px 0px 0 rgba(255, 255, 255, 0.19)"/>
     
The goal of this project is to improve deep learning stability by efficiently training an ensemble of diverse networks, such that input corruptions are unlikely to fool all networks. This is done by decorrelating the networks in the latent feature space.

  
# Deep Compton Scatter Tomography Imaging
<img src="https://raw.githubusercontent.com/WANG-AXIS/wang-axis.github.io/master/bios/bio_ChristopherWiedeman_002.png" class="img-responsive" width="80%" style="border:0px solid white; border-radius: 0%; box-shadow: 0 0px 0px 0 rgba(255, 255, 255, 0.2), 0 0px 0px 0 rgba(255, 255, 255, 0.19)"/> 
  
This project explores a framework for Compton Scatter Tomography Imaging from a single view using energy-resolved detectors. Deep learning is used in an iterative framework to reconstruct attenuation and scatter maps, leveraging an assumed structural similarity between these two images.

<br/>
Two of recent papers:
1.	Christopher Wiedeman, Ge Wang. Disrupting adversarial transferability in deep neural networks, Patterns, Volume 3, Issue 5, 2022, [https://doi.org/10.1016/j.patter.2022.100472](https://doi.org/10.1016/j.patter.2022.100472).
2.	Christopher Wiedeman, Wenxiang Cong, Ge Wang. Feasibility analysis on simultaneous electron density and attenuation coefficient reconstruction, Medical Physics, Volume 48, Issue 11, 2021, [https://aapm.onlinelibrary.wiley.com/doi/abs/10.1002/mp.15251](https://aapm.onlinelibrary.wiley.com/doi/abs/10.1002/mp.15251)
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
