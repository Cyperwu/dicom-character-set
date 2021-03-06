const path = require('path');
const rootPath = process.cwd();
const context = path.join(rootPath, "src");
const outputPath = path.join(rootPath, 'dist');
const bannerPlugin = require(path.join(__dirname, 'plugins', 'banner.js'));

module.exports = {
  mode: 'development',
  context: context,
  entry: {
    'dicom-character-set': './index.js'
  },
  target: 'web',
  output: {
    filename: '[name]-no-polyfill.js',
    library: {
      commonjs: "dicom-character-set",
      amd: "dicom-character-set",
      root: 'dicom-character-set'
    },
    libraryTarget: 'umd',
    globalObject: 'this',
    path: outputPath,
    umdNamedDefine: false
  },
  devtool: 'source-map',
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /(node_modules|test)/,
      loader: 'eslint-loader',
      options: {
        failOnError: false
      }
    }]
  },
  plugins: [
    bannerPlugin()
  ]
};
