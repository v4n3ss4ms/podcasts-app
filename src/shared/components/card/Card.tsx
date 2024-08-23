import { ReactNode } from 'react'
import styles from './card.module.css'

interface CardProps {
  className?: string
  children?: ReactNode
  onClick?: () => void
}

export function Card({ children, className, onClick: onClicked }: CardProps): ReactNode {
  const cardClasses = `${styles.card} ${className || ''}`

  return (
    <div className={cardClasses} onClick={onClicked}>
      <div data-testid="innerCard" className={styles.innerCard}>
        {children}
      </div>
    </div>
  )
}
