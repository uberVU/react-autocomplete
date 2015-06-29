var path = require('path');

module.exports = {
  entry: './src/components/autocomplete.jsx',
  externals: {
    'lodash': 'lodash',
    'react': 'react'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  output: {
    libraryTarget: 'umd',
    library: 'Autocomplete',
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  }
};
