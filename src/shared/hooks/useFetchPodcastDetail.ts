import { PodcastId } from '@podcast/domain/podcast-id.ts'
import { useEffect, useState } from 'react'
import { PodcastDetail as TypePodcastDetail } from '@podcast//domain/podcast-detail.ts'
import { PodcastLocator } from '@podcast/di/podcast.locator.ts'

export function useFetchPodcastDetail(podcastId: PodcastId | undefined) {
  const [podcastDetail, setPodcastDetail] = useState<TypePodcastDetail>()

  const fetchPodcastDetail = async (podcastId: PodcastId) => {
    const response = await PodcastLocator.getPodcastDetailById().execute(podcastId)
    setPodcastDetail(response)
  }

  useEffect(() => {
    if (!podcastId) return
    fetchPodcastDetail(podcastId)
  }, [])

  return podcastDetail
}
