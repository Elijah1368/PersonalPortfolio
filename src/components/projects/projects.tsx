import classNames from 'classnames';
import styles from './projects.module.scss';

export interface ProjectsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Projects = ({ className }: ProjectsProps) => {
    return (
        <div className={classNames(styles.root, className)} id="projects">
            Projects
        </div>
    );
};
