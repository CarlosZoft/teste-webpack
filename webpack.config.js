const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin-webpack5");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// console.log(
//   `

// NODE_ENV: `,
//   process.env.NODE_ENV,
//   `

// `
// );

module.exports = {
  mode: "production",
  entry: {
    app: "./src/main.js",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    sideEffects: false,
    //   minimize: true,
    //   minimizer: [
    //     new TerserPlugin({
    //       terserOptions: {
    //         compress: true,
    //       },
    //     }),
    //   ],
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          esModule: true,
        },
      },
    ],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
