import React from 'react';
import './macWindow.scss';
import { AnimateOnScroll } from './animateOnScroll';


interface MacWindowProps {
  children?: React.ReactNode;
}

function MacWindow({children}: MacWindowProps) {
  return (

    <div className="mac-window z-10 ml-10 topMargin">
      <div className="title-bar">
        <div className="buttons">
          <div className="close"></div>
          <div className="minimize"></div>
          <div className="expand"></div>
        </div>
        <div className="title">My MacOS Window</div>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  
  );
}

export default MacWindow;
