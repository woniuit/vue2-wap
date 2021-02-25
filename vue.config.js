const path = require("path");
const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
    // publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    publicPath: "/",
    productionSourceMap: false, //关闭打包后生成.map文件
    chainWebpack: config => {
        // 移除 prefetch 插件 不然JS文件会已link引入
        config.plugins.delete('prefetch')
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            config.plugins.push(
                new CompressionPlugin({
                    // gzip压缩配置
                    test: /\.js$|\.html$|\.css/, // 匹配文件名
                    threshold: 10240, // 对超过10kb的数据进行压缩
                    deleteOriginalAssets: false, // 是否删除原文件
                })
            )
        }
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
    lintOnSave: false //配置关闭eslint
}