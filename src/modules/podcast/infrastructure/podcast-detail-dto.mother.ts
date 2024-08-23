import { PodcastDetailDto } from './podcast-detail-dto.ts'

export class PodcastDetailDtoMother {
  static detail(): PodcastDetailDto {
    return {
      results: [
        {
          trackCount: 480,
          kind: 'podcast',
        },
        {
          kind: 'podcast-episode',
          trackName: 'The Joe Budden Podcast',
          description: 'Joe Budden and his co-hosts discuss hip hop culture and news.',
          releaseDate: '2021-01-01T00:00:00Z',
          trackTimeMillis: 60000,
          trackId: '123456',
          episodeUrl: 'https://podcast.com/episode/123456',
        },
      ],
    }
  }
}
