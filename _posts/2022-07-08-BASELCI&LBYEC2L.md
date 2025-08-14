---
layout: post
title: Basic Electrical Engineering (BASELCI & LBYEC2L)
date: 2022-07-8 20:40:00
description: Knowing basic breaker ratings based on power consumption and my personal learnings from basic electrical engineering concepts 🔌
tags: automation_and_controls manufacturing_engineering basic_electronics
categories: mechatronics mechanical
thumbnail: assets/img/2022/thumbnail_baselci.png
giscus_comments: true
---

__TARGET AUDIENCE__: MEM_students, Academe, Industry_Professionals, Technical_Employers

__OVERVIEW__:
The 

## LECTURE: 
Aside from the usual discussion of the KCL and KVL solutions, as well as, power ratings and AC voltage sinusoidal analysis that we did an exam for, We made a project that is a `comprehensive electrical load analysis` for a residential place. This was done to assess us with a practical to determine the appropriate breaker ratings and estimate the overall power consumption of the electrical appliances. The objective was to ensure that each sub-breaker in the electrical distribution system could handle the connected load safely while adhering to electrical code standards.

The procedure required:
- Listing **all appliances, lighting fixtures, and outlets** connected to each sub-breaker.
- Recording the **power rating (W)** of each device, the **quantity**, and calculating the **total wattage per appliance category**.
- Summing the wattages for each sub-breaker to determine the **total load in watts**.
- Converting the total wattage to **current (amperes)** using the standard formula:  

$$  I = \frac{P}{V} $$

  where \(V\) is the supply voltage (typically 220V for PH standards).
- Selecting a **breaker rating** that provides a safe margin above the calculated amperage.

---
### Key Findings and Data

| Sub-Breaker | Total Wattage (W) | Total Amperes (A) | Recommended Breaker Rating (A) |
|-------------|-------------------|-------------------|---------------------------------|
| 1           | 5,289.00          | 24.04             | 29                              |
| 2           | 3,124.00          | 14.20             | 17                              |
| 3           | 1,939.00          | 8.81              | 11                              |
| 4           | 7,995.00          | 36.34             | 44                              |
| 5           | 5,464.60          | 24.84             | 30                              |
| 6           | 2,676.00          | 12.00             | 15                              |
| **Main**    | —                 | —                 | **173**                         |

**Observations:**
- **Sub-Breaker 4** has the highest load due to multiple high-wattage appliances such as water heaters, multiple computers, and numerous convenience outlets.
- The **main breaker rating** was computed at **173A**, ensuring capacity to handle the total combined load with allowance for surge currents.
- Breaker sizes were chosen with margins above the calculated currents to prevent nuisance tripping and ensure safety.


From this project, the following engineering and operational insights were reinforced:

1. **Load Balancing** – Properly distributing appliances among sub-breakers avoids overloading individual circuits.
2. **Breaker Sizing** – Circuit breakers must be sized higher than the calculated operating current, in accordance with the **80% rule** in electrical codes, to handle continuous loads.
3. **Power Management Awareness** – Identifying the largest consumers helps prioritize energy efficiency strategies (e.g., using energy-efficient appliances).
4. **Preventive Safety** – Correct breaker ratings reduce risks of overheating and electrical fires.
5. **Documentation & Inventory Skills** – Accurate load lists are critical for both design and maintenance.

Below is a consolidated document of the calculations that I did for the lecture project of breaker ratings 

<iframe src="https://drive.google.com/file/d/1Q_h9joXwzkaPAgOVJiTjEAOGl2UDfJmh/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>


## LABORATORY:
The laboratory covers the various circuit analysis techniques and theorems that was discussed in the lecture classes. From the kirchoff's laws down to the specifics like that of the following: delta-wye transformation, power and maximum power transfer in DC circuits, Bridge circuits, principles of superposition and thevenin's theorem, AC Voltage, AC Current, and Sinusoidal Steady-State Analysis.

Learnings can be made on the following concepts:

- Explored __Delta-Wye transformations__ for circuit simplification. Was able to distinguish between delta and wye configurations and convert between them, verifying that overall resistance remains nearly constant 
- Investigated __power and maximum power transfer in DC circuits__, confirming maximum power transfer occurs when load resistance equals internal resistance. Key finding was that maximum power transfer occurs when <mark> load resistance matches the internal resistance of the power source. </mark>
- Examined __bridge circuits__ and their sensitivity to load resistance. Particularly, it was the  `Wheatstone bridge`, using potentiometers to achieve bridge equivalence. I was able to analyze the impact of load resistance and observed voltage differences in balanced and unbalanced bridge configurations.
- Validated __Kirchhoff's Laws__ through simulations and calculations. I calculated voltage and current using KCL and KVL, comparing results with Multisim simulations with a single voltage sources.
- Applied the __Superposition Theorem__ to tackle circuits with multiple voltage sources. I was able to calculate current by `individually considering each source and then summing the results`, verifying the principle's accuracy through simulations.
- Utilized __Thevenin's Theorem__ for circuit simplification and analysis particularly turning the electrical circuit into a single voltage source and series resistance. 
- Analyzed __AC voltage, current, and sinusoidal steady-state behavior__ observing phase differences between voltage and current in resistive, RC, RL, and RLC circuits (both series and parallel). I was able to gain insight of the properties of sinusoidal AC signals and the phase relationships in `inductors and capacitors`.

`Multisim simulations` were used to verify theoretical calculations. Analyzed voltage, current, and resistance relationships in different circuit configurations. This enabled me to have a practical understanding and validation of fundamental circuit analysis techniques.

Below is a copy of the final reports that we did to demonstrate the concepts above and for my own reference in the future!

<iframe src="https://drive.google.com/file/d/1TZJDkenQDD4NnG1HkCein2qPS8HKJkCU/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  Consolidated final reports that I did for laboratory using Multisim to demonstrated KVL and KCL concepts till advanced electrical analysis
</div>

__REFLECTIONS__: I really appreciate sir eigger's class for the lecture as he was strict. The strict kind that pushed us to refine our project and know what lessons are important for us manufacturing engineering and what should be our learning outcomes be which is to understand the breakers ratings that are safe for usage. I think I can apply this to my personal projects that require huge power loading but I just usually add a relay and step-down regulators for this especially for electronics that does the job for me in terms of safety.

PS. Shoutout to ins and quiz for the lab works! :>