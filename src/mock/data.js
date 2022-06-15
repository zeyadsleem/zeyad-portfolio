import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Zeyad Sleem', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Zeyad Sleem Developer Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Zeyad.',
  subtitle: "I'm a Front End developer.",
  // title: "Hi, if you're",
  // name: 'here,',
  // subtitle: 'this site is a work in progress.',
  // cta: 'Continue',
};

// SKILLS DATA
export const skillsData = {
  frontEnd: {
    title: 'Front End',
    stacks: [
      { name: 'HTML5', img: 'html5.png' },
      { name: 'CSS3', img: 'css.png' },
      { name: 'JavaScript', img: 'javascript.png' },
      { name: 'React', img: 'react.png' },
      { name: 'Redux', img: 'redux.png' },
    ],
    burger: 'burger_topbun.png',
  },
  backEnd: {
    title: 'Back End',
    stacks: [
      { name: 'Node', img: 'node.png' },
      { name: 'Express', img: 'express.png' },
      { name: 'MongoDB', img: 'mongo.png' },
      { name: 'RESTful API', img: 'restfulapi.png' },
    ],
    burger: 'burger_bottombun.png',
  },
  tools: {
    title: 'Tools',
    stacks: [
      { name: 'Agile', img: 'agile3.png' },
      { name: 'Git', img: 'git.png' },
      { name: 'Heroku', img: 'heroku.png' },
      { name: 'Webpack', img: 'module.png' },
      { name: 'docker', img: 'docker.png' },
    ],
    burger: 'burger_middle.png',
  },
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'zeyad-myreads.vercel.app_.png',
    title: 'Book Shelf',
    info:
      'this project made to apply consents i was learned in udacity course,components, functional programming and class components ',
    info2: '',
    contributors: '',
    stack: ['React', 'react router dom', 'react forms', 'css'],
    note: '',
    url: 'https://zeyad-myreads.vercel.app/',
    repo: 'https://github.com/zeyadsleem/zeyad-myreads', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nextjs-movie-app-mu.vercel.app_.png',
    title: 'Nextjs Movie App',
    info: 'Simple react movie app using nextjs framework',
    info2: '',
    contributors: '',
    stack: ['Next.js.', 'css'],
    note: '',
    url: 'https://nextjs-movie-app-mu.vercel.app/',
    repo: 'https://github.com/zeyadsleem/nextjs-movie-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'markdown-notepad.vercel.app_.png',
    title: 'Markdown Notepad',
    info:
      'Markdown note app with fetchers like add,remove, costume textand preview to final product.made with react functional components, css3 andmarkdown third',
    info2: '',
    contributors: '',
    stack: ['React', 'React Hooks', 'nanoId', 'css'],
    note: '',
    url: 'https://markdown-notepad.vercel.app/',
    repo: 'https://github.com/zeyadsleem/markdown-notepad', // if no repo, the button will not show up
  },
];

// ABOUT DATA
export const aboutData = {
  // For lulz:
  // img: 'Origami_Bernie_Meme.jpeg',
  // img: 'LinkedInPhoto.png',
  img: 'Zeyad.png',
  paragraphOne: 'Hi my name is Zeyad Sleem. from Cairo, Egypt',
  paragraphTwo:
    "I am a Software Developer with a passion for creating beautiful, responsive, and intuitive user interfaces. I holds a Bachelor's degree in Management Information Systems have developed experience in both front-end and back-end development. I love exploring and learning new technologies and I am always looking to improve my skills.",

  resume: 'https://drive.google.com/file/d/1RHlh-OUD0R0OmCiKuGHSCj6VayQxFtA5/view', // if no resume, the button will not show up
};

// CONTACT DATA
export const contactData = {
  cta: 'Get In Touch!',
  btn: 'email',
  email: 'zeyadsleem1@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/zeyad-sleem/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/zeyadsleem',
    },
    {
      id: nanoid(),
      name: 'file',
      url: aboutData.resume,
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
