import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './AppRouting.tsx'
import { registerSW } from './register-sw.ts'
import React from 'react'

registerSW()

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />,
  </React.StrictMode>,
)
