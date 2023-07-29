import classNames from 'classnames';
import styles from './name-and-title.module.scss';
import { Name } from '../name/name';
import { Title } from '../title/title';
import { NAME, NAME_FONT, TITLE, TITLE_FONT } from '../../constants';
import { Typography } from '@mui/material';
export interface NameAndTitleProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NameAndTitle = ({ className }: NameAndTitleProps) => {
    return (
        <div className={classNames(styles.root, className, "z-1 fixed")}>
            <div className={styles.nameDiv}>
                <h1 className={styles.header}>
                    <span className={styles.textSpan}>Elijah Amian</span>
                </h1>
                {/* <Name timeDelay={10} text={NAME} font={NAME_FONT} className={styles.name}>
                   <Typography variant="h1" fontFamily={NAME_FONT} className="test">{NAME}</Typography>
                </Name> */}
            </div>
            <div className={styles.titleDiv}>
                <h3 className={styles.header3}>
                    <span className={styles.title}>Software Engineer</span>
                </h3>
            </div>
        </div>
    );
};
