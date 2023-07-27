import classNames from 'classnames';
import styles from './projects.module.scss';
import { ParallaxTitle } from '../parallax-title/parallax-title';
import { Section } from '../common/section';

export interface ProjectsProps {
    className?: string;
    children: React.ReactNode;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Projects = ({ className, children }: ProjectsProps) => {
    return (
        <Section>
            {children}
        </Section>
    );
};
