import classNames from 'classnames';
import styles from './education.module.scss';
import { Section } from '../common/section';

export interface EducationProps {
    className?: string;
    children: React.ReactNode;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Education = ({ className, children }: EducationProps) => {
    return (
        <Section className={className}>
            {children}
        </Section>
    );
};
