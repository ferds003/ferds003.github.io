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
          description: "A growing collection of my cool projects and coursework.",
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
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-announcements-and-news-can-be-much-longer-than-just-quick-inline-posts-in-fact-they-can-have-all-the-features-available-for-the-standard-blog-posts-see-below-jean-shorts-raw-denim-vice-normcore-art-party-high-life-pbr-skateboard-stumptown-vinyl-kitsch-four-loko-meh-8-bit-tousled-banh-mi-tilde-forage-schlitz-dreamcatcher-twee-3-wolf-moon-chambray-asymmetrical-paleo-salvia-sartorial-umami-four-loko-master-cleanse-drinking-vinegar-brunch-pinterest-diy-authentic-schlitz-hoodie-intelligentsia-butcher-trust-fund-brunch-shabby-chic-kickstarter-forage-flexitarian-direct-trade-cold-pressed-meggings-stumptown-plaid-pop-up-taxidermy-hoodie-xoxo-fingerstache-scenester-echo-park-plaid-ugh-wes-anderson-freegan-pug-selvage-fanny-pack-leggings-pickled-food-truck-diy-irony-banksy-hipster-list-brunch-fixie-raybans-messenger-bag-hoodie-thundercats-retro-tote-bag-8-bit-godard-craft-beer-gastropub-truffaut-tumblr-taxidermy-raw-denim-kickstarter-sartorial-dreamcatcher-quinoa-chambray-slow-carb-salvia-readymade-bicycle-rights-90-s-yr-typewriter-selfies-letterpress-cardigan-vegan-pug-heirloom-high-life-vinyl-swag-single-origin-coffee-four-dollar-toast-taxidermy-reprehenderit-fap-distillery-master-cleanse-locavore-est-anim-sapiente-leggings-brooklyn-ea-thundercats-locavore-excepteur-veniam-eiusmod-raw-denim-truffaut-schlitz-migas-sapiente-portland-vhs-twee-bushwick-marfa-typewriter-retro-id-keytar-we-do-not-grow-absolutely-chronologically-we-grow-sometimes-in-one-dimension-and-not-in-another-unevenly-we-grow-partially-we-are-relative-we-are-mature-in-one-realm-childish-in-another-anais-nin-fap-aliqua-qui-scenester-pug-echo-park-polaroid-irony-shabby-chic-ex-cardigan-church-key-odd-future-accusamus-blog-stumptown-sartorial-squid-gastropub-duis-aesthetic-truffaut-vero-pinterest-tilde-twee-odio-mumblecore-jean-shorts-lumbersexual",
          title: 'Announcements and news can be much longer than just quick inline posts. In...',
          description: "",
          section: "News",},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{
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
