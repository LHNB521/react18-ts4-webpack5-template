import { LayoutIndex } from '@/routers/constant'
import { RouteObject } from '@/routers/interface'
import Home from '@/views/home/index'

// 首页模块
const homeRouter: Array<RouteObject> = [
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

export default homeRouter
