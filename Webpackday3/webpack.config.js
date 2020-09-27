/*
    loader: 1, need to download;  2, config

    plugin: 1 download ; 2, import
*/
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 问题就来了，那如果js文件多了怎么办？？？？
  // 剩余的JS 文件如何打包。
  entry: "./src/lala/index.js",

  output: {
    filename: "built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      // loader's config
    ],
  },

  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  //   我操，那构建一个大项目怎么去打包所有资源啊。。。
  // html-webpack-plugin
  mode: "development",
};
