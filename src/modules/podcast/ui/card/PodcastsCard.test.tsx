import { render } from '@testing-library/react'
import { PodcastCard } from '@podcast/ui/card/PodcastCard.tsx'
import { PodcastMother } from '@podcast/domain/podcast.mother.ts'
import { describe, expect, it, vi } from 'vitest'
import * as useHideByTime from '@hooks/useHideByTime'

describe('PodcastCard', () => {
  it('display card with photo', async () => {
    const card = render(<PodcastCard podcast={PodcastMother.getAll()[0]} />)
    const img = (await card.findByTestId('img')) as HTMLImageElement
    const title = (await card.findByTestId('title')) as HTMLImageElement
    const author = (await card.findByTestId('author')) as HTMLImageElement

    expect(img.src).toContain(PodcastMother.getAll()[0].image)
    expect(title.textContent).toContain(PodcastMother.getAll()[0].title)
    expect(author.textContent).toContain(`Author: ${PodcastMother.getAll()[0].author}`)

    card.unmount()
  })

  it('display empty card', async () => {
    const useHideByTimeSpy = vi.spyOn(useHideByTime, 'useHideByTime')
    useHideByTimeSpy.mockReturnValue(true)

    const card = render(<PodcastCard podcast={PodcastMother.getAll()[0]} />)
    const innerCard = (await card.findByTestId('innerCard')) as HTMLDivElement
    expect(innerCard.children.length).toEqual(0)

    useHideByTimeSpy.mockRestore()
    card.unmount()
  })
})
