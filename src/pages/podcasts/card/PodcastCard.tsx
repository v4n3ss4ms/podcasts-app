import { useEffect, useState } from 'react'
import { Card } from '@shared/components/card/Card.tsx'
import { CardImage } from '@shared/components/card-image/CardImage.tsx'
import { CardFooter } from '@shared/components/card-footer/CardFooter.tsx'
import { Podcast } from '../../../modules/podcast/domain/podcast.ts'
import styles from './podcast-card.module.css'

let acc = 0

interface PodcastCardProps {
  podcast: Podcast
}

const useHideByTime = () => {
  const [hide, setIsHide] = useState<boolean>(true)

  useEffect(() => {
    if (acc === 400 || acc < 0) acc = 0
    acc += 40
    const timeOutId = setTimeout(() => setIsHide(false), acc)
    return () => {
      clearTimeout(timeOutId)
      setIsHide(true)
      acc -= 40
    }
  }, [])

  return hide
}

export function PodcastCard({ podcast }: PodcastCardProps) {
  const hide = useHideByTime()

  return !hide ? (
    <>
      <Card>
        <div className={styles.emptySpace}>
          <CardImage url={podcast.image} />
        </div>
        <CardFooter>
          <span className={styles.title}>{podcast.title}</span>
          <small className={styles.subtitle}>Author:{podcast.author}</small>
        </CardFooter>
      </Card>
    </>
  ) : (
    <Card className={styles.cardEmpty}></Card>
  )
}
