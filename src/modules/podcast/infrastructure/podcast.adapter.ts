import { Adapter } from '../../../core/types/adapter.ts'
import { Podcast } from '../domain/podcast.ts'
import { PodcastDto } from './podcast-dto.ts'

export class PodcastAdapter implements Adapter<PodcastDto, Podcast> {
  toModel(dto: PodcastDto): Podcast {
    return {
      podcastId: dto.id.attributes['im:id'],
      title: dto['im:name'].label,
      author: dto['im:artist'].label,
      image: dto['im:image'][2].label,
      searchTags: [dto.title.label, dto['im:artist'].label],
      summary: dto.summary.label,
    }
  }
}
