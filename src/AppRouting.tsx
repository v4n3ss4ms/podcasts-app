import { createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { Podcasts } from './pages/podcasts/Podcasts.tsx'

const appRouting = createBrowserRouter([
  {
    path: '/',
    async loader() {
      const { loader } = await import('@shared/utils/loader-sw.ts')
      return loader()
    },
    element: <App />,
    children: [
      {
        path: '/',
        element: <Podcasts />,
      },
      {
        lazy: () => import('@shared/layout/detail/LayoutDetail.tsx'),
        children: [
          {
            path: '/podcast/:podcastId',
            lazy: () => import('./pages/podcast-detail/PodcastDetail.tsx'),
          },
          {
            path: '/podcast/:podcastId/episode/:episodeId',
            lazy: () => import('./pages/episode/Episode.tsx'),
          },
        ],
      },
    ],
  },
])

export default appRouting
