---
layout: page
title: ⚙️ Mechanical Projects
permalink: /projects/mechanical/
description: Hands-on and simulation-based projects focusing on design and analysis of mechanical systems. Topics include, CAD modeling, additive manufacturing, product design, kinematic mechanisms, finite element analysis, computational fluid dynamics, and manufacturing processes.
nav: false
display_categories:
horizontal: false
---

<div class="projects">
  {% assign categorized_projects = site.projects | where: "category", "mechanical" %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>