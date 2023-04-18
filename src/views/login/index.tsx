import { Button, Form, Input } from 'antd'

const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

function login() {
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
        <Button type='primary' htmlType='submit'>
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}
export default login
