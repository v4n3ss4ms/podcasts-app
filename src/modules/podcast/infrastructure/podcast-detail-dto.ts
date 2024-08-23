export type PodcastDetailSummaryDto = {
  kind: 'podcast'
  trackCount: number
}

export type PodcastEpisodeDetail = {
  kind: 'podcast-episode'
  trackName: string
  description: string
  releaseDate: string
  trackTimeMillis: number
  trackId: string
  episodeUrl: string
}

export interface PodcastDetailDto {
  results: (PodcastDetailSummaryDto | PodcastEpisodeDetail)[]
}
