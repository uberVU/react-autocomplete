var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: 'tests/',
    browsers: ['Chrome'],
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    },
    files: [
      'tests.webpack.js'
    ],
    frameworks: ['mocha', 'chai', 'sinon-chai'],
    preprocessors: {
      '**/*.js': ['webpack']
    },
    reporters: ['mocha', 'coverage'],
    webpack: {
      resolve: {
        alias: {
          components: path.join(__dirname, 'src/components'),
          fixtures: path.join(__dirname, 'fixtures'),
          tests: path.join(__dirname, 'tests')
        }
      },
      module: {
        loaders: [{
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }],
        postLoaders: [{
          test: /\.jsx?$/,
          exclude: /(node_modules|tests)\//,
          loader: 'istanbul-instrumenter'
        }]
      }
    },
    webpackMiddleware: {
      noInfo: true
    }
  });
};
