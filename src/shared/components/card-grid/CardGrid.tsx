import { Podcast } from '../../../modules/podcast/domain/podcast.ts'
import { ReactNode, useEffect, useRef, useState } from 'react'
import styles from './card-grid.module.css'

interface CardGridProps {
  onClicked: (podcastId: string) => void
  podcasts: Podcast[]
  renderItem: (podcast: Podcast) => ReactNode
}

export const CardGrid = ({
  podcasts,
  renderItem,
  onClicked,
}: CardGridProps) => {
  const intersectContainer = useRef<HTMLDivElement>(null)
  const [piece, setPiece] = useState<Podcast[]>([])

  useEffect(() => {
    setPiece(podcasts.slice(0, 10))
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry.isIntersecting) return
        setPiece((prev) => [
          ...prev,
          ...podcasts.slice(prev.length, prev.length + 10),
        ])
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      },
    )

    if (intersectContainer.current) {
      observer.observe(intersectContainer.current)
    }

    return () => {
      if (!intersectContainer.current) return
      observer.unobserve(intersectContainer.current)
    }
  }, [podcasts])

  return (
    <>
      <div className={styles.content}>
        {piece.map((podcast) => {
          return (
            <div
              key={podcast.podcastId}
              onClick={() => onClicked(podcast.podcastId)}
            >
              {renderItem(podcast)}
            </div>
          )
        })}
      </div>
      <div className={styles.intersect} ref={intersectContainer}></div>
    </>
  )
}
