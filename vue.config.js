const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('src', resolve('src'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('api', resolve('src/api'))
      .set('base', resolve('src/base'))
      .end()
  },
  devServer: {
    // 配置后端代理，处理跨域问题
    proxy: {
      '/api/getDiscList': {
        target: 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg',
        changeOrigin: true,
        ws: true,
        bypass: function (req, res, proxyOptions) {
          // 添加qq音乐网站需要的请求头
          req.headers.referer = 'https://c.y.qq.com/'
          req.headers.host = 'c.y.qq.com'
        },
        pathRewrite: {
          '^/api/getDiscList': '' // rewrite path
        }
      }
    }
  }
}
