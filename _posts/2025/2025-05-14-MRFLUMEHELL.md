---
layout: post
title: Fluid mechanics and my struggle to learn it
date: 2025-05-14 20:40:00
description: I'm dumping all my notes and frustrations here in this blog to learn fluid mechanics the hard way, avoiding AI slop or Chegg answers as much as possible. Sidetracked about the current state of education here in my university lol.
tags: design_and_modelling manufacturing_engineering
categories: mechatronics personal
thumbnail: assets/img/2025/thumbnail_blog_mrflume.png
giscus_comments: true
pretty_table: true
images:
  slider: true
toc:
  sidebar: right
---

__TARGET AUDIENCE__: Students, Academics, Industry Professionals, Employers, and Tech Enthusiasts, Self

_About the Thumbnail:_ This is my solution sheet for determining pressure difference in a manometer example, exiting velocity for pipes, entrance region and fluid closest described in external flow given via reynolds number.

_Preview:_ All my notes here are purely written which is also heavily advocated by the part-time instructor when taking reading assignments. Suprisingly, textbook and discussion did not match to what is being given in exams. Granted exam is online and was <u>open-book and resources</u>, so we are tempted to check solutions online. :")  

__OVERVIEW / RANT__: One of the dilemnas and conundrums of educators and students alike is how to teach/learn the topic at hand given the modern setup which is hybrid, a mix of physical and online classes modalities. For me? these hybrid setups... I hate it. It's just incentivize both parties to be more and more dependent with online tools and it loses the effort of teaching <u>AND</u> studying. In a world that information is easily bought and retrieved but with questionable origins and reasoning, I make it a point to make my learnings strictly within the confines of what is being taught by instructor and without the help of others. (I choose to learn it the hard way, not sounding cringey pramis). I'm inquisitive by nature and it shows in my personality that is why I contest sometimes what is being discussed. It sucks that sometimes, the instructor fails to emphatize with someone like me who is willing to learn on his discussions. Case and point is this lecture class for my last term for my major degree which is fluid mechanics.

Below first I show what is being discussed via my handwritten notes that I have scanned :))


<iframe src="https://drive.google.com/file/d/1tgFA0IFEE9pxfh0wBi6rvYjZRfK0RFMF/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  My scanned handwritten notes for fluid mechanics.
</div>

## Overview and Resources, No Gatekeeping

As stated by many books and authorities about this topic, **Fluid Mechanics** is the branch of physics that studies the behavior of fluids — liquids and gases — at rest and in motion.  

It forms the foundation for applications in **mechanical**, influencing everything from **hydraulic systems** and **pumps** to **airplane aerodynamics** and **blood flow**. Which is needed for my course on the mechanical side of any system.

At its core, fluid mechanics connects pressure, density, velocity, and viscosity through mathematical relationships derived from Newton’s laws and the conservation of mass and energy.

One of the godsend youtube series that I also highly recommend is by `Enginerds` that you can check [here](https://www.youtube.com/watch?v=QwUdPnEFIiE&list=PLOBgHGXcN_3KbXtZpQxv5pScRUmHy28pk&index=1). Legit, I watched this before I sleep for the term.

Of course if you are book-devoted, you need to have the solution manual of the textbook problems your are solving, you may be inclined to check the solutions here in [Litsolutions](https://www.litsolutions.org/). But this may only help you or not given the expectations of the instructor and in my case, it definitely did not help me passing this course comfortably.

I give below a brief rundown of what the contents of the discussions.

## Hydrostatic Pressure

Hydrostatics deals with fluids **at rest**, where pressure varies only with **depth**.

The **hydrostatic pressure** at a given depth \( h \) is:

$$
P = P_0 + \rho g h
$$

Where:  
- \( P \): absolute pressure at depth  
- \( P_0 \): reference or surface pressure (often atmospheric)  
- \( \rho \): fluid density (kg/m³)  
- \( g \): acceleration due to gravity (9.81 m/s²)  
- \( h \): depth below the free surface (m)

Pressure increases linearly with depth — an essential principle for **submerged surfaces**, **dams**, and **fluid columns**.


## Hydrostatic Pressure in Layered Fluids

For fluids of **different densities** stacked in layers (e.g., oil over water), total pressure at the bottom is the sum of pressures from each layer:

$$
P = P_0 + \rho_1 g h_1 + \rho_2 g h_2 + \rho_3 g h_3 + \dots
$$

Each term corresponds to a fluid layer’s contribution based on its density and thickness.  
This principle is critical in **geotechnical engineering** and **fluid column experiments**.


## Manometers

A **manometer** is a U-shaped tube filled with fluid, used to measure pressure differences.

For a differential manometer between points A and B:

$$
P_A - P_B = \rho g \Delta h
$$

If multiple fluids are involved (e.g., mercury and water):

$$
P_A - P_B = \rho_m g h_m - \rho_w g h_w
$$

Where \( \rho_m \) and \( \rho_w \) are the densities of mercury and water, respectively.  
This principle is widely used in **laboratory pressure measurements** and **calibration**.


## Ideal Gas Law

For compressible gases, pressure, volume, and temperature relate through:

$$
P V = n R T
$$

or in mass-based form:

$$
P = \rho R T
$$

Where:  
- \( P \): pressure (Pa)  
- \( V \): volume (m³)  
- \( n \): number of moles  
- \( R \): universal gas constant (8.314 J/mol·K)  
- \( T \): absolute temperature (K)  
- \( \rho \): gas density (kg/m³)

The ideal gas law connects thermodynamics with fluid mechanics — useful for **compressible flow** and **air system design**.

## Bernoulli’s Equation

Derived from the **conservation of energy**, Bernoulli’s Equation applies to **steady, incompressible, and inviscid flow** along a streamline:

$$
P + \frac{1}{2}\rho v^2 + \rho g z = \text{constant}
$$

Where:  
- \( P \): pressure energy  
- \( \frac{1}{2}\rho v^2 \): kinetic energy per unit volume  
- \( \rho g z \): potential energy per unit volume  

This principle forms the basis of **Venturi meters**, **airfoils**, **pumps**, and **hydraulic design**.

## Energy Equation for Real Flow

In real (viscous) flow, **head losses** due to friction are considered:

$$
\frac{P_1}{\rho g} + \frac{v_1^2}{2g} + z_1 = \frac{P_2}{\rho g} + \frac{v_2^2}{2g} + z_2 + h_L
$$

Where \( h_L \) is the **head loss** caused by pipe friction, bends, fittings, or other resistances.

If a **pump** or **turbine** is included:

$$
\frac{P_1}{\rho g} + \frac{v_1^2}{2g} + z_1 + h_P = \frac{P_2}{\rho g} + \frac{v_2^2}{2g} + z_2 + h_T + h_L
$$

Where:  
- \( h_P \): head added by pump  
- \( h_T \): head extracted by turbine  


## Viscous Flows in Ducts

In real fluids, **viscosity** causes internal friction that resists motion.

Newton’s law of viscosity:

$$
\tau = \mu \frac{du}{dy}
$$

Where:  
- \( \tau \): shear stress (Pa)  
- \( \mu \): dynamic viscosity (Pa·s)  
- \( \frac{du}{dy} \): velocity gradient perpendicular to flow  

Viscosity defines whether a fluid behaves as **ideal** (no resistance) or **real** (resists deformation).

## Laminar and Turbulent Flow

The flow regime depends on the **Reynolds number (Re)**, a dimensionless parameter representing the ratio of inertial to viscous forces:

$$
Re = \frac{\rho v D}{\mu}
$$

Where:  
- \( \rho \): fluid density (kg/m³)  
- \( v \): mean velocity (m/s)  
- \( D \): pipe diameter (m)  
- \( \mu \): dynamic viscosity (Pa·s)

Flow types:
- **Laminar:** \( Re < 2000 \) — smooth, orderly layers (e.g., oil flow)  
- **Transitional:** \( 2000 < Re < 4000 \)  
- **Turbulent:** \( Re > 4000 \) — chaotic, mixed motion (e.g., water pipelines)

## Frictional Head Loss in Pipes

For **steady, fully developed flow** in a circular pipe, frictional head loss is given by the **Darcy–Weisbach equation**:

$$
h_f = f \frac{L}{D} \frac{v^2}{2g}
$$

Where:  
- \( h_f \): head loss (m)  
- \( f \): friction factor (dimensionless)  
- \( L \): pipe length (m)  
- \( D \): pipe diameter (m)  
- \( v \): average velocity (m/s)  

The **friction factor** depends on the flow regime:

- **Laminar flow:**  
  $$ f = \frac{64}{Re} $$
- **Turbulent flow (smooth pipes, approximate):**  
  $$ f = 0.3164 Re^{-0.25} $$
- **Turbulent flow (rough pipes):**  
  use the **Colebrook-White equation**:

  $$
  \frac{1}{\sqrt{f}} = -2.0 \log_{10} \left( \frac{\varepsilon/D}{3.7} + \frac{2.51}{Re\sqrt{f}} \right)
  $$

Where \( \varepsilon \) is the pipe roughness (m).  
This is solved iteratively or with the **Moody diagram**.

Below, I give a sample of the answer sheets but I dont have the given problem. Still this provides the overview of the thought process on how to solve such fluid mechanics problems.


<iframe src="https://drive.google.com/file/d/15Fc270jQabbBwYEqsIiVT7J7hcEK2cj8/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  My scanned solution sheets for fluid mechanics.
</div>


__REFLECTIONS / RANT__: This class was already introduced to us way way back when we were first years (ENGPHYS) and on our 2nd year (MFTHSCI) and now in the most critical time of our study, they bring the theoreticals back to us as like a slap in the face since the information has been scratched. (Its like ENGMEC all over again!!). No excuses though, I was able to deliver the core competencies being asked from this course but it left a salty feeling in my mouth that I cannot process until I write it down here.

First off, the instructor was part-time, granted he was a doctorate holder (my immediate respects to them), stil, they kept giving us these reading assignments and he did not provide the lecture notes. Something that I kept asking too since I want to see if the items/examples were part of the reference textbook stated in syllabus but _pahirapan_. No biggie, there are many resources out there. Expecting that I can catch up to understand his un-student friendly(?) teachings by watching YT videos of PH chem engineers (the resource i provided above!), I silently and barely pass each exam. Then a big bomb dropped on me. __50% of the grade was on the final exam__. 💀💀 HAHAH amazing. I was barely passing then my grade was dictated on one assessment and on my final term no less. Like the one who made the course felt like we can pass this easily on our final year. _Ang ending_ I was tempted and inclined to check the solutions online on that final exam T_T. To just pass the exam, I relied on the solutions of others like _diko alam ung subject matter :<_  My harmartia and I felt like I sinned doing that. 

I kept thinking if my degree had a PRC, was this a topic that we have to prepare? What is the point of teaching the topic and making us do reading assignments if the topic in exams was different to what was discussed... It felt wrong and of course, I see my coursemates do it but I dont follow them as much as possible since I really wanted to learn it. _Kahit diko magagamit in the future_, it was a matter of principles for me (_Of course, Im not perfect, Im not a latin honor standing so this is just a rant of a normal student_)

Recently too, recruiters I got to discuss with asked about this exact thing of having a course without a PRC regulation joining their workforce. I brushed it off, saying we dont need it given our line of work, but this experience made me think back how lax the teachings can be if there is no expectations that the education will not be part of a <mark>bigger picture.</mark> That bigger picture is the secret handshake of an ABET accredited program to stakeholders in the industry looking up to the college to be the stewards of excellence.

Of course, this is just an isolated case. This is my personal experience of what online exam did to corrupt the essence of learning which I cannot put a word to it but it is slowly creeping towards the mindset of both students and educators. Respect goes both ways and I respect the instructor and their experience (heck there are doctorates!) but I hope they will also respect the time and effort put into learning the subject too. I'll probably look back to this soon to see if I was not alone in this reflection I have made! _Yon lang_ 


Let me know your thoughts on my ~~reflections~~ rants above/ :"> 😅😅




---

PS. Nasusukot ako sa english ko rito sa pagninilay ko, sinamahan ko na ng konting filipino haha but tried to make it as professional as possible on my experience to learn the subject. Laban lang talaga! its just one subject lang naman rin 