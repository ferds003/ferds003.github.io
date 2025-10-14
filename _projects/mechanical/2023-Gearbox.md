---
layout: page
title: Motion study for a gearbox
date: 2023-08-12
description: Application of geabox for increasing RPM 
tags: mechatronics
category: mechanical
subcategory: CAE
img: assets/img/2023/thumbnail_gearbox.png
giscus_comments: true
driveId: 1rwzdmk8PUBdzapiNNk60v3fToAepReXB
---

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId %}
  </div>
</div>
<div class="caption">
   Explanation video about the made CAD and motion study!
</div>

Another common validation that is done for kinematic motions is the performance of gears in `set degrees of shaft`. I show here a gearbox and a samll output indicator to check if the output is as intended. 

<div class="row mt-3 justify-content-center">
    {% include figure.liquid loading='eager' path='assets/img/2023/mfknmat/5.gif' class='img-fluid rounded z-depth-1' zoomable=true %}
</div>
<div class="caption">
  Animated image of the model made
</div>

__HOW THIS PROJECT CAN BE FURTHER IMPROVED__: The gear box made simply demonstrates the increase of RPM but I was not able to showcase the decrease in torque outputted. As far as I know the only validation for this is to physically simulate and use a `force meter` to determine if the system has a well-calibrated torque in real life. Although, I did mention the formula between input and output where the relationship is clear studied and defined in most application. In real life, `vendors` will actually just provide the `ratio` and the `expected power transmission` so to be wary on what type of application so that the gears can remaining and perform till its EOL.  

You may refer further on my blog post regarding kinematic movements [here]({% post_url 2023/2023-03-15-LBYMF3A&MFKNMAT %})