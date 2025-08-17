---
layout: page
title: data science projects 
description: My projects for the data science covering the following topics`:` web-scraping, data mining, machine learning, computer_vision and NLP applications 🤖🧠🇦🇮👾
permalink: /projects/data_science/
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