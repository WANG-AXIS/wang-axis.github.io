---
title: "WANG-AXIS Lab - Members"
layout: gridlay
excerpt: "WANG-AXIS Lab: Members"
sitemap: false
permalink: /members/
---

{% for member in site.data.team_members %}
  {%- if bio==member.name -%}
    {%- if member.path -%}
      {include member.path}
    {%- endif -%}
  {%- endif -%}
