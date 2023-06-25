import classNames from 'classnames';
import styles from './navbar.module.scss';

export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <nav className={styles.navbar}>
                <div className={styles.navbarHome}>
                    <a href="/home">Home</a>
                </div>
                <div className={styles.navbaroptions}>
                    <a href="/contact">Experience</a>
                    <a href="/contact">Projects</a>
                    <a href="/about">Education</a>
                    <a href="/projects">Contact</a>
                </div>
            </nav>
        </div>
    );
};
