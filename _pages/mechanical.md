---
layout: page
title: ⚙️ Mechanical Projects
permalink: /projects/mechanical/
description: Practical, hands-on and simulation-driven projects that emphasize the design, prototyping, and performance analysis of mechanical systems. Key areas include 3D CAD modeling, additive manufacturing, product development, kinematic mechanism design, finite element analysis (FEA), computational fluid dynamics (CFD), and modern manufacturing processes.  
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