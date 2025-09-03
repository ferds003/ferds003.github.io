---
layout: post
title: Software programming in MEM (LBYEC2A, LBYMF1D, LBYEC3B, LBYMF3B Lectures in between!)
date: 2023-03-13 20:40:00
description: I present here the formal courses taken that I have for coding software applications from C prog down to Python computational intelligence for MEM 👨🏻‍💻
tags: manufacturing_engineering coding
categories: embedded_systems data_science
thumbnail: assets/img/2023/thumbnail_programming.png
giscus_comments: true
pretty_table: true
images:
  slider: true
toc:
  sidebar: right
---

__TARGET AUDIENCE__: Students, Self

_Note: Taglish_
_About the thumbnail: It is a choropleth map of the philippines detailing most tourist visitations in 2018_

__OVERVIEW__:
The MEM course is comprised of learnings also on programming in the fields of electronics, data science and computational intelligence specific to manufacturing applications. It is no wonder that we cover also fundamentals in software. I have shown here is a synthesis of the work that I have done in my college stay in all aspects of software engineering!! 

## LBYEC2A:
This course is a fundamentals for `C programming` where I worked on a series of lab activities to feel the syntax and logic behind the language. My courseworks can be seen below with simple insights on it and my final project where my group and I a point of sale system for a restaurant with a 20-item menu

PS. Shoutout to my groups at the time, millie and gelo :>

### Courseworks:


**Introduction to C-programming and the GCC compiler**
This was the first encounter of C-programming that I have done where I made a basic currency exchange between `Dollars, Riyal and Yen` as well as practical usage on `compute the GPA` for the term in DLSU.  

- Introduced me to basic **input/output in C**, arithmetic operations, and variable handling. I learned how to manipulate user input and perform fundamental calculations, which is the foundation of all programming tasks.    

_Kindly check the merged file for my output here!_

**Use of Conditional Statements**
I was able to make a simple determined **earthquake damage characterization**  based on the Richter scale using `if-else` statements.  Another project done for this activity was that I was able to implement a conversion program using `switch` for:  
- Miles → Kilometers  
- Pounds → Kilograms  
- Fahrenheit → Rankine 

Overall this activity enabled me to show how **decision-making** works in C. I learned the difference between `if-else` and `switch`, and when it is better to use each. Conditional logic is essential for solving real-world problems where outcomes depend on different cases.

<div class="row mt-3 justify-content-center">
    {% include figure.liquid loading='eager' path='assets/img/2022/lbyec2a/lab5.gif' class='img-fluid rounded z-depth-1' zoomable=true %}
</div>
<div class="caption">
  Executable file compiled for this simple activity project
</div>

**Switch/Case Statements and For-Loops**
This project aimed to do the following simple executions:
- Outputted **traffic violation title and price** based on violation number (using `switch`).  
- Created a **countdown program** from a given number to 0, then displayed *"Blast Off!"*.  
- Calculated the **summation of numbers from 1 to a given positive integer** (using `for` loop).  


Here, I got comfortable with **loops** and saw how repetition simplifies problems. Instead of manually coding repeated steps, loops automate them. Combining `switch` and loops also gave me practice in structured program flow.  

<div class="row mt-3 justify-content-center">
    {% include figure.liquid loading='eager' path='assets/img/2022/lbyec2a/lab6.gif' class='img-fluid rounded z-depth-1' zoomable=true %}
</div>
<div class="caption">
  Executable file compiled for this simple activity project
</div>


**Learning Functions**
This introduced me of making separating code in order to achieve `modularity` which is just a fancy way to say that a main execution will be dependent to other files in the form of header files or libraries. I was able to do: 
- Created custom header files (`myhead.h` and `myhead1.h`).  
  - `myhead.h`: Implemented an **add function** returning the sum of two integers.  
  - `myhead1.h`: Implemented **add1** (prints sum) and **multiply** (prints product).  
- Main program included both headers and called the functions.  

This lab showed me the **power of functions** in C and the importance of modular programming. By separating logic into header files, I learned about **code reusability** and organization, making programs easier to manage and expand.  

_Kindly check the merged file for my output here!_


**Using Arrays**  
For this simple activity, I was able to determine the **sum and highest value** of 15 input integers using arrays.  

I learned how to handle **collections of data** with arrays. Instead of dealing with individual variables, arrays allow storing multiple values efficiently. I also practiced looping through arrays to process data.  

<div class="row mt-3 justify-content-center">
    {% include figure.liquid loading='eager' path='assets/img/2022/lbyec2a/lab7.gif' class='img-fluid rounded z-depth-1' zoomable=true %}
</div>
<div class="caption">
  Executable file compiled for this simple activity project
</div>


**Use of Strings**

Our last activity revolved on implementing a **username and password system** with asterisk masking for password input.  
- I was able to compare input to predefined credentials (`Fernando` / `Magallanes`).  
- Displayed **"VALID!"** if correct, otherwise **"INVALID :<"**.  
  
With this lab, I got introduced to **string handling and security basics**. I learned how to compare strings, mask inputs, and simulate a login system. It gave me a sense of how C programming can be applied to **real-world applications** like authentication.  

_Kindly check the merged file for my output here!_

<iframe src="https://drive.google.com/file/d/1YYkF6EKyy3bMI-Jz0Uocqghp14SnEM6A/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  Consolidated document of lab activities that I have done for learning C!
</div>




### Final Project: Point of Sales (POS) System
For our final project in C programming, we developed a **Restaurant Point of Sale (POS) System**. The goal was to create a **basic cashiering system** for a restaurant with at least 20 menu items. The program allowed customers to log in, view the menu, place orders, apply discounts, and generate receipts.  

My group and I was able to do the following functionalities:

1. **User Authentication & Security**  
   - Login system with **3 sets of username/passwords**.  
   - Passwords masked with asterisks for security.  

2. **Menu Display**  
   - Displayed a restaurant menu of **20 food and drink items** with codes and prices.  
   - Implemented using **functions** for better organization.  

3. **Order Management**  
   - Allowed ordering by item code and quantity.  
   - Automatically computed **running total**.  
   - Used **arrays** to store items, prices, and quantities.  

4. **Receipt Generation**  
   - Printed a **summary of orders** with item names, quantities, and prices.  
   - Applied discounts (none, loyalty card 10%, senior citizen 20%).  
   - Accepted **cash payments** and computed change.  

5. **Programming Concepts Used**  
   - **Conditionals** (`if-else`, `switch`)  
   - **Loops** (`for`, `do-while`)  
   - **Functions** (`BurgerMenu()`, modular approach)  
   - **Arrays** (storing menu and orders)  
   - **String handling** (login system)  

With this I got to summarize my fundamentals in this project via a practical application that utilizes s
-**Combined variables, arrays, and loops into a working system.**  
-**Security & Input Handling**  
  - Learned to mask passwords and validate multiple login credentials.  
- **Modular Programming**  
  - Used functions to separate logic, making the program cleaner and reusable.  
- **Data Organization with Arrays**  
  - Stored multiple items efficiently and iterated through them for calculations.  
- **Problem-Solving with Conditionals**  
  - Applied logic for menu navigation, order processing, and discount handling.  
- **User-Friendly Design**  
  - Used formatted printing to make menus and receipts easy to read.  
- **Real-World Simulation**  
  - Saw how C can be applied in a **business scenario** like cashiering and billing.

<div class="row mt-3 justify-content-center">
    {% include figure.liquid loading='eager' path='assets/img/2022/lbyec2a/final_proj.gif' class='img-fluid rounded z-depth-1' zoomable=true %}
</div>
<div class="caption">
  Executable file compiled for this culminating project
</div>

<iframe src="https://drive.google.com/file/d/1Rs64q2GU6OfnrxoHxYhAEi9ocNofNzdJ/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  You may CHECKOUT my report done here for my POS system (pun intended) 
</div>

__Reflection to this course (2021)__: As you can see, the execution for the language was done in the terminal and is very rudimentary. Ibig sabihin, bare bones ung pagapply ng programming to achieve some output. It was a good start for me. I did have background of this before hand but I never really took it seriously. This time, I was able to see insights on what I was doing and how to apply the code for future venture. Of course, as an eng student, I would prefer that this can be related to my degree like making a simple GUI out of this language. This can be something to explore in future works.

## LBYMF1D:
This course taught me the python basics which will eventually lead to my interest to `data science` and make this my part-time job. The class was taught by miss Sandy Languico, which I believe now to be a Data Engineer. She was so cool at the time and still is! I'm trying to catch up to here on doing coding projects in a pythonic way and apply what she taught me for basic data science projects. She assessed us via `jupyter notebook outputs` so it was pretty hands-on. I have here the different outputs in a google drive that can be accessed in `google colab`: 

🚨[My jupyter notebboks that I have done for this course](https://drive.google.com/drive/folders/1ZZ-1X6SnqURY-MdhRvDpcoMV0tPAGM1r?usp=sharing)🚨

Through these coding exercises and explorations, I got the chance to work on both **fundamentals** and **more advanced concepts**. Some of the key things I learned were:  

- **Basic Syntax and Functions in Python** — learning how Python handles variables, loops, conditionals, and user-defined functions.  
- **GUI Programming with Tkinter** — building small applications with windows, buttons, and input fields.  
- **Data Structures and Algorithms** — exploring lists, tuples, sets, dictionaries, and applying algorithms to solve problems.  
- **Comprehensions** — writing cleaner, more Pythonic code using list, set, and dictionary comprehensions.  
- **Function Argument Passing** — understanding `*args` and `**kwargs` for flexible function calls.  
- **Exception Handling** — writing safer code that anticipates and responds to errors.  
- **Basics of Object-Oriented Programming (OOP)** — creating classes, objects, and methods to structure programs more effectively.  


Python quickly became more than just a tool I was experimenting with — it turned into a language I could rely on for solving problems, whether small scripts or larger projects. Starting from **Jupyter notebooks** and moving into **VSCode** felt like leveling up from a sandbox environment into a professional development workflow.  

As synthesis of these concepts, we made a replication of the `POS system` that I did for the previous coding course using Tkinter and also a `simple derivation calculator of propagation of error` from surface area and volume of a sphere (I was taking calculus at the time and geek out on this idea basically)


### Surface Area-Volume Error Propagation for Spheres Calculator
This Python program creates a **GUI (Graphical User Interface)** using Tkinter to calculate **estimation errors** in the **surface area** and **volume** of a sphere when there’s a measurement error in the radius.

**TLDR:** uses differential equation how much deviation the surface area to a volume of a sphere

#### What the Code Does

1. **Takes Inputs**
   - `radius`: The measured radius of the sphere.
   - `differential`: The measurement error (uncertainty) in the radius.

2. **Validates Inputs**
   - Ensures the input values are numeric.
   - Ensures the differential error is smaller than the radius.

3. **Performs Calculations**
   - Computes the **surface area** and **volume** of the sphere.
   - Estimates the **propagated errors** using differentials.
   - Calculates **relative errors** and **percentage errors**.

4. **Displays Results**
   - Shows the surface area, volume, propagated errors, and percentage errors neatly in the GUI.

---

#### The Mathematics Behind It

The program uses differential error propagation formulas:

- **Surface Area of a Sphere**  

$$
A = 4 \pi r^2
$$

- **Propagated Surface Area Error**  

$$
dA = 8 \pi r \cdot dr
$$

- **Relative Surface Area Error**  

$$
\frac{dA}{A}
$$

- **Percentage Surface Area Error**  

$$
\frac{dA}{A} \times 100
$$

---

- **Volume of a Sphere**  

$$
V = \frac{4}{3} \pi r^3
$$

- **Propagated Volume Error**  

$$
dV = 4 \pi r^2 \cdot dr
$$

- **Relative Volume Error**  

$$
\frac{dV}{V}
$$

- **Percentage Volume Error**  

$$
\frac{dV}{V} \times 100
$$

---

**Example Calculation**

If we input:  
- Radius: $$ r = 10 $$  
- Differential error: $$ dr = 0.5 $$  

The program computes:

- Surface Area = **1256.64**  
- Propagated Surface Area Error ≈ **125.66**  
- Relative Error in Area ≈ **0.10**  
- Percentage Error in Area ≈ **10%**  

- Volume = **4188.79**  
- Propagated Volume Error ≈ **628.32**  
- Relative Error in Volume ≈ **0.15**  
- Percentage Error in Volume ≈ **15%**  


#### Summary

This project shows how **measurement errors propagate** in derived quantities like surface area and volume. It combines:

- **Mathematics** (differentials, error propagation)  
- **Python programming** (Tkinter for GUI, input validation)  
- **Practical application** (real-world error analysis in science/engineering)  



<div class="row mt-3 justify-content-center">
    {% include figure.liquid loading='eager' path='assets/img/2022/lbymf1d/lbymf1d2.gif' class='img-fluid rounded z-depth-1' zoomable=true %}
</div>
<div class="caption">
  Tkinter GUI made for the differrential calculator
</div>



### POS system for ProgrammabiliTEA
For one of my projects, I decided to build a **Point of Sale (POS) system** for a fictional tea shop called *Programmabilitea Tea House*. This was a great way to put my Python and Tkinter skills into practice by creating something close to a real-world application. 


#### Features Implemented

1. **Login System**
- Users must log in with a valid **username and password** before accessing the system.  
- Input validation ensures that empty fields or wrong credentials return clear error messages.  
- Credentials are stored in a dictionary for quick authentication.  

2. **Menu Display**
- The system loads items directly from a text file (`menu.txt`).  
- Each item is displayed in a **listbox** for easy selection.  
- This makes the menu dynamic — new items can be added to the text file without changing the code.  

3. **Order Management**
- Customers can **add items** from the left panel (menu) into the right panel (order list).  
- Items can also be **removed** from the order list if the customer changes their mind.  
- The design makes it easy to simulate a real ordering process.  

4. **Proceed Button**
- A placeholder function (`proceed()`) is included to simulate moving toward **receipt generation** or payment.  
- This could be extended in the future to calculate totals, apply discounts, or generate digital receipts.  

#### How It Looks

- **Login Screen:**  
  Prompts for username and password, with validation and error messages.  

- **Main Window (POS Interface):**  
  - Left panel: Displays the menu items.  
  - Buttons in the middle: `Add →`, `← Remove`, `Proceed`.  
  - Right panel: Shows the current order list.  

This setup mimics the layout of actual cashier systems where staff select items, see them listed, and then process the order.  

Building this POS system taught me a lot about how Python can be used for **application development** beyond just scripts:  

- **GUI Design with Tkinter** — understanding frames, labels, buttons, entry fields, and listboxes.  
- **User Authentication** — creating a simple but functional login system.  
- **File Handling** — loading menu items dynamically from a file.  
- **Event-Driven Programming** — connecting buttons to functions that update the interface in real time.  
- **Error Handling** — using `messagebox.showerror()` to provide feedback when invalid actions are taken.  

You may see the functionality on the simulation below! Also code is available from the link above.

<div class="row mt-3 justify-content-center">
    {% include figure.liquid loading='eager' path='assets/img/2022/lbymf1d/lbymf1d1.gif' class='img-fluid rounded z-depth-1' zoomable=true %}
</div>
<div class="caption">
  Tkinter GUI made for the POS system for ProgrammabiliTEA
</div>

__Reflection to this course (2022)__:
Again, this course is very rudimentary just to get our feet wet in the world of Python. Specific uses for the coding as well as exploration of different libraries of the projects were never touched upon in formal discussions likewise there is no significant deployments done to `validate the systems` that we have made here in this course, so I cant really say that I'm really ready to share this to others. What i do appreciate and realize is how we need to `constantly teach and practice` the way of coding since the concepts are not immediately visible and `specific application to the manufacturing scene` is dull. Kaya a more hands-on approach for a project should be considered in future works. 


## LBYEC3B:
This course now touches on a different programming language which is MATLAB  for various **computational intelligence** applications. The activities took me through the fundamentals of matrix operations, into machine learning techniques like regression, clustering, and classification, and finally into the use of **artificial neural networks**.

All my output can be seen in the merged file below. Likewise I'll be also sharing here for future reference my own MATLAB code that I have made along with the final project that I did for detecting potential stroke based on histoical features of the patient!  

[MATLAB Code that I have made for this course](https://drive.google.com/drive/folders/1Lhemo0WHQofFkBBjgKf4ZPSc5Zpo0jXy?usp=sharing)

Before diving into machine learning, I first practiced with core MATLAB skills via the following:  
- Encoding and manipulating matrices.  
- Performing matrix equality checks with conditional outputs.  
- Plotting mathematical expressions (time vs. amplitude).  
- Writing subfunctions (like computing averages and vector sizes).  

These fundamentals were the **building blocks** for more advanced computational intelligence applications. 

### Linear Regression  
I implemented **linear regression** in MATLAB:  
- **Single-variable regression**: learning how gradient descent minimizes cost \( J(\theta) \).  
- **Multi-variable regression**: normalizing features, running gradient descent, and comparing results with the **normal equation** approach.  

This experiment highlighted the importance of **feature scaling** and the balance between **analytical solutions** and **iterative optimization**.  


### Clustering  
Using datasets like the **Fisher Iris** and **Wine data**, I applied clustering techniques:  
- Visualizing how different samples group together based on features.  
- Comparing results with and without feature scaling.  

This experiment emphasized how **unsupervised learning** helps in discovering structure within datasets.  

### Classification with k-NN  
Next, I moved to **classification tasks** using the **k-Nearest Neighbors (k-NN)** algorithm:  
- Applied on the Iris and Wine datasets.  
- Tested performance with and without feature scaling.  
- Visualized decision boundaries and classifications in 2D plots.  

Here I saw how **simple distance-based algorithms** can effectively classify data points.  


### Higher-Dimension Classification & Confusion Matrices  
This experiment went deeper into **performance evaluation**:  
- Used k-NN classifiers for the Iris, Wine, and Seeds datasets.  
- Generated **confusion matrices** to visualize classification accuracy.  
- Calculated **precision, recall, and F1-scores** to quantify model performance.  

This showed me how evaluation metrics are essential for **understanding strengths and weaknesses** of classifiers.  

### Regression with Artificial Neural Networks  
The final experiment explored **ANNs in MATLAB**:  
- Built a regression model using a dataset of **real estate valuations**.  
- Implemented **feature scaling** and trained a neural network with multiple hidden layers.  
- Achieved an overall regression performance of **0.862** (a good fit for the dataset).  

This was my first real dive into **neural networks**, and it demonstrated how CI can capture nonlinear relationships that traditional regression cannot.  
  
Through these experiments, I discovered how MATLAB is not only a numerical computing tool but also a powerful environment for **computational intelligence**.  

Takeaways from this would be:  
- Start with fundamentals (matrices, plotting, subfunctions).  
- Machine learning requires **data preparation** (normalization, scaling).  
- Evaluation metrics (confusion matrices, F1-score) are as important as the models themselves.  
- Neural networks bring an extra layer of capability, especially for complex, nonlinear problems.  

Overall, this course was my gateway into **computational intelligence** — blending math, coding, and AI concepts into practical problem-solving.  


<iframe src="https://drive.google.com/file/d/1LsIwJ0K0YwZTVT5rOJMfchixz-6YtGE1/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  Consolidated reports for all experiments done in the course regarding computational intelligence.
</div>

### Final Project: Stroke Prediction
For our project in **LBYEC3B**, our group worked on predicting the likelihood of stroke using a dataset with health-related features. The task was not just about running models, but also about **data wrangling, feature selection, model testing, and evaluation**. This project gave me deeper insights into how computational intelligence can support healthcare applications. 

 
#### Dataset and Feature Selection  

The original dataset had 12 features, but not all of them contributed equally to prediction. Using references from related research, we applied **Pearson’s correlation coefficient** and a **Learning Vector Quantization (LVQ) model** to identify the most relevant predictors.  

We found that the following features were most important for stroke prediction:  

- Age  
- Average glucose level  
- Body Mass Index (BMI)  
- Heart disease history  

These features align with medical studies that highlight **lifestyle and chronic conditions** as major risk factors for stroke.  

#### Data Wrangling  

One challenge was dealing with missing values, particularly in the BMI column. We solved this by applying a **moving median interpolation (movmedian)** with a comparison window of 100 neighboring values.  

Interestingly, we decided **not to normalize the dataset**, since testing showed that normalization actually reduced prediction accuracy in our case. This was an important lesson: **preprocessing steps should always be tested, not just applied by default**.  


#### Models Tested  

We implemented and compared several machine learning models in MATLAB:  

- 🌲 **TreeBaggers (Random Forests)**  
- 🧩 **Fitcensemble (Ensemble Methods)**  
- 📊 **Fitcnb (Naive Bayes)**  
- 🧠 **Fitcnet (Neural Network)**  
- 📍 **Fitcknn (k-Nearest Neighbors)**  

Each model had its own hyperparameters and optimization functions, which we tuned for better performance.  


#### Results  

We evaluated model performance using **confusion matrices** and Kaggle submission scores.  

Some key findings:  
- **Neural Networks (Fitcnet)**, **Ensemble Methods (Fitcensemble)**, and **Naive Bayes (Fitcnb)** achieved the **highest Kaggle accuracy scores of 95.56%**.  
- **Random Forests (TreeBaggers)** achieved slightly lower scores (around 94.58%).  
- **k-NN (Fitcknn)** performed comparably with 95.56% accuracy as well.  

The fact that multiple models reached strong performance showed that the **dataset was well-suited for classification tasks** once the right features were selected.  


#### Insights and Learnings  

This project gave me several important lessons:  

1. **Feature selection is critical** — not all data improves predictions. The right subset of features can dramatically boost model accuracy.  
2. **Data wrangling is just as important as modeling** — handling missing values properly was necessary to avoid bias or reduced accuracy.  
3. **Preprocessing must be tested** — normalization isn’t always beneficial; sometimes raw data works better depending on the model.  
4. **Different models can yield similar results** — multiple algorithms achieved high accuracy, showing that there isn’t always just one “best” method.  
5. **Healthcare applications need careful validation** — high accuracy on Kaggle is good, but in real life, misclassifications could have serious consequences.  


Working on stroke prediction using machine learning made me appreciate how **computational intelligence can complement healthcare research**. MATLAB gave us a solid environment for trying out different models quickly, while the process of feature engineering and evaluation mirrored real-world machine learning workflows.  

This project wasn’t just about hitting a high accuracy score — it was about learning how to **think critically about data, features, and models** in the context of an important real-world application.  

<iframe src="https://drive.google.com/file/d/1b5ZxZ-3K4QF950E6fidLzOSx5NzlL51W/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  My group's report on utilizing MATLAB for doing stroke predictions from known Kaggle Dataset 
</div>


__Reflection to this course (2022)__: One of the great things that the instructor did for this class, Engr. Manigo, is his style of teaching and enthusiasm. Makulit ako magtanong admittedly 😅. I really like the teachings since I can see this down the line as a type of work i'll be doing. Eto rin talaga nagpatatag sakin na kunin ung minor in Data Science despite the additional units since I wanted to have formal training/background on this matter.

Computational Intelligence is a catch-all term talaga for any type of computing via algorithms inspired by nature. Unlike AI that wants to mimic human brain, this covers a more broad aspect of intelligent behavior and systems that is very interesting to apply in modern problems. I can see this being applied to my field.

## LBYMF3B:
This course is the last course that dealt heavy in coding for insights that you may call it `data science`. There was so many things to unpack for this course in under 3-months but it was basically a repeat of what we did in the previous programming courses with add difficulty. Tbf, it didnt really relate much on how it will be applied in the manufacturing systems despite the course name. The jupyter notebook was already provided and it basically spoon-fed us the code needed to extract insights from the given datasets. This was a given for any course under Doc Let which is kinda a double-edged sword. I have outlined them in the consolidated documents and I have also shared my code via jupyter notebooks below!!

🚨[My jupyter notebboks that I have done for this course](https://drive.google.com/drive/folders/1JKQ-J8OXVCk5TifPhtHQnLIz3Ibtngle?usp=sharing)🚨

Below is a consolidated document of the outputs that I did for this lecture. 

<iframe src="https://drive.google.com/file/d/1GD99KL3CxiJw6NBT5K6zCpMijczX1VD6/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  Consolidated reports that I have for this course highlighting the insights that we got out of the datasets.
</div>

__Reflection to this course (2022)__: There is a lot of pitfalls that happened throughout this course. I was not able to fully capture an end-to-end data science project with the Kaggle Dataset about hotel bookings and frankly I did not pursue it at the time because I was the only one working on it. I regret now that I was not able to push forward on making better models but I did not have a solid foundation also on how to start a data science project at the time too. Now, upon taking classes under my minor degree, I realize that the training aspect of the CI is not as great as presentin it to stakeholders either via a deployed model or through a solid report. Recovering from this mistake, I now try to learn my best when I'm doing any type of data science project.


## __OVERALL REFLECTIONS__:
Software programming in MEM has been a roller coaster. There are many aspects na masasabi ko na kailangan parin ayusin even after taking the courses. Nakakahinayang lang rin naman kasi na hindi ko na seryoso o tinulak sarili ko para gumawa ng mas matitinong mga projects na pwede ko ipamalas sa portfolio ko bigay ng pagkakataon na ito. At the time, I guess nakaing ako ng sistema na panay turo lang (tutorial hell ika nga!) na hindi ko nakita ung end goal which is to create value from these courses. Given na foundamentals talaga tong mga units na to and the department lacked on aspects like ensuring us a proper foundation or end-driven results na panay notebook lang ung ipapamalas. 

Now learning and reflecting back, future works will now revolve on end-goals and having a solid product that people can interact with and gain insights. That is what I have to strive single project that I make in order to better myself if this is a career that I want to do for the rest of my life!!

Lmk in the comments below if you agree in this take~!


