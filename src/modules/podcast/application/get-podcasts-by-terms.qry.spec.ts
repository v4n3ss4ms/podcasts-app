import { describe, expect, it } from 'vitest'
import { PodcastRepository } from '../domain/podcast.repository.ts'
import { instance, mock, verify, when } from 'ts-mockito'
import { GetPodcastsByTermsQry } from './get-podcasts-by-terms.qry.ts'
import { PodcastMother } from '../domain/podcast.mother.ts'

describe('GetPodcastsByTermsQry', () => {
  it('should return podcasts by terms', async () => {
    const { sut } = setup()

    const actual = await sut.execute('Joe,')

    expect(actual).toEqual([PodcastMother.getAll()[0]])
  })

  it('should return two podcasts with two terms', async () => {
    const { sut } = setup()

    const actual = await sut.execute('Joe,Blac,')

    expect(actual).toEqual([PodcastMother.getAll()[0], PodcastMother.getAll()[1]])
  })

  it('should return all podcasts when no terms are provided', async () => {
    const { sut } = setup()

    const actual = await sut.execute('     ')

    expect(actual).toEqual(PodcastMother.getAll())
  })

  it('should call repository', async () => {
    const { repository, sut } = setup()

    await sut.execute('')

    verify(repository.getPodcasts()).called()
  })
})

function setup() {
  const repository = mock<PodcastRepository>()
  when(repository.getPodcasts()).thenResolve(PodcastMother.getAll())

  return {
    repository,
    sut: new GetPodcastsByTermsQry(instance(repository)),
  }
}
