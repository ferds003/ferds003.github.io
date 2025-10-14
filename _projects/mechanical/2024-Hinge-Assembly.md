---
layout: page
title: Validating mesh quality for a brake-pedal hinge assembly
date: 2024-03-22
description: What is checked to ensure that body elements are properly captured using ANSYS software
tags: mechatronics
category: mechanical
subcategory: CAE
img: assets/img/2024/thumbnail_fea_flange.png
giscus_comments: true
pretty_table: true
images:
   slider: true
---

_About the Thumbnail:_ This is the resulting mesh created for the brake-pedal hinge assembly part! A **brake pedal** serves as a mechanical connector that transfers **pressure from driver** to joined components to signal braking motion to car. You may check further the inspiration of the part [here](https://www.zontes.com/SP/Products/Part9Bom.aspx?Cid=F9959D7BE9FDEB50&Pid=C6EE89CDF08EDC16)

## Overview
This analysis focuses on the **finite element mesh creation** process for a **hinge assembly** using *ANSYS Mechanical*. The objective was to understand and apply different **mesh control methods** for each body of the model to improve the element quality and simulation reliability.

Through this activity, I was able to demonstrate how **mesh configuration**—including methods such as *patch independent*, *sweep*, *tetrahedron*, and *hex-dominant* meshing—affects the resulting element quality and structural simulation accuracy. 

The objective was to understand mesh control and not just relying on the automatic mesh given. This enhances **node and element distribution** for FEA accuracy for structural analyses.


_Note: I can provide our CAD and project file upon request! Kindly comment in this post_

## Methodology

The analysis was performed using **ANSYS Mechanical**, where each geometry body was assigned a tailored mesh method to achieve optimal results.

### 1. Initial Mesh Setup
- The first mesh was generated automatically by ANSYS.
- This initial mesh showed non-uniform element sizes and poor adaptation to the complex geometry (Figure 1).

### 2. Body-Specific Mesh Refinement

| Body Part | Method Used | Parameters / Notes |
|------------|--------------|-------------------|
| **Part 1** | Patch Independent | Minimum element size set to **5 mm** |
| **Part 2** | Sweep Method | Manual source/target selection for each face; **10 divisions** per sweep |
| **Part 3** | Tetrahedron (Patch Conforming) | Body sizing applied; element size **8 mm** |
| **Parts 4 & 5** | Sweep Method | Source/target face selection with body sizing **8 mm** |
| **Part 6** | Hex Dominant | Body sizing applied with **8 mm element size** |

Each body was meshed using the most appropriate algorithm based on its geometry complexity—**circular and symmetrical bodies** favored the *sweep method*, while **complex shapes** were best suited for *tetrahedral* or *hex-dominant* meshes.

## Findings
 
With this improvement in the mesh quality, I was able to have a better **element uniformity**, **node distribution**, and **mesh quality** metrics. as shown in the figures below.

These refinements ensure the mesh is robust enough for subsequent **structural analyses**, where stress and deformation distributions can now be studied more precisely.

<div class="row mt-3 justify-content-center">
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading='eager' path='assets/img/2024/fea/flange_fea_mesh_analysis.png' class='img-fluid rounded z-depth-1 w-100' zoomable=true %}
    <div class="caption">
      mesh analysis review that features the number of elements based on mesh params. This highlights more uniform known elements under tetrahedron for one of the parts.
    </div>
  </div>
</div>

<div class="row mt-3 justify-content-center">
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading='eager' path='assets/img/2024/fea/flange_fea_mesh_analysis_1.png' class='img-fluid rounded z-depth-1 w-100' zoomable=true %}
    <div class="caption">
      the overall element quality review that validates the insights of uniformity particularly on tetrahdron pattern seen in the right hand of the assembly
    </div>
  </div>
</div>


You may check further the reports that I have made for this creation with the documents below!

<iframe src="https://drive.google.com/file/d/1g72STTVBsWV21mRdUr19Wi8txqsjRwSu/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  Report made for this mesh quality review
</div>

The full blown ANSYS result report is seen below.

<iframe src="https://drive.google.com/file/d/1jgoNgnqXeO3pzKlMqg_uLNCPWrP_hehD/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  ANSYS report
</div>

## Reflection

The next step for this analysis is to redo the simulation to pinpoint possible deficiencies in the design. As mentioned from the start, this type of mechanism is seen in vehicles for braking applications therefore, the weakest link of this will be its fastener which is placed in the middle. The hinge assembly should be able to `withstand appropriate braking force applied and reciprocate it into other mechanical system`. I have here below an initial findings of how to set for the next step of this project~!

| **Setup Parameter**        | **Description / Typical Value**                                                    | **Purpose**                                                               |
| -------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Analysis Type**          | Static Structural                                                                  | To evaluate stress and deformation due to external load.                  |
| **Material**               | Structural Steel (E = 200 GPa, ν = 0.3, ρ = 7850 kg/m³)                            | Common material for car brake pedal assembly.                                        |
| **Contact Conditions**     | Bonded contact between face and body                               | Simulates rigid connection between components.                            |
| **Supports / Constraints** | Fixed support on hinge holes or rear face of body of brake pads                               | Prevents rigid body motion and replicates real bolting conditions.        |
| **Applied Load (Force)**   | Axial tensile load of **1000–5000 N** on the opposing brake pedal face   | Represents pressure or load transmitted through pipe or shaft connection. |
| **Mesh Parameters**        | Element size: 5–8 mm; Methods: Patch Independent, Sweep, Tetrahedral, Hex Dominant | Balances computational efficiency with accuracy.                          |
| **Solver**                 | Direct Sparse Solver                                                               | Stable for moderately complex geometry.                                   |

It is also a no-brainer that the verification of this is also need to comply with standards as mentioned in design codes for brake pedals where in `structural analyses` within expected values shall be checked. Further exploration is needed to have a more realistic and better setup for the FEA in order to have a validated design for the parts.

If you are interested to more blog readings of my work about FEA, you may check it [here]({% post_url 2024/2024-04-20-LBYMF4C %}) 

