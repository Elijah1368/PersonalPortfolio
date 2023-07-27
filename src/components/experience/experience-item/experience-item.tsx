
import { Box } from '@mui/material';

export interface ExperienceItemProps {
    children?: React.ReactNode;
    height: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ExperienceItem = ({children, height }: ExperienceItemProps) => {

    return (
      
            
        <Box className="w-screen flex justify-center items-center" sx={{height: {height}}}>
            
            {children}

        </Box>
    
    );
};
