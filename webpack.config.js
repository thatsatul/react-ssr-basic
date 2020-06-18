const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const commonConfig = env => ({
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: env.NODE_ENV === 'development' ? '"development"' : '"production"',
      },
    }),
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        compress: false,
        // ecma: 6,
        mangle: true
      },
      sourceMap: true
    }),
  ],
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
});

const serverConfig = env => {
  const commonCg = commonConfig(env);
  return {
    ...commonCg,
    entry: './src/server.js',
    target: 'node',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'server.js',
      publicPath: '/',
    },
    externals: nodeExternals(),
  };
}

const clientConfig = env => {
  const commonCg = commonConfig(env);
  return {
    ...commonCg,
    entry: './src/client/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'client.js',
      sourceMapFilename: 'client.js.map',
      publicPath: '/',
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      // port: process.env.PORT || env.PORT || 8080,
      // host: process.env.HOST || env.HOST || '0.0.0.0',
      historyApiFallback: true,
      disableHostCheck: true
    }
  };
}

module.exports = env => [clientConfig(env), serverConfig(env)];
