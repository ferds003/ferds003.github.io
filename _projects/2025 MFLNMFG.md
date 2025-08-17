---
layout: page
title: DMAIC approach for data tasks in a service company
description: lean and sustainable approach for continuous improvement implementation
tags: operations_management
category: management
img: assets/img/2025/thumbnail_mflnmfg.png
driveId: 1tPhIlKBSNEWVWcw86iK3jE50_Jy_0Pzz
giscus_comments: true
---

### OVERVIEW:

The motivation for this project came by the suggestion of one of my groupmates, Chiara, where she was able to reduce a data transformation task in PowerBI (i believe) during her internship. With this in mind, we set out to formally document the steps that she has done and further improve any steps needed to present it to upper management. The Define, Measure, Analyze, Improve and Control (DMAIC) phases for continuous improvement within a company was applied in this case study.

The main objectives were:
- **Reduce downtime** caused by system, process, and IT bottlenecks.
- **Eliminate waste** in manual data handling following the DOWNTIME waste framework (Defects, Overproduction, Waiting, Non-utilized talent, Transportation, Inventory, Motion, Extra processing).
- **Improve accuracy** and timeliness of Power BI reporting through automation and process standardization.


### FINDINGS:

We were able to map out the different elements that made the continuous improvement for the data task successful. These were the following in terms of DMAIC phases:


**DEFINE**

**SIPOC** identified:
- **Suppliers**: Data providers, internal business units, IT Department, external data sources.
- **Inputs**: Daily reports, inventory DB, external data reports, Excel files, Power BI queries.
- **Process**: Receive → Compile → Clean/Transform → Validate → Update DB → Publish Dashboard → Notify teams.
- **Outputs**: Updated reports, structured database, reduced downtime, improved data accuracy.
- **Customers**: Executives, finance & ops teams, analysts, department heads.


**MEASURE** 

**Key metrics**:
- **Manual labor processing time**: Baseline `~16 hours/week` for data entry & transformation.
- **Efficiency improvement**: % reduction from baseline processing time over 12 weeks.
- **Azure SQL migration progress**: % of ETL tasks completed.
- **Data quality**: Error count post-migration.

**Observed wastes & quick wins**:
- **Data duplication** → Centralize in Azure SQL, enforce validation rules.
- **Overprocessing** → Automate cleaning in SQL & Azure Data Factory.
- **Non-utilized talent** → Automate entry via Power Automate; upskill employees for analytics.
- **Delays in reporting** → Scheduled refresh in Power BI with event-driven triggers.


 **ANALYZE**

**Key findings from data analysis**:
- **Mismatch between task volume and available manpower**:  
  Example – *Oct. 10, 2024: 30 workers → 600 tasks* vs. *Oct. 20, 2024: 5 workers → 50 tasks*.
- **Redundant validation steps**: Histogram showed higher error rates in manual checks vs. automated.
- **Lack of standardized procedures**: Pareto analysis revealed `80% of delays occurred in cleaning/transformation stages`.
- **IT limitations**: Limited staff caused extended downtime during system issues.
- **Software/hardware incompatibilities**: Time-series analysis linked downtimes to outdated tools.


**IMPROVE**

**Implemented/Planned actions**:
1. **Standardized input pipeline** – Fully automated ETL from source to Azure SQL.
2. **Upgraded software/hardware** – Eliminated compatibility downtime.
3. **Hired additional IT staff** – Reduced incident resolution time.
4. **Automation budget increase** – Prioritized high-ROI automation tasks.
5. **Guidelines & templates** – Reduced decision fatigue in data entry.
6. **Task prioritization for automation** – Began with highest-frequency, error-prone processes.

**Expected results**:
- **Processing time reduction**: From 16 hours/week → target of ≤6 hours/week.
- **Error reduction**: ≥ 40% fewer post-processing corrections.
- **Downtime reduction**: ≥ 50% decrease in system-related delays.

--- 
### LEARNINGS:

With this we were able to utilize DMAIC in a service industry content effectively beyond the reach of manufacturing to reduce waste in different forms especially downtime that decrease the time it takes to perform the task from 16 hours (the whole week in fact) down to just 2 hours.

We have utilized `Pareto analysis and report` to prioritize improvement areas as well as insightful visualizations in terms of time-series and scatterplots for manpower-task balance. Lastly, this comes in mind that a cloud-based migration is recommended in order to standardize these redundant tasks and eliminate bottlenecks. You may further read our project from the preview below.   

PS. Shoutout to Adam, Chiara, Vito, and Teo as my co-proponents for this project!

<iframe src="https://drive.google.com/file/d/1R3ts83Indwf1zrU6AcKnGTg9rJPT86Gc/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
    Final report of our approach on how we can improve further a data task for a company.
</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId %}
  </div>
</div>
<div class="caption">
    Presentation for the DMAIC approach for the CI along with explanation of how we tackle the project.
</div>