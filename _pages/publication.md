---
title: "WANG-AXIS Lab - Publication"
layout: gridlay
excerpt: "WANG-AXIS Lab -- Publication."
sitemap: false
permalink: /publication/
---

# Publications
[Google Scholar Profile](https://scholar.google.com/citations?user=pjK2mQwAAAAJ&hl=en&oi=ao)


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


## Journal

<ol reversed>
{% for pub in site.data.publist %}
{% if pub.type == "journal" %}
<li>
<p> <b>{{ pub.title | replace: "&#58", ":" }}</b><br>
  {{ pub.author }}<br>
  {{ pub.venue | replace: "&#58", ":" | capitalize}}<br>
  {% if pub.url %}
  [<a href="{{ pub.url}}">link</a>]
  {% endif %}
</p>
</li>

{% endif %}
{% endfor %}

</ol>

## Conference

<ol reversed="">
{% for pub in site.data.publist %}
{% if pub.type == "conference" %}
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
