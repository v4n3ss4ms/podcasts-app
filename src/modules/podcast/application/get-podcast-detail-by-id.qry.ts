import { PodcastRepository } from '../domain/podcast.repository.ts'
import { PodcastId } from '../domain/podcast-id.ts'
import { PodcastDetail } from '../domain/podcast-detail.ts'
import { Query } from '@shared/use-case/query.ts'

export class GetPodcastDetailByIdQry extends Query<PodcastDetail, PodcastId> {
  constructor(private readonly podcastRepository: PodcastRepository) {
    super()
  }

  execute(podcastId: PodcastId): Promise<PodcastDetail> {
    return this.podcastRepository.getPodcastById(podcastId)
  }
}
