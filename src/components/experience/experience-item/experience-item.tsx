import classNames from 'classnames';
import styles from './experience-item.module.scss';
import { WorkExperience } from '../../../constants';
import { JobDescriptionContainer } from './job-description-container/job-description-container';
import { RevealingBackground } from '../../revealing-background/revealing-background';
import { motion, useScroll, useTransform} from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Experience_module from '../experience.module.scss';
import MacWindow from '../../common/macWindow';
import { Section } from '../../common/section';
import { Box, Card } from '@mui/material';
import { AnimateOnScroll } from '../../common/animateOnScroll';
export interface ExperienceItemProps {
    className?: string;
    experience: WorkExperience;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ExperienceItem = ({ className, experience }: ExperienceItemProps) => {
    const { scrollYProgress } = useScroll();
    const backgroundHeight = "200vh"
    return (
      
            
        <Box className="w-screen flex justify-center items-center" sx={{height: backgroundHeight,}}>
            

            {/* <JobDescriptionContainer experience={experience} /> */}
    
            <MacWindow></MacWindow>
            
            <RevealingBackground height={backgroundHeight} imgInfo={experience.imgInfo}/>
        
            
        </Box>
    
    );
};
