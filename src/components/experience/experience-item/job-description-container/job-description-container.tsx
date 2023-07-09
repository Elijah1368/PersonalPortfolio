import classNames from 'classnames';
import styles from './job-description-container.module.scss';
import { WorkExperience } from '../../../../constants/appConstants';

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
        <div className={classNames(styles.root, className)}>
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
        </div>
    );
};
