import { Podcast } from './podcast.ts'
import { PodcastDetail } from './podcast-detail.ts'
import { PodcastId } from './podcast-id.ts'

export interface PodcastRepository {
  getPodcasts(): Promise<Podcast[]>
  getPodcastById(PodcastId: PodcastId): Promise<PodcastDetail>
}
