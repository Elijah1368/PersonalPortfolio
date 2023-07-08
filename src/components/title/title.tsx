import classNames from 'classnames';
import styles from './title.module.scss';

export interface TitleProps {
    className?: string;
    text: string;
    font?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Title = ({ className, text }: TitleProps) => {
    return (
        <div className={classNames(styles.root, className, styles.revealAnimation)}>
            <h2>
                <span>{text}</span>
            </h2>
        </div>
    );
};
