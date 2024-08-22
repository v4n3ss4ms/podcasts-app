import { ReactNode } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import styles from './layout-detail.module.css'
import { useFetchPodcastById } from '@hooks/useFetchPodcastById.ts'

export function Component(): ReactNode {
  const { podcastId } = useParams()
  const podcast = useFetchPodcastById(podcastId)

  return (
    <div className={styles.layoutDetail}>
      <div className={styles.aside}>
        <div className={styles.innerAside}>
          <div className={styles.img}>
            <img src={podcast?.image} alt="podcast" />
          </div>
          <hr />
          <div className={styles.info}>
            <Link to={`/podcast/${podcastId}`}>
              <span className={styles.title}>{podcast?.title}</span>
            </Link>
            <span className={styles.author}>by {podcast?.author}</span>
          </div>
          <hr />
          <div className={styles.description}>
            <span>Description:</span>
            <p>{podcast?.summary}</p>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

Component.displayName = 'LayoutDetail'
