---
layout: default
title: Projects
permalink: /projects/
---
# Under Construction
{% for project in site.projects %}
- [{{ project.title }}]({{ project.url }})
{% endfor %}