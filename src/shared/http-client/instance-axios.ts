import axios from 'axios'
import { urlRequestInterceptorFn } from './interceptors/url-request.interceptor-fn.ts'
import { dataResponseInterceptorFn } from './interceptors/data-response.interceptor-fn.ts'

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

urlRequestInterceptorFn(instance)
dataResponseInterceptorFn(instance)

export default instance
