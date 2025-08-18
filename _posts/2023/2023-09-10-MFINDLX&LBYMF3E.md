---
layout: post
title: Spaghetti wires! My industrial electronics learnings (MFINDLX & LBYMF3E)  
date: 2023-09-3 20:40:00
description: Tangled circuits that runs both air and electricity, I share here both theory and practice of industrial electronics and learnings for electro-pneumatic systems 🪢 🔌
tags: manufacturing_engineering automation_and_controls
categories: electronics embedded_systems
thumbnail: assets/img/2023/thumbnail_mfindlx.png
giscus_comments: true
toc:
  sidebar: left
driveId: 1Mhwh_dXwWoRCIaDznSZRkSmbBa07CaMs # lab3
driveId1: 1AVLDbi6mdOTse1IrQX3Ab5lhx6_wRA3N # lab4
driveId2: 1tcxH7etciFx52gB9nkghVCIzNenB9nyn # lab5
driveId3: 1a2UFp0MHvrf8PD7-ApNQ9-307fz7sKUT #  lab6
driveId4: 1UEMWIbE_3s-9nr9PzDkSu02jAsyduJOo # lab7_sim
driveId5: 1rtRfLCHeczEWFAekxGgC1boBysD87yuq # lab 7
driveId6: 1zn6RdKFBGl5ooIDBR3O4p7_e8kcOK1hR # lab 8
driveId7: 1BQVE1A-kgbSZw9lT7Pb3s2imEUhtD7Tp # lab 9
driveId8: 1Tl7eV_wMSizDQmcOe7kJb3OCJ6kfVxfg # lab10_sim
driveId9: 1S7WOtCEPOFgmrxfaKCRs2hLSrUFVcXOt # lab10 
driveId10: 1ib1wWXoWIQLaAjMFyZNEZpSoLsMSjFsD #lab11
driveId11: 1sNyAtW0wcDjG5t2iVLsfHA0IgRoUyBd- # lab12
driveId12: 1cQ665NqA-l5uBVb5ox8nWlrSdODdKdpV # lab13
driveId13: 16rOtTBSsZ2i2S-dekZjiIm4LUfxXmrd4 # lab14
driveId14: 18Py36nvmPu9VEIvjLhL45BZtpkVtgkTY # lab16
driveId15: 1TknK92xKEMyBxHU6SdZyIlIadr9xQtm8 # lab15
driveId16: 1m6ebRvrTY3_FUelZx3fbKjiLDcYq6jX_
driveId17: 15c2k5QqoRqphcbqV9BPFc-vPJBuILuQK 
---

__TARGET AUDIENCE__: MEM_students, Academe, Industry_Professionals, Technical_Employers

_Note: Taglish_

__OVERVIEW__:
The understanding of pneumatic systems is salient to the understanding of the automation being done in manufacturing plants. It is that intention that the course and lab below provides us students (ako!), the oppurtunity to train ourselves under `programmable logic controllers` and the designing of `electro-pneumatic systems`!


## LECTURE: 
The lecture class was, frankly, boring. The calculations for it consist of me determining the logic function as well as the flow of air on end output from given inputs (wow /s) 😅. This may include providing the `motion-step diagram`, finding out the `logic truth tables` and lastly, obtain its `plc ladder logic diagram`. All of this was handwritten and handdrawn in the paper. I still remember doing the calculations one time in Jollibee Malibay since I was not able to make it in campus haha (sumilong ako sa ulan)

<iframe src="https://drive.google.com/file/d/19R3r94gOBOw8zoDfrbRUrn_edy6-hIl1/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  My personal notes that I have compiled! Not much but this just covers gas concepts and pressure determination to be applied safely on cylinders.
</div>

Aside from the gas laws and determination of pressure for safety, I think I got sidetrack on the laboratory since it was more practical. Overall there are many valves (especially its symbols) to consider and we had to memorize it. When I was looking at the exam paper, I just imagine what is the `suitable pneumatic components` to deliver the task given! 

For the practical, my pair (si Nic) and we solved two automation problems I worked on two automation problems — a `Metal Strip Bending Tool` and a `Cleaning Bath System`. Both required designing electro-pneumatic circuits and simulating them with `PLC ladder logic`. To solve these, I provided the following components and solution below. You may also check out the video demonstration that I have below and our report.

__COMPONENTS USED__:
- Cylinders (Actuators)
  - **Single-Acting Cylinder (SAC)**: Uses air pressure for forward stroke, spring for return.  
    - Used in **Cleaning Bath** for simple forward/back motion.  
  - **Double-Acting Cylinder (DAC)**: Uses air pressure for both extension and retraction.  
    - Used in both **Bending Tool** and **Cleaning Bath** for controlled motion in both directions.  
  - `Key Concept`: Selection depends on whether the motion requires force in one or both directions.  

- Directional Control Valves (DCVs)
  - **3/2 Valve**: Three ports, two positions — commonly paired with single-acting cylinders.  
  - **5/2 Valve**: Five ports, two positions — essential for controlling double-acting cylinders.  
  - **Shuttle & Check Valves**: Ensure correct air routing, allow manual/electrical actuation.  
  - `Key Concept`: Correct valve selection enables precise cylinder control and sequencing.  

- Sensors & Switches
  - **Limit Switches**: Detect cylinder end positions (extended/retracted).  
  - **Optical/Proximity Sensors**: Detect presence of workpiece (used in bending setup).  
  - **Pressure Sensors**: Provide feedback for safety and automatic retraction.  
  - `Key Concept`: Sensors convert mechanical positions into electrical signals for `PLC inputs`.  

- Electro-Pneumatics
  - Integration of `relays, solenoids, and electrical signals` to control valve actuation.  
  - Combines the speed and power of pneumatics with the logic of electrical control.  
  - `Key Concept`: Electro-pneumatic systems bridge physical actuation with programmable control.  

- PLC Ladder Logic
  - Ladder diagrams used to **sequence operations** of multiple cylinders.  
  - In **Bending Tool**: Three cylinders had to operate in sequence (clamp → bend → release).  
  - In **Cleaning Bath**: Sequenced forward/back motions with gradual timing.  
  - `Key Concept`: PLCs ensure `safe, repeatable, and automated sequencing` of pneumatic systems.  

- Timing & Sequencing
  - **Delay timers** hold cylinder positions before the next step.  
  - **Counters** ensure repetitive actions stop after a set cycle (e.g., 5 dips in a bath).  
  - `Key Concept`: Time-dependent motion control is vital for automation consistency.  


By combining `mechanical actuation + electrical control + PLC sequencing`, even complex tasks like `bending tools` and `automated dipping baths` can be executed reliably.  These exercises mirror real-world `industrial automation problems`, where pneumatics are widely used for material handling, clamping, pressing, and cleaning processes.

Below is a consolidated document of the practical that I did for this lecture as well as the video demonstration that my pair and I did!

<iframe src="https://drive.google.com/file/d/1SgafdJhVgzq6zDmHYF3leAcvQHJ8qbtc/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId16 %}
  </div>
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include googleDrivePlayer.html id=page.driveId17 %}
  </div>
</div>
<div class="caption">
 video demonstration for the 1.) cleaning bath operation on the left and 2.) metal string bending tool on the right.
</div>


## LABORATORY:
The laboratory class proided me practical skills on the use of pneumatic system to produce complex sequencing of cylinder actuation for a given output/intention. The use of sensors and safety controls were all considered in the activities that we did for this class. 

I will show below the different exercises that we did along with learnings and insight that I find per exercise. I was able to properly document this experience kaya you will see the an accompanying video demonstation of explanation per activity. You may also see the final reports that we did for each of these exercises. 


### Pure Pneumatics

#### __Exercise #1 – Water Precipitation__
- **Task**: Calculate total water precipitated in a system using the `dew point curve` and `absolute humidity` at varying temperatures.  
- **Learning**: Gained awareness of how moisture affects pneumatic systems—excess water can cause corrosion, leaks, or performance issues.  
- **Insight**: In real factories, proper `air drying and filtration` is essential for reliable automation.

#### __Exercise #2 – Pipe Diameter Calculation__
- **Task**: Use `nomograms` to size pipes, considering valve lengths and total line length.  
- **Learning**: Correct sizing ensures efficiency and avoids pressure drops.  
- **Insight**: Small miscalculations can increase energy consumption—highlighting the importance of `sustainable system design`.

#### __Exercise #3 – Single-Acting Cylinder Control__
 - **Task**: Build a circuit with a `3/2 valve` and `single-acting cylinder` for feeding workpieces.  
- **Focus**: Troubleshooting air leaks.  
- **Insight**: Practical lesson in `maintenance culture`—air leaks are small inefficiencies that can cost industries heavily over time.

<div class="col-sm mt-3 mt-md-0">
   {% include googleDrivePlayer.html id=page.driveId %}
</div>
<div class="caption">
 video demonstration for the exercise above
</div>

#### __Exercise #4 – Sheet Metal Bending__
- **Task**: Use a single-acting cylinder and push button to bend sheet metal into a U-shape.  
- **Insight**: Demonstrated how pneumatics support `low-cost, repeatable automation` in small-scale production.

<div class="col-sm mt-3 mt-md-0">
   {% include googleDrivePlayer.html id=page.driveId1 %}
</div>
<div class="caption">
 video demonstration for the exercise above
</div>


#### __Exercise #5 – Double-Acting Cylinder Swivel__
- **Task**: Design a swivel mechanism with `double-acting cylinder + 3/2 valves`.  
- **Learning**: Secure tube connections are crucial for safety and system reliability.

<div class="col-sm mt-3 mt-md-0">
   {% include googleDrivePlayer.html id=page.driveId2 %}
</div>
<div class="caption">
 video demonstration for the exercise above
</div>


#### __Exercise #6 – Workpiece Removal and Tipping__
- **Task**: Automated system with `double-acting cylinder + 3/2 roller valve` to remove/tip workpieces.  
- **Insight**: Showed how pneumatics integrate with `conveyors` for material handling.

<div class="col-sm mt-3 mt-md-0">
   {% include googleDrivePlayer.html id=page.driveId3 %}
</div>
<div class="caption">
 video demonstration for the exercise above
</div>


#### __Exercise #7 – Box Movement to Assembly__
- **Task**: Pneumatic circuit with `5/2 valve, shuttle valves, and double-acting cylinder` to move boxes.  
- **Learning**: Multiple actuation options (push button or pedal) taught `redundancy and operator ergonomics`.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId4 %}
  </div>
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include googleDrivePlayer.html id=page.driveId5 %}
  </div>
</div>
<div class="caption">
 video demonstration for the exercise above
</div>

#### __Exercise #8 – Workpiece Clamping__
- **Task**: Electro-pneumatic circuit with conditions:  
  - Workpiece detection  
  - Interlocks during drilling  
  - Adjustable clamping speed  
  - Fast declamping  
- **Insight**: Learned about `process safety and flexibility`—core in Industry 4.0 smart workstations.

<div class="col-sm mt-3 mt-md-0 text-center">
  {% include googleDrivePlayer.html id=page.driveId5 %}
</div>
<div class="caption">
 video demonstration for the exercise above
</div>

#### __Exercise #9 – Gate Control__
- **Task**: Double-acting cylinder controlled by four push buttons (two inside, two outside).  
- **Learning**: Implemented `adjustable opening/closing speeds` for controlled motion.  
- **Insight**: Similar logic is applied in `safety gates in manufacturing plants`.

<div class="col-sm mt-3 mt-md-0 text-center">
  {% include googleDrivePlayer.html id=page.driveId7 %}
</div>
<div class="caption">
 video demonstration for the exercise above
</div>

#### __Exercise #10 – Component Stamping__
- **Task**: Electro-pneumatic stamping using `two push buttons + pressure sensor` for automatic return.  
- **Insight**: Showed how `sensor feedback` ensures product quality and reduces errors.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId8 %}
  </div>
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include googleDrivePlayer.html id=page.driveId9 %}
  </div>
</div>
<div class="caption">
 video demonstration for the exercise above
</div>

#### __Exercise #11 – Piston Holding and Retraction__
- **Task**: Push button → forward stroke → piston held 10s → auto-return.  
- **Learning**: Incorporated `timing control`.  
- **Insight**: Pneumatic timers are crucial in synchronized production lines.

<div class="col-sm mt-3 mt-md-0 text-center">
  {% include googleDrivePlayer.html id=page.driveId10 %}
</div>
<div class="caption">
 video demonstration for the exercise above
</div>

#### __Exercise #12 – Acid Bath Dipping__
- **Task**: Automated dipping with counter + limit switches, stops after 5 cycles.  
- **Insight**: Showed how `pneumatics + counters` provide batch process automation.

<div class="col-sm mt-3 mt-md-0 text-center">
  {% include googleDrivePlayer.html id=page.driveId11 %}
</div>
<div class="caption">
 video demonstration for the exercise above
</div>


#### __Exercise #13 – Steel Bolt Pressing (Two-Hand Safety Control)__
- **Task**: Two-hand valve system requiring simultaneous press within 0.5s.  
- **Insight**: Essential safety mechanism—prevents workplace accidents during high-force pressing.

<div class="col-sm mt-3 mt-md-0 text-center">
  {% include googleDrivePlayer.html id=page.driveId12 %}
</div>
<div class="caption">
 video demonstration for the exercise above
</div>


#### __Exercise #14 – Workpiece Distribution to Conveyors__
- **Task**: Distribute workpieces using `two cylinders + four push buttons` for sequence control.  
- **Learning**: Importance of `sequencing logic` in complex automation.

<div class="col-sm mt-3 mt-md-0 text-center">
  {% include googleDrivePlayer.html id=page.driveId13 %}
</div>
<div class="caption">
 video demonstration for the exercise above
</div>


#### __Exercise #15 – Metal Strip Bending Tool__
- **Task**: Electro-pneumatic system with `3 cylinders + limit switches + optical proximity sensors`.  
- **Insight**: Introduction to `sensor integration` for automated bending and quality assurance.

<div class="col-sm mt-3 mt-md-0 text-center">
  {% include googleDrivePlayer.html id=page.driveId15 %}
</div>
<div class="caption">
 video demonstration for the exercise above
</div>

#### __Exercise #16 – Box Lifting and Pushing__
- **Task**: One cylinder lifts, another pushes to a second conveyor (sequence-dependent).  
- **Learning**: Highlighted `interdependent motions`—a foundation for robotics and mechatronics.

<div class="col-sm mt-3 mt-md-0 text-center">
  {% include googleDrivePlayer.html id=page.driveId14 %}
</div>
<div class="caption">
 video demonstration for the exercise above
</div>

<iframe src="https://drive.google.com/file/d/1zRVCGq1Gyfx8PNB9PRToeuMo_prq7gCu/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
        Consolidated reports per exercise above! This covers from simple pneumatic to complex electro-pneumatic systems that we did for the class and demonstrations.        
</div>

### Electro-Pneumatics
This is where the real fun (or torture) begins. The point where troubleshoorting is hard (teknik is to do continuity test for the wires) but completing the task is so rewarding! Electro-pneumatics now cover the use of electrical relays and corresponding circuits to determine the logic of the actuation and control. Down the line, we get to also do industrial programing  instead so less wires, less trouble! Further elaboration of the exercises that we did can be seen below.

<iframe src="https://drive.google.com/file/d/1duNBwjTRlUw9KPr1KAgMqy9qXGpZSVvO/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>

---

## REFLECTION AND COURSE INSIGHTS:
Again, I always look back and ask myself, can I apply this to my current job/career? This time, it was more of a grey area for me. I want to do technical work when I'm out in the field (not a paper-pusher), and I always see this as a skill that I can use when I'm down in the trenches of the machine and troubleshooting it. Of course, here in the country, you will actually need NCII trainings and certificates to show to the employer that you are capable of the job and not simple the degree. Also the job stability and the lack of the need for people to do this type of work that is mainly outside MEM career choices, you'll be suprised that covering this is really a setback. This is because we are touching already in the realm of electrical engineers and the extensive background and learnings that they have also done, cannot be matched with what we have currently. Heck, the course goes back and forth on mechanical and electrical engineering concepts!

It has its `merits` though, the world is constantly evolving and the concepts here are outdated. Many of the projects done now cover use of `OPC-UA` connection from PLC to the hardware as well as me `CAN-BUS` network operations for whole plant connection for `IoT`. This course provides a solid foundation whenever we will encounter this in the wild in either our robotic systems or mechatronics ones that are heavy-duty. Let me know your thoughts as well in the comments below!

PS. Shoutout kina Nic na tumulong sakin for the finals at si Adam for being a solid partner throughout the labs.


