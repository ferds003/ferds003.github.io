---
layout: post
title: Linkages, joints and frames; the basics of Kinematic synthesis (MFKNMAT & LBYMF3A)
date: 2023-03-15 20:40:00
description: This blog features everything that I did for the determinism of kinematic mechanisms that underly the fundamental aspect of motion within machinery, wont yap too much this time 
tags: design_and_modelling
categories: mechatronics
thumbnail: assets/img/2023/thumbnail_lbymf3a_blog.gif
giscus_comments: true
pretty_table: true
images:
  slider: true
toc:
  sidebar: right
---

__TARGET AUDIENCE__: Students, Academics, Industry Professionals, Employers, and Tech Enthusiasts

_About the Thumbnail: A simple grashof 4-bar crank-rocker linkage with a quick return. Seen in many mech designs!_
_Note: Casual taglish; No deep takes but cover enough to keep the discussion flowing._

__OVERVIEW__: Kinematics is the study of <u>motion without the regard to forces</u>. The sweet spot where the system functions as intended is called a mechanism synthesis where in your kinematic chain and components (`linkages, joints and frames`) work to acheive the desired output. 

I present here my undergraduate studies that focused on this topic. Its basically a dump of all of the mechanisms that we study so that we know how to design our own machineries in the future. By the end, i'll let you know my take on the usefulness of this and when can we use this in the field. 

Before that, let me present an overview of the topic and the basics we covered!

# Grashof's Law and Four-Bar Linkages

The simplest planar mechanism is the **four-bar linkage**. It consists of four links connected in a closed loop by four revolute joints.  
The **Grashof condition** predicts the relative mobility of the links based on their lengths.

If we let:  
- \(s\) = length of the shortest link  
- \(l\) = length of the longest link  
- \(p, q\) = lengths of the other two links  

Then Grashof’s Law states:

$$
s + l \leq p + q
$$

## Cases:
1. **Grashof (s + l ≤ p + q):** At least one link can rotate fully.  
2. **Non-Grashof (s + l > p + q):** No link can make a complete revolution; only oscillatory motion.

## Four-bar link varieties:
- **Double-crank:** both adjacent links to shortest link rotate fully.  
- **Crank-rocker:** shortest link adjacent to fixed link → crank rotates, opposite link rocks.  
- **Double-rocker:** shortest link is opposite the fixed link → both rock.  
- **Slider-crank:** a limiting case when one link becomes infinitely long (a slider). 

All these mechanisms, we tried to model via F360 and I will provide with the samples that I have made in the next section. I want first to establish first here the slider-crank mechanism which drives many `actuators`.

# Slider-Crank Mechanism

A slider-crank is essentially a four-bar linkage with one infinite link. It converts rotary motion into linear motion.

- **Applications:** internal combustion engines, compressors.  
- **Kinematic relations:**  
  If crank has angle \(\theta\) and length \(r\), and connecting rod length \(l\), slider displacement \(x\) is:

  $$
  x = r\cos\theta + \sqrt{l^2 - (r\sin\theta)^2}
  $$

This nonlinear relation explains piston motion.


Another things that I find interesting is `coupler curves` and its corresponding motion. This accompanies the 4-bar mechanism traces.

The **coupler link** (floating link) of a four-bar mechanism traces complex paths.  
- The locus of a point on the coupler is called the **coupler curve**.  
- Coupler curves can generate approximate straight lines (e.g., Watt’s or Chebyshev’s linkages).  

This property is exploited in **path generation** problems where you want the coupler point to pass through given target positions.


# Motion Generation Synthesis

Now, of course to generate the position of these linakges, we want the desired output positions of these linkages to achieve the wanted `orientation and path`. The fundamental of these are the `2-position synthesis` and `3-position synthesis`.

### 2-Position Synthesis
For two desired output positions (e.g., rocker angle or coupler orientation), we solve geometric equations to ensure the linkage passes through both.

- Rocker output: specify two angular positions of rocker.  
- Coupler output: specify two positions of a coupler point.  
- Solution: construct circle/line intersections to satisfy constraints.

### 3-Position Synthesis
Three prescribed positions provide stronger motion control.

- The essence: pick **2 or 3 points in space** as desired outputs for the coupler or rocker.  
- The mechanism is synthesized so that the **actual motion** interpolates these points.  
- For planar four-bars, three positions are the maximum that can be exactly matched (beyond that → approximate synthesis).

There are many other synthesis that must be considered if the designer will want to product the desired motion regardless of applied forces. An example of this would be the straight-line linkages seen below like [chebs]((https://blender.stackexchange.com/questions/301727/rigging-the-chebyshev-straight-line-linkage-mechanism)) and [peau-lipkin](https://medium.com/@aryan.koshatwar20/straight-line-mechanisms-and-applications-f11164df7769) (I find this very cool as the conversion of rotary motion to a straight motion has many application!)

<div class="container">
  <!-- First image -->
  <div class="row mt-3 justify-content-center">
    <div class="col-md text-center">
      {% include figure.liquid loading='eager' path='assets/img/2023/mfknmat/chebs.gif' class='img-fluid rounded z-depth-1' zoomable=true %}
        <div class="caption mt-2">
          Chebyshev Straight-Line Linkage Mechanism
        </div>
    </div>
    <div class="col-md text-center"> 
      {% include figure.liquid loading='eager' path='assets/img/2023/mfknmat/lipkin.gif' class='img-fluid rounded z-depth-1' zoomable=true %}
      <div class="caption mt-2">
        Peaucellier–Lipkin linkage
      </div>
    </div>
  </div>
</div>

Now let me cover the stuff that I was able to model and study to determine its motion~~

# Backhoe Excavator Motion

Based on the given picture I provided here how a backhoe move which is a 2-part articulating arm.

<div class="row mt-3 justify-content-center">
    {% include figure.liquid loading='eager' path='assets/img/2023/mfknmat/1.gif' class='img-fluid rounded z-depth-1' zoomable=true %}
</div>
<div class="caption">
  Animated image of the model made
</div>

<iframe src="https://drive.google.com/file/d/1M-ebBwJTj0iJ5A98FeDDSDgAoPu1MdeD/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  Documentation for the motion study made and if the model achieved wanted movement.
</div>

# Graphical Linkage Synthesis (Slider-Crank)

With the given ternary link and set grounds and linkage length and angle, I was able to make this `crank-slider mechanism`.

<div class="row mt-3 justify-content-center">
    {% include figure.liquid loading='eager' path='assets/img/2023/mfknmat/2.gif' class='img-fluid rounded z-depth-1' zoomable=true %}
</div>
<div class="caption">
  Animated image of the model made
</div>

<iframe src="https://drive.google.com/file/d/13ACTiperCvEZM7GyNGthtBvDrdTL5Eex/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  Documentation for the motion study made and if the model achieved wanted movement.
</div>


# Prismatic and Revolute Joints; Defining this in software

<div class="row mt-3 justify-content-center">
    {% include figure.liquid loading='eager' path='assets/img/2023/mfknmat/3.gif' class='img-fluid rounded z-depth-1' zoomable=true %}
</div>
<div class="caption">
  Animated image of the model made particualrly the piston whistle maker :)
</div>

<iframe src="https://drive.google.com/file/d/1ETMs4j_v_dqlk5V8ewwk2em5z9_PnHiJ/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  Documentation for the motion study made and if the model achieved wanted movement.
</div>

# CAM Follower

A cam follower sample where the movement is dependent on the body inside the follower, intended movement mimics a simulated toy motion. (diko lang maipikita ung laruan :<)

<div class="row mt-3 justify-content-center">
    {% include figure.liquid loading='eager' path='assets/img/2023/mfknmat/4.gif' class='img-fluid rounded z-depth-1' zoomable=true %}
</div>
<div class="caption">
  Animated image of the model made
</div>
<iframe src="https://drive.google.com/file/d/1fnjB81yF1yDs86RnwnAGrqauY7klGbks/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  Documentation for the motion study made and if the model achieved wanted movement.
</div>

# Gear Box

Another common validation that is done for kinematic motions is the performance of gears in `set degrees of shaft`. I show here a gearbox and a samll output indicator to check if the output is as intended. 

<div class="row mt-3 justify-content-center">
    {% include figure.liquid loading='eager' path='assets/img/2023/mfknmat/5.gif' class='img-fluid rounded z-depth-1' zoomable=true %}
</div>
<div class="caption">
  Animated image of the model made

<iframe src="https://drive.google.com/file/d/1Ilmw4ex6aWwIgGNNSq8gpOTyyDQeuuMQ/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  Documentation for the motion study made and if the model achieved wanted movement.
</div>


# Pick and Place Model

Lastly, the most complicated model that I did to study its movement is this `pick and place end effector`. There was not straight path for this; Despite the reference avaialble in YT [here](https://www.youtube.com/watch?v=chT_KNcMx2s) the implementation they did was the final product in Solidworks. I had to reverse engineer this and implement it in F360.

This is the culmination of the activities as this covers the complex mechanisms discussed from rocker to a specific movement for motion study.

<div class="row mt-3 justify-content-center">
    {% include figure.liquid loading='eager' path='assets/img/2023/mfknmat/6.png' class='img-fluid rounded z-depth-1' zoomable=true %}
</div>
<div class="caption">
  My model that I have made. Cannot simulate fully the movement due to the error attributed to the spring. Below is the reference for this mechanism.
</div>

<div class="col-12 mt-3 mt-md-0">
    {% include video.liquid path="https://www.youtube.com/embed/chT_KNcMx2s" class="img-fluid rounded z-depth-1" %}
</div>

<iframe src="https://drive.google.com/file/d/1AvdNyp7UGYQu3vAOoo9oyT6pjQfh2C7J/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  Documentation for the motion study made and if the model achieved wanted movement.
</div>

__REFLECTIONS__:

Of course, the beauty of kinematic mechanisms is that the machine is able to make our life easier by moving as desired. This comes in my fields like **Robotics:** where link synthesis should be considered manipulators. In fact, `denavit-hartenberg` names is felt in this field with their contribution of the term `cognates` which is the fancy term for the position synthesis for any n-link. We did determine that 4-bar linkages is the optimal use of linkages and considering beyond this goes into theortical territory.

Aside from this, I think I did mention that `actuators` should abide to these overall principles like **Engines & Pumps:** that will do slider-crank mechanism for `power transmission`. I've seen physical **Packaging machines:** that utilizes cam and coupler mechanisms for `intermittent motion` (geneva mechanism too~!)

Personally, all this is self-taught and engrained into memory. Nagiging pababaya ung instructor samin and I do believe that if you really want to apply this in real projects, it will be most likely in `product development` and `research and development` for specific product designs. Other than this, its more of the intuition of the movement of the product to practically define it is a way to use this in the field!

Lmk in the comments your other takes for this ( ๑‾̀◡‾́)✨