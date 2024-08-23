import { ReactNode } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchPodcastDetail } from '@hooks/useFetchPodcastDetail.ts'
import styles from './podcast-detail.module.css'
import { EpisodeTable } from '@podcast/ui/table/EpisodeTable.tsx'

export function Component(): ReactNode {
  const { podcastId } = useParams()
  const podcastDetail = useFetchPodcastDetail(podcastId)

  return (
    <div className={styles.podcastDetail}>
      <div className={styles.header}>
        <span className={styles.totalEpisodes}>
          Episodes: {podcastDetail !== undefined ? podcastDetail.episodesCount : '--'}
        </span>
      </div>
      {podcastDetail !== undefined && podcastId && (
        <div className={styles.wrapperTable}>
          <EpisodeTable podcastDetail={podcastDetail} podcastId={podcastId} />
        </div>
      )}
    </div>
  )
}

Component.displayName = 'PodcastDetail'
