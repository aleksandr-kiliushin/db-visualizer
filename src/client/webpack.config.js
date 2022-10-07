const path = require("node:path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 3200,
  },
  devtool: "source-map",
  entry: "./src/client/index.ts",
  mode: process.env.MODE,
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts/,
        use: ["babel-loader"],
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    sourceMapFilename: "[name].js.map",
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({ filename: "[file].map[query]" }),
    new webpack.EnvironmentPlugin({ MODE: process.env.MODE }),
    new HTMLWebpackPlugin({ template: "public/index.html" }),
  ],
  resolve: {
    alias: {
      "#client": path.resolve(process.cwd(), "src/client"),
    },
    extensions: [".js", ".ts"],
  },
}
