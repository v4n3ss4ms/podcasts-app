import { HttpClient } from '@shared/http-client/http-client.ts'
import { AxiosInstance } from 'axios'

export class AxiosHttp implements HttpClient {
  constructor(private readonly axiosInstance: AxiosInstance) {}

  async get<T>(url: string): Promise<T> {
    const response = await this.axiosInstance.get<T>(url)
    return response.data
  }
}
