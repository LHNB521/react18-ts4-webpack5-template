# 1.React18+webpack5+ts4.x脚手架

- 技术栈：webpack5 + React18 + TS4.x
- 工程化：eslint + prettier + stylelint + husky + commitlint
- 样式与处理器：CSS module（less、sass、stylus）、Atom CSS（tailwind）
- UI 框架：Antd5.x（Antd按需加载、主题等）、Arco design
- 图片、fonts、数据资源(JSON、csv、tsv等)
- 热更新、资源压缩、代码分离（动态导入、懒加载等）、缓存

## 2.命令介绍

```shell
npm run dev： 本地开发环境启动命令; 
npm run dev:dev：本地开发环境启动命令（同上），
npm run dev:test：测试开发环境启动命令，
npm run dev:pre：预发环境启动命令，
npm run dev:prod：生产环境启动命令，
npm run build:dev：开发环境打包命令，
npm run build:test：测试环境打包命令，
npm run build:pre：预发布环境打包命令，
npm run build:prod：生产环境打包命令，
npm run build:analy：可查看打包内存大小的打包命令，
npm run build:dll：导入react源码命令（用来防止浏览器每次运行新启动tab），
npm run lint:prettier：代码格式化命令，
npm run lint:eslint：代码检查命令，
npm run lint:md：markdown可视化命令，
npm run pre-check：tsc检测类型命令，
npm run commit：一键提交命令，
npm run release：自动化升级版本号、生成 changelog 及 tag的命令，
npm run release:alpha：同上（内测），
npm run release:rc：同上（公测），
npm run release:major：，
npm run release:minor：，
npm run release:patch：，
serve -S dist：本地环境启动dist打包项目
```
