import { describe, expect, it } from 'vitest'
import { PodcastRepository } from '../domain/podcast.repository.ts'
import { anything, instance, mock, when } from 'ts-mockito'
import { GetPodcastEpisodeByIdQry } from './get-podcast-episode-by-id.qry.ts'
import { PodcastDetailMother } from '../domain/podcast-detail.mother.ts'

describe('GetPodcastEpisodeByIdQry', () => {
  it('should return a podcast episode', async () => {
    const { repository, sut } = setup()
    when(repository.getPodcastById(anything())).thenResolve(
      PodcastDetailMother.detail(),
    )

    const actual = await sut.execute({
      podcastId: '123',
      episodeId: '123456',
    })

    expect(actual).toEqual(PodcastDetailMother.detail().episodes[0])
  })
})

function setup() {
  const repository = mock<PodcastRepository>()

  return {
    repository,
    sut: new GetPodcastEpisodeByIdQry(instance(repository)),
  }
}
