const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin-webpack5");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const isDevelopment = false;

module.exports = {
  devtool: "source-map",
  mode: isDevelopment ? "development" : "production",
  entry: {
    app: "./src/main.js",
  },
  optimization: {
    sideEffects: false,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: true,
        },
      }),
    ],
    usedExports: true,
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.((s[ac]|c)ss)$/,
        use: [
          {
            loader: isDevelopment
              ? "style-loader"
              : MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              import: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: isDevelopment,
              postcssOptions: {
                ident: "postcss",
                plugins: [
                  require("autoprefixer")(),
                  ...(!isDevelopment
                    ? [
                        require("cssnano")({
                          preset: [
                            "default",
                            {
                              minifySelectors: false,
                            },
                          ],
                        }),
                      ]
                    : []),
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: require("fibers"),
                outputStyle: "expanded",
                sourceMap: isDevelopment,
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /node_modules[\\\/]core-js/,
          /node_modules[\\\/]webpack[\\\/]buildin/,
        ],
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              [
                "component",
                {
                  libraryName: "element-ui",
                  styleLibraryName: "theme-chalk",
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /fonts/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              // publicPath: '..' // use relative path
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              disable: true,
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: /images/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
              // publicPath: '../fonts/' // use relative path
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            minimize: true,
          },
        },
      },
    ],
  },
  devServer: {
    static: "./dist",
  },
  optimization: {
    usedExports: true,
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: isDevelopment ? "Development" : "Production",
    }),
    new BundleAnalyzerPlugin(),
  ],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.runtime.esm.js",
    },
    extensions: ["*", ".js", ".vue", ".json", ".css", ".scss"],
  },
};
