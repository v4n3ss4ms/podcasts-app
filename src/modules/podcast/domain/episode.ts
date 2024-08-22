import { EpisodeId } from './episode-id.ts'

export interface Episode {
  episodeName: string
  releaseDate: string
  duration: number
  episodeId: EpisodeId
  description: string
  url: string
}
