import { ReactNode } from 'react'
import styles from './card-footer.module.css'

export interface CardFooterProps {
  children: ReactNode
}

export function CardFooter({ children }: CardFooterProps): ReactNode {
  return <div className={styles.footer}>{children}</div>
}
