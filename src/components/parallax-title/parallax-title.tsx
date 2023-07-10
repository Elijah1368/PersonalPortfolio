import classNames from 'classnames';
import styles from './parallax-title.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export interface ParallaxTitleProps {
    className?: string;
    title: string;
}

export const ParallaxTitle = ({ className, title }: ParallaxTitleProps) => {
    const ref = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Update window width when the window is resized
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0% 70%', '50% 0%'],
    });

    const factor = windowWidth / 1920; // adjust the factor as needed. 1920 is a base value which assumes that the layout is designed on a 1920px wide screen.

    const x = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0, 300, 900, 1400].map((val) => val * factor)
    );

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.75, 1], [0, 1, 1, 0]);

    return (
        <div className={classNames(styles.parallax)} ref={ref}>
            <motion.div className={classNames(styles.scroller)} style={{ x, opacity }}>
                <span>{title}</span>
            </motion.div>
        </div>
    );
};
