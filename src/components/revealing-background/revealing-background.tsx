import classNames from 'classnames';
import styles from './revealing-background.module.scss';
import { useEffect, useState } from 'react';
import img from '../../assets/images/Qualcomm.jpg';
import { ImgInfo } from '../../constants';
import { motion } from 'framer-motion';
import { Card, Container } from '@mui/material';
import { Section } from '../common/section';
export interface RevealingBackgroundProps {
    className?: string;
    imgInfo?: ImgInfo;
    height: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const defaultInfo: ImgInfo = {
    url: '',
};
export const RevealingBackground = ({
    className,
    imgInfo = defaultInfo,
    height
}: RevealingBackgroundProps) => {
    const { url} = imgInfo;

    return (
   
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, height: height, zIndex: 0}}>

                    <img
                        src={url}
                        alt="Description"
                        className="fixed top-0 left-0 w-screen h-screen object-cover z-0"
                
                    />
                   
            </motion.div>
       
      
    );
};
