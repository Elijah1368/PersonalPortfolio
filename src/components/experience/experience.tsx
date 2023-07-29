import classNames from 'classnames';
import styles from './experience.module.scss';
import { ParallaxTitle } from '../parallax-title/parallax-title';
import { ExperienceItem } from './experience-item/experience-item';
import App_module from '../../App.module.scss';
import { EXPERIENCE_ITEM_HEIGHT, WORK_EXPERIENCE } from '../../constants';
import Navbar_module from '../navbar/navbar.module.scss';
import MacWindow from '../common/macWindow';
import { JobDescriptionContainer } from './experience-item/job-description-container/job-description-container';
import { RevealingBackground } from '../revealing-background/revealing-background';

export interface ExperienceProps {
    className?: string;
    children: React.ReactNode
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Experience = ({ className, children }: ExperienceProps) => {
    return (
        <div id="experience" className={className}>
            {children}
        </div>
    );
};
