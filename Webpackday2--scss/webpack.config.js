/*
    webpack.config.js webpack的配置文件。
        作用：指示webpack 干哪些活
        所有构建工具都是基于node runtime 运行的。。。模块化是commonJS。
*/

const { resolve } = require("path");
module.exports = {
  // webpack 配置
  entry: "./src/index.js",
  //输出
  output: {
    filename: "built.js",
    // path
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      //   详细loader配置
      {
        //detailed loader config
        test: /\.css$/,
        use: [
          //use 数组中loader执行顺序，按顺序执行
          "style-loader",
          // 将css文件变成commonJS模块加载到js中，里面内容是样式字符串
          "css-loader",
        ],
      },
      {
        //detailed loader config
        test: /\.s[ac]ss$/i,
        use: [
          //use 数组中loader执行顺序，按顺序执行
          "style-loader",
          // 将css文件变成commonJS模块加载到js中，里面内容是样式字符串
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [],

  mode: "development",
  //   mode: "production",
};
