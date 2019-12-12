const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  // specific and entry file
  entry: './src/index.tsx',

  // where our output bundle will be created
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },

  // file externsions for babel to look for and transpile
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  // The specific rules for loaders based on file extension
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css/,
        use: ['css-loader', 'style-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};