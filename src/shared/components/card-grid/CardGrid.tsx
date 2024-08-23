import { ReactNode, useEffect } from 'react'
import styles from './card-grid.module.css'
import { useInfinityScroll } from '@hooks/useInfinityScroll.ts'

interface CardGridProps<T> {
  list: T[]
  children: ReactNode
  onLoad?: (arg: T[]) => void
}

export const CardGrid = <T,>({ list, children, onLoad }: CardGridProps<T>) => {
  const { intersectContainer, piece } = useInfinityScroll<T>(list)

  useEffect(() => {
    if (!onLoad) return
    onLoad(piece)
  }, [piece])

  return (
    <>
      <div className={styles.content}>
        {children}
      </div>
      <div className={styles.intersect} ref={intersectContainer}></div>
    </>
  )
}
