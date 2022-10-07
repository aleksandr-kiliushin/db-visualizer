const path = require("node:path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 3200,
  },
  devtool: "source-map",
  entry: path.join(__dirname, "src", "index.js"),
  mode: process.env.MODE,
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    sourceMapFilename: "[name].js.map",
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({ filename: "[file].map[query]" }),
    new webpack.EnvironmentPlugin({ MODE: process.env.MODE }),
    new HTMLWebpackPlugin({ template: path.join(__dirname, "public", "index.html") }),
  ],
  resolve: {
    alias: {
      "#client": path.resolve(process.cwd(), "client"),
    },
    extensions: [".js"],
  },
}
