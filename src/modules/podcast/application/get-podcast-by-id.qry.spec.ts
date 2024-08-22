import { describe, expect, it } from 'vitest'
import { instance, mock, verify, when } from 'ts-mockito'
import { PodcastRepository } from '../domain/podcast.repository.ts'
import { GetPodcastByIdQry } from './get-podcast-by-id.qry.ts'
import { PodcastMother } from '../domain/podcast.mother.ts'

describe('GetPodcastByIdQry', () => {
  it('should return a podcast', async () => {
    const { repository, sut } = setup()
    when(repository.getPodcasts()).thenResolve(PodcastMother.getAll())

    const actual = await sut.execute('1535809341')

    expect(actual).toEqual(PodcastMother.getAll()[0])
    verify(repository.getPodcasts()).called()
  })
})

function setup() {
  const repository = mock<PodcastRepository>()

  return {
    repository,
    sut: new GetPodcastByIdQry(instance(repository)),
  }
}
