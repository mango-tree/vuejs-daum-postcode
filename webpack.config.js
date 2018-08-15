const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
  output: {
    path: path.resolve(__dirname + '/lib/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  externals: {
    moment: 'moment'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ]
};

module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/index.js'),
    output: {
      filename: 'vuejs-daum-postcode.min.js',
      libraryTarget: 'window',
      library: 'vuejsDaumPostcode',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/DaumPostcode.vue'),
    output: {
      filename: 'vuejs-daum-postcode.js',
      libraryTarget: 'umd',
      library: 'vuejs-daum-postcode',
      umdNamedDefine: true
    }
  })
];
