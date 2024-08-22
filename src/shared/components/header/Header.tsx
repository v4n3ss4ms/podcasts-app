import { ReactNode, useContext } from 'react'
import styles from './header.module.css'
import { Link } from 'react-router-dom'
import FetchStateContext from '../../../core/contexts/context.ts'

export function Header(): ReactNode {
  const { isFetching } = useContext<{ isFetching: boolean }>(FetchStateContext)

  return (
    <header className={styles.header}>
      <div className={styles.innerHeader}>
        <h1 className={styles.logotype}>
          <Link to={'/'}>Podcaster</Link>
        </h1>
      <div>{isFetching && <span className={styles.loading}></span>}</div>
      </div>
    </header>
  )
}
