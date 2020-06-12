const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  console.log('Running application in environment: ', env.NODE_ENV);

  return {
    mode: env.NODE_ENV, // development || production
    entry: './src/index.js',
    output: {
      filename: env.NODE_ENV === 'development' ? '[name].js' : 'bundle.js',
      sourceMapFilename: '[name].js.map'
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname),
      compress: true,
      port: 8080,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
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