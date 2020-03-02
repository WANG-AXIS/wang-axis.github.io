---
title: "WANG-AXIS Lab - Pictures"
layout: piclay
excerpt: "WANG-AXIS Lab -- Pictures"
permalink: /pictures/
---

# Pictures



## Presentations

#### How X-rays see through your skin -- Ge Wang:
<iframe width="640" height="360" src="https://www.youtube.com/embed/gsV7SJDDCY4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Machine Learning for Tomographic Imaging presented at University of Minnesota
<iframe width="640" height="360" src="https://reel.ima.umn.edu/videos/2019/SW10.14-18.19/Wang-10-16-19.mp4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Gallery
(Right-click *'view image'* to see a larger image.)
{% assign number_printed = 0 %}
{% for pic in site.data.pictures_Wang %}

{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-3 clearfix">
<img src="{{ site.url }}{{ site.baseurl }}/images/picpic/Gallery/{{ pic.image }}" class="img-responsive" width="95%" style="float: left" />
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd > 2 %}
</div>
{% endif %}


{% endfor %}

{% assign even_odd = number_printed | modulo: 4 %}
{% if even_odd == 1 %}
</div>
{% endif %}

{% if even_odd == 2 %}
</div>
{% endif %}

{% if even_odd == 3 %}
</div>
{% endif %}

<p> &nbsp; </p>

