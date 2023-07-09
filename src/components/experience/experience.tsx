import classNames from 'classnames';
import styles from './experience.module.scss';
import { ParallaxTitle } from '../parallax-title/parallax-title';
import { ExperienceItem } from './experience-item/experience-item';
import App_module from '../../App.module.scss';
import { WORK_EXPERIENCE } from '../../constants';

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
        <div id="experience">
            <ParallaxTitle title={title} />
            {WORK_EXPERIENCE.map((experience, index) => {
                return (
                    <ExperienceItem
                        key={index}
                        experience={experience}
                        className={classNames(App_module.container, styles.experienceItem)}
                    />
                );
            })}
        </div>
    );
};
