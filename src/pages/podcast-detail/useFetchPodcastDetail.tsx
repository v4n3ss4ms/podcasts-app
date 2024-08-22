import { PodcastId } from '../../modules/podcast/domain/podcast-id.ts'
import { useEffect, useState } from 'react'
import { PodcastDetail as TypePodcastDetail } from '../../modules/podcast/domain/podcast-detail.ts'
import { PodcastLocator } from '../../modules/podcast/di/podcast.locator.ts'

export function useFetchPodcastDetail(podcastId: PodcastId | undefined) {
  const [podcastDetail, setPodcastDetail] = useState<TypePodcastDetail>()

  useEffect(() => {
    if (!podcastId) return

    PodcastLocator.getPodcastDetailById()
      .execute(podcastId)
      .then((podcast) => setPodcastDetail(podcast))
  }, [podcastId])

  return { podcastDetail }
}
