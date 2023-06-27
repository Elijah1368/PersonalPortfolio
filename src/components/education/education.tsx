import classNames from 'classnames';
import styles from './education.module.scss';

export interface EducationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Education = ({ className }: EducationProps) => {
    return (
        <div className={classNames(styles.root, className)} id="education">
            Education
        </div>
    );
};
