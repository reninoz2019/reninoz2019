'use strict'
const path = require('path')

module.exports = {
  baseUrl: '',
  chainWebpack: config => {
    config.plugin('copy').tap(([pathConfigs]) => {
      pathConfigs.unshift({
        from: 'cfg',
        to: 'cfg'
      })
      return [pathConfigs]
    })
  },
  transpileDependencies: ['vuetify'],
  outputDir: 'target/www',
  configureWebpack: config => {
    config.entry.app = ['./src/main.js']
    config.resolve.alias = { '@': path.join(__dirname, 'src'), vue$: 'vue/dist/vue.runtime.esm.js' }
  }
}
