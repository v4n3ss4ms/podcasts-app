import { PodcastRepository } from '../domain/podcast.repository.ts'
import { Query } from '@shared/use-case/query.ts'
import { Podcast } from '../domain/podcast.ts'

export class GetPodcastsQry extends Query<Podcast[]> {
  constructor(private readonly podcastRepository: PodcastRepository) {
    super()
  }

  execute(): Promise<Podcast[]> {
    return this.podcastRepository.getPodcasts()
  }
}
