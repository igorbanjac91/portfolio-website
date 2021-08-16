const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    planets: './src/planets.js',
    cyber_food: './src/cyber_food.js'
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
    new HtmlWebpackPlugin({
      template: './src/views/cyber-food-about.html',
      inject: true,
      chunks: ['cyber_food'],
      filename: 'cyber-food-about.html'      
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/views/partials/navigation.html"),
      location: 'navigation',
      template_filename: ['index.html', 'planets-app-about.html', 'cyber-food-about.html']
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/views/partials/footer.html"),
      location: 'footer',
      template_filename: ['index.html', 'planets-app-about.html', 'cyber-food-about.html']
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(svg)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },
}