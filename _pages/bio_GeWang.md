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

<div class="row">
  
<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4><b>{{ member.name }}</b></h4>
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
</div>

{% endif %}
{% endfor %}
  
<img src="{{ site.url }}{{ site.baseurl }}/bios/bio_GeWang.png" class="img-responsive" width="100%" style="float: left" />

<br/>
<br/>
<br/>
  
  
