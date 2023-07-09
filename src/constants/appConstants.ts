import QualcommImage from '../assets/Images/Qualcomm.jpg';
//create interface for work experience
export interface WorkExperience {
    company: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string[];
    imgUrl: string;
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
        description: [
            "Collaborated with Qualcomm's Computer Aided Design team to engineer a sophisticated Project Access Management app, enhancing project allocation efficiency and optimizing Qualcomm's Load Sharing Facility.",
            "Led the development of the app's front end using React/TypeScript in a Linux environment, showcasing proficiency in modern web technologies and server deployment using Python.",
            'Seamlessly integrated the app with the existing user database via a robust API, enabling real-time tracking of project labels for optimal RAM allocation during task execution.',
        ],
        imgUrl: QualcommImage,
    },
    {
        company: 'University of Washington',
        title: 'Research Assistant',
        startDate: 'November 2022',
        endDate: 'March 2023',
        description: [
            'Created a streamlined user experience by designing and implementing a consortium website for the National Institute of Health’s Morphic Project, featuring a clean user interface developed using ReactJS.',
            'Leveraged the National Institutes of Health (NIH) database and Application Programming Interface (API) to enable efficient access to human gene information, creating a search functionality that suggests relevant data intuitively.',
            "Employed a user-centered design approach to optimize the website's functionality and accessibility, ensuring a seamless and intuitive user journey throughout the site.",
        ],
        imgUrl: QualcommImage,
    },
    {
        company: 'MCG Health Apple',
        title: 'Software Engineer Intern',
        startDate: 'July 2022',
        endDate: 'September 2022',
        description: [
            'Improved development workflow efficiency by establishing a streamlined pipeline for deploying feature branches in Azure Repos using Azure DevOps, enabling efficient testing of new code implementations and functionality.',
            'Migrated existing codebase from jQuery 1.4 to jQuery 3.6, resulting in substantial improvements in application performance and maintainability. Conducted a comprehensive assessment of the legacy codebase, identifying areas for optimization and efficiency improvement, and implementing code replacements as necessary.',
            'Enabled targeted optimizations by conducting accurate load testing on the software using Javascript and k6 framework, identifying bottlenecks and measuring performance.',
        ],
        imgUrl: QualcommImage,
    },
];
