import classNames from 'classnames';
import styles from './parallax-title.module.scss';
import { useScroll, animated } from 'react-spring';

export interface ParallaxTitleProps {
    className?: string;
    title: string;
}

export const ParallaxTitle = ({ className, title }: ParallaxTitleProps) => {
    const { scrollYProgress } = useScroll();

    const styleRightToLeft = {
        transform: scrollYProgress.to({
            range: [0, 0.1, 0.6, 1],
            output: [
                'translateX(0%)',
                'translateX(-20%)',
                'translateX(-100%)',
                'translateX(-100%)',
            ],
        }),
        // opacity: scrollYProgress.to({
        //     range: [0.1, 0.18, 0.33, 0.35], // Start animation at 30% scroll
        //     output: [0, 1, 1, 0], // At 0% and 30% scroll, opacity should be 1
        // }),
    };
    const style = {
        transform: scrollYProgress.to({
            range: [0, 0.1, 0.6, 1],
            output: ['translateX(0%)', 'translateX(10%)', 'translateX(100%)', 'translateX(100%)'],
        }),
        opacity: scrollYProgress.to({
            range: [0.1, 0.18, 0.33, 0.35], // Start animation at 30% scroll
            output: [0, 1, 1, 0], // At 0% and 30% scroll, opacity should be 1
        }),
    };
    return (
        <div className={styles.parallaxTitleContainer}>
            <animated.div
                className={classNames(styles.background, className)}
                style={styleRightToLeft}
            >
                <span className={classNames(styles.backgroundText, styles.text1)}>
                    {title.toUpperCase()}
                </span>
                <span className={styles.backgroundText}>{title.toUpperCase()}</span>
                <span className={classNames(styles.backgroundText, styles.text3)}>
                    {title.toUpperCase()}
                </span>
            </animated.div>
            <animated.div className={classNames(styles.root, className)} style={style}>
                {title}
            </animated.div>
        </div>
    );
};
