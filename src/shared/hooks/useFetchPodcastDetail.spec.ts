import { describe, expect, it } from 'vitest'
import { anything, when } from 'ts-mockito'
import { PodcastLocator } from '@podcast/di/podcast.locator.ts'
import { PodcastDetailMother } from '@podcast/domain/podcast-detail.mother.ts'
import { renderHook } from '@testing-library/react'
import { useFetchPodcastDetail } from '@hooks/useFetchPodcastDetail.ts'
import { act } from 'react'

describe('useFetchPodcastDetail', () => {
  it('should fetch a podcast detail by id', async () => {
    when(PodcastLocator.mockRepository.getPodcastById(anything())).thenResolve(PodcastDetailMother.detail())
    const { result } = renderHook(() => useFetchPodcastDetail('1535809341'))
    await act(() => result.current)
    expect(result.current).toStrictEqual(PodcastDetailMother.detail())
  })

  it('should return undefined if podcastId not found', async () => {
    when(PodcastLocator.mockRepository.getPodcastById(anything())).thenResolve()
    const { result } = renderHook(() => useFetchPodcastDetail('000000000000'))
    await act(() => result.current)
    expect(result.current).toBeUndefined()
  })
})
