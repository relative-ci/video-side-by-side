const path = require('path');
const context = path.join(__dirname, 'src');

module.exports = {
  context,
  entry: './index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarnings: process.env.NODE_ENV !== 'production'
        }
      }
    ]
  },
  plugins: [],
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  }
};
