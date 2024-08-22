import { PodcastId } from './podcast-id.ts'

export interface Podcast {
  podcastId: PodcastId
  title: string
  author: string
  image: string
  summary: string
  searchTags: string[]
}
