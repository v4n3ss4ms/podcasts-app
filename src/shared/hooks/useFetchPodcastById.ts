import { useEffect, useState } from 'react'
import { Podcast } from '../../modules/podcast/domain/podcast.ts'
import { PodcastLocator } from '../../modules/podcast/di/podcast.locator.ts'

export const useFetchPodcastById = (podcastId?: string) => {
  const [podcast, setPodcast] = useState<Podcast>()

  const fetchPodcast = async (podcastId: string) => {
    const response = await PodcastLocator.getPodcastById().execute(podcastId)
    setPodcast(response)
  }

  useEffect(() => {
    if (!podcastId) return
    fetchPodcast(podcastId)
  }, [])

  return podcast
}
