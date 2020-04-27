---
title: "DOT - Members"
layout: gridlay
excerpt: "DOT: Members"
sitemap: false
permalink: /dot/dot-members/
---

# DOT Members


## Department of Biomedical Engineering
{% assign number_printed = 0 %}
{% for member in site.data.dot_team_members %}

{% if member.department == "BME" %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  {% if member.url == "no" %}
  <h4><b>{{ member.name }}</b></h4>
  {% else %}
  <h4> <b> <a href = "{{ member.url }}" > {{ member.name }} </a> </b> </h4>
  {% endif %}

  <i>{{ member.info }}<br><{{ member.email }}></i>
  
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>


{% endif %}


## Department of Computer Science
{% assign number_printed = 0 %}
{% for member in site.data.dot_team_members %}

{% if member.department == "CS" %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  {% if member.url == "no" %}
  <h4><b>{{ member.name }}</b></h4>
  {% else %}
  <h4> <b> <a href = "{{ member.url }}" > {{ member.name }} </a> </b> </h4>
  {% endif %}

  <i>{{ member.info }}<br><{{ member.email }}></i>
  
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>


{% endif %}

