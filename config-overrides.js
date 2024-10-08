const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "crypto": require.resolve("crypto-browserify"),
    "https": require.resolve("https-browserify"),
    "zlib": require.resolve("browserify-zlib"),
    "stream": require.resolve("stream-browserify"),
    "util": require.resolve("util"),
    "buffer": require.resolve("buffer"),
    "process": require.resolve("process/browser"),
    "assert": require.resolve("assert/"),
    "http": require.resolve("stream-http"),
    "url": require.resolve("url/"),
    "fs": false
  };

  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ];

  return config;
}
