---
layout: post
title: My path on learning ROS2!
description: A video series on what I did to learn the basics of ROS2 for robotic manipulation.
category: electronics
img: assets/img/2025/ros2/thumbnail_ros2_blog.gif 
date: 2025-05-22 20:40:00 
giscus_comments: true
pretty_table: true
images:
    slider: true
driveId: 1NCPQhZa2Ky9wcDhgcUYrg_MrZWVg1U03 #talker-listener
driveId11: 1tkkMiDUbgcAsRJJxconsxKaaHXJT-_GP #ros2 node
driveId1: 18YFAwelwdyZ9z8GUpK12e25_G2meGbko #ros2 topic publisher
driveId2: 1FMW40tDZni7xVcHBUIQ-NB0tbvw93HNR #ros2 topic subscriber
driveId3: 1Kl_k3kebaBxa27ctyv5CcOcMxT8hdX2I #ros2 services
---

_About the thumbnail: This is a demonstration of the Turtle Sim teleop-key node! where the control is based on my keyboard arrow keys_

[... This blog is a WIP! I will provide further deets on topics that I have explored in this knowledge sphere :>]

Here are a series of my explanations for given demos that ROS2 community provides upon the installation of their packages! This speeds up truly the learnings and humble beginnings that I wanted to know to apply ROS2 in both `industrial` and `RnD` environments. 

### Talker-Listener Demo:

As a sneak-peek, below is a video about the `Hello world` equivalent for ROS2 which is the talker-listener application for ROS topics where in two different terminals are interacting to each other. One provides the input (aka talker) and the other checks and confirms the output (aka listener). This is seen in many scenes where the output needs to be further processed downstream in `actuators` or in next movement of the robot.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId %}
  </div>
</div>
<div class="caption">
    Video demonstration about talker-listener
</div>

### Creation of a ROS node (Making the turtle move in a circular pattern):

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId11 %}
  </div>
</div>
<div class="caption">
    Video demonstration about making a node in ROS2 env.
</div>

### ROS2 Topic Publisher:

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId1 %}
  </div>
</div>
<div class="caption">
    Video demonstration about making a publisher in ROS2 env.
</div>


### ROS2 Topic Subscriber:

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId2 %}
  </div>
</div>
<div class="caption">
    Video demonstration about making a subscriber in ROS2 env.
</div>

### ROS2 Services:

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId3 %}
  </div>
</div>
<div class="caption">
    Video demonstration about a new type of ROS communication protocol which is ROS services (client-server)
</div>

### LEARNINGS:

Definitely this is an exciting learnings to see (atleast for me), where this is not even discussed formally in class. I'm still constantly exploring it admittedly and one of the things that I have set my eyes on is how this can program industrial robots for my suited needs like verification of its placement in the assembly line or the need to constantly push and update changes in controlling robots!

Of course this comes `hand in hand` with industrial automation standards and definitely this can be applied further when PLC and/or other advanced technologies is added into the mix. For now I will settle on this but will reflect on how I can further improve as this as my basis for my learnings!
