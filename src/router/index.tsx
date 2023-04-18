import { lazy } from 'react'
import { createHashRouter, Navigate } from 'react-router-dom'
import HomeC from '@/views/home'

const Home = lazy(async () => {
  return new Promise<any>(resolve => {
    setTimeout(() => {
      resolve({
        default: HomeC
      })
    }, 2000)
  })
})
const Login = lazy(() => import('@/views/login'))

export default createHashRouter([
  {
    path: '/',
    element: <Navigate replace to='/home' />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  }
])
