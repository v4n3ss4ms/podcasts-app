import { ReactNode, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PodcastLocator } from '../../modules/podcast/di/podcast.locator.ts'
import type { Episode as TypeEpisode } from '../../modules/podcast/domain/episode.ts'
import styles from './episode.module.css'

export function Component(): ReactNode {
  const { podcastId, episodeId } = useParams()
  const [episode, setEpisode] = useState<TypeEpisode>()

  useEffect(() => {
    if (!podcastId || !episodeId) return
    PodcastLocator.getPodcastEpisodeById()
      .execute({ podcastId, episodeId })
      .then((episode) => setEpisode(episode))
  }, [episodeId, podcastId])

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
