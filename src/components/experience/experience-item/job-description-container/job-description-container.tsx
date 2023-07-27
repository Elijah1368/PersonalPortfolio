import classNames from 'classnames';
import styles from './job-description-container.module.scss';
import { WorkExperience } from '../../../../constants/appConstants';
import { Typography } from '@mui/material';


export interface JobDescriptionContainerProps {
    className?: string;
    experience: WorkExperience;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const JobDescriptionContainer = ({
    className,
    experience,
}: JobDescriptionContainerProps) => {
    return (
      <div className={styles.appCard}>
       <div className="flex flex-col text-2xl pl ab border-b border-solid border-[color:var(--border-color)] text-center justify-center font-medium h-20">
            <div className="flex flex-row  justify-between items-end">
                <div className="text-4xl">{experience.company}</div>
                <div>{experience.title}</div>
                
            </div>

       </div>
        {experience.description.map((description, index) => {
                return (
                    <div className="font-normal leading-loose mt-5 border-b border-[var(--border-color)] pb-5 text-xl">{description}</div>
                )
        })}
       
       <div className={"justify-between flex flex-row  w-full items-center mt-4 ml-auto"}>
            <div className="flex flex-row text-right justify-between items-end">
                <span className="mr-2">{experience.location}</span>
               
                <span className="border-l-2 pl-2">{experience.startDate + " - " + experience.endDate}</span>
            </div>
            <a href={experience.companyUrl} target="_blank">
            <button className="content-button status-button">Website</button>
            </a>
       </div>
      </div>
     
    );
};
/* <div className={classNames(styles.root, className)}>
            <div className={styles.titleAndDate}>
                <div>
                    <h3>{experience.title}</h3>
                    <h4>{experience.company}</h4>
                </div>
                <div>
                    <h4>{experience.startDate + " - " + experience.endDate}</h4>
                    
                </div>
            </div>
            <div className={styles.responsibilities}>
                {experience.description.map((description, index) => {
                    return <p key={index}>{description}</p>;
                })}
            </div>
        </div> */