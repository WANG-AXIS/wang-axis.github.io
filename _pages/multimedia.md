---
title: "WANG-AXIS Lab - Multimedia"
layout: piclay
excerpt: "WANG-AXIS Lab -- Multimedia"
permalink: /multimedia/
---


<br/>
<br/>
<br/>

<!--# Pictures-->



## Presentations

#### AI for Medical Imaging (11/08/2023)
<iframe width="640" height="360" src="https://www.youtube.com/embed/iaP5uIBYmGE?si=8EGqudj9qd_orU9v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

#### Future of Medical Imaging (11/01/2023)
<iframe width="640" height="360" src="https://www.youtube.com/embed/qgSVcsaJqKk?si=pQ9f_6ADemTqi-6H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

#### Deep Learning with Diffusion and Large Models (05/25/2023)
<iframe width="640" height="360" src="https://www.youtube.com/embed/m4DvhHlY0Xg?si=K0uWXEge5EJ4dlk7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!-- Lightbox2 CSS -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css" rel="stylesheet">

<!-- Lightbox2 JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js"></script>


## Gallery
(click for a Larger Image.)
{% assign number_printed = 0 %}
{% for pic in site.data.pictures_Wang %}

{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<!--
<div class="col-sm-3 clearfix">
<img src="{{ site.url }}{{ site.baseurl }}/images/picpic/Gallery/{{ pic.image }}" class="img-responsive" width="95%" style="float: left" />
</div>
-->

<div class="col-sm-3 clearfix">
  <p>{{ pic.title }}</p>
  <a href="{{ site.url }}{{ site.baseurl }}/images/picpic/Gallery/{{ pic.image }}" data-lightbox="gallery">
    <img src="{{ site.url }}{{ site.baseurl }}/images/picpic/Gallery/{{ pic.image }}" class="img-responsive" width="95%" style="float: left" />
  </a>
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


document.addEventListener("DOMContentLoaded", function(event) {
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
});
