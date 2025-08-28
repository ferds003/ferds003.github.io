---
layout: page
title: 🕹️ Electronics Projects
permalink: /projects/electronics/
description: Projects exploring the integration of electronics with control and automation systems. Focus areas on embedded systems, industrial electronics, automation and control, Internet of Things (IoT), and robotics. I will also present here any software design and implementations I have made along the way :>
nav: false
display_categories:
horizontal: false
---

<div class="projects">
  {% assign categorized_projects = site.projects | where: "category", "electronics" %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>