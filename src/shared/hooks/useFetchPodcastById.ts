import { useEffect, useState } from 'react'
import { Podcast } from '@podcast/domain/podcast.ts'
import { PodcastLocator } from '@podcast/di/podcast.locator.ts'
import { PodcastId } from '@podcast/domain/podcast-id.ts'

export const useFetchPodcastById = (podcastId?: string) => {
  const [podcast, setPodcast] = useState<Podcast>()

  const fetchPodcast = async (podcastId: PodcastId) => {
    const response = await PodcastLocator.getPodcastById().execute(podcastId)
    setPodcast(response)
  }

  useEffect(() => {
    if (!podcastId) return
    fetchPodcast(podcastId)
  }, [])

  return podcast
}
