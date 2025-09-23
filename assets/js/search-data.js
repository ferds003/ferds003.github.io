// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "dropdown-mechanical",
              title: "mechanical",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/mechanical/";
              },
            },{id: "dropdown-electronics",
              title: "electronics",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/electronics/";
              },
            },{id: "dropdown-data-science",
              title: "data_science",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/data_science/";
              },
            },{id: "dropdown-management",
              title: "management",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/management/";
              },
            },{id: "nav-publications",
          title: "publications",
          description: "academic publications I have been involved in!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-what-is-mem",
        
          title: "What is MEM?",
        
        description: "QnA about what my degree is and my own experiences 🤝",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/what-is-MEM/";
          
        },
      },{id: "post-fixing-broken-things-handyman-work",
        
          title: "Fixing broken things, Handyman work",
        
        description: "From repairing microwaves, fixing unresponsive monitors and leaking faucets, here is how I fixed it. 🧑‍🔧",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/fixing-stuff/";
          
        },
      },{id: "post-tatak-self-study",
        
          title: "Tatak self-study~",
        
        description: "my ever-growing certifications 📜",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/certifications/";
          
        },
      },{id: "post-jigs-and-fixtures-what-39-s-the-difference-mftldes",
        
          title: "jigs and fixtures; what&#39;s the difference? (MFTLDES)",
        
        description: "From defining tool design for specific uses to quick-die change systems seen in modern assemblies, I share here my reflections and work about jigs and fixtures (J&amp;Ts) 🔀",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/MFTLDES/";
          
        },
      },{id: "post-not-micro-managing-every-detail-of-the-project-btw-mfproma",
        
          title: "Not micro-managing every detail of the project btw (MFPROMA)",
        
        description: "my personal take on engineering production management. When can you apply this in the field? 🧐",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/MFPROMA/";
          
        },
      },{id: "post-smart-factory-intelligent-manufacturing-systems-lbymf4d-amp-mfelec2",
        
          title: "Smart factory! Intelligent manufacturing systems (LBYMF4D &amp; MFELEC2)",
        
        description: "I share here my journey to develop intelligent systems for the modern plant and how I can stay relevant in the modern world in my line of work.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/LBYMF4D&MFELEC2/";
          
        },
      },{id: "post-exploring-power-electronics-through-simulations",
        
          title: "Exploring Power Electronics through simulations",
        
        description: "How I got to learn and utilize simulink for the modelling and simulation of power electronics 😎",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Power-Electronics/";
          
        },
      },{id: "post-i-not-robot-mfrbtic-lbymf4a-mfelec3",
        
          title: "I, not, Robot! (MFRBTIC, LBYMF4A, MFELEC3)",
        
        description: "My learnings and experience on robotics classes so far! 🦾",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/MFRBTIC/";
          
        },
      },{id: "post-organizing-our-local-field-trip-mfgsems",
        
          title: "Organizing our Local Field Trip (MFGSEMS)",
        
        description: "This is my experience for organizing a 2-day field trip for those who opted to take their field trip locally where we got to tour Auro Chocolate, Mitsuwa, MIRDC-Amerial, MIRDC-Amcen, and MIRDC-Metrology 👷🏻‍♂️",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/MFGSEMS/";
          
        },
      },{id: "post-understanding-control-systems-and-use-in-plant-control-mfcntrl-amp-lbymf3i",
        
          title: "Understanding Control Systems and use in Plant Control (MFCNTRL &amp; LBYMF3I)",
        
        description: "The use of transfer functions, laplace transfrom applications and time-response signals for control and automation using MATLAB and FESTO 🎛️",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/MFCNTRL&LBYMF3I/";
          
        },
      },{id: "post-design-of-machine-elements-material-selection-to-product-functionality-cds-1-2-lbymf3f",
        
          title: "Design of Machine Elements; material selection to product functionality (CDS 1-2; LBYMF3F)",
        
        description: "From my personal calculations on cyclic stress felt on a small ferris wheel shaft 🎡 to preferred car toy spur gear under cost constraints, I detail here the learnings I have made under design of machine elements ❤️‍🔥",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/CDS/";
          
        },
      },{id: "post-rigid-bodies-mayhem-engmec-1-3",
        
          title: "Rigid Bodies Mayhem (ENGMEC 1-3)",
        
        description: "Capturing the consolidated reflections done for the statics, kinematics and mechanics of rigid bodies 💫",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ENGMECs/";
          
        },
      },{id: "post-game-of-codes-my-microcontrollers-quest-so-far-lbymf3c",
        
          title: "Game of codes, my microcontrollers quest so far (LBYMF3C)",
        
        description: "My practical experience on coding microprocessors and what further topics I would like to check 🐲",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/LBYMF3C/";
          
        },
      },{id: "post-cnc-machining-and-various-advanced-manufacturing-techniques-so-kwool-lbymf3h",
        
          title: "CNC Machining and various advanced manufacturing techniques (so kwool!, LBYMF3H)",
        
        description: "My personal experience of handling gcode operations for the configuring of CNC and other manufacturing operations for computer-aided manufacturing, CAM.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/LBYMF3H/";
          
        },
      },{id: "post-spaghetti-wires-my-industrial-electronics-learnings-mfindlx-amp-lbymf3e",
        
          title: "Spaghetti wires! My industrial electronics learnings (MFINDLX &amp; LBYMF3E)",
        
        description: "Tangled circuits that runs both air and electricity, I share here both theory and practice of industrial electronics and learnings for electro-pneumatic systems 🪢 🔌",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/MFINDLX&LBYMF3E/";
          
        },
      },{id: "post-digital-electronics-design-mfdigtl-amp-lbymf2f",
        
          title: "Digital electronics design (MFDIGTL &amp; LBYMF2F)",
        
        description: "My learnings and insights made for digital electronics design",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/MFDIGTL/";
          
        },
      },{id: "post-software-programming-in-mem-lbyec2a-lbymf1d-lbyec3b-lbymf3b-lectures-in-between",
        
          title: "Software programming in MEM (LBYEC2A, LBYMF1D, LBYEC3B, LBYMF3B Lectures in between!)",
        
        description: "I present here the formal courses taken that I have for coding software applications from C prog down to Python computational intelligence for MEM 👨🏻‍💻",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/Programming/";
          
        },
      },{id: "post-analog-electronics-design-mfanlog-amp-lbymf2c",
        
          title: "Analog electronics design (MFANLOG &amp; LBYMF2C)",
        
        description: "My personal notes and review on analog electronics design 💾",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/MFANLOG&LBYMF2C/";
          
        },
      },{id: "post-materials-engineering-mfmteng-amp-lbymf2d",
        
          title: "Materials Engineering (MFMTENG &amp; LBYMF2D)",
        
        description: "My personal views and learnings from materials engineering and understanding of material testing analysis! 🏗️",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/MFMTENG&LBYMF2D/";
          
        },
      },{id: "post-basic-electrical-engineering-baselci-amp-lbyec2l",
        
          title: "Basic Electrical Engineering (BASELCI &amp; LBYEC2L)",
        
        description: "Knowing basic breaker ratings based on power consumption and my personal learnings from basic electrical engineering concepts 🔌",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/BASELCI&LBYEC2L/";
          
        },
      },{id: "post-computer-aided-engineering-mfcaeng-and-lbymf2b",
        
          title: "Computer-Aided Engineering (MFCAENG and LBYMF2B)",
        
        description: "My reflection on hands-on experience and key learnings in computer-aided engineering~ 📟",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/MFCAENG&LBYMF2B/";
          
        },
      },{id: "post-manufacturing-processes-and-practice-mfmcpr2-and-lbymf2a",
        
          title: "Manufacturing Processes and Practice (MFMCPR2 and LBYMF2A)",
        
        description: "My reflection on hands-on experience and key learnings in computer-aided manufacturing~ 📟",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/MFMPCR2&LBYMF2A/";
          
        },
      },{id: "post-lathe-machine-laboratory-lbymf1c",
        
          title: "Lathe Machine Laboratory (LBYMF1C)",
        
        description: "My personal reflection for this lab course about lathe machine operations. 👾",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/LBYMF1C/";
          
        },
      },{id: "post-machine-tools-processes-and-practice-mfmcpr1",
        
          title: "Machine, Tools, Processes and Practice (MFMCPR1)",
        
        description: "My personal take about this course and learnings about lathe machines~ 🔩",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/MFMCPR1/";
          
        },
      },{id: "post-basic-engineering-drawing-lbyme1a",
        
          title: "Basic Engineering Drawing (LBYME1A)",
        
        description: "My personal notes for my hand drawn CAD plates for basic engineering drawings. 📐",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/LBYME1A/";
          
        },
      },{id: "post-basic-computer-aided-drafting-lbyme1b",
        
          title: "Basic Computer Aided Drafting (LBYME1B)",
        
        description: "My personal take for this introduction of computer aided drafting and design. 💾",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/LBYME1B/";
          
        },
      },{id: "post-dimensional-measurements-lbymf1a",
        
          title: "Dimensional Measurements (LBYMF1A)",
        
        description: "My personal summary of takeaways for basic engineering metrology. 🔬",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/LBYMF1A/";
          
        },
      },{id: "news-representing-dlsu-at-hult-prize-2021",
          title: 'Representing DLSU at Hult Prize 2021 🌍🥗',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-champion-for-social-enterprise-conference-2021",
          title: 'Champion for Social Enterprise Conference 2021',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-champion-for-echoes-of-ecology-a-community-scientific-monologue-competition",
          title: 'Champion for Echoes of Ecology, a community scientific monologue competition!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-top-8-in-fowler-gsic-2022-️",
          title: 'Top 8 in Fowler GSIC 2022! 🌐⚙️',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{id: "news-country-finalist-of-schneider-go-green-2022",
          title: 'Country Finalist of Schneider Go Green (2022) 🌱⚡',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5/";
            },},{id: "news-2nd-runner-up-country-finals-for-3m-inspire-challenge",
          title: '2nd Runner Up - Country Finals for 3M Inspire Challenge🏆🍌',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_6/";
            },},{id: "news-gawad-lasalyano-awardee-university-commendation",
          title: 'Gawad Lasalyano Awardee University Commendation 🏅💚',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_7/";
            },},{id: "news-featured-in-abs-cbn-news",
          title: 'Featured in ABS-CBN News!',
          description: "I am featured in a ABS-CBN post upon winning my most recent win in First Gen Code Green! Check out the article here along with selected interview from the team.",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_8/";
            },},{id: "news-featured-in-rappler-blog",
          title: 'Featured in Rappler Blog!',
          description: "I am featured in a Rappler Blog upon winning my most recent win in First Gen Code Green! Check out the article here.",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_9/";
            },},{id: "news-featured-in-mem-department-page",
          title: 'Featured in MEM Department Page!',
          description: "Featured by Animoboards and by my college department!! T_T Thanks MEM~ &lt;33",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_11/";
            },},{id: "news-got-accepted-into-sanitary-care-products-asia-scpa-as-a-production-intern",
          title: 'Got accepted into Sanitary Care Products Asia (SCPA) as a Production Intern! 🗳...',
          description: "For 3 months, got to support and learn the ropes of the industry in SCPA&#39;s pulp manufacturing plant in Taguig.",
          section: "News",},{id: "news-got-accepted-into-department-of-science-and-technology-advanced-science-and-techinology-institute-dost-asti-as-a-research-development-division-rdd-intern",
          title: 'Got accepted into Department of Science and Technology-Advanced Science and Techinology Institute (DOST-ASTI)...',
          description: "For 3 months, got to help and develop machine learning algorithms for a DOST project.",
          section: "News",},{id: "news-gawad-lasalyano-award-for-the-2nd-time",
          title: 'Gawad Lasalyano Award for the 2nd Time!!',
          description: "Received the Gawad Lasalyano Award for achievements in leadership and excellence in competitions.",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_10/";
            },},{id: "news-reconized-as-a-dlsu-undergraduate-researcher-for-my-2-ieee-papers-in-the-gawad-saliksik-2025",
          title: 'Reconized as a DLSU undergraduate researcher for my 2 IEEE papers in the...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_12/";
            },},{id: "news-successfully-defended-my-undergraduate-thesis-titled-quot-vision-based-mini-production-line-for-grading-and-sorting-of-iceberg-lettuce-quot",
          title: 'Successfully defended my undergraduate thesis! titled &amp;quot;Vision-Based Mini-Production Line for Grading and Sorting...',
          description: "Final thesis defense completed — a major milestone in my MEM journey!",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_15/";
            },},{id: "news-finished-major-requirements-for-my-degree-in-manufacturing-engineering-and-management-this-term",
          title: 'Finished major requirements for my degree in Manufacturing Engineering and Management this term...',
          description: "",
          section: "News",},{id: "news-finished-all-my-requirements-for-my-minor-degree-in-data-science-this-term-and-other-general-electives",
          title: 'Finished all my requirements for my minor degree in Data Science this term...',
          description: "",
          section: "News",},{id: "projects-a-proposed-filipino-keyboard-layout",
          title: 'A proposed filipino keyboard layout',
          description: "How should a filipino keyboard look like given character count frequency indexed from filipino text? ⌨️",
          section: "Projects",handler: () => {
              window.location.href = "/projects/data_science/2023-MFERGOP1/";
            },},{id: "projects-youtube-simple-recommender-system",
          title: 'Youtube simple recommender system',
          description: "data modelling that provides a YT recommender system. ▶️",
          section: "Projects",handler: () => {
              window.location.href = "/projects/data_science/2025-8-10%20DATA102/";
            },},{id: "projects-filipino-sms-spam-classifier",
          title: 'Filipino SMS spam classifier',
          description: "machine learning application provides spam SMS classifier in the filipino context. 🥫",
          section: "Projects",handler: () => {
              window.location.href = "/projects/data_science/2025-8-10%20DATA103/";
            },},{id: "projects-alumina-substrate-production-of-a-solid-mounted-device-smds-resistor",
          title: 'Alumina substrate production of a solid-mounted device (SMDs) resistor',
          description: "A simulated electro-pneumatic system for the manufacturing of SMDs components 💨",
          section: "Projects",handler: () => {
              window.location.href = "/projects/electronics/2023-LBYMF3E/";
            },},{id: "projects-modified-field-sobriety-test",
          title: 'Modified Field Sobriety Test',
          description: "A device to standardize field sobriety testing against DUI and DWI in line with R.A. 10586 🍻",
          section: "Projects",handler: () => {
              window.location.href = "/projects/electronics/2023-Sobriety-Test/";
            },},{id: "projects-pcb-design-for-esp32-automation-of-30a-relays",
          title: 'PCB Design for ESP32 Automation of 30A relays',
          description: "Designing a 30A ESP32 Home Automation Circuit using KiCAD 🏠",
          section: "Projects",handler: () => {
              window.location.href = "/projects/electronics/2024-ESP32_PCB/";
            },},{id: "projects-ur10-robotic-arm-and-dobot-simulations",
          title: 'UR10 Robotic Arm and Dobot Simulations',
          description: "programming robotic arms using dedicated software via waypoints or set conditional parameters 🦾",
          section: "Projects",handler: () => {
              window.location.href = "/projects/electronics/2024-MFRBTIC/";
            },},{id: "projects-pcb-design-for-traffic-light-sim",
          title: 'PCB Design for Traffic Light Sim',
          description: "a simple printed circuit board design (PCB) for a traffic light indicator 🚦",
          section: "Projects",handler: () => {
              window.location.href = "/projects/electronics/2024-PCB-Traffic/";
            },},{id: "projects-pid-controlled-self-balancing-robot",
          title: 'PID-controlled self-balancing robot',
          description: "My attempt to make and control a simple self-balancing robot using MATLAB and Simulink 🤸‍♂️",
          section: "Projects",handler: () => {
              window.location.href = "/projects/electronics/2024-PID-Self-Balancing-Robot/";
            },},{id: "projects-management-operations-simulation-quot-can-you-dig-it-quot",
          title: 'Management operations simulation - &amp;quot;Can You Dig It?&amp;quot;',
          description: "My personal project for this engineering management course 📋",
          section: "Projects",handler: () => {
              window.location.href = "/projects/management/2022-2-16%20MFMNGMT/";
            },},{id: "projects-business-feasibility-for-banana-peduncle-fiberboards",
          title: 'Business Feasibility for Banana Peduncle Fiberboards',
          description: "A business proposal for the manufacturing of banana fiberboards",
          section: "Projects",handler: () => {
              window.location.href = "/projects/management/2023%20ENGTREP/";
            },},{id: "projects-ergonomic-assessment-on-mem-thesis-room",
          title: 'Ergonomic assessment on MEM thesis room',
          description: "My project on our ergonomics class on the state of the MEM thesis room 👌",
          section: "Projects",handler: () => {
              window.location.href = "/projects/management/2023%20MFERGOP/";
            },},{id: "projects-time-study-for-br-andrew-gonzales-hall",
          title: 'Time study for Br. Andrew Gonzales hall',
          description: "Conducted a time study analysis for the worst building in DLSU-M to take classes (imho!) 😅",
          section: "Projects",handler: () => {
              window.location.href = "/projects/management/2024%20LBYMF4B/";
            },},{id: "projects-inspection-safety-report-for-a-multipurpose-cooperative",
          title: 'Inspection safety report for a multipurpose cooperative',
          description: "Our service learning project for Bigay Buhay Co-op that details a safety audit 👷🏻‍♂️",
          section: "Projects",handler: () => {
              window.location.href = "/projects/management/2024%20MFBAOHS/";
            },},{id: "projects-project-proposal-for-syncom-asia-pacific",
          title: 'Project proposal for Syncom Asia Pacific',
          description: "Our proposal to improve business processes within a service company 👨‍🔧",
          section: "Projects",handler: () => {
              window.location.href = "/projects/management/2024%20MFCIMSY/";
            },},{id: "projects-optimizing-production-in-a-dairy-cooperative",
          title: 'Optimizing Production in a Dairy Cooperative',
          description: "My service learning project for GenTri&#39;s Best Dairy Products 🐄",
          section: "Projects",handler: () => {
              window.location.href = "/projects/management/2024%20MFPROMA/";
            },},{id: "projects-dmaic-approach-for-data-tasks-in-a-service-company",
          title: 'DMAIC approach for data tasks in a service company',
          description: "lean and sustainable approach for continuous improvement implementation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/management/2025%20MFLNMFG/";
            },},{id: "projects-profit-maximization-for-small-scale-fruitcake-bakery",
          title: 'Profit maximization for small-scale fruitcake bakery',
          description: "Use of Integer Linear Programming (ILP) for maximizing profit based on business production 🍰",
          section: "Projects",handler: () => {
              window.location.href = "/projects/management/2025%20MRPRODS/";
            },},{id: "projects-cnc-machining",
          title: 'CNC machining',
          description: "The machining and g-codes we have made to fab a lathe vise holder 🕹️",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mechanical/2022%20LBYMF2A/";
            },},{id: "projects-smart-recyclable-bin-with-reclined-handguard",
          title: 'Smart recyclable bin with reclined handguard',
          description: "The CAD design for a smart receptable with a reclined handguard and initial mockup design 🗑️",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mechanical/2022%20LBYMF2B/";
            },},{id: "projects-kinematic-and-finite-element-analysis-of-a-laparscopic-gripper-and-forceps",
          title: 'Kinematic and finite element analysis of a laparscopic gripper and forceps',
          description: "The full computer-aided-design for a rudimentary laparscopic gripper for its gripper mechanism and stress loading under its forceps 🫳",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mechanical/2023%20LBYMF3A&LBYMF4C/";
            },},{id: "projects-product-design-improvement-for-a-tumbler-with-lid",
          title: 'Product design improvement for a tumbler with lid',
          description: "the full research-to-design improvements made for Brumate&#39;s Toddy Tumbler and Bev-Lock Seal 🧋",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mechanical/2023%20LBYMF3D/";
            },},{id: "projects-3d-scanning-and-printing-of-a-person-39-s-bust",
          title: '3D scanning and printing of a person&amp;#39;s bust',
          description: "Utilizing LiDAR to capture a 3D scan of a persons head ready for use and print 🤳🏻",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mechanical/2023%20LBYMF3H/";
            },},{id: "projects-cmm-inspection-fixture-for-gearbox-cover",
          title: 'CMM Inspection Fixture for Gearbox Cover',
          description: "A fixture precision tool for securing components during metrology measurements 🛠️",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mechanical/2024-Fixture/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%65%72%6E%61%6E%64%6F%6E%6D%61%67%61%6C%6C%61%6E%65%73%6A%72@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ferds003", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/fernandonmagallanesjr", "_blank");
        },
      },{
        id: 'social-whatsapp',
        title: 'whatsapp',
        section: 'Socials',
        handler: () => {
          window.open("https://wa.me/639053428364", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
