import classNames from 'classnames';
import styles from './experience.module.scss';
import { ParallaxTitle } from '../parallax-title/parallax-title';
import { ExperienceItem } from './experience-item/experience-item';
import App_module from '../../App.module.scss';
import { WORK_EXPERIENCE } from '../../constants';
import Navbar_module from '../navbar/navbar.module.scss';

export interface ExperienceProps {
    className?: string;
    title: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Experience = ({ className, title }: ExperienceProps) => {
    return (
        <div id="experience" >
            <ParallaxTitle title={title} />
            <div className={styles.ca}>
                {WORK_EXPERIENCE.map((experience, index) => {
                    return (
                        <ExperienceItem
                            key={index}
                            experience={experience}
                            className={App_module.container}
                        />
                    );
                })}
            </div>
        </div>
    );
};
