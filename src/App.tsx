import { LayoutMain } from '@shared/layout/main/LayoutMain.tsx'
import { Outlet } from 'react-router-dom'
import { ReactNode } from 'react'
import Context from './core/contexts/context.ts'
import { useIsFetching } from '@core/hooks/useIsFetching.ts'

function App(): ReactNode {
  const isFetching = useIsFetching()

  return (
    <Context.Provider value={{ isFetching }}>
      <LayoutMain>
        <Outlet />
      </LayoutMain>
    </Context.Provider>
  )
}

export default App
