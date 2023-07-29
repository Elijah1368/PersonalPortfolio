import { Box} from '@mui/material';
import classNames from 'classnames';

export interface SectionProps {
    children?: React.ReactNode;
    height?: string;
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Section = ({ children, height, className}: SectionProps) => {
    return (
        <Box className={classNames("w-screen min-h-screen flex justify-center items-center", className)} >
                {children}
        </Box>

    );
};
