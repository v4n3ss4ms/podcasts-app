import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './core/router/router.tsx'
import { registerSW } from './register-sw.tsx'
// import React from 'react'

registerSW()

createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <RouterProvider router={AppRouter} />,
  // </React.StrictMode>,
)
