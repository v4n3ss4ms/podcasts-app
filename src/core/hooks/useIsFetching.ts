import { useState } from 'react'
import { useBroadcastChannel } from '@core/hooks/useBroadcastChannel.ts'

const requestsFetching: boolean[] = []
const requestsFetched: boolean[] = []

export const useIsFetching = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false)

  const cleanupRequests = (shouldClean: boolean) => {
    if (!shouldClean) return

    requestsFetching.length = 0
    requestsFetched.length = 0
  }

  useBroadcastChannel('sw-tunnel', ({ data }: MessageEvent<{ type: 'STATE_LOAD_DATA'; isFetching: boolean }>) => {
    if (data.type === 'STATE_LOAD_DATA') {
      if (data.isFetching) {
        requestsFetching.push(true)
      } else {
        requestsFetched.push(true)
      }

      setIsFetching(requestsFetching.length > requestsFetched.length)
      cleanupRequests(requestsFetching.length === requestsFetched.length)
    }
  })

  return isFetching
}
