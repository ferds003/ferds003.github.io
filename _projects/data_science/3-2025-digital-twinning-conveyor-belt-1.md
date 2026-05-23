---
layout: page
title: Development of a Conveyor Belt Digital Twin
description: Using Unity and C# scripts for physics, I explore here how to replicate the movement of conveyor belts
date: 2025-06-03 20:40:00
category: data_science
subcategory: physical_systems
img: assets/img/2025/thumbnail_digital_twin_conveyor.gif
giscus_comments: true
pretty_table: true
images:
    slider: true
driveId: 1VR7uI9zRyW38ByZb46WL_irt-KMOUGFz
---

_About the Thumbnail:_ This is the made demonstration of series of conveyor belts, inclined and positioned to have a infinite loop sequence! 

## OVERVIEW:

This project explores the creation of a **digital twin for a conveyor belt system** using **Unity3D and C# scripting** to simulate real-world physics behavior.  
A *digital twin* is a virtual representation of a physical system that mirrors its dynamics in real time, enabling engineers to test, optimize, and visualize performance before physical prototyping.

The goal of this project was to:
- Recreate a **physics-based conveyor belt prototype** in Unity.
- Understand how **colliders**, **rigidbodies**, and **C# physics scripting** interact to produce controlled motion.
- Experiment with **scripted vs. natural physics behavior**, and study the impact of **FixedDeltaTime**, **DeltaTime**, and **frame rate (FPS)** on simulation accuracy.
- Apply **quaternion rotation logic** for conveyor belt orientation and movement consistency across update loops.

_Note:_ Files are available upon reasonable request!


## METHODOLOGY:

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId %}
  </div>
</div>
<div class="caption">
  Explanation video for the virtual commisioning
</div>

### Project Setup:

The conveyor belt system was modeled using `Fusion360` exported as .fbx files and additional components using `Unity’s GameObjects` hierarchy:
- **Base Frame** – static structure with box colliders.
- **Belt Surface** – moving collider surface simulating belt transport.
- **Rollers / Guides** – rotating parts driven by torque or scripted rotation.
- **Objects** – cubes or packages interacting with the belt using rigidbody components.

`IMPORTANT:` You have to have a <u>fundamental understanding</u> of conveyor belt systems to make design and known the interactions needed for the materials to move.

Each physical component was assigned:
- A **Collider** (BoxCollider or MeshCollider) to define its physical boundary.
- A **Rigidbody** to enable force-based interactions or scripted motion updates.

### Physics Consideration

BoxColliders were used for both the belt and packages.

- The belt collider remained kinematic, while the object `rigidbody` responded dynamically.
- physics Material was applied to tune `friction and bounciness` to achieve smooth transport.

- `FixedUpdate()` → runs at a constant time step `Time.fixedDeltaTime ≈ 0.02s by default`.
Ideal for physics calculations to ensure deterministic outcomes.

This basically runs every frame and depends on FPS Time.deltaTime.

`Euler angles` often introduce gimbal lock and interpolation errors when rotating moving belts or rollers.
To achieve stable rotation along the conveyor path, Quaternion math was utilized. Quaternions are essential when simulating rotational systems like roller shafts, servo-driven belts, or robotic joints, ensuring stability even during chained axis rotations.


### LEARNINGS:

I was able to understand the relationship between **colliders**, **rigidbodies**, and **scripting** for stable digital twinning. Overreliance on Unity’s default physics may cause unpredictable jitter; balancing **natural** and **scripted physics** offers better control.

Another thing would be the use of `FixedDeltaTime` to govern reliable motion updates, while `DeltaTime` varies with rendering speed.  
Keeping motion updates in the **physics loop** ensures fidelity between simulation and real-world conveyor behavior.

### Digital Twin Realism towards Virtual Commisioning 
Achieving accurate **digital twin behavior** requires not just visual realism but also **temporal and dynamic consistency**.  
Unity’s physics engine, when combined with deterministic scripting, can mirror real mechanical timing closely. This is often done as virtual commisioning to validate control mechanical systems before deployment reducing cost and the need to setup and prototype the product in the field.



__HOW THIS PROJECT CAN BE FURTHER IMPROVED__: This falls under mechanical systems, `computer-aided engineering` as we are validating the mechanical systems utilized by utilizing `Unity's` physics simulation. What I did not focus on was the other aspect of the digital twin which is when we apply this for `monitoring` and `asset management`. This will involve getting access to sensors and replicating that information to a 3D model which is hard to replicate in Unity. This is merely done for `virtual commissioning` or the act of using simulation tech for control systems before it is applied in the field.

Better use case of digital twinning for monitoring will need the use of vendor specific software like that of Siemens and Schneider Electric or get a copy of `Vision Components` software where you can monitor the movement based on control feedback signals connecting it via OPC-UA!