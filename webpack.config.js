const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: babel - loader,
          /*Thisconfigurationaidsbabel-preset-envtodisabletranspilingofimportorexportmodulestocommonJS*/
          options: {
            presets: [["es2015", { modules: false }]],
          },
        },
      },
    ],
  },
  plugin: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      fileName: "./index.html",
    }),
  ],
};
