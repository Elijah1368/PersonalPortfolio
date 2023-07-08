import { useState } from 'react';
import styles from './App.module.scss';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';
import './assets/index.css';
import { EXPERIENCE_TITLE, PROJECT_TITLE } from './constants';
function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Navbar />
            <Home className={styles.container} />
            <Experience className={styles.container} title={EXPERIENCE_TITLE} />
            <Projects className={styles.container} title={PROJECT_TITLE} />
            <Education className={styles.container} />
            <Contact className={styles.container} />
        </div>
    );
}

export default App;
