const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const path = require('path');

// module.exports = {
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: "Webpack Output",
//     }),
//   ],
// };