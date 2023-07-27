import React from 'react';
import './macWindow.scss';
import { AnimateOnScroll } from './animateOnScroll';
import { WorkExperience } from '../../constants';
import { Box } from '@mui/material';


interface MacWindowProps {
  children?: React.ReactNode;
  title: string;
}

function MacWindow({children, title}: MacWindowProps) {
  return (

    <Box className="mac-window z-10 topMargin overflow-hidden">
      <div className="title-bar bordeer-bot">
        <div className="buttons">
          <div className="close"></div>
          <div className="minimize"></div>
          <div className="expand"></div>
        </div>
        <div className="title text-white">{title}</div>
        <div className="w-14"></div>
      </div>
      <div className="content flex justify-center items-center w-full h-full p-12">
        {children}
      </div>
    </Box>
  
  );
}

export default MacWindow;
