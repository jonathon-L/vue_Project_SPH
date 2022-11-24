const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, //关闭语法检查
  devServer: {
    proxy: {
<<<<<<< HEAD
      '/admin': {
        target: 'http://39.98.123.211:8510', //API服务器的地址
        logLevel: "debug",//开启debug模式后，可在终端查看代理的真实请求地址
        ws: true, //代理websockets
        changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin 
        pathRewrite: {
          //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
          '^/admin': '',
        }
=======
      '/api': {
        target: 'http://39.98.123.211',
        pathRewrite: { '^/api': '' }
>>>>>>> 43f601677e4d12099cbee4328e4467bf38ac5683
      },
    },
  }

})
