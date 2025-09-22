---
layout: page
title: 🤖 Data Science Projects 
permalink: /projects/data_science/
description: Data-driven projects applying AI and analytics to solve real-world problems. Covering areas of web scraping, data cleaning, data mining, machine learning, computer vision, and natural language processing (NLP). I will also present here any software design and implementations I have made along the way :>
nav: false
display_categories: 
horizontal: false
---

<div class="projects">
  {% assign categorized_projects = site.projects | where: "category", "data_science" %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>