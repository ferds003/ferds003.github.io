---
layout: page
title: Full rundown of DC-DC converters
description: I provide here an extensive simulation of DC-DC converters via Simulink and MATLAB environment. This covers its type of operating mode, PWM signalling, buck converters and flyback converters 🆙
category: electronics
img: assets/img/2023/mfergop1.png
giscus_comments: true
pretty_table: true
images:
    slider: true
toc:
  sidebar: right
---

# OVERVIEW / WHY:
The motivation of this project is to detail one of the most utilized piece of electronics in our daily lives which are DC-DC converters. "high" DC voltage harms the component inside a device unintended in its specification and that's a big no-no for engineers who want to have a device that will sustain its expected `end of life` (EOL). Having said that, DC-DC converters is the solution to this issue but is often overlooked as part of a bigger cog in the system. Of course, there are already a built-in `converters` in simulink but lets pretend we dont have those are left with the recipe and ingredients for making one!

With this exploration that I did, it may shed light on how these converters maintain its reliability and functionality over extensive periods of time.  

# METHOD:

I will be utilizing the Simulink environment under MATLAB. The simscape library `specialized power systems` is salient to this walkthrough of the different types of DC-DC converters.

## Buck Converter

--[explanation of buck converters here]--

Now to simulate this, I need to supply the converter with a DC voltage source block. A pulse generator block is used to trigger the MOSFET. The resistor in series with the inductor and capcitor shows the equivalent series resistance (ESR) of these components respectively. Setting the intiial condition to be `50V` as input voltage, `400 uH with 1m ohms` as ESR and `20 ohms` as output load. Additionally, pulse with frequency of `20kHz` and `duty cycle of 40%` will be applied to MOSFET gate. 

The converter i 

# FINDINGS / ITERATIONS:

# LEARNINGS:


<iframe src="https://drive.google.com/file/d/1qnR3EZdTJH-ZWGkCay7j2O3EkAmnF29v/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">

</div>

<div class="row mt-3 justify-content-center">
    {% include figure.liquid loading='eager' path='assets/img/2024/content_lbymf4b.png' class='img-fluid rounded z-depth-1' zoomable=true %}
</div>
<div class="caption">
  The Lasallian spoof pic post that I find very relatable for this case. ctto!
</div>

## LABORATORY:

<iframe src="https://drive.google.com/file/d/1jxSDzEetau8OkzFXG5xqen9aWNzQPRD8/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/2022/lbymf2d/lbymf2d_1.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/2022/lbymf2d/lbymf2d_2.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/2022/lbymf2d/lbymf2d_4.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>

<div class="caption">
</div>

<div class="row mt-3 justify-content-center">
  <!-- First image -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading='eager' path='assets/img/2024/what_is_MEM/mission.jpg' class='img-fluid rounded z-depth-1' zoomable=true %}
    <div class="caption mt-2">
      MEM Mission as seen in Velasco 2nd Floor bulletin board
    </div>
  </div>

  <!-- Second image -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading='eager' path='assets/img/2024/what_is_MEM/vision.jpg' class='img-fluid rounded z-depth-1' zoomable=true %}
    <div class="caption mt-2">
      MEM Vision as seen in Velasco 2nd Floor bulletin board
    </div>
  </div>
</div>



<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId %}
  </div>
</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId %}
  </div>
</div>
<div class="caption">
    Presentation done for the production management recommendations along with explanation of the calculations.
</div>

<!-- First row -->
<div class="row mt-3">

  <!-- First video -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include googleDrivePlayer.html id=page.driveId %}
    <div class="caption mt-2">
      Video demonstration of coding ultrasonic sensor using RPI GPIOs
    </div>
  </div>

  <!-- Second video -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include googleDrivePlayer.html id=page.driveId1 %}
    <div class="caption mt-2">
      Video demonstration of pulse width modulation of LEDs using RPI programming.
    </div>
  </div>

</div>

<!-- Second row -->
<div class="row mt-3">

  <!-- Centered third video -->
  <div class="col-sm-6 offset-sm-3 mt-3 mt-md-0 text-center">
    {% include googleDrivePlayer.html id=page.driveId2 %}
    <div class="caption mt-2">
      Video demonstration of a third experiment using Raspberry Pi.
    </div>
  </div>

</div>

__REFLECTIONS__: [here]({% post_url 2024-05-13-MFRBTIC %})
__HOW THIS PROJECT CAN BE FURTHER IMPROVED__: