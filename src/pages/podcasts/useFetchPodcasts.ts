import { useEffect, useState } from 'react'
import { Podcast } from '../../modules/podcast/domain/podcast.ts'
import { PodcastLocator } from '../../modules/podcast/di/podcast.locator.ts'

export const useFetchPodcasts = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([])

  useEffect(() => {
    PodcastLocator.getPodcasts()
      .execute()
      .then((response) => setPodcasts(response))
  }, [])

  return {
    podcasts,
    setPodcasts,
  }
}
