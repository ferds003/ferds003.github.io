---
layout: page
title: Vision-based grading and sorting of iceberg lettuce 
date: 2025-08-02
description: Utilizing genetic programming and fuzzy logic for a 3-level quality grading and sorting of locally-produced iceberg lettuce 🥬
category: electronics
subcategory: industrial automation
img: assets/img/pubs/thesis.gif
giscus_comments: true
pretty_table: true
images:
    slider: true
---

_Update:_ This project was accepted into TENCON 2025 IEEE conference!

_Github repo: [here](https://github.com/ferds003/Automated-Lettuce-Grading-and-Sorting-in-Postharvest-Manufacturing-Setup.git)_

<iframe width="853" height="480" src="https://www.youtube.com/embed/6sv5dE4qQQY" title="LettuceSORT Dyson Submission 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### OVERVIEW:
This project presents a **vision-based automated quality grading system for iceberg lettuce** (Lactuca sativa var. capitata), integrating `Genetic Programming (GP)` for parameter estimation and `Fuzzy Logic (FL)` for quality classification.
The system addresses inefficiencies in manual grading, ensuring objective, consistent, and non-destructive quality assessment in line with <u>Philippine National Standard for Head Lettuce</u> (PNS/BAFPS 19:2005)


### Key Features:
- Uses image-derived features (RGB & HSV) for analysis.
- Estimates chlorophyll-a, moisture content, and fresh head weight via genetic programming (GP) models.
- Classifies lettuce into three grades using a Mamdani-Type 1 fuzzy logic inference system:
  - Grade 1 (High Quality)
  - Grade 2 (Medium Quality)
  - Grade 3 (Low Quality)
- Achieved 90% classification accuracy on test samples.

## Methodology
1.) Image Capturing & Processing
- Lettuce heads were photographed in a controlled chamber (~400 lux).
- Images were pre-processed in MATLAB, with data augmentation (scaling, flipping, rotating) to expand the dataset.
- Extracted RGB and HSV mean values, commonly used in crop ripeness and food quality analysis.

2.) Parameter Extraction
- Three key quality parameters were measured in the laboratory:
- Chlorophyll-a – extracted using ethanol and quantified with UV-VIS spectrophotometry (663 nm, 645 nm).
- Moisture Content – determined via oven-drying at 80°C for 8 hours.
- Fresh Head Weight – measured directly with an analytical balance.

3.) Genetic Programming (GP) Modeling
- Input: RGB & HSV values
- Output: Predicted values of chlorophyll-a, moisture content, fresh weight.
- Models evaluated using R², RMSE, MAE, and complexity.
- GP1 (RGB-HSV inputs) outperformed GP2 (HSV-only inputs) in predictive accuracy.

4.) Fuzzy Logic Classification
- Mamdani-Type 1 fuzzy system with membership functions:
- Inputs: chlorophyll-a, moisture content, fresh head weight.
- Output: Grading level (L1, L2, L3).
- Membership functions:
  - Input parameters → trapezoidal/triangular sets (low, average, high).
  - Output (grade) → Gaussian functions.
  - Decision rules mapped estimated values to quality grades.

## Results
- Model accuracies:
  - Chlorophyll-a: 89.97%
  - Moisture Content: 92.8%
  - Fresh Head Weight: 85.38%
- Overall system grading accuracy: 90% (27/30 samples correctly classified).
- Minor misclassifications occurred, mostly biasing towards Grade 2 when the true grade was Grade 3.


### LEARNINGS:
Learnings for this culminating project of our course is of course the increasing need to blend the disciplines of mechanical, electrical and software development towards `emerging technologies`. We have demonstrated here that from the design phase to the implementation and validation of the system, just how important our field is for these types of application. 

This is especially true since both software and hardware are hard to combine where all engineering practices fail to meet and cover where they are lacking (i.e. ECE doing CAD work not knowing GD&T or ME doing wirings not knowing how to do a cont. test) is where MEM particularly their specialty in `mechatronics`, excel.

I was able to conceptualize and touch here all aspects of what MEM is but we even went beyond and consulted biology professionals that is outside the scope of our field to `justify our laboratory work` to capture the biochemistry and phenotyping of our iceberg lettuce cultivar and target surface canopy for our computer vision application towards fuzzy-genetic programming (naks, doc ronn & doc ira, i hope u see this, im using your doc lingo haha)

Overall, the project holds many potentials for `precision agriculture` and with new advancements in emerging tech, I'm just glad that we got to try this before this gets labelled as outdated work which is true given that more powerful black box AI systems are dominating the commercialization of such product. Here we value `explainability` for our AI system and try it out with our chosen quality parameters. 

Proud to share here our complete manuscript below!

<iframe src="https://drive.google.com/file/d/1akbL7AF7BaHsus9Qc953hN_rXd56FtWr/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  Complete ETD manuscript that was submitted for storage in DLSU library under MEM dept.
</div>

## Additional Considerations

Here are some of the calculations that I did for the verification of the conveyor belt dimension needed as well as the wirings I have done for the electricals. The MCB rating calculation was based on the `in-rush` current for the servo motors of 2.5A but it was minimal. Known power to move conveyor belt via motor is approximately `3.538 watts`, consider then 3x SF, thus 10A MCB rating was suitable. `AWG #12-#18` wires were considered for the wiring given the low load between AC and DC, typical for household applications. Considered trying ESP-32 based PLCs but was too expensive for our use case! We never added wiring diagram to the manuscript as we made changes along the way that made it inapplicable and we wanted to focus rather on the integration of the computer vision in automation. But it still gives the overview of all the peripherals with utilized! Grounding was not considered in this diagram, semi consideration for signals between wires too.

<iframe src="https://drive.google.com/file/d/1QhrdbPyfg30F4OOXy-CvnBQJ8YdiPGt6/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  Handwritten calculations for conveyor belt machine elements. This was later verified by groupmate :>
</div>

<div class="row mt-3 justify-content-center">
    {% include figure.liquid loading='eager' path='assets/img/2025/thesis_wiring_diagram.png' class='img-fluid rounded z-depth-1' zoomable=true %}
</div>
<div class="caption">
  Pseudo-wiring diagram for the vision based system. 
</div>

__HOW THIS PROJECT CAN BE FURTHER IMPROVED__: 
Despite the near complexities to utilize XAI techniques for the implementation of the vision based grading to infer the lettuce quality off only the pixels and known training dataset, the project can be further improved by giving out at least the values and picture of the given lettuce into the stakeholder. This is the essence of this model acting as a `support decision system` for lettuce quality determination and how likely the model was able to sort the quality off known laboratory values. 

The essence of this also is to also store the data and do `traceability` of the lettuce quality upon date of grading which will boost the credibility and how market goers will assure that the lettuce is indeed fresh and priced fairly of its quality. This is a missed oppurtunity to utilize `internet-of-things` but that was outside the scope of our research given the novelty of applying additional parameters for practical applications.

Lastly, we did consider the use of `PLC-based control` for the system given that we are managing only 3 actuators based on the model output to make it more robust. This is where we got stuck on how to connect the control logic from the MATLAB produced code. Looking at its now this can be hardcoded in such a way that a `OPC-UA` server is placed in a microcomputer that will then act as a gateway service between inferencing, quality forecast and then switching relay to actuate our servo arms. These will be considered in the future once deployment is being considered and in talks for future researchers for `digital agriculture`.

Lastly future implements can explore `digital twinning` to validate and simulate physical systems of the project before proceeding. This is an excellent way to provide and make inferred decisions about the moving parts and how they will interact before doing the actual assembly. Too bad and this was not part of our specific objectives.

---
_Note:_ Taglish going forward

__Long personal PS to my gropumates.__ Shoutout to my groupmates, Gabby, Romell, Elmo, Alexi for making our thesis come into life and for being cool under pressure HAHA since day 1 till the very end where I'm now selling our items for salvage, you've guys have been steady and approachable going beyond what was being asked of us. As in, grabe iba talaga feeling kapag maasahan mo ung mga kasama mo at walang bahid ng duda na kahit mahirap ung ginagawa nandiyan parin sila TT. I know bare minimum to ask pero di niyo lang alam how much I appreciate that!!

- For gabby, thanks for being such a caring and dependable groupmate. Even I know that napakahirap magdrive back and forth from north to south, vice-versa, dulo talaga as in. Tinulak mo sarili mo and recognize this as a priority even our safety in every step of the way. Hatid-sundo going to their place where we are doing the project. Even when I asked you to buy items for us or borrow tools, you do it without question. You even shouldered some of the expenses for us and even calmed my nerves when our adviser is chewing us out why tayo lang dalawa doing labwork. Laptrip parin ung time na stuck tayo sa EDSA rushing lang so that I can go to a concert late at night. You really got great leadership traits and sense of responsibilty, I'm sure you'll do great pare!

- For elmo, my go-to guy for practically anything as versatile ka to do both 3D printing what we need and help also on the code. I depend you to be there when nobody wants to do the job. I still remember me opening up our word doc at 2am in the morning and seeing your cursor move across the pages doing work while I'm just starting my grind! Very approacable ka in every sense of the word, ung tipong mapapakwento talaga ako nang di oras dahil ganyan ka ayos kausap and you always deliver on your words. Diko ma-imagine how many times I got lost in managing the project then you're there to pick up where I left from. I know dimo trip ung pag-CAD since you're minoring in cybersec kaya saludo talaga that you are more than willing to step up <3

- For alexi, same rin with elmo in every aspect, maybe more. You poured your time on something that was confusing and maybe counterproductive reflecting at it now but is critical to our system which was the calculations in the conveyor belt and our system flow. Back and forth pa tayo on doing the calculations and design considerations. I never really got to agree on it since iba-iba ung mga values ko sa na-calculate mo haha At the end, i defer to your calculations for all the right reasons, mainly my trust on your straightforwardness and commitment to make the system work given our constraints. For the lab, you were there for all the spectroscopy work and I never had to bother and worry about the work you did since I know you care about the quality of this project as much as I do.

- For romell, thank x8, for doing majority of our code and following up on my lead on how to tackle the control loop for the MCU. I'm sure it was not easy rin to get to familiarize with the MATLAB toolbox and lalo na when I said that I need a bunch of header function to be called in the main loop. Ako rin ung nalito when I wanted to verify the code and how it responds to the MCU since we had to stretch at most 10 meters worth of wires for that serial communication interface of the GPIO. Gusto ko pa nga mag-PLC pero we didnt have the time! Kinokonsider ko rin ung lag response on our actuators pero di noticeable thank god when na implement, so walang resistance overall in the system. Honestly, the code even though you got stuck on it along with your laptop, was very much the essence of our thesis kaya kahit makulit ako at I had insisted that you do the oddjob, you pulled through. Thanks, it was a rollercoaster pero naiahon rin natin :>