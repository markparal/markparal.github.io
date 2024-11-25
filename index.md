---
layout: default
title: Home
---
# My Projects
{% for project in site.projects %}
- [{{ project.title }}]({{ project.url }})
{% endfor %}