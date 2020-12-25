const path = require("path");
module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  publicPath: "/",
  productionSourceMap: false, //关闭打包后生成.map文件
  chainWebpack: config => {
    // 移除 prefetch 插件 不然JS文件会已link引入
    config.plugins.delete('prefetch')
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, "src/assets/css/common.less") //css公共模块
      ]
    }
  },
  devServer: {
    port: 8087,
    overlay: {
      warning: false,
      errors: false
    }
  },
  lintOnSave: false  //配置关闭eslint
}