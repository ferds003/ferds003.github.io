---
layout: page
title: A proposed filipino keyboard layout  
description: How should a filipino keyboard look like given character count frequency indexed from filipino text? ⌨️
category: data_science
img: assets/img/2024/thumbnail_mfergop1.png
giscus_comments: true
pretty_table: true
images:
    slider: true
---

### OVERVIEW:
This ergonomic project required the use of data_science techniques to determine a suitable keyboard for the use of Filipinos. Will there be a significant change in the layout or not? The lexicology and orthography of the Filipino language has been extensively studied with many debates if there should be a change on the QWERTY keyboard standardized by foreign powers.

To localize the `layout of the keyboard to the filipino context`, I have provided here a study as our own unique take of the keyboard design utilizing `frequency data` from filipino text to optimize typing efficiency.

<div class="row mt-3 justify-content-center">
    {% include figure.liquid loading='eager' path='assets/img/2024/thumbnail_mfergop1.png' class='img-fluid rounded z-depth-1' zoomable=true %}
</div>
<div class="caption">
  Heatmap of the frequency distribution obtained from sample filipino text.
</div>

### METHODS:
I want to have a pure filipino text that can be indexed and is available online. For this, I utilized the `"Balarila ng Wikang Pambansa"` by the Father of Philippine National Language and former Senator, Lope K. Santos. Particularly, I used `"Pandaigdig na Pagpapahayag ng Karapatan ng Tao"` section that revealed **20,751 words and 112,392 characters**.

The code that I have used can be seen below with python packages of `numpy`, `pandas`, `matplotlib` used for the data_analysis, data wrangling, and `kbhamp` and `matplotlib` for visualizations like that of the keyboard heatmap shown above and the frequency chart below.

<div class="row mt-3 justify-content-center">
    {% include figure.liquid loading='eager' path='assets/img/2023/content_mfergop.png' class='img-fluid rounded z-depth-1' zoomable=true %}
</div>
<div class="caption">
  Character frequency distribution from sample filipino text.
</div>

```
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from kbhmap import Heatmap

wordset = open("lab8.txt", encoding="utf8").read()
unique,count = np.unique([char for char in wordset],return_counts=True)
char_dict = dict(zip(unique,count))

HMQ = Heatmap('qwerty')
HMQ.make_heatmap(char_dict, layout='qwerty', cmap="PuBuGn",sigmas=3)

from collections import Counter
my_str = wordset
counts=(Counter(my_str))

letters = list(counts.keys())
letters

exclude=["0", ",", "9", "4","8",".",'"',"'","-","2","3",';','5','6','7','\n','“','”',':','(',')','‘','’','—',"?",'[',']','!','…','%','/','•', 
       '*','´','`']
exclude_1=['ú', 'û', 'ù', 'ò', 'ó','ô' ]

for x in exclude:
    counts.pop(x)
counts

## Combine like-characters and also count that was not excluded
add_a=counts.get('A') + counts.get('â') + counts.get('á') + counts.get('à') + counts.get('Â') + counts.get('À') + counts.get('Á')
add_a
add_b=counts.get('B')
add_c=counts.get('C')
add_d=counts.get('D')
add_e=counts.get('E') + counts.get('é') + counts.get('è') + counts.get('è')
add_f=counts.get('F')
add_g=counts.get('G')
add_h=counts.get('H')
add_i=counts.get('I') + counts.get('í') + counts.get('î') + counts.get('ì') + counts.get('Ì')
add_j=counts.get('J')
add_k=counts.get('K')
add_l=counts.get('L')
add_m=counts.get('M')
add_n=counts.get('N')
add_o=counts.get('O') + counts.get('ò') + counts.get('ó') + counts.get('ô') + counts.get('Ó')
add_p=counts.get('P')
add_q=counts.get('Q')
add_r=counts.get('R')
add_s=counts.get('S')
add_t=counts.get('T')
add_u=counts.get('U') + counts.get('ù') + counts.get('û') + counts.get('ú')
add_v=counts.get('V')
add_w=counts.get('W')
add_x=counts.get('X')
add_y=counts.get('Y')
add_z=counts.get('Z')

counts['a']= counts.get('a') + add_a
counts['b']= counts.get('b') + add_b
counts['c']= counts.get('c') + add_c
counts['d']= counts.get('d') + add_d
counts['e']= counts.get('e') + add_e
counts['f']= counts.get('f') + add_f
counts['g']= counts.get('g') + add_g
counts['h']= counts.get('h') + add_h
counts['i']= counts.get('i') + add_i
counts['j']= counts.get('j') + add_j
counts['k']= counts.get('k') + add_k
counts['l']= counts.get('l') + add_l
counts['m']= counts.get('m') + add_m
counts['n']= counts.get('n') + add_n
counts['o']= counts.get('o') + add_o
counts['p']= counts.get('p') + add_p
counts['q']= counts.get('q') + add_q
counts['r']= counts.get('r') + add_r
counts['s']= counts.get('s') + add_s
counts['t']= counts.get('t') + add_t
counts['u']= counts.get('u') + add_u
counts['v']= counts.get('v') + add_v
counts['w']= counts.get('w') + add_w
counts['x']= counts.get('x') + add_x
counts['y']= counts.get('y') + add_y
counts['z']= counts.get('z') + add_z

exclude_1=['D','ù','ê','è','Ó','Í','̃','Ì','Á','À','û','é','ì','Â','Z','Q','J','ú','î','ô','ó','V','X','ò','F','à','í','á','â','W','E','S','U','O','R','Y','H',
          'G','C','L','I','M','A','T','B','K']
for item in exclude_1:
    counts.pop(item)

counts.pop("\ufeff")
counts.pop('̂')
counts.pop(" ")
counts.pop('1')
counts.pop('N')

result_keyvalpairs = counts.items()
list_data = list(result_keyvalpairs)
list_data
df_letters = pd.DataFrame(list_data,columns=['letters', 
                      'count'])
df_letters
df_sorted=df_letters.sort_values(by=['count'], ascending=False)
colors = ['green','blue','purple','brown','teal']
plt.bar(df_sorted['letters'], df_sorted['count'], color=colors)
plt.title('Letter Count Frequency', fontsize=14)
plt.xlabel('Letters', fontsize=14)
plt.ylabel('Counts', fontsize=14)
plt.grid(True)
plt.show()
```

With this, I was able to garner the following insights:

- Analysis of 20,751 words and 112,392 characters from texts such as `“Pandaigdig na Pagpapahayag ng Karapatan ng Tao”` revealed distinct letter frequency distributions:
  - Most frequent letters: <mark> A (25.14%), N (12.79%), G (9.89%), I (8.49%), T (5.10%). </mark>
  - Least used letters included  <mark> Q, J, Z, X, V. </mark>
  - The frequency distribution of Filipino letters diverges from English, influencing keyboard layout. For instance, letters commonly used in Tagalog must be easily accessible.
  - `Special Filipino characters`, like the tilde (~) or accent marks, are considered for inclusion based on their usage.

<iframe src="https://drive.google.com/file/d/1l1WbyKUyB_B5xhwiJAz1JNfdSXg0xTMs/preview"
        width="100%" height="600px"
        style="border: 1px solid #ccc;"></iframe>
<div class="caption">
  final report done for this project that outlines the methods and our conclusion
</div>

### LEARNINGS:
Knowing the filipino-centric characters often utilized liek that of `A` and `N`, we have determined that from the top five-letter frequency, we will place these in the middle of the keyboard for ease access for index and middle fingers and replacing it with the `F` and `J` placements in the QWERTY keyboard. This is shown in the figure below.

A Filipino keyboard layout may emphasize the placement of these commonly used letters in easily accessible positions on the keyboard, such as on the home row. Additionally, the placement of additional characters needed for writing Tagalog, such as the tilde (~) and the accent mark ( ́), may also be considered in the design of the keyboard layout.

<div class="row mt-3 justify-content-center">
    {% include figure.liquid loading='eager' path='assets/img/2023/content_mfergop2.png' class='img-fluid rounded z-depth-1' zoomable=true %}
</div>
<div class="caption">
  Proposed keyboard layout based on given analysis!
</div>

### HOW THIS CAN BE FURTHER IMPROVED:
Of course, we have already been honed with the QWERTY keyboard therefore any adjustments from this will require a change in the mentality of the filipino users if this will be implemented. Distinct capturing of hand and finger movement from users should be further studied to determine if there is a significant difference on the finger strain done when prolonged use of keyboard from QWERTY vs. the custom-keyboard.  

Data analysis done can also be further improve to reduce redundant code

## REFLECTIONS:
The efficacy of such a layout depends on various factors, including the typing style of the individual and the overall ergonomic setup of the workstation. Notably, even with an ergonomic keyboard layout, an individual can still be susceptible to repetitive strain injuries (RSIs) or other work-related injuries if the workstation setup is not ergonomic or if breaks are not taken from typing regularly. Nonetheless, creating an ergonomic keyboard layout suited explicitly to Filipino users represents a significant stride towards encouraging healthier computing practices and mitigating the risk of work-related injuries among this group. 