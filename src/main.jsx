import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './app/layout/Main'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './app/layout/routes'
import AuthProvider from './app/components/contextAPI/authProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={routes}>
        <Main />
      </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
