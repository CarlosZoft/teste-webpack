const path = require("path");
module.exports = {
  mode: "production",
  entry: {
    app: "./src/main.js",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    sideEffects: true,
  },
};
