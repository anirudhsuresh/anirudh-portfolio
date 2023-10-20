// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Anirudh",
  middleName: "",
  lastName: "Ramchandran",
  message: "Software Developer | Front End Engineer | Bun (Rabbit) Dad ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/anirudhsuresh",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/anirudh-ramchandran/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  // TODO
  imageLink: require("../editable-stuff/anirudh.png"),
  imageSize: 375,
  message:
    "Software Engineer with expertise in web development and designing front-end web application tools. As an honors graduate in Electrical & Computer Engineering, I've championed projects at SiFive, innovating web tools, refining testing procedures, and reducing latency. I presented at Apache Con 2021 and have a published research paper highlighting my work. Passionate about collaboration, innovation, and advancing impactful software solutions.",
  resume: "https://github.com/anirudhsuresh/anirudh-resume/blob/main/Anirudh_Ramchandran_Resume.pdf",
};

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "anirudhsuresh",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Hobbies",
  images: [
    { 
      img: require("../../src/assets/img/FullSizeRender.png"), 
      label: "Tennis Anytime", 
      paragraph: "Still working on my serve ..." 
    },
    { 
      img: require("../../src/assets/img/fire.png"), 
      label: "California Wildfires", 
      paragraph: "They do look beautiful but what costs.." 
    },
    { 
      img: require("../../src/assets/img/rabbit.png"), 
      label: "My Pet Rabbit", 
      paragraph: "One of these days he might just respond to his name ....ash" 
    },
  ],
  imageSize: {
    width: "100%",
    height: "10%"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 90 },
    { name: "HTML/CSS", value: 90 },
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "React", value: 75 },
    { name: "Git", value: 85 },
    { name: "AWS/ Jenkins/ CI | CD ", value: 75 },
    { name: "Scripting langues", value: 85 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    " I was recently part of mass layoff and I'm currently looking for full-time Software Engineering or Front End Engineering Roles! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "anirudh.suresh.ramchandran@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer 1 ',// Here Add Company Name
      companylogo: require('../assets/img/sifive-logo-white.png'),
      date: 'March 2022 – Present',
    },
    {
      role: 'Research Assistant - Front End Developer ',
      companylogo: require('../assets/img/ucdavis.png'),
      date: 'Jan 2021 – March 2022',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
