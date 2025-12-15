---
layout: page
title: Plastic injection molding for a PCB enclosure  
description: Considerations made for the production of designed enclosure as plastic part
date: 2025-11-20 20:40:00
category: mechanical
subcategory: CAM
img: assets/img/2025/enclosure/thumbnail_injection_mold_enclosure.gif
giscus_comments: true
pretty_table: true
images:
    slider: true
---


# OVERVIEW:

I have made a designed enclosure for one of my clients and as an assessment. I wanted to explore `design for manuafacturing` instances and how we can iteratively fabricate for mass production. Aside from additive manufacturing, I wanted to explore `plastic injection molding` since it the standard for plastic parts. What I want to highlight in this page is my considerations specific for that manufacturing operations which I did under Fusion360! Below is the documentation of the project as well as the animated images of the made final product.

<div class="row mt-3 justify-content-center">
  <!-- First image -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading='eager' path='assets/img/2025/enclosure/Magallanes-1.png' class='img-fluid rounded z-depth-1' zoomable=true %}
    <div class="caption mt-2">
      The design that I have made for the PCB enclsoure base
    </div>
  </div>

  <!-- Second image -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading='eager' path='assets/img/2025/enclosure/Magallanes-2.png' class='img-fluid rounded z-depth-1' zoomable=true %}
    <div class="caption mt-2">
      The design that I have made for the PCB enclosure lid
    </div>
  </div>
</div>

<iframe src="https://drive.google.com/file/d/1tQUzNJCHXjw9f1RMjWSK5fXO69gvkj90/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  Documentation made for the design for manufacturing consideration I made for the production of a PCB enclosure 
</div>

Below are the injection molding process done under F360 environment

<div class="row mt-3 justify-content-center">
  <!-- First image -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading='eager' path='assets/img/2025/enclosure/thumbnail_injection_mold_enclosure.gif' class='img-fluid rounded z-depth-1' zoomable=true %}
    <div class="caption mt-2">
      Injection molding simulation for the base of the enclosure
    </div>
  </div>

  <!-- Second image -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading='eager' path='assets/img/2025/enclosure/injection_lid.gif' class='img-fluid rounded z-depth-1' zoomable=true %}
    <div class="caption mt-2">
      Injection molding simulation for the lid of the enclosure
    </div>
  </div>
</div>

# METHODOLOGY:

### Draft Angle Analysis

One of the primary considerations for injection molding is ensuring sufficient **draft angles** on all vertical faces to allow clean ejection from the mold. Using **Fusion 360’s Draft Analysis tool**, I evaluated the enclosure with a target draft of **0–2 degrees**, which is typically acceptable for consumer-grade ABS plastic parts.

The analysis confirmed that:
- Vertical walls maintained a uniform draft without requiring side actions
- Filleted edges helped reduce stress concentration and improved mold release
- No undercuts were present that would complicate the core-and-cavity design

Because the draft was consistent across the enclosure, no additional slanted faces or redesigns were required prior to simulation.

### Injection Molding Simulation in Fusion 360

To further validate the design, I performed an **injection molding simulation in Fusion 360** for both the base and lid as separate parts. This allowed me to assess potential manufacturing risks early in the design phase.

The simulation focused on:
- **Fill confidence** to identify regions that may not fully fill with molten plastic
- **Predicted warpage and deflection** after cooling
- Gate placement assumptions (initially centered for validation purposes)

Results showed acceptable fill behavior across most regions, with minor areas that could be improved through gate relocation or mold tuning. The maximum predicted deformation was approximately **0.55 mm**, primarily occurring along filleted contours—an amount considered negligible for this enclosure’s functional requirements.

### Design Decisions Influenced by Simulation

Insights from the draft and molding analysis influenced several design choices:
- Consistent wall thickness to reduce sink marks and uneven cooling
- Rounded edges and fillets instead of sharp corners for better material flow
- Separation of base and lid into independent moldable parts for simpler tooling


<iframe src="https://drive.google.com/file/d/1Hv8aXwp2G9rzYPmCxpSo3nOf36VcHYnF/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
   Whole report for base of the enclosure injection molding process
</div>


<iframe src="https://drive.google.com/file/d/1SOIiqMbd6LZzcKMMe08E9FqnfLsCJhxT/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
   Whole report for lid of the enclosure injection molding process
</div>

__HOW THIS CAN BE FURTHER IMPROVED:__ You don't have to necessarily make the mold for the product to validate the process (infact making the die can be done easily with an inverse selection in design environment F360!). But unlike other manufacturing processes, you need to really be meticulous on ensuring that all parts on the design is `filled` and prevent `warpage`. In my case, I believe I was able to achieve a solid plastic part out of my design but the `fill confidence` was low therefore I suggested changing the injection entry which in hindsight is bad advice since you must adhere to the specs of the injection mold machine! The correct way to go about this is to revisit the design specifically on the parts were fill confidence is low. 



