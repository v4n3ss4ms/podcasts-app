import { ReactNode } from 'react'
import { useParams } from 'react-router-dom'
import styles from './episode.module.css'
import { useFetchPodcastEpisodeById } from '@hooks/useFetchPodcastEpisodeById.ts'

export function Component(): ReactNode {
  const { podcastId, episodeId } = useParams()
  const episode = useFetchPodcastEpisodeById(episodeId, podcastId)

  return (
    episode && (
      <div className={styles.episode}>
        <div>
          <span className={styles.titleEpisode} dangerouslySetInnerHTML={{ __html: episode.episodeName }}></span>
        </div>
        <div>
          <p className={styles.descriptionEpisode} dangerouslySetInnerHTML={{ __html: episode.description }}></p>
        </div>
        <hr />
        <div>
          <audio src={episode.url} controls={true} className={styles.audioPlayer}>
            Your browser does not support the <code>audio</code> element.
          </audio>
        </div>
      </div>
    )
  )
}

Component.displayName = 'Episode'
