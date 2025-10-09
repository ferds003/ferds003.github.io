---
layout: page
title: Portable Electronic Nose for Lakatan Banana
date: 2023-12-03
description: The design and development of an e-nose that detects volatile organic compounds (VOCs) for lakatan banana, a native double-A banana cultivar 🍌
category: electronics
img: assets/img/2023/thumbnail_electronic_nose.png
giscus_comments: true
pretty_table: true
images:
    slider: true
driveId: 15FWpRoiTxUbdhvcDIQcI4rGCrIghAe3A #start
driveId1: 1PYkx4gRh2umdF-SGtncTCW-L5leoX0gG #ensure perps is working and installing control loop
driveId2: 1RHKmZ1Tnh5SS2DMPi7EqX4EHviyPWP0O #checkng and doing field test
driveId3: 1wGPQv5tJKcNp0hb1h0rE8mx9DU6lvG51 #end
driveId4: 1FKFttsajBbt0io27IBnkpp7KZi_7N3KF #voltage check in BMS
driveId5: 1O81eJR1ieNGxgcxTFBIWp4FrEeGuFsAj #checking of relay in fan
driveId6: 1JxWL7t_Gcro_4x7NVDOEzaIoWy7Eagd1 # CFD check for the dome only scenario

---

_Update:_ This project was accepted into HNICEM 2023 IEEE conference! You may check the IEEE paper below!

_About the Thumbnail:_ This is the CAD design my group and I made for the capturing of ethylene to measure the ripeness of the banana inside a container.


### OVERVIEW:
The <mark>Portable Electronic Nose (E-Nose)</mark> project aims to design and build a compact device capable of detecting `volatile organic compounds (VOCs)` emitted by harvested fruits — specifically **Lakatan bananas**.  
These VOCs are chemical signatures that indicate ripeness and overall fruit quality.

The motivation behind this project is to provide a `scientific and consistent alternative` to manual fruit ripeness evaluation, which is often subjective and prone to error.  
Through a combination of **gas sensors**, **microcontroller-based data acquisition**, and **3D-printed enclosures**, the e-nose demonstrates how electronics and product design can contribute to sustainable postharvest technologies.

## Methodology

1.) System Design and Architecture
The e-nose was conceptualized as a **self-contained, portable sensing system**.  
Its main subsystems include:

- **Sensor Array:** MQ3, MQ4, and MQ135 gas sensors for VOC detection, and a DHT11 sensor for monitoring temperature and humidity.  
- **Processing Unit:** Arduino Mega 2560 microcontroller for data processing and control.  
- **Data Storage and Interface:** SD Card Module for local data logging and an OLED display for real-time readouts.  
- **Control Inputs:** Three push-buttons to start instant detection, begin continuous recording, and stop recording.  
- **Exhaust System:** A fan with adjustable speed (via a potentiometer) for purging residual gases from the sensor chamber after each test.

All components were wired through `universal PCB boards`, with `decoupling capacitors` added to stabilize voltage supply across the circuit.

<!-- First row -->
<div class="row mt-3">
  <!-- First video -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include googleDrivePlayer.html id=page.driveId4 %}
    <div class="caption mt-2">
      Checking relay functionality on fan below the enose.
    </div>
  </div>

  <!-- Second video -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include googleDrivePlayer.html id=page.driveId5 %}
    <div class="caption mt-2">
      voltage check in BMS if it has achieved the required supply and also charging capability.
    </div>
  </div>
</div>

2.) Enclosure Design and Fabrication
The enclosure was designed using **Autodesk Fusion 360**, featuring a `geodesic dome structure` for balanced airflow and mechanical strength.  
The structure consists of:

- **Dome Enclosure:** Houses the sensors and electronics.  
- **Base Platform:** Serves as an air intake with an 80 mm opening for VOC entry.  
- **Sensor Chamber:** Positioned centrally to ensure that VOCs directly pass over the gas sensors.

The dome was fabricated via **Fused Deposition Modeling (FDM) 3D printing** using **PLA filament**, chosen for its durability and ease of printing.  

**Computational Fluid Dynamics (CFD)** analysis verified that **passive air diffusion** was sufficient to deliver VOCs to the sensors effectively, avoiding turbulence caused by forced airflow.

<div class="row mt-3 justify-content-center">
  <!-- First image -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading='eager' path='assets/img/2023/enose/383227067_1979369355752005_8085791012740092119_n.png' class='img-fluid rounded z-depth-1' zoomable=true %}
    <div class="caption mt-2">
      Setup of the enose CFD under F360 simulate environment and library. Given topology of potential airmass being directed in target spaces inside gas chamber.
    </div>
  </div>

  <!-- Second image -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading='eager' path='assets/img/2023/enose/361106297_1467386894015264_7879923392213672224_n.png' class='img-fluid rounded z-depth-1' zoomable=true %}
    <div class="caption mt-2">
      Final CFD validation of the air path of enose going to exhaust at the top where VOCs is coming from the bottom.
    </div>
  </div>
</div>

<!-- First row -->
<div class="row mt-3">
  <!-- First video -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include googleDrivePlayer.html id=page.driveId6 %}
    <div class="caption mt-2">
      Scenario where dome is utilized for capturing of VOCs. Was later scratched since too many holes that the gas will escape to.
    </div>
  </div>
</div>

3.) Firmware and Control Logic
The firmware was developed in the **Arduino IDE** using **IF-THEN-ELSE** conditional logic to classify banana ripeness stages: *unripe*, *ripe*, or *overripe*.

Two modes of operation were implemented:

- **Instant Detection Mode:** Captures VOC data every 5 seconds for 1 minute and immediately classifies ripeness based on calibrated ppm levels.  
- **Recording Mode:** Continuously logs sensor data (gas, temperature, humidity) every second until stopped by the user.

After each measurement session, the **exhaust fan** is manually activated to clean the sensor chamber and reset baseline readings.

<div class="row mt-3 justify-content-center">
    {% include figure.liquid loading='eager' path='assets/img/2023/enose/for capstone new draft v23_revised-1.png' class='img-fluid rounded z-depth-1' zoomable=true %}
</div>
<div class="caption">
  The wiring diagram as seen in Autodesk Eagle.
</div>



## Findings:

The final developed enose prototype!

<div class="row mt-3 justify-content-center">
  <!-- First image -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading='eager' path='assets/img/2023/enose/20231012_205839.jpg' class='img-fluid rounded z-depth-1' zoomable=true %}
    <div class="caption mt-2">
      enose with a lakatan banana inside will suck the air and VOCs being produced
    </div>
  </div>

  <!-- Second image -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading='eager' path='assets/img/2023/enose/20231011_190436.jpg' class='img-fluid rounded z-depth-1' zoomable=true %}
    <div class="caption mt-2">
      Electronic nose looked when closed
    </div>
  </div>
</div>

<div class="row mt-3 justify-content-center">
  <!-- First image -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading='eager' path='assets/img/2023/enose/20231011_190244.jpg' class='img-fluid rounded z-depth-1' zoomable=true %}
    <div class="caption mt-2">
      Electronic nose when expanded/opened.
    </div>
  </div>
</div>


__Sensor Performance:__
The MQ-series gas sensors demonstrated sensitivity to the VOCs released by bananas, showing a clear increase in ppm readings over time during ripening trials.  
In contrast, control tests (without fruit samples) produced stable, flat readings — confirming the e-nose’s ability to distinguish VOC presence.

- **MQ3 and MQ4:** Responded primarily to alcohols and methane-type compounds emitted during ripening.  
- **MQ135:** Detected general air quality changes due to ethylene and other organic gases.  
- **DHT11:** Recorded stable temperature (~28°C) and increasing humidity correlated with banana respiration.

__Data Handling and Circuit Stability__
The **Arduino Mega** provided sufficient analog inputs and memory for multi-sensor data collection.  
The addition of **decoupling capacitors** on the PCB reduced voltage noise, ensuring consistent sensor readings even under simultaneous logging and display operations.

- The **SD Card Module** successfully stored datasets in CSV format, enabling external analysis and visualization.  
- The **OLED Display** provided immediate feedback, showing ppm readings and classification outputs in real time.

Each detection cycle lasted approximately one minute, allowing users to obtain quick ripeness assessments without lengthy calibration procedures.  

The hardware layout, combined with optimized sensor placement, minimized signal delay between air exposure and ppm response.

Below are a series of explanation videos that detail how the system works discussed by me in preparation for defense!

<!-- First row -->
<div class="row mt-3">

  <!-- First video -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include googleDrivePlayer.html id=page.driveId %}
    <div class="caption mt-2">
      What to check inside the e-nose and initializing the setup and MCU firmware.
    </div>
  </div>

  <!-- Second video -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include googleDrivePlayer.html id=page.driveId1 %}
    <div class="caption mt-2">
      The act of closing the dome after complete check.
    </div>
  </div>

</div>

<!-- Second row -->
<div class="row mt-3">

  <!-- Centered third video -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include googleDrivePlayer.html id=page.driveId2 %}
    <div class="caption mt-2">
      Explanation of the different user interactions outside the dome and what to expect from the system to perform.
    </div>
  </div>

  <!-- Centered fourth video -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include googleDrivePlayer.html id=page.driveId2 %}
    <div class="caption mt-2">
      Extracting the data from the SD card and checking of logging of the gas sensors.
    </div>
  </div>
</div>


### LEARNINGS AND CONTRIBUTIONS:
This definitely put me to the test in terms on how I can make the most impact for the development of the device from start to finish. We had already a definite idea on the peripherals that we want to utilize but was unsure on how to make integrate it to our constraints to meets its wanted functionality of becoming portable while retaining a means to capture the VOCs.

This project enabled me to try for the first time to do everything from utilizing 3D printers, BMS modules for Li-on batteries, make the connections and diagrams through Autodesk Eagle and even our CFD for validation of airflow! These are all self-taught and something that I needed to learn to contribute for the team as this was not taught in class formally. What gave me leverage was how I was eager to make this work and work my way around on parts where I was lacking.   

Proud to share here our IEEE paper below! you may check also the publication in [IEEE Explore](10.1109/HNICEM60674.2023.10589174). You may contact or leave a comment here for any further inquiries regarding the design, development and validation of the device. Thanks! 

<iframe src="https://drive.google.com/file/d/1aI4Xu8Ter3FGWg55bwdxR-C_Wt3G3vQj/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  IEEE paper presented in conference that focuses on the development of the device.
</div>

Below are some of the pictures that I have when developing the prototype with the team, Raph, Nester and Lance! I made them banana cakes from the 30 lakatan banana samples, so that was a cool side quest also borne out of not wasting the bananas haha

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/2023/enose/20230525_113712.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/2023/enose/405458833_323376797167082_3047210201254103549_n.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/2023/enose/399945730_886930376497520_1989234743783689722_n.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/2023/enose/400586630_667022061951943_6161730535573262521_n.jpg" class="img-fluid rounded z-depth-1" zoomable=true%}</swiper-slide>  
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/2023/enose/400749438_361284992936170_9102776265361720692_n.jpg" class="img-fluid rounded z-depth-1" zoomable=true%}</swiper-slide>  
</swiper-container>
<div class="caption">
  Our picture taking after we defended this project in front of a panelist!
</div>

__HOW THIS PROJECT CAN BE FURTHER IMPROVED__: 
Of course, reflecting on this after we have successfully developed the device, there are many gaps in how this can be commercialized. I did the wirings for the device and it took me a while to finish it, around 15 days give or take since I was on and off on doing it. I only had my trusty `helping soldering hand tool` for holding the wires and connectors in place in the universal PCB. 

Now, I should have invested more time in doing a custom PCB board that will cover an MCU, BMS module, and specific GPIO interfaces so that we wont be utilizing a hefty `Arduino Mega` for handling of the signals in all our peripherals. We opted to use UART and I2C i believe but what should have been better is to dedicate a another module for `data acquisition` instead of putting all the signals into processing. I was thinking of trying two Seeed Studio's `XIAO series MCU` for this but I wouldn't known better at the time. 

Of course, the wirings are a problem if you want to troubleshoot and despite labelling, the issue is that it is prone to entangled in transport and that happened once when I was commuting where smoke was coming out from the e-nose prototype and that was due to a short circuit in the batteries (scared the fellow passengers and my groupmate when they heard it 😅😅). Doing a design in `EDA` should have been done but we were running out of time and nobody knew how to do it!!

Lastly, validation of the airflow via computational fluid dyanmics (CFD) was needed to determine where we are going to place the sensors inside the gas chamber. At first, it was a no-brainer to put it in the sides but discussions surfaced if we can ditch the whole gas chamber since we were not utilizing the dome's potential. I tested both out both ideas and we agreed that having the gas chamber to concentrate the gas in one point is ideal for the detection of these elusive VOCs. In essence, other software with better capabilities like `ANSYS` should have been utilized since it provided a more intuitive report about the whole process. 

Aside from the technical skills, I had troubles also relaying my concerns and communicate to the team. At the time, I was having trouble dealing with the electronics by myself since I was juggling with other commitments and this definitely affected the timeline with me shifting also the team to do and add stuff that was not part of the proposal. I pushed for it since it was a core part of the project but we did not consider what came next. When asked how we determine that the system is fully integrated, we didnt know how to answer until I cited that I can perform a `continuity test` and `signal integrity check` to ensure that each component is receiving the appropriate voltage and it sends out the proper signal! 

Definitely, I lacked on communication by the end and was loose on changing plans midway which I now know is crucial to be more strict on the timeline and sticking to the plan when doing collaborations in a project. That is definitely something I should work on moving forward!

---

__PS to my gropumates.__ Thank you to Raph, Nester and Lance for being solid groupmates for this project! I was able to learn more from you guys alot and how we are able to make a device that works!

To raph, thank you for the overall attention to the deails of the project 🥹🥹.  You are reliable in every step of the way! The way you notice stuff that I wouldnt see is just a skill I know wouldnt have in life. You took control of the overall 3D printing process of our enose. You were there with me checking the whole day from 7am to 8pm on the printing time since we decided to print our enose with a 24-hr print. Not only that, you are a guru for 3d design. Its really a superpower to have and a sight to see you do work!

To nester, thank you for taking your time and effort to do our testing and experiments. I just have to imagine the time it takes to watch and check over 30 samples of our lakatan banana in a span of 8 hours (assuming that it takes 15 minutes to test each) over a span of 15 days T_T! I appreciate that and I hope you know that too 😸😸 I never really got to see it in action and I really hope that at the time I could have shouldered some of that time since I was the one who delayed a phase. The dedication to carry that burden is not an easy thing to do and for that you have my respects pre!

To lance, who orchestrated the whole design and idea! We couldnt have done this project without the conceptualization of this alongside our adviser. you took care for us the coding aspect of the project and ensured that our project is working by the end. I could not have not done the electronics without your constant checking and insight. I believe you pursued MS in DLSU too. You met me first in the worst version of myself and sometimes fate brings us here in doing a project here! You left really an impression 🔥 Goodluck sayo pre!
