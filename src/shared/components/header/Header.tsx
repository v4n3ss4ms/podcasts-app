import { ReactNode, useContext } from 'react'
import styles from './header.module.css'
import { Link } from 'react-router-dom'
import fetchStateContext from '../../../contexts/context.ts'

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps): ReactNode {
  const { isFetching } = useContext<{ isFetching: boolean }>(fetchStateContext)

  return (
    <header className={styles.header}>
      <div className={styles.innerHeader}>
        <h1 className={styles.logotype}>
          <Link to={'/'}>{title}</Link>
        </h1>
        <div>{isFetching && <span className={styles.loading}></span>}</div>
      </div>
    </header>
  )
}
