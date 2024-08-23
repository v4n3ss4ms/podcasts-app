import { PodcastHttpRepository } from '../infrastructure/podcast-http.repository.ts'
import instanceAxios from '@shared/http-client/instance-axios.ts'
import { GetPodcastsQry } from '../application/get-podcasts.qry.ts'
import { GetPodcastDetailByIdQry } from '../application/get-podcast-detail-by-id.qry.ts'
import { GetPodcastsByTermsQry } from '../application/get-podcasts-by-terms.qry.ts'
import { GetPodcastByIdQry } from '../application/get-podcast-by-id.qry.ts'
import { GetPodcastEpisodeByIdQry } from '../application/get-podcast-episode-by-id.qry.ts'
import { instance, mock } from 'ts-mockito'
import { PodcastRepository } from '../domain/podcast.repository.ts'
import isModeTest from '@shared/utils/is-mode-test.ts'
import { AxiosHttp } from '@shared/http-client/axios-http.ts'

export class PodcastLocator {
  static mockRepository = mock<PodcastRepository>()

  static getPodcasts() {
    return new GetPodcastsQry(this.podcastHttpRepository)
  }

  static getPodcastByTerms() {
    return new GetPodcastsByTermsQry(this.podcastHttpRepository)
  }

  static getPodcastById() {
    return new GetPodcastByIdQry(this.podcastHttpRepository)
  }

  static getPodcastDetailById() {
    return new GetPodcastDetailByIdQry(this.podcastHttpRepository)
  }

  static getPodcastEpisodeById() {
    return new GetPodcastEpisodeByIdQry(this.podcastHttpRepository)
  }

  private static readonly podcastHttpRepository = !isModeTest
    ? new PodcastHttpRepository(new AxiosHttp(instanceAxios))
    : instance(PodcastLocator.mockRepository)
}
