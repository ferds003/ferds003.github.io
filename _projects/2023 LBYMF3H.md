---
layout: page
title: 3D scanning and printing of a person's bust
description: Utilizing LiDAR to capture a 3D scan of a persons head ready for use and print 🤳🏻
tags: mechatronics
category: mechanical
img: assets/img/2023/thumbnail_lbymf3h.gif
giscus_comments: true
---

### OVERVIEW:
The motivation for this project is to capture the details of the face and 3D print it for personal use. The process involves 3D scanning and simulating the 3D printing of a human face using an iPad Pro with LiDAR, Autodesk Meshmixer, and Ultimaker Cura. The project aimed to capture a 3D scan, refine it in Meshmixer, and simulate its printing in Cura. 

The methodology involved using the iPad Pro's LiDAR to scan a face, editing the resulting STL file in Meshmixer to isolate the head, and then importing the file into Cura for print simulation. Cura was used to generate G-code, simulating the 3D printing process. This project highlights 3D printing's flexibility and customization capabilities, acknowledging both its advantages and challenges, such as maintaining consistent print quality and the need for user expertise. My group and I was able to successfully simulated the 3D printing process, identifying areas for improvement, particularly in capturing finer details during the scanning phase.

### FINDINGS:

The scanned data from the LiDAR is processed using Autodesk Meshmixer, a 3D modeling software offering "a variety of tools and features for 3D modeling and digital sculpting," including mesh repair and Boolean operations. The final CAD file is imported into Ultimaker Cura, a slicing software, "for simulation of the 3D printing process and to generate the toolpaths for the layers of the output print." While the project focused on simulation, the students considered printer models and filament materials.

The process involved adjusting the size of the 3D CAD object to fit the simulated printer (Ultimaker S4) and using Cura to generate G-codes for the extruder's tool path. <mark> The project successfully created a simulated 3D model of a classmate's face, demonstrating the potential of 3D printing for customization and complex geometries. However, the report acknowledges challenges in maintaining consistent print quality due to printer calibrations and the need for user knowledge of technology, materials, and software. </mark>

The students suggest that future projects should focus on **capturing finer details** and **minimizing movement** during the scanning process to improve model accuracy, noting that "to be able to have better results, the group would like to recommend that the human model should avoid any movement to properly capture small details like the angle of the mouth and have a more accurate output of the model."

- Project: 3D scanning and printing simulation.
- Tools: iPad Pro (LiDAR), Meshmixer, Ultimaker Cura.
- Process: Scan, pre-process in Meshmixer, simulate printing in Cura.
    - LiDAR technology enables precise 3D scans.
    - Meshmixer allows for mesh manipulation and repair.
    - Cura generates toolpaths for 3D printing simulation.
- Simulation considered printer model and filament material.
- Challenges: Maintaining print quality, user knowledge requirements.
- Future improvements: Capturing finer details, minimizing movement during scanning; 3D printing offers flexibility and customization.

### LEARNINGS:
This project highlights the use of 3D scanning and printing simulations for advanced manufacturing technology and techniques being applied in the indsutry. The hopes of this project is to present this as a basic project with further oppurtunities to upscale the production and scanning accuracy with better tools and demand.   

PS. Shoutout to Nic, Elmo and Pat for being co-devs for this project. Thanks for Jose as being our model subject for this project :)) 

<iframe src="https://drive.google.com/file/d/1VXvhLuNH07m-wVjTmc7boubKzClolYdK/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
    Report of our 3D scanning project for a figure bust! 
</div>