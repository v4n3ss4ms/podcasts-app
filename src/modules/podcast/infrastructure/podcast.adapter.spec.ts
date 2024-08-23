import { describe, expect } from 'vitest'
import { PodcastAdapter } from '@podcast/infrastructure/podcast.adapter.ts'
import { PodcastDtoMother } from '@podcast/infrastructure/podcast-dto.mother.ts'
import { PodcastMother } from '@podcast/domain/podcast.mother.ts'

describe('PodcastAdapter', () => {
  it('should transform dto to model', async () => {
    const adapter = new PodcastAdapter()

    const actual = PodcastDtoMother.getAll().map((podcast) => adapter.toModel(podcast))

    expect(actual).toEqual(PodcastMother.getAll())
  })
})
