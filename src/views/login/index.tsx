import { Card } from 'antd'
import { useState } from 'react'
import LoginForm from './loginForm'
import scssStyles from './index.scss'

const login = () => {
  const [title] = useState('xxx系统')
  return (
    <div className={scssStyles.scssBox}>
      <Card title={title} style={{ width: 500 }}>
        <LoginForm />
      </Card>
    </div>
  )
}
export default login
