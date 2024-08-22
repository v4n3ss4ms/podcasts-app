import { ReactNode } from 'react'
import styles from './card-image.module.css'

interface CardImageProps {
  url: string
}

export function CardImage({ url }: CardImageProps): ReactNode {
  return (
    <div className={styles.cardImage}>
      <img className={styles.image} src={url} />
    </div>
  )
}
