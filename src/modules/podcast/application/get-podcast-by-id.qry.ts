import { Podcast } from '../domain/podcast.ts'
import { PodcastRepository } from '../domain/podcast.repository.ts'
import { PodcastId } from '../domain/podcast-id.ts'
import { Query } from '@shared/use-case/query.ts'

export class GetPodcastByIdQry extends Query<Podcast, PodcastId> {
  constructor(private readonly podcastRepository: PodcastRepository) {
    super()
  }

  async execute(podcastId: PodcastId): Promise<Podcast> {
    const response = await this.podcastRepository.getPodcasts()
    return response.find((podcast) => podcast.podcastId === podcastId)!
  }
}
