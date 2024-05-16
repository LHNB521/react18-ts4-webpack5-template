import path from 'path'
import { Configuration as WebpackConfiguration } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { merge } from 'webpack-merge'
import baseConfig from './webpack.base'

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

// 合并公共配置,并添加开发环境配置
const devConfig: Configuration = merge(baseConfig, {
  mode: 'development', // 开发模式,打包更加快速,省了代码优化步骤
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new ReactRefreshWebpackPlugin({ overlay: false }) // 添加热更新插件
  ],
  devServer: {
    allowedHosts: 'all',
    host: '0.0.0.0', // 地址
    port: '8080', // 端口
    open: false, // 是否自动打开，关闭
    setupExitSignals: true, // 允许在 SIGINT 和 SIGTERM 信号时关闭开发服务器和退出进程。
    compress: false, // gzip压缩,开发环境不开启,提升热更新速度
    hot: true, // 开启热更新，后面会讲react模块热替换具体配置
    historyApiFallback: true, // 解决history路由404问题
    static: {
      directory: path.join(__dirname, '../public') // 托管静态资源public文件夹
    },
    client: {
      logging: 'error',
      progress: true,
      overlay: {
        errors: true,
        warnings: false
      }
    },
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    ]
  }
})

export default devConfig
