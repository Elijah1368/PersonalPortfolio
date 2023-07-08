import classNames from 'classnames';
import styles from './parallax-title.module.scss';
import { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';

export interface ParallaxTitleProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ParallaxTitle = ({ className }: ParallaxTitleProps) => {
    const parallax = useRef<IParallax>(null!);
    return (
        <div className={classNames(styles.root, className)}>
            <Parallax ref={parallax} pages={3} horizontal>
                <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#805E73' }}>
                    <span>Testing</span>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
};
