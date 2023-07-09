import classNames from 'classnames';
import styles from './revealing-background.module.scss';
import { useEffect, useState } from 'react';
import img from '../../assets/images/Qualcomm.jpg';
import { ImgInfo } from '../../constants';
export interface RevealingBackgroundProps {
    className?: string;
    imgInfo?: ImgInfo;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const defaultInfo: ImgInfo = {
    url: '',
    right: '',
};
export const RevealingBackground = ({
    className,
    imgInfo = defaultInfo,
}: RevealingBackgroundProps) => {
    const { url, right } = imgInfo;

    return (
        <div>
            <img
                src={url}
                alt="Description"
                className={classNames(styles.revealingBackground)}
                style={{ right: right }}
            />
        </div>
    );
};
