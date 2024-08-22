import { LayoutMain } from '@shared/layout/main/LayoutMain.tsx'
import { Outlet } from 'react-router-dom'
import { ReactNode } from 'react'
import Context from './core/contexts/context.ts'
import { useIsFetchingState } from './core/contexts/useIsFetchingState.tsx'

function App(): ReactNode {
  const isFetching = useIsFetchingState()

  return (
    <Context.Provider value={{ isFetching }}>
      <LayoutMain>
        <Outlet />
      </LayoutMain>
    </Context.Provider>
  )
}

export default App
