---
layout: page
title: Motion study for a pick and place mechanism
date: 2023-08-12
description: Validation of made pick and place machine motion 
tags: mechatronics
category: mechanical
subcategory: CAE
img: assets/img/2023/thumbnail_pick_and_place.png
giscus_comments: true
driveId: 1JKZQSOD_N12wN3b5fg0iV5_SAivS8MNS
---

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId %}
  </div>
</div>
<div class="caption">
   Explanation video about the made CAD and motion study!
</div>

# Pick and Place Model

The most complicated model that I did to study its motion and movement is this `pick and place end effector`. There was not straight path for this; Despite the reference avaialble in YT [here](https://www.youtube.com/watch?v=chT_KNcMx2s) the implementation they did was the final product in Solidworks. I had to reverse engineer this and implement it in F360.

This is the culmination of the activities as this covers the complex mechanisms discussed from rocker to a specific movement for motion study.

<div class="row mt-3 justify-content-center">
    {% include figure.liquid loading='eager' path='assets/img/2023/mfknmat/6.png' class='img-fluid rounded z-depth-1' zoomable=true %}
</div>
<div class="caption">
  My model that I have made. Cannot simulate fully the movement due to the error attributed to the spring. Below is the reference for this mechanism.
</div>

<div class="row mt-3">
  <div class="col-12">
    <div class="ratio ratio-16x9">
      <iframe
        src="https://www.youtube.com/embed/chT_KNcMx2s"
        title="YouTube video"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</div>
<div class="caption">
  Inspiration for this project!
</div>

<iframe src="https://drive.google.com/file/d/1RCBxoaXNsGNE294KlV-0j8tWezylWfIk/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  Documentation for the motion study made and if the model achieved wanted movement.
</div>

You may refer further on my blog post regarding kinematic movements [here]({% post_url 2023/2023-03-15-LBYMF3A&MFKNMAT %})

__HOW THIS PROJECT CAN BE FURTHER IMPROVED__: There is always room for improvement. The issue with this project is the `compliant` of the mechanisms to adhere to the interactions et by the user. A better implementation can be made in other CAD software. Aside from the limitation of the software that I used, I can also put emphasis on the diagnostics of the motion. Once I have pinpoint that I cannot perform a full cycle of the performance, what I painstakingly do is to force it to go to other direction via moving the joints in `freeform` to achieve and validate the movement. This is a roundabout way to perform such engineering validation for the movement of this mechanism.
