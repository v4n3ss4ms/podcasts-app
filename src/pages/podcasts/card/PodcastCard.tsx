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

export function PodcastCard({ podcast }: PodcastCardProps) {
  const [hide, setIsHide] = useState<boolean>(true)

  useEffect(() => {
    acc += 60
    const timeOutId = setTimeout(() => {
      setIsHide(false)
    }, acc)

    return () => {
      clearTimeout(timeOutId)
      setIsHide(true)
      acc -= 60
    }
  }, [])

  const { image: imageUrl } = podcast
  return !hide ? (
    <>
      <Card>
        <div className={styles.emptySpace}>
          <CardImage url={imageUrl} />
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
