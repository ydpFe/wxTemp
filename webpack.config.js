const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.(css|scss)$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader?limit=10240&name=assets/[name].[ext]?[hash]'
      }
    ]
  },
  //别名  把用户请求的资源重定向到另一个路径  require('vue$')
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  // npm install webpack-dev-server   热编译
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  // 生成source-map的不同方式 eval不支持IE8  推荐用source-map
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
