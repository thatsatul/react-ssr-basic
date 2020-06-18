const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const commonConfig = env => ({
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: env.NODE_ENV === 'development' ? '"development"' : '"production"',
        SERVER_PORT: env.SERVER_PORT
        // HOST: env.H '0.0.0.0'
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
  }
});

const serverConfig = env => {
  // console.log('Running application in environment, Port and Host = ', env.NODE_ENV, env.PORT, env.HOST);
  // console.log('process.env.PORT = ', process.env.PORT + " process.env.HOST = ", process.env.HOST);
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
    devServer: {
      port: process.env.PORT || env.PORT || 3000,
      host: process.env.HOST || env.HOST || '0.0.0.0'
    }
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
    devtool: env.NODE_ENV === 'development' ? 'source-map' : false,
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      // port: process.env.PORT || env.PORT || 3000,
      // host: process.env.HOST || env.HOST || '0.0.0.0',
      historyApiFallback: true,
      disableHostCheck: true
    }
  };
}

module.exports = env => [clientConfig(env), serverConfig(env)];
