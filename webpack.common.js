const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    planets: './src/planets.js'
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/views/planets-app-about.html',
      inject: true,
      chunks: ['planets'],
      filename: 'planets-app-about.html'      
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/views/partials/navigation.html"),
      location: 'navigation',
      template_filename: ['index.html', 'planets-app-about.html']
    })
  ],
}