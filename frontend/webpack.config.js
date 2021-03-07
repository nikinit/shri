const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin"); 

module.exports = {
  mode: 'production',
  entry: './frontend/stories.js',
  plugins: [
    new MiniCssExtractPlugin({filename: 'stories.css'}),
    new CopyPlugin({
      patterns: [
        { from: "./assets/images", to: "./images" },
      ],
    }),
  ],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'stories.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(woff|woff2|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        }
      },
    ],
  },
};
