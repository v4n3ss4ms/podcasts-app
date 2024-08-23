import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { RenderPodcastCard } from '@podcast/ui/render-podcast-card/RenderPodcastCard.tsx'
import { PodcastMother } from '@podcast/domain/podcast.mother.ts'

describe('RenderPodcastCard', () => {
  it('should render podcast card', async () => {
    const renderPodcastCard = render(<RenderPodcastCard {...PodcastMother.getAll()[0]} />)
    const title = await renderPodcastCard.findByTestId('title')
    const author = await renderPodcastCard.findByTestId('author')

    expect(title.textContent).toBe(PodcastMother.getAll()[0].title)
    expect(author.textContent).toBe(`Author: ${PodcastMother.getAll()[0].author}`)
  })
})
