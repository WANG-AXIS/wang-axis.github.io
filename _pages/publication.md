---
title: "WANG-AXIS Lab - Publication"
layout: gridlay
excerpt: "WANG-AXIS Lab -- Publication."
sitemap: false
permalink: /publication/
---

# Publications
For a full list see [Google Scholar Profile](https://scholar.google.com/citations?user=pjK2mQwAAAAJ&hl=en&oi=ao)


## Highlights

{% assign number_printed = 0 %}
{% for publi in site.data.highlights %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row row-flex row-flex-wrap">
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


## Preprint

<ol reversed>
{% for pub in site.data.publist %}
{% if pub.type == "preprint" %}
<li>
<p> <b>{{ pub.title | replace: "&#58", ":" }}</b><br>
  {{ pub.author }}<br>
  {{ pub.venue | replace: "&#58", ":" }}<br>
  {% if pub.url %}
  [<a href="{{ pub.url}}">arXiv</a>]
  {% endif %}
</p>
</li>
{% endif %}
{% endfor %}

</ol>

<p> &nbsp; </p>

## Book (Chapter)

<ol reversed>
{% for pub in site.data.publist %}
{% if pub.type == "book" %}
<li>
<p> <b>{{ pub.title | replace: "&#58", ":" }}</b><br>
  {{ pub.author }}<br>
  {{ pub.venue | replace: "&#58", ":" }}<br>
  {% if pub.url %}
  [<a href="{{ pub.url}}">link</a>]
  {% endif %}
</p>
</li>
{% endif %}
{% endfor %}

</ol>

<p> &nbsp; </p>

## Journal

<ol reversed>
{% for pub in site.data.publist %}
{% if pub.type == "journal" %}
<li>
<p> <b>{{ pub.title | replace: "&#58", ":" }}</b><br>
  {{ pub.author }}<br>
  {{ pub.venue | replace: "&#58", ":" | capitalize_all }}<br>
  {% if pub.url %}
  [<a href="{{ pub.url}}">link</a>]
  {% endif %}
</p>
</li>
{% endif %}
{% endfor %}

</ol>

<p> &nbsp; </p>

## Conference

<ol reversed="">
{% for pub in site.data.publist %}
{% if pub.type == "conference" %}
<li>
<p> <b>{{ pub.title | replace: "&#58", ":" }}</b><br>
  {{ pub.author }}<br>
  {{ pub.venue | replace: "&#58", ":" | capitalize_all }}<br>
  {% if pub.url %}
  [<a href="{{ pub.url}}">link</a>]
  {% endif %}
</p>
</li>
{% endif %}
{% endfor %}

</ol>
