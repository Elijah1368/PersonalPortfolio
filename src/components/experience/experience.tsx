import classNames from 'classnames';
import styles from './experience.module.scss';
import { ParallaxTitle } from '../parallax-title/parallax-title';
import { ExperienceItem } from './experience-item/experience-item';

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
        <div className={classNames(styles.root, className)} id="experience">
            <ParallaxTitle title={title} />
            <ExperienceItem />
        </div>
    );
};
