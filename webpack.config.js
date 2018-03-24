'use strict';

const path = require('path');
const webpack = require('webpack');
const host = process.env.HOST ? process.env.HOST : 'localhost';
const port = process.env.PORT ? process.env.PORT : 3000;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  context: path.resolve(__dirname),
  output: {
    publicPath: '',
    path: path.resolve(__dirname, 'docs'),
    filename: `index.js`,
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './www/index.html'
    }),
    new UglifyJsPlugin({
      cache: true,
      parallel: true
    })
  ],
  watch: true,
  resolve: {
    modules: ['node_modules'],
    extensions: ['.json', '.js']
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      {
        test   : /\.(png|jpg|jpeg|gif|ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 85
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          },
        ]
      },
      {
        test: /\.(md|svg)$/,
        use: [{
          loader: 'raw-loader'
        }]
      },
      {
        test: /\.(css|less)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              config: path.resolve(__dirname, './config/postcss.config.js')
            }
          },
          { loader: 'less-loader', options: { sourceMap: true } }
        ],
        include: /\.module\.(css|less)$/
      },
      {
        test: /\.(css|less)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              config: path.resolve(__dirname, './config/postcss.config.js')
            }
          },
          { loader: 'less-loader', options: { sourceMap: true } }
        ],
        exclude: /\.module\.(css|less)$/
      },
      {
        test: [/\.js$/, /\.jsx?$/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react'],
            plugins: [
              'transform-decorators-legacy'
            ]
          }
        }],
        exclude: /node_modules/
      }
    ]
  }
};
