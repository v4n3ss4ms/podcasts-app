import { ReactNode } from 'react'
import styles from './counter.module.css'
import { useCounter } from './useCounter.tsx'

interface CounterProps {
  count: number
}

export function Counter({ count }: CounterProps): ReactNode {
  const newCount = useCounter(count)

  return (
    <div className={styles.podcastCounter}>
      <span className={styles.counter}>{newCount}</span>
    </div>
  )
}
