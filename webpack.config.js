const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/main.js", // 진입점
  output: {
    path: path.resolve(__dirname, "dist"), // build, dist, public 으로 작성함.
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"], // 복수의 경우 배열로 선언. 먼저 해석이 되야하는 부분을 나중에 작성.
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: "src/index.html", // 해석할 Html 파일이 어디에 있는지 명시
    }),
    new CopyPlugin({
      patterns: [
        { from: "static" }, // to 옵션이 있는데 생략 시 dist폴더로 지정
      ],
    }),
  ],
  // devServer: {
  //   port: 3040,
  // },
};
