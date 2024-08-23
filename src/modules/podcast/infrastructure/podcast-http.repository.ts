import { Podcast } from '../domain/podcast.ts'
import { PodcastRepository } from '../domain/podcast.repository.ts'
import { PodcastDto } from './podcast-dto.ts'
import { PodcastAdapter } from './podcast.adapter.ts'
import { PodcastId } from '../domain/podcast-id.ts'
import { PodcastDetailAdapter } from './podcast-detail.adapter.ts'
import { PodcastDetail } from '../domain/podcast-detail.ts'
import { PodcastDetailDto } from './podcast-detail-dto.ts'
import { HttpClient } from '@shared/http-client/http-client.ts'

export class PodcastHttpRepository implements PodcastRepository {
  constructor(private readonly httpClient: HttpClient) {}

  async getPodcasts(): Promise<Podcast[]> {
    const adapter = new PodcastAdapter()
    const response = await this.httpClient.get<{
      feed: { entry: PodcastDto[] }
    }>('us/rss/toppodcasts/limit=100/genre=1310/json')
    return response.feed.entry.map((podcastDto) => adapter.toModel(podcastDto))
  }

  async getPodcastById(podcastId: PodcastId): Promise<PodcastDetail> {
    const adapter = new PodcastDetailAdapter()
    const response = await this.httpClient.get<PodcastDetailDto>(
      `lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
    )
    return adapter.toModel(response)
  }
}
