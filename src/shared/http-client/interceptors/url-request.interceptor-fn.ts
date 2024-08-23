import { AxiosInstance } from 'axios'

const baseUrl = 'https://itunes.apple.com'

export function urlRequestInterceptorFn(instance: AxiosInstance) {
  instance.interceptors.request.use(
    (config) => {
      const url = config.url || ''
      return {
        ...config,
        url: `https://api.allorigins.win/get?url=${encodeURIComponent(`${baseUrl}/${url}`)}`,
      }
    },
    (error) => {
      return Promise.reject(error)
    },
  )
}
