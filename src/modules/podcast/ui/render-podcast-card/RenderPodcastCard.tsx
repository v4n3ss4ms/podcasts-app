import { PodcastCard } from '@podcast/ui/card/PodcastCard.tsx'
import { Podcast } from '@podcast/domain/podcast.ts'
import { ReactNode } from 'react'

export const RenderPodcastCard = (podcast: Podcast): ReactNode => <PodcastCard podcast={podcast} />
