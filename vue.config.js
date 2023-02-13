const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: 'static',
  // 额外加的
  // publicPath:"./",
  lintOnSave:false,
  devServer: {
    proxy: {
      '/path': {
        target:"https://static-data.gaokao.cn",
        changeOrigin:true,
        pathRewrite:{
          '^/path':''
        }
      }
    }
  }
})
