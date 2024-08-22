import { useEffect, useState } from 'react'
import { Podcast } from '../../modules/podcast/domain/podcast.ts'
import { PodcastLocator } from '../../modules/podcast/di/podcast.locator.ts'

export const useFetchPodcasts = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([])

  const fetchPodcasts = async () => {
    const response = await PodcastLocator.getPodcasts().execute()
    setPodcasts(response)
  }

  useEffect(() => {
    fetchPodcasts()
  }, [])

  return {
    setPodcasts,
    podcasts,
  }
}
