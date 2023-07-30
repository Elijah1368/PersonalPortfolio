import { useState } from 'react'
import styles from './App.module.scss'

import { Home } from './components/home/home'
import { Experience } from './components/experience/experience'
import { Projects } from './components/projects/projects'
import { Education } from './components/education/education'
import { Contact } from './components/contact/contact'
import './assets/index.css'
import {
  EDUCATION,
  EXPERIENCE_ITEM_HEIGHT,
  EXPERIENCE_TITLE,
  PROJECTS,
  PROJECT_TITLE,
  WORK_EXPERIENCE,
} from './constants'
import { RevealingBackground } from './components/revealing-background/revealing-background'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Box from '@mui/material/Box'

import { Dock } from './components/macOSDock/Dock'


import {
  PageContent,
  ResponsiveCard,
} from './components/common/ResponsiveCards/ResponsiveCards'
import MacWindow from './components/common/macWindow'
import { Section } from './components/common/section'
import classNames from 'classnames'
import { ExperienceItem } from './components/experience/experience-item/experience-item'
import { JobDescriptionContainer } from './components/experience/experience-item/job-description-container/job-description-container'
import ContactForm from './components/contact/contactForm/contactForm'
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  const experienceClassNames = [
    styles.firstExperience,
    styles.secondExperience,
    styles.thirdExperience,
  ]
  return (
    <Box className='flex w-full flex-col bg-black'>
      <div className='fixed z-30'>
        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
      </div>
      <div id='home'>
        <Home className={classNames(styles.container, styles.first)} />
      </div>

      <div className={classNames(styles.blank)} id='experience'>
        <span>EXPERIENCE</span>
      </div>

      <Experience className='flex flex-col'>
        {WORK_EXPERIENCE.map((experience, index) => {
          return (
            <>
              <ExperienceItem
                key={index}
                height={EXPERIENCE_ITEM_HEIGHT}
                className={classNames(
                  styles.container,
                  experienceClassNames[index],
                  'left-0 top-0 z-0 w-screen object-cover',
                )}
              >
                <MacWindow title={EXPERIENCE_TITLE}>
                  <RevealingBackground>
                    <JobDescriptionContainer experience={experience} />
                  </RevealingBackground>
                </MacWindow>
              </ExperienceItem>
              {index < WORK_EXPERIENCE.length - 1 && (
                <div className={styles.blank2}></div>
              )}
            </>
          )
        })}
      </Experience>
      <div className={styles.blank} id="projects">PROJECTS</div>

        <Projects className={classNames(styles.container, styles.second)}>
          <MacWindow title={PROJECT_TITLE}>
            <RevealingBackground>
              <PageContent projects={PROJECTS}></PageContent>
            </RevealingBackground>
          </MacWindow>
        </Projects>
     
      <div className={styles.blank} id='education'>
        EDUCATION
      </div>

      <Education className={classNames(styles.container, styles.third)}>
        <Section>
          <MacWindow title='Education'>
            <RevealingBackground>
              <ResponsiveCard
                className={classNames(
                  styles.education,
                  'h-full w-full bg-cover',
                )}
                title={
                  <>
                    <h2 className='text-3xl tracking-widest'>
                      {EDUCATION.school}
                    </h2>
                    <div className='flex flex-row justify-around gap-3 leading-normal tracking-wide'>
                      <p>{EDUCATION.degree}</p>
                      <p> - </p>
                      <p>{EDUCATION.endDate}</p>
                    </div>
                  </>
                }
              >
                <div className='tracking-wide'>
                  <div
                    className={classNames(
                      styles.copy,
                      'flex flex-col gap-4 pb-12 pt-6 text-left leading-loose tracking-wide',
                    )}
                  >
                    <p className={'text-center'}>
                      <span className='font-bold'>GPA: </span>
                      {EDUCATION.gpa}
                    </p>
                    <p>
                      <span className='text-2xl font-bold tracking-widest'>
                        Relevant Courses:
                      </span>{' '}
                      {EDUCATION.courses.join(', ')}
                    </p>
                    <p>
                      <span className='text-2xl font-bold tracking-widest'>
                        Extracurricular:
                      </span>{' '}
                      {EDUCATION.Description.join(', ')}
                    </p>
                  </div>
                  <div className='flex justify-end pr-5' id='education'>
                    <a
                      href={EDUCATION.website || ''}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <button>{'Website'}</button>
                    </a>
                  </div>
                </div>
              </ResponsiveCard>
            </RevealingBackground>
          </MacWindow>
        </Section>
      </Education>

      <div className={styles.blank} id="contacts">Contact</div>
   
        <Contact className={classNames(styles.container, styles.second)}>
          <MacWindow title='Contact'>
            <ContactForm className={styles.appCard}></ContactForm>
          </MacWindow>
        </Contact>
      
      <Dock />
    </Box>
  )
}

export default App
