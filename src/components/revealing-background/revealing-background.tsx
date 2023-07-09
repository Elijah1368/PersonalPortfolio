import classNames from 'classnames';
import styles from './revealing-background.module.scss';
import { useEffect, useState } from 'react';
import img from '../../assets/images/Qualcomm.jpg';

export interface RevealingBackgroundProps {
    className?: string;
    imgUrl: string;
    imgClassName?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const RevealingBackground = ({
    className,
    imgUrl,
    imgClassName,
}: RevealingBackgroundProps) => {
    return (
        <div>
            <img
                src={imgUrl}
                alt="Description"
                className={classNames(styles.revealingBackground, styles.imgAdjust1)}
            />
        </div>
    );
};