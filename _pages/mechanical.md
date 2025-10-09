---
layout: page
title: ⚙️ Mechanical Projects
permalink: /projects/mechanical/
description: Practical, hands-on and simulation-driven projects that emphasize the design, prototyping, and performance analysis of mechanical systems. Key areas include 3D CAD modeling, product development, kinematic mechanism design, finite element analysis (FEA), computational fluid dynamics (CFD), digital twins, and modern manufacturing processes.  
nav: false
display_categories: #CAD, CAE, CAM
horizontal: false
---

<div class="projects">
  {% assign categorized_projects = site.projects | where: "category", "mechanical" %}
  {% assign categorized_projects = categorized_projects | sort: "importance" %}

  <!-- Define custom subcategory display order -->
  {% assign subcategories_order = "CAD, CAE, CAM" | split: ", " %}

  <div class="subcategory-nav">
    <p><strong>Jump to:</strong></p>
    <ul>
      {% for subcat in subcategories_order %}
        <li><a href="#{{ subcat | slugify }}">{{ subcat | upcase }}</a></li>
      {% endfor %}
    </ul>
  </div>

  {% for subcat in subcategories_order %}
    {% assign subcat_projects = categorized_projects | where: "subcategory", subcat %}
    {% if subcat_projects.size > 0 %}
      <h4 id="{{ subcat | slugify }}" class="subcat-title">{{ subcat | upcase }}</h4>
      <div class="row row-cols-1 row-cols-md-3">
        {% for project in subcat_projects %}
          {% include projects.liquid project=project %}
        {% endfor %}
      </div>
      <hr>
    {% endif %}
  {% endfor %}
</div>

<style>
.subcat-title {
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: inline-block;
  background-color: #E97272;
  color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

html {
  scroll-behavior: smooth;
}
</style>
