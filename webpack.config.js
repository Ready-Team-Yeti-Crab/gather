const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, "client", "index.js"),
  output: {
    path:path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
          test: /\.js$|jsx/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator']
            }
          }
        },
        {
          test: /scss$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        }
      ]
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    // enable HMR on the devServer
    hot: true,
    // fallback to root for other urls
    historyApiFallback: true,

    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },

    // proxy: {
    //   '/api/**': {
    //     target: 'http://localhost:3000/',
    //     secure: false,
    //   },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "client", "index.html"),
    }),
  ],
}