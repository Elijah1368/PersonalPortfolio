import { useRef, useState } from 'react';
import styles from './App.module.scss';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';
import './assets/index.css';
import { EXPERIENCE_TITLE, PROJECT_TITLE } from './constants';
import { RevealingBackground } from './components/revealing-background/revealing-background';
import QualcommImage from './assets/Images/Qualcomm.jpg';
import Classnames from 'classnames';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Container } from '@mui/material';
import { DOCK_DATA } from './constants';
import { Card } from './components/macOSDock/Card';
import { Dock } from './components/macOSDock/Dock';
import { DockCard } from './components/macOSDock/DockCard';
import { DockDivider } from './components/macOSDock/DockDivider';
import { Link } from 'react-scroll';
import { ParallaxTitle } from './components/parallax-title/parallax-title';

import PageContent from './components/common/ResponsiveCards/ResponsiveCards';
import MacWindow from './components/common/macWindow';
import { Section } from './components/common/section';

function App() {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    
    return (

        <Box className="bg-black flex flex-col w-full">
            <div id="home">
                <Home className={styles.container} />
                
            </div>
            <Experience className={styles.container} title={EXPERIENCE_TITLE} />
            <Projects>
                
                    <MacWindow title={PROJECT_TITLE}>
                        <PageContent></PageContent>
                    </MacWindow>
               
            </Projects>

            <Education>
                <Section>
                    <div className="z-20 h-full w-full">
                            Test
                    </div>
                </Section>
            </Education>

            <Contact className={styles.container} />
            <Dock>

            </Dock>
        </Box>
  
    );
}

export default App;
