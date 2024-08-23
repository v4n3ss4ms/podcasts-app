import { describe, expect, it } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useFetchPodcastById } from '@hooks/useFetchPodcastById.ts'
import { PodcastLocator } from '@podcast/di/podcast.locator.ts'
import { when } from 'ts-mockito'
import { PodcastMother } from '@podcast/domain/podcast.mother.ts'
import { act } from 'react'

describe('useFetchPodcastById', () => {
  it('should fetch a podcast by id', async () => {
    setup()
    const { result } = renderHook(() => useFetchPodcastById('1535809341'))
    await act(() => result.current)
    expect(result.current).toStrictEqual(PodcastMother.getAll()[0])
  })

  it('should return undefined if podcastId not found', async () => {
    setup()
    const { result } = renderHook(() => useFetchPodcastById('000000000000'))
    await act(() => result.current)
    expect(result.current).toBeUndefined()
  })
})

function setup() {
  when(PodcastLocator.mockRepository.getPodcasts()).thenResolve(PodcastMother.getAll())
}
