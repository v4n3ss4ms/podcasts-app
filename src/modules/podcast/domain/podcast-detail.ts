import { Episode } from './episode.ts'

export interface PodcastDetail {
  episodesCount: number
  episodes: Episode[]
}
