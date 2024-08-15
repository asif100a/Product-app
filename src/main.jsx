import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './app/layout/Main'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './app/layout/routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}>
      <Main />
    </RouterProvider>
  </StrictMode>,
)
