const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");


/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index",
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash].js",
    chunkFilename: "js/[name].[contenthash].js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets')
    },

  },
  devServer: {
    static:{
        directory: path.join(__dirname,"dist")
    },
    // contentBase: "./dist",
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images'
        }
      },
    ],
  },
    performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
    maxAssetSize: 244 * 1024, // Set your desired size limit in bytes
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: false,
      template: "./public/index.html",
    }),
    new ForkTsCheckerWebpackPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
};