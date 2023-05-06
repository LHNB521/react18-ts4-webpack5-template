import { Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import MyLoading from './components/MyLoading'
import Router from './routers'
import AuthRouter from '@/routers/utils/authRouter'
import './app.scss'

function App() {
  return (
    <Suspense fallback={<MyLoading />}>
      <HashRouter>
        <AuthRouter>
          <Router />
        </AuthRouter>
      </HashRouter>
    </Suspense>
  )
}

export default App
