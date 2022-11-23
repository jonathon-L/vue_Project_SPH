const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, //关闭语法检查
  devServer: {
    proxy: {
      '/admin': {
        target: 'http://39.98.123.211:8510',
        pathRewrite: { '^/admin': '' }
      },
      
    },
  }

})
