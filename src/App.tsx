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
function App() {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    
    return (
        <Box className="bg-black flex flex-col">
            <Navbar />
            {/* <RevealingBackground imgUrl={QualcommImage} imgClassName={'imgAdjust1'} /> */}
            <div id="home">
                <Home className={styles.container} />
            </div>
            <Experience className={styles.container} title={EXPERIENCE_TITLE} />
            <Projects title={PROJECT_TITLE} />
            <Education className={styles.container} />
            <Contact className={styles.container} />
        </Box>
    );
}

export default App;
