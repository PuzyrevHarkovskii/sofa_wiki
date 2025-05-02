import { appPageLoader } from '@pages/app'
import { SophophiliaPage } from '@pages/sophophilia/page'
import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SophophiliaPage />,
  },
  {
    path: '/app',
    loader: appPageLoader,
    element: <SophophiliaPage />,
  },
  {
    path: '*',
    element: <SophophiliaPage />,
  },
])
