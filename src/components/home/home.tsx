import classNames from 'classnames';
import styles from './home.module.scss';
import { NameAndTitle } from '../name-and-title/name-and-title';
import { Box, Container } from '@mui/material';
import { Section } from '../common/section';
import { WALLPAPER } from '../../constants';
export interface HomeProps {
    className?: string;
    id?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Home = ({ className }: HomeProps) => {
    return (
        <Section>
            <NameAndTitle />
            <img src={WALLPAPER} className="fixed top-0 left-0 w-screen h-screen object-cover z-0"></img>
        </Section>
    );
};
