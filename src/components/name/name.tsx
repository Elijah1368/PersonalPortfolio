import classNames from 'classnames';
import styles from './name.module.scss';
import { useState, useEffect } from 'react';

export interface NameProps {
    className?: string;
    text: string;
    font?: string;
    timeDelay: number;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Name = ({ className, text, font, timeDelay }: NameProps) => {
    const [reveal, setReveal] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setReveal(true);
        }, timeDelay);

        // Cleanup function: if the component unmounts before the timeout finishes, it prevents setState on unmounted component
        return () => clearTimeout(timeoutId);
    }, [timeDelay]); // Only run this effect when `timeDelay` changes

    return (
        <div
            className={classNames(styles.root, className, styles.revealAnimation)}
            font-family={font}
        >
            <h1>
                <span>{text}</span>
            </h1>
        </div>
    );
};
