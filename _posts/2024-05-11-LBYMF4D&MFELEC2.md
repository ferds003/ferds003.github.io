---
layout: post
title: Smart factory! Intelligent manufacturing systems (LBYMF4D & MFELEC2) 
date: 2024-06-13 20:40:00
description: I share here my journey to develop intelligent systems for the modern plant and how I can stay relevant in the modern world in my line of work.
tags: manufacturing_engineering automation_and_controls
categories: embedded_systems electronics
thumbnail: assets/img/2024/thumbnail_mfelec2.png
giscus_comments: true
driveId: 1egU-UOmQEf3_b7ENcdCmzy0PHyz20gCX # Ultrasonic
driveId1: 1GFsdhYpabyaHyEhTwJBmEcmYLQv4aMyj # PWM
driveId2: 19r3NkueWSFm1Smf5vzu3cGcgIi52SE5G #Tkinter
images:
  slider: true
---

__TARGET AUDIENCE__: MEM_students, Academe, Industry_Professionals, Technical_Employers

__OVERVIEW__:
The manufacturing scene is evolving fast. There are many technologies that are being utilized in the field and frankly, no time to catch up. In the Philippines alone, I have seen upskilling for workers for Industry 4.0 in big companies to catch up with the demand and expectations that the current world wants for their plant engineers. For me, staying ahead and learning these topics are essential if I want to enter this type of work in the future. Below is my learnings that I got from my classes in terms of practical skills in `data communication`, `IoT integration`, and `system automation` through the use of microcontroller like `ESP32` and `Raspberry Pi`.   

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/2024/mfelec2/mfelec2_1.jpg" class="img-fluid rounded z-depth-1 zoomable=true" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/2024/mfelec2/mfelec2_2.jpg" class="img-fluid rounded z-depth-1 zoomable=true" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/2024/mfelec2/mfelec2_3.jpg" class="img-fluid rounded z-depth-1 zoomable=true" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/2024/mfelec2/mfelec2_4.jpg" class="img-fluid rounded z-depth-1 zoomable=true" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/2024/mfelec2/mfelec2_5.jpg" class="img-fluid rounded z-depth-1 zoomable=true" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/2024/mfelec2/mfelec2_6.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>
<div class="caption">
  Here are snippets of the code and work that I did!
</div>

## LECTURE: 
The lecture was fun. I got to really hone my skills this time around with the several exercises that was given to use while giving nod to the different courses that I had in previous term. It challenges me to do exercises on `industrial electronics`, `instruction lists` and `raspberry pi basics`! Particularly, I got to learn the following:

__Ladder Logic and Instruction Lists:__

- Reviewed LLDs and created corresponding `instruction lists (IL)` equations in MSExcel.
- Developed truth tables based on logic implemented through IL and `logic ladder diagrams`.
- Simulated LLDs in Festo FluidSim.
- Implemented `logic functions` using IF statements in MSExcel.

__Raspberry Pi Basics:__

- Utilized GPIO to drive outputs and read inputs, correcting errors in provided code.
- Created programs for LEDs and pushbuttons.
- Developed functions for measuring distance using an `Ultrasonic Sensor (HC-SR04)`.
- Implemented a Tkinter GUI module.
- Configured port forwarding on a `Huawei OptiXstar HG8145X6 router` to create an `SSH server`.
- Accessed the `SSH server` via PuTTY from a separate device not connected to the Raspberry Pi's local network.
- Attempted to install Node-Red and use Arduino IoT Cloud


__Face Detection:__
- Integrated a `USB webcam` with Raspberry Pi.
- Utilized `RealVNC` for remote access.
- Installed the `OpenCV` library.
- Ran `face and eye detection programs` using `haarcascade` XML files

Below is a consolidated document of the outputs that I did for this lecture. 

<iframe src="https://drive.google.com/file/d/1dkAes2LuDWfi0eAQsFqEA8irEPUvU_IC/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  The reports that I made for the exercises activities for product interconnectivity class
</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId %}
  </div>
</div>
<div class="caption">
   Video demonstration of coding ultrasonic sensor using RPI GPIOs
</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId1 %}
  </div>
</div>
<div class="caption">
   Video demonstration of pulse width modulation of LEDs using RPI programming.
</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId2 %}
  </div>
</div>
<div class="caption">
   Video demonstration of Tkinter for LED control.  
</div>

## LABORATORY:
The laboratory covers the use of microcontroller for IoT and automation. We got to provide **sensor integration** and **cloud connectivity** for real-time monitoring using two platforms (Arduino IoT Cloud, ThingsSpeak). The concepts that the class provide is an introductory on using these types of peripherals for various applications. Here are some of things that I have done knowing this :))

__Microcomputers for Control and Edge Processing__

**Raspberry Pi (RPI)**
- OS setup and configuration for standalone operation.  
- GPIO programming to control `actuators` (servo motors, pushbuttons).  
- Python programming for `automation sequences` (servo position cycles).  
- `Skill relevance`: Raspberry Pi acts as an `edge device`. in Intelligent Manufacturing Systems (IMS), handling local computation, machine control, and human-machine interfaces.  

__Sensor & Actuator Integration__
- Practical experience in connecting and programming sensors:  
  - `DHT11` → humidity & temperature monitoring.  
  - `LM35, pH sensor, Dissolved Oxygen sensor (proposed project)` → environmental monitoring for aquaculture.  
- Actuators:  
  - `Servo motors` for precise movement/feeding systems.  
  - `LED indicators` for process signaling.  
- **Skill relevance**: This is the core of **cyber-physical systems**, where machines perceive their environment and act intelligently.  

__IoT & Data Communication__
- Hands-on with `serial data transmission`, data cleaning, and visualization.  
- Implemented `real-time dashboards` (via Arduino IoT Cloud / ThingSpeak).  
- Learned to troubleshoot `Wi-Fi, firewall, and data-transfer issues`.  
- **Skill relevance**: These skills align with **Industrial Internet of Things (IIoT)**, enabling remote monitoring and predictive maintenance.  


__Simulation & Visualization__
- `VPython` for simulating 3D environments and interactive displays.  
- Showcased `augmented reality concepts` where virtual objects respond to real-world sensor inputs.  
- **Skill relevance**: Simulations and **digital twins** are increasingly used in **smart manufacturing systems** for design, testing, and operator guidance.  

__Systems Thinking & Project Integration__
- Developed a capstone project: `Intelligent Aquaculture Feeder System`.  
  - Integrated sensors (temperature, dissolved oxygen, pH).  
  - Used `ESP32 + Raspberry Pi + Servo motor` for feeding automation.  
  - Built a `cloud dashboard` for monitoring & control.  
- **Skill relevance**: Demonstrates the ability to design **end-to-end intelligent systems** combining hardware, software, IoT, and automation.  

<mark> The last part, I was able to present and showcase it in a IEEE conference, you may check it out on my publications section!! </mark> 

<iframe src="https://drive.google.com/file/d/1jxSDzEetau8OkzFXG5xqen9aWNzQPRD8/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  Consolidated reports presented to showcase made outputs
</div>


__REFLECTIONS__: 
Overall, I learned a lot but I then realize that I'm barely scratching the surface on the amount of the technology and forward thinking applications that needs to be learned to stay ahead of the indsutry standards. Quite frankly, the world has changed indeed and it is not enough that I stay contented in the small wins that I have done in this course but also look ahead on what is needed for the job and the duty that it comes when i'm dealing with it in real-life. 

There are so many things to explore and study that is why this is a continuous effort on my end if I want to become someone that can handle and contribute to `industry 4.0 in the Philippines`. These are merely the building blocks in **smart factories**, such as:  
- **Predictive maintenance** (via sensors + analytics).  
- **Automated material handling** (via robotics + IoT).  
- **Process monitoring dashboards** (via ESP32/RPi cloud integration).  
- **Digital twins & simulations** (via VPython/AR concepts).  

The next step for me is to continue down this road and know that I will never to prepared for what comes next but 50% of the effort comes from showing up and doing the work if I want to be part of this exciting industry~!

__Acknowledgements:__ Thank you doc Renann for the oppurtunity to publish our work to IEEE! sir sonjay for his guidance; Jaimie, Pat for being there 100% along the way for the project!