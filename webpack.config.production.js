// ADD PRODUCTION VARIATION HERE

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniExtractTextPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode:'development',
    entry: {
      bundle:[
        'webpack-hot-middleware/client?reload=true',
        '@babel/polyfill',
        path.join(__dirname, 'app/index.js')
        ], 
        vendor:['react','react-dom','react-router','lodash']
      },
    output: {
      path: path.join(__dirname, '/dist/'),
      publicPath: '/',
      filename: '[name].js',
      chunkFilename:'[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'app/index.template.html',
        inject: 'body',
        filename: 'index.html'
      }),
      new MiniExtractTextPlugin('/assets/[name]-[hash].min.css'),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            }
          ]
        },
        {
          test:/\.(png|jpg|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          },
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
    },
    mode:'development'
}