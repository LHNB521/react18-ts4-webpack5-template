import { Button, Divider, Form, Input, message } from 'antd'
import { useState } from 'react'
import LoginForm from './loginForm'
import scssStyles from './index.scss'

const login = () => {
  const [title] = useState('xxx系统')
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
