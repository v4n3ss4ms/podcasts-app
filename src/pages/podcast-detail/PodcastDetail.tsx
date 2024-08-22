import { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { millisecondsToHoursMinutesSeconds } from '@core/utils/ms-to-seconds-hms.ts'
import styles from './podcast-detail.module.css'
import { useFetchPodcastDetail } from '@hooks/useFetchPodcastDetail.ts'

export function Component(): ReactNode {
  const { podcastId } = useParams()
  const { podcastDetail } = useFetchPodcastDetail(podcastId)

  return (
    <div className={styles.podcastDetail}>
      <div className={styles.header}>
        <span className={styles.totalEpisodes}>Episodes: {podcastDetail?.episodes.length}</span>
      </div>
      <div className={styles.wrapperTable}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th style={{ textAlign: 'center' }}>Duration</th>
            </tr>
          </thead>
          <tbody>
            {podcastDetail?.episodes.length !== 0 &&
              podcastDetail?.episodes.map((episode, key) => {
                return (
                  <tr key={key}>
                    <td>
                      <Link to={`/podcast/${podcastId}/episode/${episode.episodeId}`}>{episode.episodeName}</Link>
                    </td>
                    <td>
                      {new Date(episode.releaseDate).toLocaleDateString()}
                    </td>
                    <td style={{ textAlign: 'center' }}>{millisecondsToHoursMinutesSeconds(episode.duration)}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

Component.displayName = 'PodcastDetail'
