var nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');
var path = require('path');
var libraryName = 'lapse';

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  entry: {
    index: path.join(__dirname, 'source', 'lapse.js')
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname),
    library: libraryName,
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['transform-es2015-parameters']
        }
      }
    ]
  },
  externals: [nodeExternals()],
  target: 'web',
  devtool: 'source-map'
};
