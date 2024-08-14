import { createBrowserRouter } from 'react-router-dom'

import { Dashbord } from './pages/app/dashbord'
import { SignIn } from './pages/app/sign-in'

export const router = createBrowserRouter([
  { path: '/', element: <Dashbord /> },
  { path: '/sign-in', element: <SignIn /> },
])
