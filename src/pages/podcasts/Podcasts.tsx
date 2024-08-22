import { ReactNode } from 'react'
import styles from './podcasts.module.css'
import { useFetchPodcasts } from './useFetchPodcasts.ts'
import { useNavigate } from 'react-router-dom'
import { PodcastId } from '../../modules/podcast/domain/podcast-id.ts'
import { Input } from '@shared/components/input/Input.tsx'
import {
  CardGrid,

} from '@shared/components/card-grid/CardGrid.tsx'
import { PodcastLocator } from '../../modules/podcast/di/podcast.locator.ts'
import { Counter } from './counter/Counter.tsx'
import { PodcastCard } from './card/PodcastCard.tsx'

export interface FormSearchInput {
  terms: string
}

export function Podcasts(): ReactNode {
  const navigate = useNavigate()
  const { podcasts, setPodcasts } = useFetchPodcasts()

  const onClicked = (podcastId: PodcastId) => navigate(`/podcast/${podcastId}`)

  const handleSubmit = async (terms: string) => {
    const response = await PodcastLocator.getPodcastByTerms().execute(terms)
    setPodcasts(response)
  }

  return (
    <div className={styles.podcast}>
      <div className={styles.innerPodcasts}>
        <div className={styles.toolbar}>
          <Counter count={podcasts.length} />
          <Input
            onChange={(ev) => handleSubmit(ev.target.value)}
            placeholder="Filter podcasts..."
          />
        </div>

        <CardGrid
          podcasts={podcasts}
          onClicked={onClicked}
          renderItem={(podcast) => <PodcastCard podcast={podcast} />}
        ></CardGrid>
      </div>
    </div>
  )
}
