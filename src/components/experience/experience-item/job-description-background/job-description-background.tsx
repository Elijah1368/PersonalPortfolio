import classNames from 'classnames';
import styles from './job-description-background.module.scss';

export interface JobDescriptionBackgroundProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const JobDescriptionBackground = ({ className }: JobDescriptionBackgroundProps) => {
    return <div className={classNames(styles.root, className)}></div>;
};
