import { memo, ReactNode, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { millisecondsToHoursMinutesSeconds } from '@shared/utils/ms-to-seconds-hms.ts'
import { PodcastDetail } from '@podcast/domain/podcast-detail.ts'
import { PodcastId } from '@podcast/domain/podcast-id.ts'
import styles from './episode-table.module.css'
import { parseDateToLocaleString } from '@shared/utils/parse-date-to-locale-string.ts'

interface EpisodeTableProps {
  podcastDetail: PodcastDetail
  podcastId: PodcastId
}

export const EpisodeTable = memo(
  function EpisodeTable({ podcastDetail, podcastId }: EpisodeTableProps): ReactNode {
    const getDate = useCallback((date: string) => parseDateToLocaleString(date), [])

    return (
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
                  <td>{getDate(episode.releaseDate)}</td>
                  <td style={{ textAlign: 'center' }}>{millisecondsToHoursMinutesSeconds(episode.duration)}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    )
  },
  (prevProps, nextProps) => {
    return (
      prevProps.podcastDetail.episodes.length === nextProps.podcastDetail.episodes.length &&
      prevProps.podcastId === nextProps.podcastId
    )
  },
)
