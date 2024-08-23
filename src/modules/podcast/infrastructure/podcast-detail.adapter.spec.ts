import { describe, expect } from 'vitest'
import { PodcastDetailAdapter } from '@podcast/infrastructure/podcast-detail.adapter.ts'
import { PodcastDetailDtoMother } from '@podcast/infrastructure/podcast-detail-dto.mother.ts'
import { PodcastDetailMother } from '@podcast/domain/podcast-detail.mother.ts'

describe('PodcastDetailAdapter', () => {
  it('should transform dto to model', async () => {
    const adapter = new PodcastDetailAdapter()

    const actual = adapter.toModel(PodcastDetailDtoMother.detail())

    expect(actual).toEqual(PodcastDetailMother.detail())
  })

  it('should transform dto to model with no episodes', async () => {
    const adapter = new PodcastDetailAdapter()

    const actual = adapter.toModel({ ...PodcastDetailDtoMother.detail(), results: [] })

    expect(actual).toEqual({
      episodes: [],
      episodesCount: 0,
    })
  })
})
