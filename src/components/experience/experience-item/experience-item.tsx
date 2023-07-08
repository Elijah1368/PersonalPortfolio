import classNames from 'classnames';
import styles from './experience-item.module.scss';

export interface ExperienceItemProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ExperienceItem = ({ className }: ExperienceItemProps) => {
    return <div className={`${className}`}>ExperienceItem</div>;
};
