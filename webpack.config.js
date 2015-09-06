/*
// 使用webpack打包
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "build/build.js"
  },
  module: {
    loaders: [
	   //.css 文件使用 style-loader 和 css-loader 来处理
      { test: /\.css$/, loader: "style!css" },
      //.js 文件使用 jsx-loader 来编译处理
      { test: /\.js$/,	loader: "jsx-loader" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: []
};
*/
// 配合使用gulp打包
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "build.js"
  },
  module: {
    loaders: [
	   //.css 文件使用 style-loader 和 css-loader 来处理
      { test: /\.css$/, loader: "style!css" },
      //.js 文件使用 jsx-loader 来编译处理
      { test: /\.js$/,	loader: "jsx-loader" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: []
};