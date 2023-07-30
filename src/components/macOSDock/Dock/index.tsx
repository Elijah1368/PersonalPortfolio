//@ts-nocheck
import * as React from 'react'
import { animated, useSpringValue } from '@react-spring/web'
import { clamp } from '@react-spring/shared'

import { useWindowResize } from '../hooks/useWindowResize'

import { DockContext } from './DockContext'

import styles from './styles.module.scss'
import { DOCK_DATA } from '../../../constants/appConstants'

import { Link } from 'react-scroll'
import { DockCard } from '../DockCard'
import { DockDivider } from '../DockDivider'
import { Card } from '../Card'
import { RevealingBackground } from '../../revealing-background/revealing-background'
interface DockProps {}

export const DOCK_ZOOM_LIMIT = [-100, 50]

//TODO: On scroll to view, set to selected in dock
export const Dock = () => {
  const [hovered, setHovered] = React.useState(false)
  const [width, setWidth] = React.useState(0)
  const isZooming = React.useRef(false)
  const dockRef = React.useRef<HTMLDivElement>(null!)
  const [selectedCard, setSelectedCard] = React.useState<string>('')

  const setIsZooming = React.useCallback((value: boolean) => {
    isZooming.current = value
    setHovered(!value)
  }, [])

  const zoomLevel = useSpringValue(1, {
    onChange: () => {
      setWidth(dockRef.current.clientWidth)
    },
  })

  useWindowResize(() => {
    setWidth(dockRef.current.clientWidth)
  })
  console.log(Object.entries(DOCK_DATA))
  return (
    <DockContext.Provider
      value={{ hovered, setIsZooming, width, zoomLevel, setSelectedCard }}
    >
      <animated.div
        ref={dockRef}
        className={styles.dock}
        onMouseOver={() => {
          if (!isZooming.current) {
            setHovered(true)
          }
        }}
        onMouseOut={() => {
          setHovered(false)
        }}
        style={{
          zIndex: 100,
          x: '-50%',
          scale: zoomLevel
            .to({
              range: [DOCK_ZOOM_LIMIT[0], 1, DOCK_ZOOM_LIMIT[1]],
              output: [2, 1, 0.5],
            })
            .to(value => clamp(0.5, 2, value)),
        }}
      >
        {Object.entries(DOCK_DATA).map(([id, src], index) =>
          src.icon ? (
            <RevealingBackground slow={true}>
              {src.url ? (
                <a href={src.url} target='_blank'>
                  <DockCard key={src.icon} selected={selectedCard} id={id}>
                    <Card src={src.icon} />
                  </DockCard>
                </a>
              ) : (
                <Link to={id} smooth={true} duration={500} spy={true}>
                  <DockCard key={src.icon} selected={selectedCard} id={id}>
                    <Card src={src.icon} />
                  </DockCard>
                </Link>
              )}
            </RevealingBackground>
          ) : (
            <DockDivider key={index} />
          ),
        )}
      </animated.div>
    </DockContext.Provider>
  )
}
