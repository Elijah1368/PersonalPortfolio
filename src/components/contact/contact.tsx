import classNames from 'classnames';
import styles from './contact.module.scss';
import ContactForm from './contactForm/contactForm';
import { Section } from '../common/section';

export interface ContactProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contact = ({ className, children }: ContactProps) => {
    return (
        <Section className={className}>
            {children}
        </Section>
    );
};
