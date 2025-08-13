---
layout: page
title: Profit Maximization for Small-Scale Fruitcake Bakery
description: Use of Integer Linear Programming (ILP) for maximizing profit based on business production 🍰
tags: operations_management
category: management
img: assets/img/2025/thumbnail_mrprods.png
giscus_comments: true
---

### OVERVIEW:

The motivation of this project is to help small-scale enterprises like that of my mom's (luv u ma!) fruitcake bakery business in the hopes that they can further maximize their profits. This paper investigates profit maximization and optimal raw material allocation for a small-scale fruitcake bakery using <mark> integer linear programming (ILP) </mark>. The study focuses on a bakery producing glazed and dark fruitcakes, aiming to determine the optimal ingredient combination and production quantities to maximize profit while adhering to budget and raw material constraints. Historical sales data informs demand constraints, and the model is implemented using MATLAB's Optimization Toolbox. The results indicate that producing 59 glazed and 45 dark fruitcakes during the Christmas season yields a maximum profit of ₱18,550. For Valentine’s Day, producing 73 glazed and 31 dark fruitcakes results in a higher profit of ₱19,250, validated through sensitivity analysis. The research demonstrates the potential of ILP for small-scale bakeries to make data-driven production decisions, reduce waste, and align inventory with seasonal demand.

### FINDINGS:

- **Christmas Season:** Producing 59 glazed and 45 dark fruitcakes yields a maximum profit of ₱18,550.
- **Valentine's Day:** Producing 73 glazed and 31 dark fruitcakes results in a higher profit of ₱19,250.
- **Methodology:** The study utilized historical sales data and MATLAB's Optimization Toolbox to implement the ILP model.
- **Sensitivity Analysis:** LP relaxation was used to approximate shadow prices. Water is the only ingredient constraint possessing a shadow price, meaning that there is one missing unit that prohibits the profit to increase by ₱0.41.

Based on the findings above, wthe study recommends that the bakery should adjust its production quantities based on the study's findings to maximize profit during the Christmas and Valentine's Day seasons. The bakery should consider expanding operations to target demand during different seasons, given the potential for increased profit. Address the water constraint to potentially increase profit by ₱0.41 per unit.

### LEARNINGS:

With the different seasons being considered for the production of fruitcake, there are many scenarios that can be further imrproved upon to allocate resources, planning when to bake and minimize cost and waste throughout the whole operations. What we are able to provide in this paper is how ILP can be utilized for item production and how we can align inventory with the seasonal demand patterns!

You may check futher the MATLAB code implementation [here](https://github.com/ferds003/Profit-Maximization-for-Small-Scale-Fruitcake-Bakery-Production) 

PS. Shoutout to Vito and Teo as my co-proponents for this project as well as [Mother's and Son's Fruitcake](https://www.facebook.com/motherandsonsfruitcake) for letting us in to their data. 


<iframe src="https://drive.google.com/file/d/1rY3sO1JFNZ2AU-Z1dzu5Lzk4ekrpx5BA/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
    Final report of our linear programming approach along with the pitchdeck we presented detailing the MATLAB code. 
</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId %}
  </div>
</div>
<div class="caption">
    Presentation done for the production management recommendations along with explanation of the calculations.
</div>