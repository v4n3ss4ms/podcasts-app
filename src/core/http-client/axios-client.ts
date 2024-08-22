import axios, { AxiosInstance } from 'axios'
import { urlRequestInterceptorFn } from './url-request.interceptor-fn.ts'
import { dataResponseInterceptorFn } from './data-response.interceptor-fn.ts'
import { HttpClient } from './http-client.ts'

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

urlRequestInterceptorFn(instance)
dataResponseInterceptorFn(instance)

export default instance

export class AxiosClient implements HttpClient {
  constructor(private readonly axiosInstance: AxiosInstance) {}

  async get<T>(url: string): Promise<T> {
    const response = await this.axiosInstance.get<T>(url)
    return response.data
  }
}
