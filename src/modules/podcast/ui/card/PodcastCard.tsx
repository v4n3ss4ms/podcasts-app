import { Card } from '@components/card/Card.tsx'
import { CardImage } from '@components/card-image/CardImage.tsx'
import { CardFooter } from '@components/card-footer/CardFooter.tsx'
import { Podcast } from '../../domain/podcast.ts'
import styles from './podcast-card.module.css'
import { useHideByTime } from '@hooks/useHideByTime.ts'
import { ReactNode } from 'react'

interface PodcastCardProps {
  podcast: Podcast
}

export const PodcastCard = ({ podcast }: PodcastCardProps): ReactNode => {
  const hide = useHideByTime()
  return !hide ? (
    <Card>
      <div className={styles.emptySpace}>
        <CardImage url={podcast.image} />
      </div>
      <CardFooter>
        <span data-testid="title" className={styles.title}>
          {podcast.title}
        </span>
        <small data-testid="author" className={styles.subtitle}>
          Author: {podcast.author}
        </small>
      </CardFooter>
    </Card>
  ) : (
    <Card className={styles.cardEmpty}></Card>
  )
}
