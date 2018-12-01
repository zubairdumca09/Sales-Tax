const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index_bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: "development",
  module: {
    rules: [
      { test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [

    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './src/index.html'
      }
    )
  ],
}
