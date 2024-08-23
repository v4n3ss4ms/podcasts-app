import { describe, vi } from 'vitest'
import { render } from '@testing-library/react'
import { Component } from './LayoutDetail'
import { MemoryRouter } from 'react-router-dom'
import { PodcastMother } from '@podcast/domain/podcast.mother.ts'
import * as useFetchPodcastById from '@hooks/useFetchPodcastById'

describe('LayoutDetail', () => {
  it('should render layout detail', async () => {
    const useFetchPodcastByIdSpy = vi.spyOn(useFetchPodcastById, 'useFetchPodcastById')
    useFetchPodcastByIdSpy.mockReturnValue(PodcastMother.getAll()[0])

    const layout = render(
      <MemoryRouter>
        <Component />
      </MemoryRouter>,
    )

    layout.unmount()
  })
})
