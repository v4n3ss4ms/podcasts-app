import { ReactNode, useCallback } from 'react'
import styles from './podcasts.module.css'
import { useFetchPodcasts } from '@shared/hooks/useFetchPodcasts.ts'
import { useNavigate } from 'react-router-dom'
import { PodcastId } from '@podcast/domain/podcast-id.ts'
import { Input } from '@shared/components/input/Input.tsx'
import { Counter } from '@shared/components/counter/Counter.tsx'
import { PodcastLocator } from '@podcast/di/podcast.locator.ts'
import { PodcastGrid } from '@podcast/ui/grid/PodcastGrid.tsx'
import { RenderPodcastCard } from '@podcast/ui/render-podcast-card/RenderPodcastCard.tsx'

export function Podcasts(): ReactNode {
  const navigate = useNavigate()
  const { podcasts, setPodcasts } = useFetchPodcasts()

  const onClicked = useCallback((podcastId: PodcastId) => navigate(`/podcast/${podcastId}`), [navigate])

  const handleSubmit = useCallback(async (terms: string) => {
    const response = await PodcastLocator.getPodcastByTerms().execute(terms)
    setPodcasts((prevState) => (JSON.stringify(prevState) === JSON.stringify(response) ? prevState : response))
  }, [])

  return (
    <div className={styles.podcast}>
      <div className={styles.innerPodcasts}>
        <div className={styles.toolbar}>
          <Counter count={podcasts.length} />
          <Input onChange={(ev) => handleSubmit(ev.target.value)} placeholder="Filter podcasts..." />
        </div>

        <PodcastGrid onClicked={onClicked} podcasts={podcasts} renderItem={RenderPodcastCard} />
      </div>
    </div>
  )
}
