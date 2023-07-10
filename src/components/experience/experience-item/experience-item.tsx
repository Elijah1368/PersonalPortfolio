import classNames from 'classnames';
import styles from './experience-item.module.scss';
import { WorkExperience } from '../../../constants';
import { JobDescriptionContainer } from './job-description-container/job-description-container';
import { RevealingBackground } from '../../revealing-background/revealing-background';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Experience_module from '../experience.module.scss';
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
            {/* <div className={styles.jobDescription}> */}

            <JobDescriptionContainer experience={experience} />

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <RevealingBackground imgInfo={experience.imgInfo} className={styles.background} />
            </motion.div>
        </div>
    );
};
