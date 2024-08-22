import { useEffect, useState } from 'react'

interface EventData {
  type: 'STATE_LOAD_DATA'
  isFetching: boolean
}
const broadcast = new BroadcastChannel('sw-tunnel')
const requestsFetching: boolean[] = []
const requestsFetched: boolean[] = []

export const useIsFetchingState = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false)

  useEffect(() => {
    broadcast.onmessage = (event: MessageEvent<EventData>) => {
      if (event.data.type === 'STATE_LOAD_DATA') {
        if (event.data.isFetching) {
          requestsFetching.push(true)
        } else {
          requestsFetched.push(true)
        }

        setIsFetching(requestsFetching.length > requestsFetched.length)
        if (requestsFetching.length === requestsFetched.length) {
          requestsFetching.length = 0
          requestsFetched.length = 0
        }
      }
    }
  }, [])

  return isFetching
}
