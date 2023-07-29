import classNames from 'classnames'
import styles from './job-description-container.module.scss'
import { WorkExperience } from '../../../../constants/appConstants'
import { Typography } from '@mui/material'

export interface JobDescriptionContainerProps {
  className?: string
  experience: WorkExperience
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const JobDescriptionContainer = ({
  className,
  experience,
}: JobDescriptionContainerProps) => {
  return (
    <div className={styles.appCard}>
      <div className='pl ab flex h-20 flex-col justify-center border-b border-solid border-[color:var(--border-color)] text-center text-2xl font-medium'>
        <div className='flex flex-row  items-end justify-between'>
          <div className='text-4xl'>{experience.company}</div>
          <div>{experience.title}</div>
        </div>
      </div>
      {experience.description.map((description, index) => {
        return (
          <div className='mt-5 border-b border-[var(--border-color)] pb-5 text-xl font-normal leading-loose'>
            {description}
          </div>
        )
      })}

      <div
        className={
          'ml-auto mt-4 flex  w-full flex-row items-center justify-between'
        }
      >
        <div className='flex flex-row items-end justify-between text-right'>
          <span className='mr-2'>{experience.location}</span>

          <span className='border-l-2 pl-2'>
            {experience.startDate + ' - ' + experience.endDate}
          </span>
        </div>
        <a href={experience.companyUrl} target='_blank'>
          <button>Website</button>
        </a>
      </div>
    </div>
  )
}
/* <div className={classNames(styles.root, className)}>
            <div className={styles.titleAndDate}>
                <div>
                    <h3>{experience.title}</h3>
                    <h4>{experience.company}</h4>
                </div>
                <div>
                    <h4>{experience.startDate + " - " + experience.endDate}</h4>
                    
                </div>
            </div>
            <div className={styles.responsibilities}>
                {experience.description.map((description, index) => {
                    return <p key={index}>{description}</p>;
                })}
            </div>
        </div> */
