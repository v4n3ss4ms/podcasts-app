import { useEffect, useState } from 'react'
import type { Episode as TypeEpisode } from '@podcast/domain/episode.ts'
import { PodcastLocator } from '@podcast/di/podcast.locator.ts'
import { EpisodeId } from '@podcast/domain/episode-id.ts'
import { PodcastId } from '@podcast/domain/podcast-id.ts'

export const useFetchPodcastEpisodeById = (episodeId?: EpisodeId, podcastId?: PodcastId) => {
  const [episode, setEpisode] = useState<TypeEpisode>()

  useEffect(() => {
    if (!podcastId || !episodeId) return
    PodcastLocator.getPodcastEpisodeById()
      .execute({ podcastId, episodeId })
      .then((episode) => setEpisode(episode))
  }, [episodeId, podcastId])

  return episode
}
