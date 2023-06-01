import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import styles from './index.scss'
import LayoutHeader from './components/Header'

const layout = () => {
  const { Content } = Layout
  return (
    <section className={styles.container}>
      <Layout>
        <LayoutHeader></LayoutHeader>
        <Content>
          <Outlet></Outlet>
        </Content>
      </Layout>
    </section>
  )
}
export default layout
