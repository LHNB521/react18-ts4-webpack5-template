import { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import { RouteObject } from '@/routers/interface'
import { LayoutIndex } from '@/routers/constant'

const Login = lazy(() => import('@/views/login'))
const Home = lazy(() => import('@/views/home'))

export const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/login' />
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: '登录页',
      key: 'login'
    }
  },
  {
    element: <LayoutIndex />,
    children: [
      {
        path: '/home',
        element: <Home />,
        meta: {
          requiresAuth: true,
          title: '首页',
          key: 'home'
        }
      }
    ]
  }
]
const Router = () => {
  const routes = useRoutes(rootRouter as any)
  return routes
}

export default Router
