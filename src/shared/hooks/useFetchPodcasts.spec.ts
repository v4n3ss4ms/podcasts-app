import { describe, expect, it } from 'vitest'
import { when } from 'ts-mockito'
import { PodcastLocator } from '@podcast/di/podcast.locator.ts'
import { PodcastMother } from '@podcast/domain/podcast.mother.ts'
import { useFetchPodcasts } from '@hooks/useFetchPodcasts.ts'
import { act } from 'react'
import { renderHook } from '@testing-library/react'

describe('useFetchPodcasts', () => {
  it('should fetch all podcasts', async () => {
    when(PodcastLocator.mockRepository.getPodcasts()).thenResolve(PodcastMother.getAll())
    const {
      result: { current },
    } = await act(() => renderHook(() => useFetchPodcasts()))
    expect(current.podcasts).toStrictEqual(PodcastMother.getAll())
  })

  it('should get empty array if no podcasts found', async () => {
    when(PodcastLocator.mockRepository.getPodcasts()).thenResolve([])
    const {
      result: { current },
    } = await act(() => renderHook(() => useFetchPodcasts()))
    expect(current.podcasts).toStrictEqual([])
  })
})
