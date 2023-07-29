import QualcommImage from '../assets/Images/Qualcomm2.jpg';
import MorphicImage from '../assets/Images/morphic.jpg';
import MCGImage from '../assets/Images/mcghealth2.jpg';
import Wallpaper from '../assets/Images/elCapitan1.jpg';
import WeatherChatMobileApp from '../assets/Images/Projects/1.jpg';
import NinjaFrog from '../assets/Images/Projects/NinjaFrog.png';
import TheOfficeQuotes from '../assets/Images/Projects/officeQuotes.jpg';

import homeIcon from '../assets/Images/hero.png';
import experienceIcon from '../assets/Images/experience.png';
import projectsIcon from '../assets/Images/projects.png';
import educationIcon from '../assets/Images/education.png';
import contactIcon from '../assets/Images/contact.png';
import linkedinIcon from '../assets/Images/linkedin.png';
import githubIcon from '../assets/Images/github.png';
import { CardProps } from '../components/common/ResponsiveCards/ResponsiveCards';
// create interface for work experience
export interface ImgInfo {
    url: string;
}
export interface WorkExperience {
    company: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string[];
    imgInfo?: ImgInfo;
    companyUrl?: string;
    location: string;
}
export const NAME: string = 'Elijah Amian';
export const TITLE: string = 'Software Engineer';
export const NAME_FONT: string = 'Valencia';
export const TITLE_FONT: string = 'Avenir Roman';
export const EXPERIENCE_TITLE: string = 'Experience';
export const PROJECT_TITLE: string = 'Projects';

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Qualcomm',
    title: 'Software Engineer Intern',
    startDate: 'June 2023',
    endDate: 'September 2023',
    location: 'Santa Clara, CA',
    description: [
      'Engineer a Project Access Management application to simplify permission handling for project resources, enhancing the ability to track and manage access effectively and efficiently',
      'Developed an intuitive user interface using JavaScript/TypeScript and React, enhancing user experience through responsive design and seamless navigation',
      'Seamlessly integrated the UI with the existing user database via a REST API, developed using Python and Flask, ensuring real-time data updates and secure data retrieval',
    ],
    imgInfo: {
      url: QualcommImage,
    },
    companyUrl: 'https://www.qualcomm.com/',
  },
  {
    company: 'University of Washington',
    title: 'Research Assistant',
    startDate: 'November 2022',
    endDate: 'March 2023',
    location: 'Seattle, WA',
    description: [
      'Created a streamlined user experience by designing and implementing a consortium website for the National Institute of Health’s Morphic Project, featuring a clean user interface developed using ReactJS.',
      'Leveraged the National Institutes of Health (NIH) database and Application Programming Interface (API) to enable efficient access to human gene information, creating a search functionality that suggests relevant data intuitively.',
      "Employed a user-centered design approach to optimize the website's functionality and accessibility, ensuring a seamless and intuitive user journey throughout the site.",
    ],
    imgInfo: {
      url: MorphicImage,
    },
    companyUrl: 'https://morphic.bio/',
  },
  {
    company: 'MCG Health',
    title: 'Software Engineer Intern',
    startDate: 'July 2022',
    endDate: 'September 2022',
    location: 'Seattle, WA',
    description: [
      'Improved development workflow efficiency by establishing a streamlined pipeline for deploying feature branches in Azure Repos using Azure DevOps, enabling efficient testing of new code implementations and functionality.',
      'Migrated existing codebase from jQuery 1.4 to jQuery 3.6, resulting in substantial improvements in application performance and maintainability. Conducted a comprehensive assessment of the legacy codebase, identifying areas for optimization and efficiency improvement, and implementing code replacements as necessary.',
      'Enabled targeted optimizations by conducting accurate load testing on the software using Javascript and k6 framework, identifying bottlenecks and measuring performance.',
    ],
    imgInfo: {
      url: MCGImage,
    },
    companyUrl: 'https://www.mcg.com/',
  },
];

export const WALLPAPER = Wallpaper;

export const DOCK_DATA = {
  home: homeIcon,
  experience: experienceIcon,
  projects: projectsIcon,
  education: educationIcon,
  contacts: contactIcon,
  divider: null,
  linkedin: linkedinIcon,
  github: githubIcon,
};

export const EXPERIENCE_ITEM_HEIGHT = '200vh';

export const PROJECTS: CardProps[] = [
  {
    title: 'Weather Chat Mobile App',
    copy: 'Real-time local weather information and messaging in a mobile app',
    button: 'Github',
    link: 'https://github.com/Elijah1368/WeatherChatApp',
  },
  {
    title: 'Ninja Frog Web Game',
    copy: '2D platformer web game made in Javascript',
    button: 'Github',
    link: 'https://github.com/Elijah1368/Ninja-Frog',

  },
  {
    title: 'The Office Quotes Generator',
    copy: 'A random quote generator for The Office TV show made with ReactJS and Redux',
    button: 'Github',
    link: 'https://github.com/Elijah1368/The-Office-Quotes',

  },
  {
    title: 'Who wants to be a Millionaire',
    copy: 'Trivia game made in React and Javascript',
    button: 'Github',
    link: 'https://github.com/Elijah1368/react_game_show',

  },
];

export const EDUCATION = {
  school: 'University of Washington',
  degree: 'Bachelor of Science in Computer Science',
  gpa: '3.6',
  endDate: 'September 2023', 
  courses: ['Data Structures', 'Algorithms', 'Operating Systems', 'Software Engineering', 'Database Design', 'Mobile Application Development', 'Artificial Intelligence'],
  website: "https://www.washington.edu/",
  Description: [
    '1st Place Puget Sound Programming Contest',
    'Vice President for Google Developer Student Club',
    'Student Senator for School of Engineering and Technology',
    'Dean’s List (2022)',
  ],
}