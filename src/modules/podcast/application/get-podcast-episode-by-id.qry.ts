import { PodcastId } from '../domain/podcast-id.ts'
import { EpisodeId } from '../domain/episode-id.ts'
import { PodcastRepository } from '../domain/podcast.repository.ts'
import { Episode } from '../domain/episode.ts'
import { Query } from '@shared/use-case/query.ts'

type Params = {
  podcastId: PodcastId
  episodeId: EpisodeId
}

export class GetPodcastEpisodeByIdQry extends Query<Episode, Params> {
  constructor(private readonly podcastRepository: PodcastRepository) {
    super()
  }

  async execute({ episodeId, podcastId }: Params): Promise<Episode> {
    const result = await this.podcastRepository.getPodcastById(podcastId)
    return result.episodes.find((episode) => episode.episodeId == episodeId)!
  }
}
