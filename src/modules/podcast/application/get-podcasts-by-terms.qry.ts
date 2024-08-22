import { PodcastRepository } from '../domain/podcast.repository.ts'
import { Podcast } from '../domain/podcast.ts'
import { Query } from '@shared/use-case/query.ts'

export class GetPodcastsByTermsQry extends Query<Podcast[], string> {
  constructor(private readonly podcastRepository: PodcastRepository) {
    super()
  }

  async execute(terms: string): Promise<Podcast[]> {
    const podcasts = await this.podcastRepository.getPodcasts()

    const searchTerms = this.getSearchTerms(terms)

    if (searchTerms.length === 0) return podcasts

    return this.getPodcastsFounded(podcasts, searchTerms)
  }

  private getSearchTerms(terms: string) {
    return terms
      .split(',')
      .map((term) => term.trim().toLowerCase())
      .filter((term) => term.length > 0)
  }

  private getPodcastsFounded(podcasts: Podcast[], searchTerms: string[]) {
    return podcasts.filter((podcast) => {
      return podcast.searchTags.some((tag) => {
        const hydratedTag = tag.toLowerCase().trim()
        return searchTerms.some((term) => hydratedTag.includes(term))
      })
    })
  }
}
