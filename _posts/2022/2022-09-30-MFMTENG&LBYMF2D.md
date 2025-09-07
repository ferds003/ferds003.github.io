---
layout: post
title: Materials Engineering (MFMTENG & LBYMF2D)
date: 2022-07-8 20:40:00
description: My personal views and learnings from materials engineering and understanding of material testing analysis! 🏗️
tags: design_and_modelling manufacturing_engineering
categories: mechatronics mechanical
thumbnail: assets/img/2022/thumbnail_lbymf2d.jpg
giscus_comments: true
images:
  slider: true
---

__TARGET AUDIENCE__: Students, Academics, Industry Professionals, Employers, and Tech Enthusiasts 

_Note: Taglish_

__OVERVIEW__:
I took this class as a sophomore in my fifth term. It's an introductory course for materials engineering. We never really delve deep into the specifics but it was important for us to atleast understand the materials that we are dealing with if ever we go into the specifics of the field. I provided here both the lecture and laboratory efforts on my end to learn this concept below! 

## LECTURE: 
For the lecture, I still remember sir Homer's voice and stories during lectures. I always think immediately of lattices and his lecture about eutectoid transformation for iron which is the austenite-pearlite-martensite transformation idk why but its stuck in my head 🫨. There are so many topics he have covered and sadly I cant share my written notes here (at kahit madidigitize ko siya, hindi rin mababasa kasi illegible handwriting ko haha). OG si sir homer that still provides great teachings. This is unlike my experience with other MEM profs/instructors that is why I appreciate his lectures since I really pay attention to it kahit papaano. 

I remember the story of how he related the concrete columns of the LRT1 as a material engineering feat back to when it was being built. That the right balance of quality concrete mixed with the martensite steel(?) and engineering design was able to withstand fatigue and creep over cyclic stress for the past 40 years. The calculations of that is first in the PH since they had to also know the expected failure of the material but that will not come pa after 200 years raw!!

Overall, I was able to learn the following from his class:
- **Fatigue** on Material and Behavior; Rate of Fatigue Crack Growth; Fatigue till material EOL
- **Creep**, deformation at constant stress over time; **Activation energy** to incduce strain over material Young's modulus and applied stress; Large stress concentrations provide sharp corners in the stress-strain curve
- **Phase Diagrams** and known solubility limit to determine solution for a particular material composition; **Phase Transformation** that considers nucleation the rate of addition to the lattice structure 
- **Resilience** of the material to store energy; Material properties and design for safety factor between 1.2 and 4;
- **Isothermal Treatment** will cause different versions of the steel composition like that of **pearlite** done under a slow cool quench while **martensite** will be produced under a rapid quench that is reheat and tempered under oil.
- **Dislocation Motion** and the needed uniaxial stress to induce a single crystal slip on your given structural lattice; This makes a slip motion-shear stress; **Annealing** should be applied to strengthen the material;

Below is a consolidated document of the calculations that I did for this lecture. 

<iframe src="https://drive.google.com/file/d/19QVwu2gMq9UR6PDPf9KT0QYAzdbyy95r/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  My personal notes for materials engineering!
</div>

<iframe src="https://drive.google.com/file/d/1qnR3EZdTJH-ZWGkCay7j2O3EkAmnF29v/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  Compilation of the calculations that I did for the lecture class (if it is still readable lol )where we covered material properties and selection, metals alloys, polymers and composits, and failure analysis and durability
</div>

## LABORATORY:

For the laboratory, we conducted compression, brinell hardness, and tensile/torsion tests on various materials (6061 Aluminum, Cast Iron, PMMA, and 1045 Steel). This was under sir Joey's class and he was very thorough to the explanations and apply and demonstrate how to apply the machines/tools and what insights should be looked upon that can be applied in real applications. 

The experiments aimed to determine key material properties such as **Ultimate Compressive Strength (UCS)**, **Young's Modulus**, **0.2% Yield Strength**, **Brinell Hardness Number**, **Ultimate Tensile Strength (UTS)**, and **Shear Modulus**. I was able to perform for all experiments for the compression and Brinell hardness tests on 6061 Aluminum, while tensile and torsion tests were conducted on 6061 Aluminum, PMMA, and 1045 Steel. Data analysis revealed insights into material behavior under different stress conditions.

- **Compression Test (6061 Aluminum)**: The experiment determined the UCS, Young's Modulus, and 0.2% offset strength of 6061 Aluminum. The material exhibited uniform contraction after a certain force, and the data suggested the material's failure point. However, inconsistencies in data gathering due to unfamiliarity with the equipment were noted.
- **Brinell Hardness Test (6061 Aluminum):** The Brinell hardness number was calculated, and converted to tensile strength. Uncertainty arose in selecting the correct parameters for calculation, highlighting the importance of understanding testing standards.
- **Tensile and Torsion Tests:** The tensile tests revealed the UTS, Young's Modulus, and 0.2% Yield Strength for 6061 Aluminum, Cast Iron and PMMA. Torsion tests provided shear properties for 6061 Aluminum, PMMA, and 1045 Steel.
- **Material Comparison:** Analysis of stress-strain curves allowed for comparison of material performance under tension and compression. For example, cast iron showed better performance in compression than tensile.
- **Material Classification:** Based on stress-strain curves, materials were categorized as brittle (6061 Aluminum, Cast Iron, PMMA) due to early deformation without reaching their proportional limit or UTS in tensile tests.

Below is the consolidated reports and tests that we have made along with the results and analysis that we did for the UTM testings.

<iframe src="https://drive.google.com/file/d/1jxSDzEetau8OkzFXG5xqen9aWNzQPRD8/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/2022/lbymf2d/lbymf2d_1.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/2022/lbymf2d/lbymf2d_2.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/2022/lbymf2d/lbymf2d_4.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>

<div class="caption">
  here is my batchmates and I conducting our tests for the workpiece under the universal testing machine (UTM) as well as doing brinell hardness test where you have to measure the diameter of indentation made after the puncture made on one of the tools.
</div>

__REFLECTIONS__: Again, like any other engineering student will ask, will I be able to apply this to my job? My hot take is that no, there is a whole branch of materials engineering and science students who are far more capable and understanding of this field that we do but like what they always say in the MEM department, it doesnt hurt to know this kind of stuff. The idea is that we have to understand this so that if there is an in-house testings being done, we are knowledgeable enough to understand the values being given! That for me is enough to appreciate these courses and frankly, I had fun knowing this kahit alam kong makakalimutan ko rin to soon 🥲 Let me know if this is a valid take down in the giscus comments :))