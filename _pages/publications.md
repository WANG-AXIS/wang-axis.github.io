---
title: "WANG-AXIS Lab - Publications"
layout: gridlay
excerpt: "WANG-AXIS Lab -- Publications."
sitemap: false
permalink: /publications/
---

# Books
* book1
* book2

# Publications
[Google Scholar Profile](https://scholar.google.com/citations?user=pjK2mQwAAAAJ&hl=en&oi=ao)

[[2020]](.#2020) [[2019]](.#2019) [[2018]](.#2018)

## 2020
{% for publi in site.data.publist2020 %}
  {{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>
{% endfor %}

## 2019
{% for publi in site.data.publist2019 %}
  {{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>
{% endfor %}

## 2018
{% for publi in site.data.publist2018 %}
  {{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>
{% endfor %}

{% assign number_printed = 0 %}
{% for publi in site.data.publist %}
{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}
{% if even_odd == 0 %}
<div class="row">
{% endif %}
<div class="col-sm-6 clearfix">
 <div class="well">
  <pubtit>{{ publi.title }}</pubtit>
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="33%" style="float: left" />
  <p>{{ publi.description }}</p>
  <p><em>{{ publi.authors }}</em></p>
  <p><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
  <p class="text-danger"><strong> {{ publi.news1 }}</strong></p>
  <p> {{ publi.news2 }}</p>
 </div>
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
<p> &nbsp; </p>
