import classNames from 'classnames';
import styles from './name.module.scss';
import { useState, useEffect } from 'react';

export interface NameProps {
    className?: string;
    text: string;
    font?: string;
    timeDelay: number;
    children?: React.ReactNode;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Name = ({ className, text, font, timeDelay, children }: NameProps) => {

    return (
        <div
            className={classNames(styles.root, className, styles.revealAnimation)}
            font-family={font}
        >
            <h1>
                {children}
            </h1>
        </div>
    );
};
