---
layout: post
title: Manufacturing Processes and Practice (MFMCPR2 and LBYMF2A)
date: 2022-2-21 2:54:00
description: My reflection on hands-on experience and key learnings in computer-aided manufacturing~ 📟
tags: design_and_modelling manufacturing_engineering
categories: mechatronics
thumbnail: assets/img/2022/thumbnail_mfmpcr2.png
driveId: 1kgemXKaGyoJtEblno9U3o34OPa-6ocAd
driveId2: 1UZw1pceAnQsR7NrB7JAvSv60mNNLVqs-
giscus_comments: true
---

__TARGET AUDIENCE__: MEM_students, Academe, Industry_Professionals, Technical_Employers


__OVERVIEW__:
I took this class as a sophomore in my fourth term. It's the continuation of the MFMCPR1 where we had to learn about specific manufacturing machines... but its the traditional subtractive ones like lathe machines and milling machine where I presented in the video  below. Know more about the course in this [link](https://sites.google.com/dlsu.edu.ph/smeacademicdatabase/academic-database/mem-majors/mfmcpr2lbymf2a) made by SME org. What's more exciting about this course was that we finally tried computer numerical machine (CNC) in a simulation in F360 and CAMotics for the laboratory counterpart.

## CLASS:
My group and I presented the milling machine setup and the corresponding cutters needed for milling operations. The important thing to remember in milling machiones is the mounting and removing of the milling machine arbor where the cutter should be aligned to the table on the vise to ensure proper traversal of the cutter to the workpiece.

Sadly, there arent any milling machines working in the DLSU machine shop but for those with keen eyes, they will see a <mark> non-functioning milling machine </mark> past the V106 thesis room in a corner collecting dust lol. It has the saddle that moves the table and the cutting component on top from the overarm with the workpiece fixed in the table if you can imagine it! 

You may check this video regarding the presentation that we made:

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId %}
  </div>
</div>
<div class="caption">
    Presentation video for milling operations as well as specialized cutting components.
</div>

## LABORATORY:
For the lab, we got the joy to utilize the simulation of the CNC within the Fusion 360 Software and try it under CAMotics under .nc file. Below is a gallery of the CAD files that I made as exercise for the CAM programming. There is a steep learning curve for learning machining operations and tbf, any other software related to machine (G-Codes) are automatically made within the platform so we didnt had to worry that much on the specifics. Nonetheless, it was vital for us to understand that the sequential iterations were doing in order to complete the requirements for this course. 

Seen in the images below are the progressive exercises we did to hone this skill. The first one is simply toolpath for a simple subtractive milling operation and the other is a drilling operation respectively. 

<div class="row">
  <div class="col-md-6">
    {% include figure.liquid loading='eager' path='assets/img/2022/lbymf2a/lbymf2a_ex3.gif' class='img-fluid rounded z-depth-1' %}
  </div>
  <div class="col-md-6">
    {% include figure.liquid loading='eager' path='assets/img/2022/lbymf2a/lbymf2a_ex4.gif' class='img-fluid rounded z-depth-1' %}
  </div>
</div>

Below is the consolidated work of my group and I in terms of making the CAM procedures under the general milling machine found in Fusion360. Additionally, we got to apply also CAMotics software as an alternative on how to do the toolpathing as well as the canned cycling. The video shows the details of the milling operation we have coded for an opening plate that is typically seen in a car exhaust.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId2 %}
  </div>
</div>
<div class="caption">
    CAM simulation for the milling operation of a opening plate workpiece.
</div>

<iframe src="https://drive.google.com/file/d/1vY3n0V9zGQBiz8nS6gNJxqAk1R-A5Yii/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
    Consolidated reports made for CAM exercises.
</div>

__REFLECTION__: I was able to appreciate this class a lot since I really want to have a skillset to operate a modern computer numerical machines out there  in  the wild. Alas, this cannot be totally utilized by me in the field unless I apply for being a CNC programmer and it takes more than 3 months to master the machine and start earning money. nono, looking ahead, the path of an engineer is to determine and optimize the production of a certain plant and that can be done better with other tools at hand. BUT it never hurts to know cool stuff like this and certainly it is something that I wish for in the future where a job that can do this type of work and not be stuck in a corporate life!

PS. Shoutout to my groupmates at the time, ykwya!