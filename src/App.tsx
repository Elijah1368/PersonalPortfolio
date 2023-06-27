import { useState } from 'react';
import styles from './App.module.scss';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';
import './assets/index.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Navbar />
            <Home className={styles.container} />
            <Experience className={styles.container} />
            <Projects className={styles.container} />
            <Education className={styles.container} />
            <Contact className={styles.container} />
        </div>
    );
}

export default App;
