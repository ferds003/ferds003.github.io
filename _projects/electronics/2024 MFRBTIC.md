---
layout: page
title: UR10 Robotic Arm and Dobot Simulations 
description: programming robotic arms using dedicated software via waypoints or set conditional parameters 🦾
tags: mechatronics
category: electronics
img: assets/img/2024/thumbnail_mfrbtic.gif
giscus_comments: true
driveId: 1y8GfQ3qocgM00GRsiJo13XmBOp_g70Gt
driveId1: 1wVTFzku9gPSOAqevvaii-1uZiw1rhxCs
driveId2: 16gViVhidQ04xik4jjCncY43UU1rqWbLG
pretty_table: true
---

### OVERVIEW:
The goal of these projects was to familiarize self with an industrial robotic arm and programming of these kinds of systems at a small scale. This in turns prepares me to for upscaled versions of the ones that I have demonstrated below like that of palletizing operations or mobile robot transportation within the assembly line. 

### UR10 Robot Arm:
I got to know UR10 CB3 robotic arm and do necessary calibrations to perform repetitive task to do pick-and-place operations and stacking operations with at least 3 cycles for repeatability. In the contents below, you will see that we had to figure out the waypoints, which are the points in the working space where the gripper will interact with the surrounding environment. It is important to consider the robot linkages not crashing with the surrounding objects and the joints not rotated above 90 deg.

<div class="col-sm mt-3 mt-md-0">
  {% include googleDrivePlayer.html id=page.driveId %}
</div>
<div class="caption">
    UR10 experiment 1 that does the simple pick-and-place motion using absolute waypoints
</div>
<div class="col-sm mt-3 mt-md-0">
  {% include googleDrivePlayer.html id=page.driveId1 %}
</div>
<div class="caption">
    UR10 experiment 2 that does a stacking motion using relative waypoints
</div>

<iframe src="https://drive.google.com/file/d/16FiFGSt6BIg-095lxxWqxGxBydHtnJvC/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
    Report of our use of the UR10 robot for pick-and-place movements
</div>


### Dobot Magician Mobile Robot:
This project simulates automated pathway clearance for a Polulu 3PI robot (3PI) using DOBOT Magician robot arms (DOBOT) in a manufacturing line setting. The 3PI represents the output product on a conveyor belt hindered by obstacles. The DOBOT arms, equipped with suction cup end-effectors, perform a pick-hold-return motion to remove these obstacles, ensuring an undisturbed run for the 3PI. The project aims to provide a kinematic model of the 3PI and DOBOT end-effector movements.

**Cycle Time Breakdown**

| Task | Description | Time (s) |
|------|-------------|----------|
| 1 | 3PI robot initialization before line tracing, with delay | 7 |
| 2 | 3PI reaches first DOBOT arm, first pick-hold-return | 4 |
| 3 | 3PI reaches second DOBOT arm, second pick-hold-return | 7 |
| 4 | 3PI returns to starting point, completing cycle | 6 |
| **Total Cycle Time** |  | **24 seconds** |

---

**📐 DH Table – DOBOT Magician Robot Arm**

| Frame (i) | aᵢ (link length) | αᵢ (link twist) | dᵢ (link offset) | θᵢ (joint angle) |
|-----------|------------------|-----------------|------------------|------------------|
| 1 | 0 | 0° | −100 mm (L1) | θ₁ |
| 2 | 0 | 90° | 0 | θ₂ |
| 3 | 135 mm (L2) | 0° | 0 | θ₃ |
| 4 | 147 mm (L3) | 0° | 0 | −θ₂ − θ₃ |
| 5 | 50 mm (L4) | −90° | 0 | θ₅ |
| 6 | 0 | 0° | −50 mm (−L5) | 0° |


<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId2 %}
  </div>
</div>
<div class="caption">
    Use of Dobot robot arm for clearance simulation for the Polulu robot line follower 
</div>

<iframe src="https://drive.google.com/file/d/1KF8tH_0JVQVdHmXJJPXNtUn9rB1b-xuC/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
    Report of our final design that utilizes path-follower algorithm for the Polulu mobile robot along with the pick-and-place motion for the Dobot robot using a suction gripper.
</div>

__LEARNINGS__: The application of the DH convention to the DOBOT Magician robot arm was a challenging task. The kinematic model was derived using the DH parameters, and the forward kinematics was calculated to determine the position and orientation of the end-effector. The inverse kinematics was also derived to determine the joint angles required to achieve a desired end-effector position. The project provided valuable insights into the kinematic modeling of robot arms and the application of kinematic equations to real-world problems.

_Note:_ You may also check the related blog post that I made that covers the lecture and supplementary discussions like that of the denavit-hartenbarg table [here.]({% post_url 2024/2024-05-13-MFRBTIC %})

PS. Shoutout to my co-implements for this project Kyle and Dolot, for being there 100% along the way!