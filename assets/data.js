// import { images } from './images';

// const { logo, heroImg, aboutImg } = images;

// 01 HEADER SECTION

const headerNavLinks = [
  {
    linkUrl: '/',
    linkTitle: 'Home',
    className: 'nav__link',
  },
  {
    linkUrl: '/',
    linkTitle: 'About Us',
    className: 'nav__link',
  },
  {
    linkUrl: '/',
    linkTitle: 'Features',
    className: 'nav__link',
  },
  {
    linkUrl: '/',
    linkTitle: 'People',
    className: 'nav__link',
  },
  {
    linkUrl: '/',
    linkTitle: 'Contact Us',
    className: 'nav__link link__button',
  },
]

// 02 MAIN CONTENT SECTION

// 02.01 HERO SECTION

const heroSectionTitle = [
    {
        titlePart: 'The Path to',
        class: "title__addOn hero__title_01"
    },
    {
        titlePart: 'Financial Success',
        class: "title__addOn hero__title_02"
        
    },
    {
        titlePart: 'Begins with us',
        class: "title__addOn hero__title_03"

    }

]

// 02.02 FEATURES SECTION - 01

const featureSection01 = [
  {
    index: "01",
    title: "Access to Enterprise",
    desc: `As a member of Cain-Surrey Capital you will have access 
      to our team of experts who have extensive experience
      and knowledge in various industries and financial services.
      Our experts are always available to provide insights, guidance,
      and advice to help you make informed decisions that can drive
      your business forward.
    `
  },
  {
    index: "02",
    title: "Customized Solutions",
    desc: `As a member of Cain-Surrey Capital you will have access 
      to our team of experts who have extensive experience
      and knowledge in various industries and financial services.
      Our experts are always available to provide insights, guidance,
      and advice to help you make informed decisions that can drive
      your business forward.
    `
  },
  {
    index: "03",
    title: "Global Reach",
    desc: `Cain-Surrey Capital has a global presence and we have a deep 
      understanding of the local market dynamics in various regions.
      As a member of Cain-Surrey Capital, you can benefit from our global
      reach and expertise, and tap into new markets and opportunities that
      can help you grow your business.
    `
  },
  {
    index: "04",
    title: "Trust and Integrity",
    desc: ` We believe that trust and integrity are the foundation of our 
      business, and we are committed to maintaining the highest ethical
      standards in everything we do. When you become a member of Cain-Surrey Capital,
      you can trust that we will always act in your best interest.
    `
  },
]

// 02.03 FEATURES SECTION - 02

const featureSection02 = {
  sectionTitle: "The Cain-Surrey Difference",
  listItems: [
    {
      index: "01",
      title: "Innovative Approach",
      desc: `We combine our extensive experience 
        and knowledge with cutting-edge technology 
        to develop customized solutions that help
        our clients achieve their goals.
      `
    },
    {
      index: "02",
      title: "Client-Centered Ethos",
      desc: `We believe that the success of 
        our clients is our success, and we are
        committed to building long-term relationships
        based on trust, integrity, and transparency.
      `
    },
    {
      index: "03",
      title: "Local Expertise",
      desc: `We combine our global reach with local 
        expertise to provide our clients with insights
        and advice that are tailored to the specific
        market dynamics in their region.
      `
    }
  ]
};

// 02.04 ABOUT US SECTION

const aboutUsSection = {
  subtitle: "Your Financial Partner",
  title: "Meet Christina",
  desc: `
    Cras semper auctor neque vitae tempus.
    Neque volutpat ac tincidunt vitae.
    Eros donec ac odio tempor orci dapibus ultrices.
    Eget mauris pharetra et ultrices neque ornare.
    Metus aliquam eleifend mi in nulla posuere
    sollicitudin aliquam. Nunc id cursus metus
    aliquam eleifend mi.
  `
}

// 03 FOOTER SECTION

const footerSectionLinks = [
  {
    linkHeading: "Company",
    links: [
      {
        linkTitle: "About Cain-Surrey",
        linkUrl: "/",
      },
      {
        linkTitle: "Our Values",
        linkUrl: "/",
      },
      {
        linkTitle: "Our History",
        linkUrl: "/",
      },
      {
        linkTitle: "By the Numbers",
        linkUrl: "/",
      },
    ]
  },
  {
    linkHeading: "Business",
    links: [
      {
        linkTitle: "Private Equity",
        linkUrl: "/",
      },
      {
        linkTitle: "Credit",
        linkUrl: "/",
      },
      {
        linkTitle: "Special Situations",
        linkUrl: "/",
      },
      {
        linkTitle: "Venture",
        linkUrl: "/",
      },
      {
        linkTitle: "Real Estate",
        linkUrl: "/",
      },
    ]
  },
  {
    linkHeading: "People",
    links: [
      {
        linkTitle: "People",
        linkUrl: "/",
      },
      {
        linkTitle: "Corporate",
        linkUrl: "/",
      },
      {
        linkTitle: "Leadership",
        linkUrl: "/",
      },
    ]
  },
  {
    linkHeading: "Help",
    links: [
      {
        linkTitle: "FAQ",
        linkUrl: "/",
      },
      {
        linkTitle: "Contact Us",
        linkUrl: "/",
      },
      {
        linkTitle: "Terms",
        linkUrl: "/",
      },
      {
        linkTitle: "Cookies",
        linkUrl: "/",
      },
      {
        linkTitle: "Privacy",
        linkUrl: "/",
      },
    ]
  },
]

export { headerNavLinks, heroSectionTitle, featureSection01, featureSection02, aboutUsSection, footerSectionLinks };
