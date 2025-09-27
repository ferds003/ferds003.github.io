---
layout: page
title: Kinematic and finite element analysis of a laparscopic gripper and forceps
description: The full computer-aided-design for a rudimentary laparscopic gripper for its gripper mechanism and stress loading under its forceps 🫳
tags: mechatronics
category: mechanical
img: assets/img/2024/thumbnail_lbymf4c.png
importance: 1
giscus_comments: true
images:
   slider: true
---

## Overview
The motivation for the project is to provide insight of the kinematic mechanism and stress loading for the rudimentary (bare-bones version) of a laparoscopic grasper, a medical instrument used in minimally invasive gut surgeries. I was able to provide the mechanism for opening and closing of the jaws/forceps and essentially the length of shaft needed to make a `functional laparscopic gripper`. Further finite element analysis was done to determine the maximum loading the `foreceps` can support before failure.

_Note: I can provide our CAD file upon request! Kindly comment in this post_

<div class="row">
  <div class="col-12">
    {% include figure.liquid loading='eager' path='assets/img/2023/thumbnail_lbymf3a.gif' class='img-fluid rounded z-depth-1 w-100' %}
  </div>
</div>
<div class="caption">
   kinematic movement of a rudimentary laparscopic grasper/gripper
</div>


<div class="row">
  <div class="col-12">
    {% include figure.liquid loading='eager' path='assets/img/2023/content_lbymf3a.gif' class='img-fluid rounded z-depth-1 w-100' %}
  </div>
</div>
<div class="caption">
   timelapse of the developed laparscopic grasper/gripper for the study
</div>

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/2023/lbymf3a/lbymf3a_2.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/2023/lbymf3a/lbymf3a_3.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/2023/lbymf3a/lbymf4c_1.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/2023/lbymf3a/lbymf4c_2.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>

<div class="caption">
   This is a series of interesting figures of the laparscopic gripper made as well as the kinematic and FEA made as preview of the contents below.
</div>

## Kinematic Analysis

- **Components:** The grasper consists of a handle, shaft, rod, and forceps.
- **Mechanism:** The design incorporates a slider-crank and scissor mechanism to transfer force from the handle to the forceps.
- **CAD Modeling:** Fusion 360 was used to construct the grasper, defining joints (revolute, slider, rigid) and motion links.
- **Motion Analysis**: The study analyzes the input (handle) and output (forceps) motions, plotting toggle positions in relation to the Fusion 360 plane origin. The research identifies the <ins> slider-crank mechanism for handle-to-rod connection and a scissor mechanism for force transference to the forceps </ins>. It emphasizes the importance of contact sets and constraints in the CAD model to prevent component conflicts.
- **Findings:** The research successfully modeled the grasper's kinematic mechanism, highlighting the importance of the slider-crank and scissor mechanisms. It also emphasizes the need for contact sets and constraints in the CAD design.

Below is the made IEEE paper format that we provided that synthesizes how the handle actuates the rod, which in turn controls the forceps; how the design incorporates a `slider-crank` and `scissor` mechanism; The shaft serves as the frame linkage; Kinematic graphical synthesis analyzes driver and output link movements.

<iframe src="https://drive.google.com/file/d/1P5p20YiOa1qA6jLxboGXc1m3OwDLVGkw/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
    Our IEEE paper discussing the kinematic mechanism of a laparscopic grasper
</div>

## Finite Element Analysis

The motivation for this part of the project is to **evaluate the structural integrity** of conventional laparoscopic graspers (LGs) under surgical forces and **simulate deformation** of LG structural members and connections under applied forces using the ANSYS software.

**Methodology:**
- **3D Model:** A 3D model of LGs forceps (handle, shaft, rod, and forceps) was used, with emphasis on the forceps.
- **ANSYS Simulation:** ANSYS software was used for FEA.
   - **Material:** Stainless steel.
   - **Meshing:** Automatic meshing method (23484 Nodes, 11462 Elements).
   - **Applied Load:** 7.8425 N (per forceps body).
   - **Boundary Conditions:** Frictionless supports at joints connecting forceps to the rod. Force applied specifically to the teeth of the forceps.

**Results:**

Equivalent Stress:
- Maximum: 248.3 MPa (near joints).
- Minimum: 26.7 MPa.

Total Deformation:
- Maximum: 0.07 mm.
- Minimum: 0.007825 mm.

Equivalent Strain:
- Maximum: 0.0026 mm/mm.
- Minimum: 0.00028 mm/mm.

Safety Factor:
- Maximum: 4.605.
- Minimum: 2.750.

**Conclusion:**
The LGs forceps design demonstrates good structural integrity under the applied force. The maximum stress was 248.3 MPa, with a deformation of 0.007 mm upon repeated loadings. A safety factor of 4.605 is recommended to reduce stress. The safety factor will combat the deformation made but will make the increase forcep thickness. Further design improvements can be made by considering different support configurations and forces beyond normal force load. FEA provides valuable insights for future applications of LGs in minimally invasive surgeries.

You may check [here]() the blog post that I did that features other kinematic analysis!

You may also check further the blog post that I have made for FEA [here]({% post_url 2024/2024-04-20-LBYMF4C %}) 

<iframe src="https://drive.google.com/file/d/1p8tk4OQHeY-pzJgoHTPn0qjuiBRuDljP/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
    Our IEEE paper discussing the finite element analysis of laparscopic grasper forceps
</div>


PS. Thanks to my co-developers for this project! 

