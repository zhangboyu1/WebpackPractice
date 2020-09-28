const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const optimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

// setting environment :
process.env.NODE_ENV = "production";

module.exports = {
  entry: "./src/js/index.js",
  //输出
  output: {
    filename: "built.js",
    // path
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      // 详细loader配置
      {
        //detailed loader config
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // loader's default config
          "css-loader",
          "sass-loader",
          // css compatibility handliing:
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"],
              },
            },
          },
        ],
      },

      {
        //detailed loader config
        test: /\.s[ac]ss$/i,
        use: [
          //use 数组中loader执行顺序，按顺序执行
          // "style-loader", //create Style tag...
          MiniCssExtractPlugin.loader, //提取js中的css成单独文件
          // 将css文件变成commonJS模块加载到js中，里面内容是样式字符串

          "css-loader", //compile css to js...
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"],
              },
            },
          },
        ],
      },
      {
        //detailed loader config
        // Only handle the img src in css.....
        // cannot handle html 图片。
        test: /\.jpg|png|gif$/i,
        //   Need to download url &file loader
        loader: "url-loader",
        options: {
          // when the file size less than 8kb, it will handle with the base64...
          // photo 体积会变大。。。
          limit: 8 * 1024,
          name: "[hash:10].[ext]",
          outputPath: "imgs",
        },
      },
      {
        test: /\.html$/,
        // 负责处理html中的图片。。。。
        loader: "html-loader",
      },
      {
        exclude: /\.html|js|css|less|scss|jpg|png|gif/,
        // 负责处理html中的图片。。。。
        loader: "file-loader",
        options: {
          name: "[hash:10].[ext]",
          outputPath: "others",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new MiniCssExtractPlugin({
      filename: "css/built.css",
    }),
    new optimizeCssAssetsWebpackPlugin(),
  ],
  mode: "development",
  //   mode: "production",
  // 如何实现自动化打包编译打开浏览器，自动编译？？？？？？
  // 只会在内存中编译打包，不会有任何输出、、、、、、
  // 启动devServer指令为: webpack-dev-server
  // 启动devServer的指令： npx webpack-dev-server
  devServer: {
    contentBase: resolve(__dirname, "build"),
    // gzip 压缩代码。。
    compress: true,
    port: 5500,
    open: true,
  },
};
