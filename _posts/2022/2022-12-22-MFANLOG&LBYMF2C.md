---
layout: post
title: Analog electronics design (MFANLOG & LBYMF2C)
date: 2022-12-22 20:40:00
description: My personal notes and review on analog electronics design 💾
tags: manufacturing_engineering automation_and_controls analog
categories: electronics 
thumbnail: assets/img/2022/thumbnail_mfanlog.png
giscus_comments: true
---

__TARGET AUDIENCE__: Students, Academics, Industry Professionals, Employers, and Tech Enthusiasts

_Note: Taglish_

__OVERVIEW__: 
Analog electronics design focuses on circuits that handle **continuous signals** (voltages and currents that vary smoothly over time). It covers the use of `passive components` that configures the electricity passing through its body to perform its function and  `active components` that needs an external power independent of the circuit to perform its work. Below is my learnings and reflection from these concepts.

## LEARNINGS:
Both the lecture and the lab focuses on circuit analysis where in we had to calculate for the voltage, current and power draw from a specific node of the circuit with the given analog components of the following: `resistors`, `capacitors`, `inductors`, `diodes`, `transistors`, and `operational amplifiers`. 

A lesson that I will remember was that from sir Mike Manguerra, our lecture instructor, stating that every circuit analysis is basically a `KVL and KCL down the line`. You have to follow the `flow and direction of the voltage and current` from the source down to the point of interest. This was valid in transistors that are gates down to op-amps where it increases the signal and amplify its voltage. This was helpful when you are troubleshooting these components that are often seen in many of our electronic devices.

__Basic Components__
- **Resistors, Capacitors, and Inductors**  
  Fundamental passive elements that control voltage, current, and energy storage in circuits.  
  - Resistors: Limit current and divide voltages.  
  - Capacitors: Store energy and filter signals.  
  - Inductors: Store energy in magnetic fields and smooth current flow.  

- **Diodes**  
  Semiconductor devices that allow current to flow in one direction. Used in **rectifiers, clippers, clampers, and voltage regulation**. I was able to learn about `forward-bias` and `reverse-bias` type of diodes to prevent current from flowing but on different ways.

__Transistor Devices__
- **NPN and PNP Transistors (BJTs)**  
  Bipolar Junction Transistors used for **amplification and switching**. Operate in cutoff, active, and saturation regions.  
- **JFETs (Junction Field-Effect Transistors)**  
  Voltage-controlled devices with high input impedance, commonly used in **amplifiers and analog switches**.  
- **MOSFETs (Metal-Oxide-Semiconductor FETs)**  
  Widely used in **power electronics and analog IC design**, offering high efficiency and scalability.  

__Amplifiers__
- **Small-Signal Amplifiers**  
  Circuits that boost weak input signals (e.g., audio or sensor signals) without significantly distorting them.  
- **Power Amplifiers (Class A, B, AB, C, D)**  
  Designed to drive loads like speakers or motors, focusing on efficiency and output power.  
- **Operational Amplifiers (Op-Amps)**  
  Versatile building blocks used in **filters, oscillators, comparators, and instrumentation circuits**.  

__Signal Processing Circuits__
- **Rectifiers & Power Supplies**  
  Circuits that convert AC to DC and regulate voltage for stable operation of electronics.  
- **Filters (Low-pass, High-pass, Band-pass, Band-stop)**  
  Circuits that shape frequency responses, essential in audio, communication, and control systems.  
- **Oscillators**  
  Generate periodic waveforms (sine, square, triangular) for use in **clocks, RF systems, and signal generation**. I got to use the oscilloscope to probe on the voltage and current on our specific circuits.   
- **Voltage Regulators**  
  Maintain constant output voltage despite input or load changes. This was used from our culminating project.

__Analysis & Tools__
- **Circuit Simulation (Multisim, LTspice, etc.)**  
  Software tools to model and test circuit performance before physical implementation. I was able to test our circuits using these before trying it out then on the breadboard.
- **Test Instruments (Oscilloscope, Multimeter, Function Generator)**  
  Essential for measuring voltages, currents, frequencies, and waveforms.  

Below is a consolidated document of the activities that I did that highlight the concepts above. 

<iframe src="https://drive.google.com/file/d/1Flh2kazL9TAY_cypMcbL1A2IBytfXgkd/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  Consolidated reports for the use of analog components and competencies
</div>

Aside from thje concepts above, for the final test of our domain knowledge we were tasked to create a bridge rectifier to convert wall outlet AC voltage to a stable DC voltage with a `transformer`, `diodes` and other analog components to achieve the goal. Below is our output where in we were able to do it using the breadboard but was unable to transfer it properly to a PCB, maybe due to my improper soldering (trust me, i got better and at the time, I was the only brave enough to kinda deal with blowing diodes and electrocution; I have learned more better ways then!!)

<iframe src="https://drive.google.com/file/d/1myea4b_pIYtMS7nuUrZqsiAViUwY8cIV/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  Final project for a 9VDC-0.8A regulated power supply. Shoutout to Justine and Kelso who were my groupmates at the time for this project.
</div>  

__REFLECTIONS__: 
There are many funny moments that happened in class like multiple blown components due to diodes being placed in reverse-bias and me connecting resistors in series to achieve the needed resistance since I dont have the off-shelf resistor at hand. The practical exam was us being tested on using the oscilloscope and how we can replicate the analog circuit to then test what is the voltage and current flowing on a certain point (iirc, cmiiw!). 

Honestly, these courses, I did not get to see the big picture when I was taking it. I did not pay attention much to the lecture as I always knew that the end goal was on mastering the modern stack which is digital electronics and embedded systems if I really want to make a career out of this. I took it for granted. I was looking ahead, but I was not at the moment. I never realized that I can learn and take this opportunity to learn `printed-circuit boards (PCBs)` design and not manually solder it on a universal PCB one. 

I could have appreciated more of this if I read more on analog systems and how they operate in the real world. In lieu of this, singit ko na rin ung kwento ni sir mike of MOSPHET speakers which is actually true. They sell these speakers with an advert about good sound from MOSPHETs but in reality its not the MOSPHETs that are doing the filtering for a better sound but its the Op-Amps. Nakita ko na yan sa Quiapo and its very misleading! 

Going back, although, I thought I was doing great, I was actually not seeing the value out of these classes. Reflecting on this, my next steps are to further prepare myself with the upskillings that I need to learn PCB design knowing that analog components taught will be used primarily for the power regulations and more advanced concepts like signal processing on embedded systems to determine performance of circuit.

