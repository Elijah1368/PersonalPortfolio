import classNames from 'classnames';
import styles from './navbar.module.scss';
import { Link } from 'react-scroll';
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
                    <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>
                        Home
                    </Link>
                </div>
                <div className={styles.navbaroptions}>
                    <Link
                        activeClass="active"
                        to="experience"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Experience
                    </Link>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Projects
                    </Link>
                    <Link
                        activeClass="active"
                        to="education"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Education
                    </Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
                        Contact
                    </Link>
                </div>
            </nav>
        </div>
    );
};
