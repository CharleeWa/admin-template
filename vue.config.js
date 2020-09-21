// vue.config.js
const vueConfig = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'border-radius-base': '2px'
          },
          // DO NOT REMOVE THIS LINE
          javascriptEnabled: true
        }
      }
    }
  }
}

module.exports = vueConfig
