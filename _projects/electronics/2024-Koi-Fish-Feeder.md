---
layout: page
title: IoT-enabled Feeder System for Koi-Fish 
description: A prototype highlighting more the use case of IoT to monitor the aquaculture inside the tank particularly Koi-Fish 🐟  
date: 2024-04-18
category: electronics
subcategory: embedded systems
img: assets/img/2024/thumbnail_iot_feeder.png
giscus_comments: true
pretty_table: true
images:
    slider: true
driveId: 1St8sOTVfuTVRiNOne8MptzllKUvmU2gP #temperature
driveId1: 16Z5bcmdV9L8XHXJjYm50_Mmh5H1QfzdS #checking value of water level
driveId2: 1X09gU8ayeIqUtV66LdYcj7sqGr645F6W #moter actuation
---

_Update:_ This is included in ICOM`24 IEEE conference! You may check the paper below for more details.

_About the thumbnail:_ This is the ThingSpeak channel for IoT of our system! 

### OVERVIEW:
The `Smart IoT-Based Feeder System for Koi Fish` was developed to modernize aquaculture feeding and monitoring through **Internet of Things (IoT)** technology. Traditional aquaculture relies heavily on manual feeding and supervision, which can be time-consuming and inefficient. By integrating sensors, microcontrollers, and cloud-based monitoring, this system aims to automate the feeding process and maintain `optimal water quality conditions` for koi fish cultivation.

The system is built around a network of **IoT sensors and actuators** connected to microcontrollers and a cloud platform. It automates fish feeding cycles, monitors water temperature and level, and allows users to access real-time environmental data through a **mobile application interface**. This project represents a step toward more **sustainable and data-driven aquaculture management**.

### Methodology

1.) System Architecture
The feeder system integrates both hardware and software components connected through IoT protocols.  
The main components are:

- **Microcontrollers:** Raspberry Pi (RPi) and ESP32  
- **Sensors:** Water level sensor and DS18B20 temperature sensor  
- **Actuator:** SG90 servo motor for controlling food release  
- **Connectivity:** Wi-Fi network for cloud communication  
- **Cloud Platform:** ThingSpeak API for data storage and visualization  
- **Power Source:** Power bank as a portable power supply  

The ESP32 collects sensor data (temperature and water level), processes it, and transmits it to the **ThingSpeak cloud** via Wi-Fi. The **Raspberry Pi** acts as a centralized power source, providing regulated power to all connected devices.

2.) Feeding Mechanism Design
The automatic feeder mechanism uses a **servo motor** to open and close a feeding container that dispenses koi food pellets. The servo is triggered by a **pushbutton signal**, which emulates an automated feeding schedule. The motor’s motion log is recorded in the system as an indication of feeding activity.

The feeder enclosure was designed using **corrugated cardboard**, considering the space required for the main components—power bank, breadboard, sensors, and control units. Adjacent to the main housing is a **pellet container** that is mechanically linked to the servo motor. This structure allows consistent and controlled feeding cycles.

3.) Software Integration
The firmware was programmed using the **Arduino IDE** for the ESP32 microcontroller. It handles:
- Data acquisition from sensors  
- Transmission of data to ThingSpeak via HTTP requests  
- Control signals for the servo motor  

The **ThingSpeak API key** authenticates the ESP32’s communication with the cloud. Sensor data is displayed in four fields on the ThingSpeak dashboard:
1. Water temperature (°C)  
2. Water level (%)  
3. Motor actuation status  
4. Channel location  

Additionally, a **mobile GUI** was developed using **MIT App Inventor**, enabling remote visualization of tank data and feeding history.

<!-- First row -->
<div class="row mt-3">
  <!-- First video -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include googleDrivePlayer.html id=page.driveId %}
    <div class="caption mt-2">
      Video demonstration of temperature sensor functionality
    </div>
  </div>

  <!-- Second video -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include googleDrivePlayer.html id=page.driveId1 %}
    <div class="caption mt-2">
      Video demonstration of water level sensor functionality
    </div>
  </div>
</div>

<!-- Second row -->
<div class="row mt-3">
  <!-- Centered third video -->
  <div class="col-sm-6 offset-sm-3 mt-3 mt-md-0 text-center">
    {% include googleDrivePlayer.html id=page.driveId2 %}
    <div class="caption mt-2">
      Video demonstration of motor actuation functionality
    </div>
  </div>
</div>


### FINDINGS:

1.) System Functionality
The prototype successfully demonstrated IoT-based monitoring and feeding automation.  
Key observations include:
- The **DS18B20 sensor** recorded tank temperatures ranging between **33–37°C**, accurately reflecting typical koi aquaculture conditions.  
- The **water level sensor** provided consistent readings, maintaining an 80% level near overflow during testing.  
- The **servo motor** operated reliably during feeding cycles, recording actuation events on the cloud dashboard.  

Data from both sensors were continuously updated in real-time on the **ThingSpeak channel**, providing a clear visualization of environmental conditions.

2.) Graphical User Interface (GUI)
The mobile application displayed:
- **Current temperature** (e.g., 32.37°C)  
- **Water level percentage**  
- **Motor actuation count**  

This provided an intuitive and mobile-friendly control panel for aquaculture managers, enabling remote monitoring without the need for physical inspection.


### LEARNINGS:
The **Smart IoT-Based Feeder System for Koi Fish** successfully demonstrates how IoT technologies can be applied to **modernize aquaculture practices**. By combining **microcontrollers, sensors, actuators, and cloud platforms**, the system automates feeding, monitors water conditions, and provides accessible real-time data through mobile applications.

This project highlights the potential of IoT-driven solutions in achieving **sustainable and intelligent aquaculture systems**, reducing manual labor while improving fish welfare and production efficiency.

<iframe src="https://drive.google.com/file/d/1CGXB83JI9Td9ctQ_HEioQ0i4tykAWQsS/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  IEEE paper for our feeder system
</div>

__HOW THIS PROJECT CAN BE FURTHER IMPROVED__:
Of course, I recognize that this is a rudimentary approach for this type of application where we just provided a simple prototype to deploy this into a water tank for one of our groupmates to use. A `more robust system` to check this in a dedicated app is suitable and also the enclosing for the sensor should be done in order to be more desirable for use. Aside from this other parameters for water quality was not checked but `turbidity`, `salinity` should be considered as this is a vital indicator of the environment and will affect the health of the koi fished. 

Overall, the system to be operational in an industrial and commercialized settings will have to run more strict test and apparatus but this system is a stepping for many researchers on how to apply this in their MCUs!

PS. Shoutout to my groupmates jaimie and patrick for being involved in the project! Appreciate you guys~!

