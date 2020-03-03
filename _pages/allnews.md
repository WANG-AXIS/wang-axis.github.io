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
<em> <a href="{{ article.url}}" > {{ article.headline }}</a>, {{ article.site }} </em>
{% else %}
<em>  {{ article.headline }}, {{ article.site }} </em>
{% endif %}
</p>

{% endfor %}
