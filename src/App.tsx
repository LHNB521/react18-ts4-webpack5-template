import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import MyLoading from './components/MyLoading'
import router from './router'
function App() {
  return (
    <Suspense fallback={<MyLoading />}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  )
}
export default App
