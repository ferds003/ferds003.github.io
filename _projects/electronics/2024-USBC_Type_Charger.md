---
layout: page
title: PCB Design for a USB-C Type Charger for Powerbank
description: use of the MCP73811 and PAM2401 IC chips to make a USB-C type charger connected to a battery pack under Altium Designer
date: 2024-07-13 20:40:00
category: electronics
subcategory: hardware and pcb design
img: assets/img/2025/pcb/USB_C_Charger/thumbnail_usb_charger.png
giscus_comments: true
pretty_table: true
images:
    slider: true
driveId: 1Kymw7Uk6B9Qb8VV9e40p_axXU64GSohd
---

_About the Thumbnail:_ This is the 3D model of the made USB Type-C charger typically seen in powerbanks to first provide in the `in` port a means to charge the connected battery and the `out` power to retrieve the stored power from `rechargeable battery`.  

<div class="row mt-3 justify-content-center">
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading='eager' path='assets/img/2025/pcb/USB_C_Charger/usb_charger.gif' class='img-fluid rounded z-depth-1' zoomable=true %}
    <div class="caption mt-2">
      animated image of the made PCB board
    </div>
 </div>
</div>

## OVERVIEW:
This project focuses on designing and fabricating a compact `USB Type-C charger` capable of charging a `single-cell Li-ion battery` and providing a stable **5V output**. The design integrates two primary ICs:
- **MCP73811** — a linear **Li-Ion/Li-Polymer battery charging controller** from Microchip.
- **PAM2401** — a **step-up DC-DC converter** from Diodes Inc., used to boost the 3.7V battery voltage to 5V.

The goal of this project was to create a cost-effective and manufacturable PCB charger with standard USB-C input/output and efficient power conversion. All circuit development was done in **Altium Designer**, including schematic capture, PCB layout, and CAM file generation for production.

Below is an explanation video for the project that details the execution of the project post-hoc!

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId %}
  </div>
</div>
<div class="caption">
    Video to demonstrate and introduce the made PCB design
</div>

## METHODOLOGY:

<div class="row mt-3 justify-content-center">
  <!-- First image -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading='eager' path='assets/img/2025/pcb/USB_C_Charger/USBC Charger-1.png' class='img-fluid rounded z-depth-1' zoomable=true %}
    <div class="caption mt-2">
      Charger controller schematic
    </div>
  </div>

  <!-- Second image -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading='eager' path='assets/img/2025/pcb/USB_C_Charger/USBC Charger-2.png' class='img-fluid rounded z-depth-1' zoomable=true %}
    <div class="caption mt-2">
      Step up DC-DC Converter
    </div>
  </div>
</div>


[**MCP73811 Battery Management System**](https://ww1.microchip.com/downloads/en/DeviceDoc/22036b.pdf)
Based on the **Microchip MCP73811 datasheet**, the design implements a **constant-current/constant-voltage** charging profile suitable for 3.7V single-cell Li-ion batteries.  
Key design parameters included:
- **Charge current** set to **0.5A** using a 2kΩ resistor on the PROG pin.
- **Cutoff voltage** fixed at **4.2V**, consistent with Li-ion chemistry.
- Input from the **USB Type-C port** is regulated through filtering capacitors (C1, C2) before feeding the MCP73811’s VIN pin.
- **CHG indicator LED** is connected to the STAT pin to display charge activity.
- A **slide switch** (JS102011JAQN) provides input power control.

[**PAM2401 Step-Up Converter**](https://www.diodes.com/datasheet/download/PAM2401.pdf)
The **PAM2401** is a 1.0MHz, high-efficiency **boost converter** that steps up the battery voltage (3.0–4.2V) to a regulated **5V USB output**.  
From the **PAM2401 datasheet**, the feedback network (R3–R6) and compensation capacitors (C3, C4) were designed to achieve:
- **Output current** up to **1A**
- **Input range** from **0.9V to 4.75V**
- **Efficiency** of approximately **95%** under nominal load.

Schottky diodes (VS-15MQ040NTRPBF) and a 2.2µH inductor (TDK MLP2520S2R2MT0S1) handle power switching and energy storage, respectively. Output decoupling uses low-ESR capacitors for ripple suppression. Data resistors (R7–R10) were added to emulate **USB iOS charge profiles** on D+ and D– lines. 

Kindly check further the `manufacturing parts and materials` considered for this project below.

<iframe src="https://drive.google.com/file/d/1ck9IjEJfGkSFeBpiZcwW_mSwO615M9bM/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  BOM line number items that totals to 19 components considered for the product!
</div>


## LEARNINGS:

One of the conveniences of utilizing `ALtium Designer` is that I can immediately make a bill of materials from the manufacturers part search. This saves me a lot of time and definitely a neat feature to have when make such projects that often needs to have fast iterations per prototype.

Another unique take that I was able to do for project is to make custom schematic diagrams for the IC chips in question for the project. Since the manufacturer of these chips does not provide the `schematic footprint` and the `3D models`, I got the oppurtunity to make it own utilizing the in-built library and standards that the `datasheets` provided using the `IPC Compliant footprint wizard` from the tool tab of Altium using the `small outline packages (SOP)` convention. You may check my work on the images below.


<div class="row mt-3 justify-content-center">
  <!-- First image -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading='eager' path='assets/img/2025/pcb/USB_C_Charger/pcb2.png' class='img-fluid rounded z-depth-1' zoomable=true %}
    <div class="caption mt-2">
      IC size package for the PAM2401
    </div>
  </div>

  <!-- Second image -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading='eager' path='assets/img/2025/pcb/USB_C_Charger/pcb1.png' class='img-fluid rounded z-depth-1' zoomable=true %}
    <div class="caption mt-2">
      IC size package for the MCP73811
    </div>
  </div>
</div>

Lastly, I have made the `gerber files` for sending to PCBway for them to check if it is ok for manufacturing. Considered **Gerber and drill files** directly through Altium’s CAM processor. Verified design rules (clearances, hole sizes) for manufacturability. Exported a **stack-up report** summarizing copper, dielectric, and net connectivity layers.

__HOW THIS PROJECT CAN BE FURTHER IMPROVED__: 

PCB layout can be further improved of course with better tracing and minimize size constraints. I was not able to consider **short power loops** for the PAM2401 boost converter to reduce noise. but I did have thicker and wider copper traces for BMS for current handling. Should this be considered for mass production, it is a need to include **silkscreen labels** for USB Type-C orientation and corresponding test points, which I did not consider since this will be mainly utilized for my other personal projects!
