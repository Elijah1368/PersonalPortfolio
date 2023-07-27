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
        <div className={classNames(styles.root, className, "z-10")}>
            <div className={styles.nameDiv}>
                <Name timeDelay={10} text={NAME} font={NAME_FONT} className={styles.name}>
                   <Typography variant="h1" fontFamily={NAME_FONT} className="test">{NAME}</Typography>
                </Name>
            </div>
            <div className={styles.titleDiv}>
                <Title text={TITLE} font={TITLE_FONT} className={styles.title}>
                    {TITLE}
                </Title>
            </div>
        </div>
    );
};
