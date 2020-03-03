---
title: "News"
layout: textlay
excerpt: "WANG-AXIS Lab at Rensselaer Polytechnic Institute."
sitemap: false
permalink: /allnews.html
---

# News

{% for article in site.data.news %}

<p>{{ article.date }} <br>

{% if article.editor %}
{{ article.editor }}:
{% endif %}

{% if article.url %}
<em> <a href="{{ article.url}}" > {{ article.headline }}</a></em>, {{ article.site }} 
{% else %}
<em>  {{ article.headline }}</em>, {{ article.site }}
{% endif %}
</p>

{% endfor %}
