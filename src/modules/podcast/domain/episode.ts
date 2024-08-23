import { EpisodeId } from './episode-id.ts'

export interface Episode {
  episodeId: EpisodeId
  description: string
  duration: number
  episodeName: string
  releaseDate: string
  url: string
}
