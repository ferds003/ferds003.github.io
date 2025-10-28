---
layout: page
title: Design and Modeling of an Adaptive Valve Mechanism
date: 2023-08-12
description: The modelling for a general purposa valve spring mechanism and cam follower using Solidworks
tags: mechatronics
category: mechanical
subcategory: CAD
img: assets/img/2025/solidworks/thumbnail_valve_mechanism.gif
giscus_comments: true
driveId: 16rLlrwhaX_a7WINe8y0wme3-x5_9emzC
---

_About the thumbnail:_ This is the animated image for the valve mechanism featuring the different components that comprise this system: the cam shaft, valve follower, guide and spring.

<div class="col-sm mt-3 mt-md-0 text-center">
  {% include googleDrivePlayer.html id=page.driveId %}
  <div class="caption mt-2">
    Video explanation of the modelling process done under Solidworks!
  </div>
</div>

## Overview

This project focuses on the `design and 3D modeling of an adaptive valve mechanism` using **SolidWorks**.  
The mechanism replicates the operation of a <mark>cam-actuated valve system</mark>, a component widely used in **internal combustion engines**, **pneumatic actuators**, and **fluid control systems**.

In real-world applications, valve mechanisms are fundamental to controlling the **timing, pressure, and flow** of gases or liquids.  
For instance, in **automotive engines**, **adaptive or variable valve timing (VVT)** systems adjust valve lift and duration dynamically to improve **fuel efficiency**, **performance**, and **emissions**.  

Similarly, **industrial machines and hydraulic systems** use comparable valve assemblies for precise flow regulation.

The purpose of this project was to create a **parametric and adaptive model** that demonstrates how geometric constraints, mates, and motion links can be used to simulate a realistic valve actuation sequence within a CAD environment.  

## ⚙️ Methodology

### 1. Design Workflow

The project followed a **bottom-up assembly approach**, starting from individual parts before creating the full assembly.  
Each component was modeled with **functional parameters** such as clearance, travel length, and contact points to ensure mechanical realism.

1. **Part Design:**  
   - Modeled all individual components (camshaft, valve, valve guide, and spring) as separate `.SLDPRT` files.  
2. **Assembly Construction:**  
   - Imported all parts into a single `.SLDASM` file.  
   - Applied **concentric and coincident mates** to align the valve within the guide.  
   - Created **rotational mates** for the camshaft and **linear motion links** between the valve and spring.  
3. **Motion Simulation:**  
   - Used **SolidWorks Motion Study** to animate valve actuation.  
   - Defined **rotational input** for the camshaft and observed valve displacement during the simulation cycle.


## Component Design Details

- Designed with a **circular cam lobe** to convert rotational motion into reciprocating motion.  
- The cam profile was parameterized using **sketch relations and spline control points** for adjustable lift height and duration.  
- The camshaft has a free **rotational degree** around its longitudinal axis.
- The valve body was modeled as a **slender shaft with a head** to seal against the valve seat.  
- The **stem** slides within the **valve guide**, and its downward motion corresponds to the cam’s peak lift angle.  
- **Material and Apprearance:** Stainless Steel / Chrome where color appearance was arbitrary added (for visual and mass simulation).


- Serves as the **linear constraint** for the valve stem, ensuring precision in motion alignment.  
- A tight **concentric mate** between the valve and guide was defined to restrict unwanted lateral displacement.
- Modeled using a **helix and sweep feature** in SolidWorks to simulate compression behavior.  
- Spring parameters such as **coil pitch, wire diameter, and free length** were defined to represent realistic deflection characteristics.  
- In the assembly, the spring was **mated between the valve base and guide body**, providing the restoring force to push the valve upward after cam release.


## Motion Study and Analysis

The **motion simulation** was set up with a **rotational motor** applied to the camshaft at a constant angular velocity of `100 RPM`.  
As the cam rotated:
- The `cam lobe` contacted the valve tip.  
- The **valve** was displaced downward, compressing the **spring**.  
- Once the cam rotated past the lift region, the `spring force restored` the valve to its original position using the build function.


## Learnings and Insights

1. **Parametric Control**
   - Designing adaptive parts allowed quick modification of cam profiles and valve lift without rebuilding the model.  
   - Demonstrated the advantage of **linking dimensions through global variables** in SolidWorks.

2. **Motion Mates and Constraints**
   - The interaction between **rotational and linear motion** was successfully modeled using `cam and concentric mates`.  
   - Fine-tuning the **contact conditions** between cam and valve was essential to achieve realistic timing.

3. **Spring Behavior Representation**
   - Although SolidWorks can’t simulate full spring compression physics natively, approximating it through `motion studies and mechanical mates` gave a realistic visual effect.

4. **Adaptive Mechanism Concept**
   - The design shows how the **valve timing and lift** can be adapted through changes in the cam lobe geometry—mirroring real-world `variable valve timing (VVT)` mechanisms used in modern engines.

__HOW THIS PROJECT CAN BE FURTHER IMPROVED__: I was not able to properly define the wanted specifications and movement of the camshaft as well as the valve. I'm pretty sure that cam movement must be constraint for particular applications, but I ended up just make the general purpose version of this system. It would be good if, as the designer, consider further simulations like that of the motion study considering the <u>displacement graph</u> of the valve showed a <u>smooth sinusoidal pattern</u>, validating the correct conversion of rotational-to-linear motion.  