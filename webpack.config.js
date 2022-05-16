const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  resolve:{
    extensions: ['.vue', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src') //~ 사용 시 src폴더부터 탐색 가능
    }
  },
  entry: './src/main.js', // 진입점
  output: {
    path: path.resolve(__dirname, 'dist'), // build, dist, public 으로 작성함.
    publicPath: '/',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.s?css$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader', 'postcss-loader'], // 복수의 경우 배열로 선언. 먼저 해석이 되야하는 부분을 나중에 작성.
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: 'src/index.html', // 해석할 Html 파일이 어디에 있는지 명시
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }, // to 옵션이 있는데 생략 시 dist폴더로 지정
      ],
    }),
  ],
  devServer: {
    historyApiFallback: true, // 기본적으로 index.html으로 Redirect
    // port: 3040,
  },
};
