/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import styles from './ResponsiveCards.module.scss'

export interface CardProps {
  title: React.ReactNode
  copy: string
  button: string
  link?: string
  className?: string
  children?: React.ReactNode
}

interface props {
  projects: CardProps[]
}

// eslint-disable-next-line react/function-component-definition
export function ResponsiveCard({ className, children, title}: any) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className={classNames(styles.card, className)}>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        {children}
      </div>
    </div>
  )
}

export function PageContent({ projects }: props) {
  return (
    <main className={classNames(styles['page-content'])}>
      {projects.map((card, index) => (
        <ResponsiveCard
          className={styles[`project${index}`]}
          title={<h2>{card.title}</h2>}
        >
          <p className={styles.copy}>{card.copy}</p>

          <a href={card.link || ''} target='_blank' rel='noreferrer'>
            <button>{card.button}</button>
          </a>
        </ResponsiveCard>
      ))}
    </main>
  )
}
