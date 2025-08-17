---
layout: page
title: Time study for Br. Andrew Gonzales hall
description: Conducted a time study analysis for the worst building in DLSU-M to take classes (imho!) 😅
tags: operations_and_management
category: management
img: assets/img/2024/thumbnail_lbymf4b.png
giscus_comments: true
---

_NOTE: Taglish_

### OVERVIEW:
The goal of this project is to quantify the time it takes to get to class from the ground floor to the 11th-16th floors using repeated trials with controlled variables at defined stations.

__Motivation:__
- Officially – To address the long elevator wait times and inefficiencies that many students experience daily in this building.
- _Unofficially_ – I want to justify me taking the stairs and know if it was worth taking it everytime I do that unnecessary workout. True story, whenever I have classes in Andrew, I avoid the snake-like elevator line because: 1.) I don’t like being shoulder-to-shoulder with fellow students, lalo na kung pawis ako galing commute (at aminin natin, totoo ung stereotype na mahusga mga tao lalo na sa uni na 'to). 2.) I'm claustrophobic.


Because of these, I usually just take the stairs going up and down (bahala na kung mahingal sa dulo! Check the half-joking pub from `The LaSallian` below, kondisyon ko yan paglagpas ng 12th holy flr haha 😔). I’ve already timed myself before — it takes roughly <mark> 5 minutes at a controlled pace from the ground floor to the 16th floor using the stairs in my experience</mark>, which is manageable. I’ve always wondered: is there really no significant difference between taking the stairs vs. the elevator when going to class?

<div class="row mt-3 justify-content-center">
    {% include figure.liquid loading='eager' path='assets/img/2024/content_lbymf4b.png' class='img-fluid rounded z-depth-1' %}
</div>
<div class="caption">
  The Lasallian spoof pic post that I find very relatable for this case. ctto!
</div>

### FINDINGS:
A time study was conducted to measure the efficiency of the **Br. Andrew Hall elevator system** during peak hours.  
Five stations were defined:  
1. Waiting in line to get to a higher floor.  
2. Waiting inside the elevator going up.  
3. Time spent attending class (fixed).  
4. Waiting for the elevator to go down to the ground floor.  
5. Waiting inside the elevator going down.  

The study involved **10 repeated cycles** per station per group member, using a stopwatch to record timings.

- **Bottleneck Identification:**  
  - The **"Waiting in Line"** stage was the **most time-consuming** step.  
  - Standard time for this station was the **highest among all**, excluding the fixed “attending class” time.  
  - On average, it took **nearly 7 minutes (~420 seconds)** just to move to the next stage during peak load.

- **Performance Metrics:**  
  - **Rating Factor** = (Observed Time − Idle Time) / Observed Time.  
  - **Normal Time** = Average Time × Rating Factor.  
  - **Standard Time** = Normal Time / (1 − Allowance).  
  - Allowances varied per station to reflect delays and human factors.

- **Observational Insights:**  
  - **Entry Point Impact:** The **Agno Gate** consistently had longer queues than the **Taft Gate**.  
  - **Human Factor:** Security personnel sometimes optimized elevator capacity by directing passenger entry.  
  - **Destination Variability:** With **15+ possible floors**, travel times varied significantly by destination.


<div class="row mt-3 justify-content-center">
  {% include figure.liquid loading='eager' path='assets/img/2024/content_lbymf4b1.png' class='img-fluid rounded z-depth-1' zoomable=true %}
</div>
<div class="caption">
  The time study bar chart that covers the amount of time that students spend per station assuming student will enter from agno gate (fidel reyes-facing entrance) to take a single class in andrew and go down to go outside building all using elevators as mode of transport.  
</div>

### One-sample t-test for difference of means (5 mins using stairs vs. 7 mins. wait for elevator)

I want to determine if there is a significant difference between the 5-min. travel using the stairs vs. the 7-min. of waiting for the elevator. This would mean I will apply a two-tailed test to determine if there is a difference of mean on a 95% confidence interval. 

$$ H_0: \mu = 300 \quad \text{seconds} $$ 

$$ H_a: \mu \neq 300 \quad \text{seconds} $$

Where:
- $$ \mu $$ = True mean waiting time

Using the t-score formula below,

$$ t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}} $$

Where:
- $$  \bar{x} $$ = Sample mean (393.3 sec)  
- $$ \mu_0 $$ = Hypothesized mean (300 sec)  
- $$ s $$ = Sample standard deviation (60 sec, assumed from observations)  
- $$ n $$ = Sample size (10)

I will get the results from calculations to be: $ t_{score} = 4.91734 $$

We need to get the p_value of this t_score using `scipy.stats` (since wanted value for degree of freedowm cannot be seen from student table), you will get a value of $$ 0.00083 $$

This value is lower than the $$ t_{critical} \text{value} = 0.025 $$ (from $$ a/2 $$), hence we <mark> reject the null hypothesis. </mark>

**Confidence Interval of (95%)**
$$ CI = \bar{x} \pm t_{\alpha/2,\, n-1} \cdot \frac{s}{\sqrt{n}} $$

Using:
- $$ t_{\alpha/2,\, n-1} $$ = Two-tailed critical value from student's t-distribution

**Result:**

$$ CI = 393.3 \pm 2.262 \cdot \frac{60}{\sqrt{10}} $$

$$ CI = (350.38, \ 436.21) \ \text{seconds} $$

**Test Result**

- **t-statistic:** $$ t \approx 4.9173 $$  
- **p-value:** $$ p \approx 0.00083\ (p < 0.05) $$  
- **Decision:** Reject $$ H_0 $$
- **Interpretation:** There is a **statistically significant difference** between the observed mean waiting time using elevators and the 5 minutes travel using stairs .  
- With **95% confidence** that the true mean waiting time lies between **5.8 min** and **7.27 min**.

### CONCLUSION
With this, I was able to confirm that travelling using stairs _maybe_ a better alternative to go to class instead of waiting to take the elevators. Of course, take the interpretation with a grain of salt. The statistical inference can only be valid if we assume that the sample data is representative of the population and clearly this is a _seminal work_ (LOL). Its better to have an official study regarding this with further data to be at least 30 cycle before we be achieve the assumption that proper use of the one-sample T-test for difference of means. I have also provided here the groundworks of how to do the data gathering properly. 

We targeted afternoon classes on peak hours to really mimic the time it takes to wait in line around 2.30-2.45pm but errors on the gathering (human factors) were already considered in the calculations too when doing the time study. Below is a copy of the presentation that we did for this activity. 

### HOW THIS CAN BE FURTHER IMPROVED
- While **10 cycles** provided a workable baseline, more repetitions would improve statistical reliability, given the large range of possible destinations.
- Real-world factors such as **gate choice, class schedules, and crowd behavior** directly impacted station cycle times.
- The study validated group members’ personal experiences but also quantified them for actionable improvement.
- This method can serve as a **benchmark** for deciding whether rushing to the elevator during peak periods is worth it compared to alternative routes (e.g., taking the stairs).

Let me know in the comments if this is a valid take on the waiting situation in Andrew. Thanks! 


<iframe src="https://drive.google.com/file/d/1NhR6fiP3LQZnzB0MKpH_1wP1XXCwEgzC/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  The pitchdeck we made for the F2F presentation for this project.
</div>

PS. I dont in anyway support claims that using the stairs in andrew is better. I just prefer it given my situation and that I'm physically fit to do such strenuous activity. Siyempre convenience parin numbawan but if critical situation mo, know that you can cut off approx. two minutes travel time using the stairs going to 9th-16th floor (typically where we MEM students take our class lalo kung freshman ka)

PPS. Shoutout kina dolot, vito and rafa for helping me do the data gathering for this project!