import { useEffect } from 'react'

type EventData = {
  type: 'STATE_LOAD_DATA'
  isFetching: boolean
}

export const useBroadcastChannel = (
  channelName: string,
  fn: (event: MessageEvent<EventData>) => void,
) => {
  useEffect(() => {
    const broadcast = new BroadcastChannel(channelName)
    broadcast.onmessage = fn
  }, [])
}
