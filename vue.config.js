const path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

console.log(
  `

NODE_ENV: `,
  process.env.NODE_ENV,
  `

`
);

module.exports = {
  configureWebpack: {
    mode: "production",
    entry: {
      app: "./src/main.js",
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    optimization: {
      sideEffects: false,
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
      },
    },
    plugins: [new BundleAnalyzerPlugin()],
  },
};
