import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import { StatsWriterPlugin } from 'webpack-stats-plugin'
import VisualizerPlugin from 'webpack-visualizer-plugin'
import autoprefixer from 'autoprefixer'

const LAUNCH_COMMAND = process.env.npm_lifecycle_event
const isProduction = LAUNCH_COMMAND === 'build'
process.env.BABEL_ENV = LAUNCH_COMMAND

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 8080
const PROXY = `http://${HOST}:${PORT}`

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist')
}

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: PATHS.app + '/index.html',
  filename: 'index.html',
  inject: 'body'
})

const browserSyncPlugin = new BrowserSyncPlugin({
  host: HOST,
  port: PORT,
  proxy: PROXY,
  open: false,
  ui: { port: 8080, weinre: { port: 9090 }}
}, { reload: false })

const postcssPlugin = new webpack.LoaderOptionsPlugin({
  options: {
    context: PATHS.app,
    postcss: [
      autoprefixer({ remove: false, browsers: ['last 2 versions'] })
    ]
  }
})

const statsWriterPlugin = new StatsWriterPlugin({
  filename: './webpack_stats.json',
  fields: null,
  stats: { chunkModules: true }
})

const visualizerPlugin = new VisualizerPlugin({
  filename: './webpack_stats.html'
})

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

const sharedPlugins = [
  HTMLWebpackPluginConfig,
  postcssPlugin,
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
]

const base = {
  entry: [
    PATHS.app
  ],
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              minimize: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              importLoaders: 1
            }
          },
          { loader: 'postcss-loader' }
        ]
      }
    ]
  },
  resolve: {
    modules: [ PATHS.app, 'node_modules' ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: PATHS.build,
    hot: true,
    inline: true,
    historyApiFallback: true,
    host: HOST,
    port: PORT
  },
  plugins: [
    ...sharedPlugins,
    browserSyncPlugin,
    new webpack.HotModuleReplacementPlugin()
  ]
}

const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [
    ...sharedPlugins,
    productionPlugin,
    statsWriterPlugin,
    visualizerPlugin,
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
}

export default Object.assign({}, base, isProduction ? productionConfig : developmentConfig)
