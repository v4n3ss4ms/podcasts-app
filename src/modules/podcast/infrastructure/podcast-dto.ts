import { PodcastImageDto } from './podcast-image-dto.ts'

export interface PodcastDto {
  'im:image': PodcastImageDto[]
  title: {
    label: string
  }
  'im:name': {
    label: string
  },
  id: {
    label: string
    attributes: {
      'im:id': string
    }
  }
  'im:artist': {
    label: string
    attributes?: {
      href: string
    }
  }
  summary: {
    label: string
  }
}
