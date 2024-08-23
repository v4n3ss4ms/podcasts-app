import { AxiosInstance } from 'axios'

export function dataResponseInterceptorFn(instance: AxiosInstance) {
  instance.interceptors.response.use(
    (response) => {
      return {
        ...response,
        data: JSON.parse(response.data.contents),
      }
    },
    (error) => {
      return Promise.reject(error)
    },
  )
}
