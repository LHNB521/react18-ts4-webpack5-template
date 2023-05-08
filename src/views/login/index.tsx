import { useState } from 'react'
import LoginForm from './loginForm'
import scssStyles from './index.scss'

const login = () => {
  const [title] = useState('大屏模板')
  return (
    <div className={scssStyles.scssBox}>
      <div className={scssStyles.scssTitle}>{title}</div>
      <div className={scssStyles.scssLogin}>
        <LoginForm />
      </div>
    </div>
  )
}
export default login
