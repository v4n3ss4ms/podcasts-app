export interface PodcastDetailDto {
  results: {
    kind: 'podcast-episode'
    trackName: string
    description: string
    releaseDate: string
    trackTimeMillis: number
    trackId: string
    episodeUrl: string
  }[]
}
