import { Button, Form, Input, message } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginApi } from '@/api/login'
import { setToken } from '@/redux/modules/global/action'
import { HOME_URL } from '@/config/config'

function loginForm(props: any) {
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const { setToken } = props

  // 登录
  const onFinish = async (loginForm: any) => {
    try {
      setLoading(true)
      const data: any = await loginApi(loginForm)
      setToken(data.token)
      message.success('登录成功！')
      navigate(HOME_URL)
    } finally {
      setLoading(false)
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item label='账号' name='username' rules={[{ required: true, message: '请输入账号' }]}>
        <Input />
      </Form.Item>

      <Form.Item label='密码' name='password' rules={[{ required: true, message: '请输入密码' }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type='primary' htmlType='submit' loading={loading}>
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}
const mapDispatchToProps = { setToken }
export default connect(null, mapDispatchToProps)(loginForm)
