import classNames from 'classnames';
import styles from './experience-item.module.scss';
import { WorkExperience } from '../../../constants';
import { JobDescriptionContainer } from './job-description-container/job-description-container';
import { RevealingBackground } from '../../revealing-background/revealing-background';
import { useScroll } from 'react-spring';
export interface ExperienceItemProps {
    className?: string;
    experience: WorkExperience;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ExperienceItem = ({ className, experience }: ExperienceItemProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <JobDescriptionContainer experience={experience} />

            <RevealingBackground imgUrl={experience.imgUrl} className={styles.background} />
        </div>
    );
};
