import { PodcastHttpRepository } from './podcast-http.repository.ts'
import { anything, instance, mock, verify, when } from 'ts-mockito'
import { PodcastDtoMother } from './podcast-dto.mother.ts'
import { HttpClient } from '@core/http-client/http-client.ts'
import { describe, expect, it } from 'vitest'
import { PodcastMother } from '../domain/podcast.mother.ts'
import { PodcastDetailDtoMother } from './podcast-detail-dto.mother.ts'
import { PodcastDetailMother } from '../domain/podcast-detail.mother.ts'

describe('PodcastHttpRepository', () => {
  it('should return a list of podcasts', async () => {
    const { httpClient, sut } = setup()
    when(httpClient.get(anything())).thenResolve({
      feed: {
        entry: PodcastDtoMother.getAll(),
      },
    })

    const actual = await sut.getPodcasts()

    expect(actual).toEqual(PodcastMother.getAll())
  })

  it('should return empty list when there are no podcasts', async () => {
    const { httpClient, sut } = setup()
    when(httpClient.get(anything())).thenResolve({
      feed: {
        entry: [],
      },
    })

    const actual = await sut.getPodcasts()

    expect(actual).toEqual([])
  })

  it('should call repository to get podcasts with the correct url', async () => {
    const { httpClient, sut } = setup()
    when(httpClient.get(anything())).thenResolve({
      feed: {
        entry: PodcastDtoMother.getAll(),
      },
    })

    await sut.getPodcasts()
    verify(
      httpClient.get('us/rss/toppodcasts/limit=100/genre=1310/json'),
    ).called()
  })

  it('should return a podcast detail', async () => {
    const { httpClient, sut } = setup()
    when(httpClient.get(anything())).thenResolve(
      PodcastDetailDtoMother.detail(),
    )

    const actual = await sut.getPodcastById('123')

    expect(actual).toEqual(PodcastDetailMother.detail())
  })

  it('should return a podcast detail with empty episodes when there are no episodes', async () => {
    const { httpClient, sut } = setup()
    when(httpClient.get(anything())).thenResolve({
      results: [],
    })

    const actual = await sut.getPodcastById('123')

    expect(actual).toEqual({
      episodes: [],
    })
  })

  it('should call repository to get podcast by id with the correct url', async () => {
    const { httpClient, sut } = setup()
    when(httpClient.get(anything())).thenResolve(
      PodcastDetailDtoMother.detail(),
    )

    await sut.getPodcastById('123')
    verify(
      httpClient.get(
        'lookup?id=123&media=podcast&entity=podcastEpisode&limit=20&sort=recent',
      ),
    ).called()
  })
})

function setup() {
  const httpClient = mock<HttpClient>()

  return {
    httpClient,
    sut: new PodcastHttpRepository(instance(httpClient)),
  }
}
