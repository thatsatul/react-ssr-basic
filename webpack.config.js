const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  console.log('Running application in environment, Port and Host = ', env.NODE_ENV, env.PORT, env.HOST);
  console.log('process.env.PORT = ', process.env.PORT + " process.env.HOST = ", process.env.HOST);

  return {
    mode: 'production', // development || production
    entry: './src/index.js',
    output: {
      // path: path.join(__dirname, '/static'),
      // publicPath: '/static',
      filename: '[name].js',
      sourceMapFilename: '[name].js.map'
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname),
      compress: true,
      port: process.env.PORT || env.PORT || 8080,
      host: '0.0.0.0',
      historyApiFallback: true,
      disableHostCheck: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss|\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'template.html'
      })
    ]
  };
};