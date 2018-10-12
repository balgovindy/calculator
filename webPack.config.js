const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: SRC_DIR + '/index.jsx',
  output: {
    path: DIST_DIR + '/component',
    filename: 'bundle.js',
    publicPath: '/component/'
  },
  module: {
    rules: [{
        test: /\.(js|jsx)?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
}

module.exports = config;