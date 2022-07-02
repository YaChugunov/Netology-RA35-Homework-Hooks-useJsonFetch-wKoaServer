var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: __dirname + '/app/App.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  plugins: [HTMLWebpackPluginConfig],
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3333,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
};
