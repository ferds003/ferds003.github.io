---
layout: page
title: Modified Field Sobriety Test
description: A device to standardized field sobriety testing against DUI and DWI in line with R.A. 10586 🍻
category: electronics
img:
giscus_comments: true
images:
    slider: true
---

### OVERVIEW:
The motivation for this project is the increasing `road fatality cases` caused by driving while intoxicated (DWI) and driving under the influence (DUI) here in the Philippines. This project proposes a **cheaper alternative to the common breathalyzer** used by police to test intoxication. This **Modified Field Sobriety Test** device using an Arduino Uno. The system integrates **sensors, actuators, and displays** to help law enforcement evaluate a driver’s sobriety in an automated way. The project simulated three standardized tests—balance, cognitive ability, and walk-and-turn—replicating real-world applications of embedded systems in public safety. Both simulation and a ready PCB was made for this project.

### FINDINGS:

- **Programming in C (Arduino IDE):**  
  - Defined and managed multiple **digital and analog I/O pins** for sensors and actuators.  
  - Used built-in **IRremote** and **LiquidCrystal** libraries for input handling and display.  
  - Implemented **functions** for each test (balance, cognitive, walk-and-turn), showcasing modular programming in C.  
  - Applied **if-else conditions, switch-case logic, and timers** to control test flow and decision-making.  

Code done can be seen below: ⬇️

```c
#include <IRremote.h>
#include <LiquidCrystal.h>

LiquidCrystal lcd(A5,A4,A3,A2,A1,A0); 
int count=0;
int test=0;

String inputString;
long inputInt;
long unsigned int value;

int LED1=10;
int LED2=11;
int LED3=12;
int LED4=13;

int pushb1=5;
int pushb2=6;
int pushb3=7;

int TLT=4;

int trigger=2;
int echo=3;

int buzz=9;

byte bottle[] = {
  B00100,
  B00100,
  B01110,
  B01110,
  B01110,
  B01110,
  B01110,
  B01110
};

int RECV_PIN = 8;       
IRrecv irrecv(RECV_PIN);
decode_results results;

void setup()	{
  pinMode(pushb1, INPUT); 
  pinMode(pushb2, INPUT); 
  pinMode(pushb3, INPUT); 

  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);
  pinMode(LED3, OUTPUT); 
  pinMode(LED4, OUTPUT);  

  pinMode(buzz,OUTPUT);
  tone(buzz, 500, 2000);

  pinMode(trigger, OUTPUT);
  pinMode(echo, INPUT);

  pinMode(TLT, INPUT);

  Serial.begin(9600);
  irrecv.enableIRIn();

  inputString.reserve(8);

  //Serial.begin(9600);
  lcd.begin(16,2);
  //lcd.init(); 
  lcd.clear();   
  //lcd.backlight();
  lcd.createChar(0, bottle);
  lcd.setCursor(0,0);
  lcd.print("Sobriety Test ");
  lcd.write(byte(0));
}

void scroll_func(void){
  //scroll func
  for (int positionCounter = 0; positionCounter < 24; 
       positionCounter++) 
  {
    // scroll one position left:
    lcd.scrollDisplayLeft();
    // wait a bit:
    delay(200);
  }
}

void test1(void){
  lcd.clear();
  lcd.setCursor(3,0);
  lcd.print("Test 1: stand in one leg");
  scroll_func();
  delay(5000);
  lcd.clear();

  int i=0;
  for(i=15;i>=0;i--){
    int tiltState=digitalRead(TLT);
    lcd.setCursor(1,0);
    lcd.print(" ");
    lcd.setCursor(0,0);
    lcd.print("Tilt State: ");
    lcd.print(tiltState);
    Serial.println(tiltState);

    lcd.setCursor(7,1);
    lcd.print(" ");
    lcd.setCursor(0,1);
    lcd.print("Time: ");
    lcd.print(i);
    delay(1000);

    if(i == 0){
      lcd.clear();
      lcd.setCursor(0,0);
      lcd.print("Test Finished");
      digitalWrite(LED1,HIGH);
      delay(2000);
      lcd.setCursor(1,0);
      lcd.print("Test 1 Passed");
      delay(2000);
      lcd.clear();
      break;
    }

    if (tiltState == HIGH){
      lcd.setCursor(0,1);
      lcd.print("Test Finished");
      delay(2000);
      lcd.clear();
      lcd.print("Test 1 Failed");
      tone(buzz, 440);
      delay(2000);
      noTone(buzz); 
      lcd.clear();
      break;
    }
  }
  delay(1000);
  lcd.setCursor(0,0);
  lcd.print("Sobriety Test ");
  lcd.write(byte(0));
}

void test3(void){
  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print("Test 3: walk 20 steps away");
  scroll_func();
  delay(5000);
  lcd.clear();

  int i=0;
  for(i=30;i>=0;i--){
    digitalWrite(trigger, LOW);
    delayMicroseconds(2);
    digitalWrite(trigger, HIGH);
    delayMicroseconds(10);
    digitalWrite(trigger, LOW);

    long duration = pulseIn(echo, HIGH);
    long distance=0.034*duration/2;

    lcd.setCursor(1,0);
    lcd.print(" ");
    lcd.setCursor(0,0);
    lcd.print("Dist State: ");
    lcd.print(distance);
    Serial.print("Dist State: ");
    Serial.println(distance);

    lcd.setCursor(7,1);
    lcd.print(" ");
    lcd.setCursor(0,1);
    lcd.print("Time: ");
    lcd.print(i);
    lcd.print(" ");
    delay(1000);

    if(i == 0){
      lcd.setCursor(0,1);
      lcd.print("Test Finished");
      delay(2000);
      lcd.clear();
      lcd.print("Test 3 Failed");
      tone(buzz, 440);
      delay(2000);
      noTone(buzz);
      lcd.clear();
      break;
    }

    if (distance<=30){
      lcd.setCursor(0,1);
      lcd.print("Test Finished");
      delay(2000);
      lcd.clear();
      digitalWrite(LED3,HIGH);
      lcd.print("Test 3 Passed");
      delay(2000);
      lcd.clear();
      break;
    }
  }
  delay(1000);
  lcd.setCursor(0,0);
  lcd.print("Sobriety Test ");
  lcd.write(byte(0));
}

void loop(){
  //test 1
  if (digitalRead(pushb1)==HIGH){
    test1();
  }
  delay(200);

  //test 2
  if (digitalRead(pushb2)==HIGH){
    lcd.clear();
    lcd.setCursor(0,0);
    lcd.print("Test 2: input numbers");
    scroll_func();
    delay(5000);
    lcd.clear();

    int i=0;
    for(i=30;i>=0;i--){
      //values of remote
      if(IrReceiver.decode()) {
        value= IrReceiver.decodedIRData.decodedRawData;
        switch(value){ //F
          inputString = "";
          case 4010852096:
          //Serial.println("1");  // Button 1
          count++;
          inputString += "1"; 
          break;

          case 3994140416:
          //Serial.println("2");  // Button 2
          count++;
          inputString += "2"; 
          break;

          case 3977428736:
          //Serial.println("3");  // Button 3
          count++;
          inputString += "3"; 
          break;

          case 3944005376:
          //Serial.println("4");  // Button 4
          count++;
          inputString += "4"; 
          break;

          case 3927293696:
          //Serial.println("5");  // Button 5
          count++;
          inputString += "5"; 
          break;

          case 3910582016:
          //Serial.println("6");  // Button 6
          count++;
          inputString += "6"; 
          break;

          case 3877158656:
          //Serial.println("7");  // Button 7
          count++;
          inputString += "7"; 
          break;

          case 3860446976:
          //Serial.println("8");  // Button 8
          count++;
          inputString += "8"; 
          break;

          case 3843735296:
          //Serial.println("9");  // Button 9
          count++;
          inputString += "9"; 
          break;

          case 4077698816:
          //Serial.println("0");  // Button 0
          count++;
          inputString += "0"; 
          break;

          case 4044275456:
          if (inputInt==12024597) {
            lcd.clear();
            lcd.setCursor(0,0);
            lcd.print("Test 2 Passed");
            digitalWrite(LED2,HIGH);
            inputString = "";
            count=0;
            delay(15000);
            lcd.clear();
            break;
          }

          if (inputInt!=12024597) {
            lcd.clear();
            lcd.setCursor(0,0);
            lcd.print("Test 2 Failed");
            tone(buzz, 440);
            delay(2000);
            noTone(buzz); 
            inputString = "";
            count=0;
            lcd.clear();
            break;
          }

          case 4060987136:
          // clear input
          inputString = "";
          count=0;
          break;

          default: Serial.println(value);
        }
        IrReceiver.resume(); 
      }

      lcd.setCursor(0,0);
      lcd.print("Enter Code: ");

      if (value){
        lcd.print("*");      
        inputInt = inputString.toInt();
        Serial.println(inputInt);

        delay(500);
      }

      lcd.setCursor(7,1);
      lcd.print(" ");
      lcd.setCursor(0,1);
      lcd.print("Time: ");
      lcd.print(i);
      delay(1000);
      
     
      if (count==10){
        lcd.setCursor(0,0);
        lcd.print("Exceed Input. Restarting"); 
        delay(1000);
        lcd.clear();
        inputString = "";
        delay(1000);
        Serial.begin(9600);
        lcd.begin(16, 2);
        lcd.setCursor(0,0);
        lcd.print("Enter Code: ");
        count=0;
      } 

      if(i == 0){ //D
        lcd.setCursor(0,1);
        lcd.print("Test Finished");
        delay(2000);
        lcd.setCursor(0,1);
        lcd.print("Test 1 Failed");
        tone(buzz, 440);
        delay(2000);
        noTone(buzz); 
        lcd.clear();
        break;
      } 
    } 
    delay(1000);
    lcd.setCursor(0,0);
    lcd.print("Sobriety Test ");
    lcd.write(byte(0));
  }
  delay(200);

  if (digitalRead(pushb3)==HIGH){
    test3();
  }
  delay(200);
}
```

- **Sensors and Inputs:**  
  - **Tilt sensor** → Balance test, detects >15° tilt.  
  - **IR sensor + remote** → Cognitive input test. The person conducting the test will ask the suspect to input a series of numbers / characters. (Initial presses to be: 12024597; can be modified based on available IR receiver keyboard)
  - **Ultrasonic sensor** → Walk-and-turn distance check.  

- **Actuators and Outputs:**  
  - **LEDs** → Visual cues for pass/fail.  
  - **Buzzer** → Alarm for failed tests.  
  - **16x2 LCD** → Displays instructions, results, and test progress.  

- **Simulation & Testing:**  
  - Conducted in **TinkerCAD Circuits**, with validation of input-output behavior.  
  - Debugging included syntax corrections, memory optimization, and handling IR remote logic through trial-and-error and documentation searches. simulation video can be seen below.  
  - **A ready printed circuit board** was made to prototype this efficiently for field testing. This can be seen below.

---
Based on the methods that I have shown above, I was able to achieve the following below. You may check our report too below :>

- Successfully executed **three test modules** controlled by push buttons in sequence.  
- Proper **sensor thresholds** triggered actuator responses (LED, buzzer, LCD message).  
- Maximized Arduino Uno **I/O pin usage** and memory allocation.  
- Encountered but resolved issues with **IR sensor programming and LCD I2C incompatibility**.  
- Delivered a **video demonstration** to showcase system functionality.  

<iframe src="https://drive.google.com/file/d/1ilpZbNGq3WmFU4V0e3Yua5aP5dSh-Len/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  The final report for this project showcasing our experience in embedded programming.
</div>

### LEARNINGS:
Unfortunately, this project was a fully-online course and simulations of the physical product was all we can afford to provide but I was able to demonstrate here my familiarity with **C programming fundamentals** for microcontrollers especially pin configuration, variable declarations, modular coding, debugging. I've got to efficiently use libraries for peripheral control. 

Aside from the above, I've got to learn the importance of **simulation tools (TinkerCAD, Arduino IDE)** in prototyping. Gained practical experience in **sensor-actuator integration** for real-world problem solving. Developed **troubleshooting resilience** when handling hardware-software mismatches. Realized the potential of microcontroller-based systems in **public safety and intelligent automation**. 

__WHERE I CAN IMPROVE UPON:__ Definitely, this project can be more practical with testing done in the field but was limited with what I have. Furthermore, I was heavily reliant to the tools to embed the code into the microcontroller. It will be better to try a different IDE to test this or a different implementation like bare-metals coding which I have yet to try based on completion of this project!

PS. Shoutout to Adam for being a solid co-dev for this project!
