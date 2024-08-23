import { PodcastDetail } from './podcast-detail.ts'

export class PodcastDetailMother {
  static detail(): PodcastDetail {
    return {
      episodesCount: 480,
      episodes: [
        {
          episodeName: 'The Joe Budden Podcast',
          description: 'Joe Budden and his co-hosts discuss hip hop culture and news.',
          releaseDate: '2021-01-01T00:00:00Z',
          duration: 60000,
          episodeId: '123456',
          url: 'https://podcast.com/episode/123456',
        },
      ],
    }
  }
}
