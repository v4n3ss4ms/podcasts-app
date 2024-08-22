import { createContext } from 'react'

export interface GlobalState {
  isFetching: boolean
}

const context = createContext<GlobalState>({
  isFetching: false,
})

export default context
