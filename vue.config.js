const merge = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");

module.exports = {
  lintOnSave: true,
  parallel: false,
  chainWebpack: config => {
    config.module
      .rule("ts")
      .use("ts-loader")
      .tap(options => {
        console.log('options: ', options);
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "vant",
                libraryDirectory: "es",
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: "es2015"
          }
        });
        return options;
      });
  },
  devServer: {
    hot: true,
    clientLogLevel: 'warning',
    overlay: process.env.NODE_ENV === 'development' ? { warnings: false, errors: true } : false,
    https: false,
    disableHostCheck: false, // 如果通过配置host，需要设置此为true
    host: '127.0.0.1', // 这里写前端项目地址 ，本地尽量不要写localhost
    port: 80,
    proxy: {
      '/': {
        target: 'https://baidu.com', // 这里写接口请求地址 
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}