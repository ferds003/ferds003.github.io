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
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my cool projects and interesting works.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
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
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
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
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-representing-dlsu-at-hult-prize-2021",
          title: 'Representing DLSU at Hult Prize 2021 🌍🥗',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021_OnCampus/";
            },},{id: "news-champion-for-social-enterprise-conference-2021",
          title: 'Champion for Social Enterprise Conference 2021',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021_YES/";
            },},{id: "news-champion-for-echoes-of-ecology-a-community-scientific-monologue-competition",
          title: 'Champion for Echoes of Ecology, a community scientific monologue competition!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021_Echoes_of_Ecology/";
            },},{id: "news-top-8-in-fowler-gsic-2022-️",
          title: 'Top 8 in Fowler GSIC 2022! 🌐⚙️',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022_Fowler/";
            },},{id: "news-country-finalist-of-schneider-go-green-2022",
          title: 'Country Finalist of Schneider Go Green (2022) 🌱⚡',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022_Schneider/";
            },},{id: "news-2nd-runner-up-country-finals-for-3m-inspire-challenge",
          title: '2nd Runner Up - Country Finals for 3M Inspire Challenge🏆🍌',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023_3M/";
            },},{id: "news-",
          title: '',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023_Gawad/";
            },},{id: "news-",
          title: '',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024_Gawad/";
            },},{id: "news-featured-in-abs-cbn-news",
          title: 'Featured in ABS-CBN News!',
          description: "I am featured in a ABS-CBN post upon winning my most recent win in First Gen Code Green! Check out the article here along with selected interview from the team.",
          section: "News",handler: () => {
              window.location.href = "/news/2024_feature_1/";
            },},{id: "news-featured-in-rappler-blog",
          title: 'Featured in Rappler Blog!',
          description: "I am featured in a Rappler Blog upon winning my most recent win in First Gen Code Green! Check out the article here.",
          section: "News",handler: () => {
              window.location.href = "/news/2024_feature_2/";
            },},{id: "news-featured-in-mem-department-page",
          title: 'Featured in MEM Department Page!',
          description: "Featured by Animoboards and by my college department!! T_T Thanks MEM~ &lt;33",
          section: "News",handler: () => {
              window.location.href = "/news/2024_feature_3/";
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
