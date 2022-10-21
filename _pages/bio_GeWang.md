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
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4><b>{{ member.name }}</b></h4>
  {% if member.url != "no" %}
  <a href = "{{ member.url }}" > [Google Scholar] </a>
  {% endif %}
  <i>{{ member.info }}<br><{{ member.email }}></i>
  <ul style="overflow: hidden">

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

<img src="https://raw.githubusercontent.com/WANG-AXIS/wang-axis.github.io/master/bios/bio_GeWang.png" class="img-responsive" width="80%" style="border:0px solid white; box-shadow: 0 0px 0px 0 rgba(255, 255, 255, 0.2), 0 0px 0px 0 rgba(255, 255, 255, 0.19)" />
  
YouTube Channel: [https://www.youtube.com/channel/UC53SN_avgBiU-Wx3fNGZ10A](https://www.youtube.com/channel/UC53SN_avgBiU-Wx3fNGZ10A)

<br/>
<br/>
<br/>
  
<br/>
<br/>
<br/>
