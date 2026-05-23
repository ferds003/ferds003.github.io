---
layout: page
title: 🤖 Data Science, Analytics and Software Projects 
permalink: /projects/data_science/
description: Data-driven projects applying AI and analytics to solve real-world problems. Covering areas of data analysis, web scraping, data cleaning, data mining, machine learning, computer vision, and natural language processing (NLP). Particularly interested also in performance data to correlate product design and expected trends. I will also present here any software design and implementations I have made along the way :>

nav: false
display_categories: physical_systems, pure_software
horizontal: false
---

<div class="projects">
  {% assign categorized_projects = site.projects | where: "category", "data_science" %}
  {% assign categorized_projects = categorized_projects | sort: "importance" %}

  <!-- Define custom subcategory display order -->
  {% assign subcategories_order = "physical_systems, pure_software" | split: ", " %}

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