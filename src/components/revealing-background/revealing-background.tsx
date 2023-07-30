import classNames from 'classnames'
import styles from './revealing-background.module.scss'
import { useEffect, useState } from 'react'
import img from '../../assets/images/Qualcomm.jpg'
import { ImgInfo } from '../../constants'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, Container } from '@mui/material'
import { Section } from '../common/section'
export interface RevealingBackgroundProps {
  className?: string
  children: React.ReactNode
  slow?: boolean
}
const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 1 },
}

const slowSquareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
  hidden: { opacity: 0, scale: 1 },
}
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const defaultInfo: ImgInfo = {
  url: '',
}
export const RevealingBackground = ({
  className,
  children,
  slow,
}: RevealingBackgroundProps) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      variants={slow ? slowSquareVariants : squareVariants}
      className='align-center flex w-full justify-center'
    >
      {children}
    </motion.div>
  )
}
