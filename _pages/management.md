---
layout: page
title: 💼 Engineering Management Projects
permalink: /projects/management/
description: Projects emphasizing operations efficiency and strategic decision-making in manufacturing systems. Key topics include DMAIC methodology, integer linear programming (ILP), time studies, ergonomic assessments, computer-integrated technologies, production management, and business operations.
display_categories:
nav: false
horizontal: false
---

<div class="projects">
  {% assign categorized_projects = site.projects | where: "category", "management" %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>