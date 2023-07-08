import classNames from 'classnames';
import styles from './projects.module.scss';
import { ParallaxTitle } from '../parallax-title/parallax-title';

export interface ProjectsProps {
    className?: string;
    title: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Projects = ({ className, title }: ProjectsProps) => {
    return (
        <div className={classNames(styles.root, className)} id="projects">
            <ParallaxTitle title={title} />
        </div>
    );
};
