---
title: "Wenxiang Cong"
layout: gridlay
excerpt: "WANG-AXIS Lab: Members"
sitemap: false
permalink: bio_CongWenxiang.html
---

<br/>
<br/>
<br/>

{% for member in site.data.team_members %}

{% if member.name == "Wenxiang Cong" %}

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
  
Wenxiang Cong is Research Scientist in Biomedical Imaging Center, Department of Biomedical Engineering, Rensselaer Polytechnic Institute (RPI). Currently he works on NIH project (NIH R01CA237267): Photon-counting X-ray and Optical Tomography for Preclinical Cancer Imaging. In this project, he focuses on the X-ray tomographic imaging, optical parameter calculation of a mouse tissues, and reconstruction algorithm of quantum yield and lifetime of fluorescent biomarkers in mice.
  
<br/>
<br/>
  
## Two Interesting Projects
  
<br/>
  
# X-ray tomographic imaging
<img src="https://raw.githubusercontent.com/WANG-AXIS/wang-axis.github.io/master/bios/bio_CongWenxiang_001.png" class="img-responsive" width="80%" style="border:0px solid white; border-radius: 0%; box-shadow: 0 0px 0px 0 rgba(255, 255, 255, 0.2), 0 0px 0px 0 rgba(255, 255, 255, 0.19)"/>
     
We developed a deep-learning approach to produce virtual monoenergetic (VM) tomographic images from images of single-spectrum Computed Tomography (CT). An improved residual neural network (IResNet) model is proposed to map single-spectrum CT images to VM images at pre-specified energy levels. This network is trained on clinical dual-energy CT (DECT) data and shows excellent convergence behavior and image accuracy compared with VM images produced by DECT. This method enables material decomposition with accuracy comparable with DECT. 

A new image reconstruction method is developed for DECT image reconstruction in the projection domain. This method combines an analytic solution of a polynomial equation and a univariate optimization to solve the polychromatic non-linear integral equation. The polynomial equation of an odd order has a unique real solution with sufficient accuracy for the image reconstruction, and the univariate optimization can achieve the global optimal solution, allowing accurate and stable projection decomposition for the reconstruction of VM tomographic images and material decomposition.

W. Cong, Y. Xi, P. FitzGerald, B. De Man, G. Wang, "Virtual Monoenergetic CT Imaging via Deep Learning," Patterns 1(8), 100128 (2020). 
W. Cong, B. De Man and G. Wang, “Projection decomposition via univariate optimization for dual-energy CT (DECT),” Journal of X-Ray Science and Technology 30(4), 725-736 (2022).

  
# Optical imaging
<img src="https://raw.githubusercontent.com/WANG-AXIS/wang-axis.github.io/master/bios/bio_CongWenxiang_002.png" class="img-responsive" width="80%" style="border:0px solid white; border-radius: 0%; box-shadow: 0 0px 0px 0 rgba(255, 255, 255, 0.2), 0 0px 0px 0 rgba(255, 255, 255, 0.19)"/> 
  
We developed a new approach to estimate optical parameters of mouse tissues with photon-counting micro–computed tomography (micro-CT). From photon-counting x-ray tomographic images, multi-organ segmentation and material decomposition in terms of tissue constituents are performed to provide essential information for the calculation of the optical absorption and scattering coefficients of tissues. We perform numerical simulation, phantom experiments, and in vivo animal studies to calculate the optical parameters, which is one of tasks in our NIH project. 
  
W. Cong, M. Li, X. Guo, G. Wang, “Estimating optical parameters of biological tissues with photon-counting micro-CT,” Journal of the Optical Society of America A 39, 841-846 (2022). 

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
