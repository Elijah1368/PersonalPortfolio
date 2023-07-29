
import { Box } from '@mui/material';
import { Section } from '../../common/section';

export interface ExperienceItemProps {
    children?: React.ReactNode;
    height: string;
    className: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 * ! sddsdasdasddasd
 * ! sd
 * /

/**
 * ? sdsd
 * TODO: asdkjas
 * * sdkjsdkj
 */
export const ExperienceItem = ({children, className}: ExperienceItemProps) => {
  
    return (
      
        <Section className={className}>
            {children}
        </Section>
    
    );
};
