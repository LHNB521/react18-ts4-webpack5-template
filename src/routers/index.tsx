import { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import { RouteObject } from '@/routers/interface'
import homeRouter from './modules/home'

const Login = lazy(() => import('@/views/login'))

// * 处理路由
export const routerArray: RouteObject[] = []
Object.keys(homeRouter).forEach(item => {
  Object.keys(homeRouter[item]).forEach((key: any) => {
    routerArray.push(...homeRouter[item][key])
  })
})
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
  ...routerArray
]
const Router = () => {
  const routes = useRoutes(rootRouter as any)
  return routes
}

export default Router
