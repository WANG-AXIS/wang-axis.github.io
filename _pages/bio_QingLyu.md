---
title: "Qing Lyu"
layout: gridlay
excerpt: "WANG-AXIS Lab: Members"
sitemap: false
permalink: bio_QingLyu.html
---

<br/>
<br/>
<br/>

{% for member in site.data.team_members %}

{% if member.name == "Qing Lyu" %}

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
  
Qing Lyu is the post-doc research associate and former graduate student in Dr. Ge Wang’s lab. Conferred the PhD degree in this May, he stayed in the lab to continue his research on artificial intelligence especially deep learning for medical image analysis. In the past five years, he focused on studies such as MRI reconstruction and post-processing, brain tumor detection and classification, and network uncertainty estimation on medical imaging applications.
 
<br/>
<br/>
  
## Two of Active Projects
  
<br/>
  
# Dual-energy CT contrast agent reduction via a neural network
<img src="https://raw.githubusercontent.com/WANG-AXIS/wang-axis.github.io/master/bios/bio_QingLyu_001.png" class="img-responsive" width="80%" style="border:0px solid white; border-radius: 0%; box-shadow: 0 0px 0px 0 rgba(255, 255, 255, 0.2), 0 0px 0px 0 rgba(255, 255, 255, 0.19)"/>
     
This year the world experienced a shortage of contrast media due to COVID-19 lockdown. The goal of this project is to develop a deep learning framework to reduce the need of iodinated contrast media in clinical dual-energy CT scan. 
  
# Simultaneous MRI-CT image quality improvement based on diffusion models
<img src="https://raw.githubusercontent.com/WANG-AXIS/wang-axis.github.io/master/bios/bio_QingLyu_002.png" class="img-responsive" width="80%" style="border:0px solid white; border-radius: 0%; box-shadow: 0 0px 0px 0 rgba(255, 255, 255, 0.2), 0 0px 0px 0 rgba(255, 255, 255, 0.19)"/> 
  
 	The goal is to propose diffusion models to learn the joint distribution of simultaneous MRI and CT data to improve image quality. 
  
Two of recent papers:
1.	Lyu, Q., Namjoshi, S. V., McTyre, E., Topaloglu, U., Barcus, R., Chan, M. D, et al.: A transformer-based deep learning approach for classifying brain metastases into primary organ sites using clinical whole brain MRI images. Patterns, 2022
2.	Lyu, Q., Wang, G: Conversion Between CT and MRI Images Using Diffusion and Score-Matching Models. arXiv preprint, arXiv:2209.12104, 2022

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
