---
layout: page
title: 🕹️ Electronics Projects
permalink: /projects/electronics/
description: Projects exploring the integration of electronics with control and automation systems as well as industry 4.0 practices. Focus areas on embedded systems, industrial electronics, automation and control, internet of Things (IoT) or communication-specific protocols and robotics.
nav: false
display_categories: #embedded_systems, communications_specific, industrial_&_automation, robotics 
---

<div class="projects">
  {% assign categorized_projects = site.projects | where: "category", "electronics" %}
  {% assign categorized_projects = categorized_projects | sort: "importance" %}

  <!-- Define custom subcategory display order -->
  {% assign subcategories_order = "embedded systems, hardware_and_pcb_design, industrial_automation, robotics_and_control" | split: ", " %}

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
