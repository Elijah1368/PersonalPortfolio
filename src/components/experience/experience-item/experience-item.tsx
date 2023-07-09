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
    const [ref, inView] = useInView({
        threshold: 1,
        triggerOnce: false,
    });
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };
    return (
        <div className={classNames(styles.root, className)}>
            {/* <div className={styles.jobDescription}> */}
            <motion.div ref={ref}>
                <JobDescriptionContainer experience={experience} />
            </motion.div>
            <motion.div
                animate={inView ? 'visible' : 'hidden'}
                variants={variants}
                exit="hidden"
                transition={{ duration: 2 }}
            >
                <RevealingBackground imgInfo={experience.imgInfo} className={styles.background} />
            </motion.div>
        </div>
    );
};
