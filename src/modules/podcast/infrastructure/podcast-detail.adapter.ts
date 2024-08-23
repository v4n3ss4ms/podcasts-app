import { Adapter } from '@shared/types/adapter.ts'
import { PodcastDetailDto, PodcastDetailSummaryDto, PodcastEpisodeDetail } from './podcast-detail-dto.ts'
import { PodcastDetail } from '../domain/podcast-detail.ts'

export class PodcastDetailAdapter implements Adapter<PodcastDetailDto, PodcastDetail> {
  toModel(podcastDetailDto: PodcastDetailDto): PodcastDetail {
    const summary = podcastDetailDto.results
      .filter((result): result is PodcastDetailSummaryDto => result.kind === 'podcast')
      .at(0)

    const episodes = podcastDetailDto.results.filter(
      (result): result is PodcastEpisodeDetail => result.kind === 'podcast-episode',
    )

    return {
      episodesCount: summary?.trackCount || 0,
      episodes: episodes.map((result) => ({
        episodeName: result.trackName,
        releaseDate: result.releaseDate,
        duration: result?.trackTimeMillis || 0,
        episodeId: result.trackId,
        url: result.episodeUrl,
        description: result.description,
      })),
    }
  }
}
