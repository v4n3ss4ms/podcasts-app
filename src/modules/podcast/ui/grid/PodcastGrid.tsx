import { Podcast } from '@podcast/domain/podcast.ts'
import { ReactNode, useCallback, useState } from 'react'
import { CardGrid } from '@components/card-grid/CardGrid.tsx'

interface PodcastGridProps {
  onClicked: (podcastId: string) => void
  podcasts: Podcast[]
  renderItem: (podcast: Podcast) => ReactNode
}

export function PodcastGrid({ podcasts, onClicked, renderItem }: PodcastGridProps): ReactNode {
  const [renderPodcasts, setRenderPodcasts] = useState<Podcast[]>([])

  const loadMore = useCallback(
    (podcasts: Podcast[]) => {
      setRenderPodcasts(podcasts)
    },
    [podcasts],
  )

  return (
    <CardGrid list={podcasts} onLoad={loadMore}>
      {renderPodcasts.map((podcast) => {
        return (
          <div key={podcast.podcastId} onClick={() => onClicked(podcast.podcastId)}>
            {renderItem(podcast)}
          </div>
        )
      })}
    </CardGrid>
  )
}
