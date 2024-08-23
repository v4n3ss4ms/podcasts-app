import { describe, expect, vi } from 'vitest'
import { PodcastMother } from '@podcast/domain/podcast.mother.ts'
import { PodcastGrid } from '@podcast/ui/grid/PodcastGrid.tsx'
import * as Render from '@podcast/ui/render-podcast-card/RenderPodcastCard.tsx'
import * as useHideByTime from '@hooks/useHideByTime.ts'
import { render } from '@testing-library/react'

describe('PodcastGrid', () => {
  it('should return grid with podcasts', async () => {
    const renderPodcast = vi.spyOn(Render, 'RenderPodcastCard')
    vi.spyOn(useHideByTime, 'useHideByTime').mockReturnValue(false)

    const grid = render(
      <PodcastGrid onClicked={vi.fn()} podcasts={PodcastMother.getAll()} renderItem={Render.RenderPodcastCard} />,
    )
    const title = (await grid.findAllByTestId('title')) as HTMLImageElement[]

    expect(title.map((t) => t.textContent)).toEqual(PodcastMother.getAll().map((p) => p.title))
    expect(renderPodcast).toBeCalledTimes(3)
    grid.unmount()
  })
})
