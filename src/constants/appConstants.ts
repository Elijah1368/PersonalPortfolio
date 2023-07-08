//create interface for work experience
export interface WorkExperience {
    company: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string[];
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
        description: ['Developed'],
    },
];
