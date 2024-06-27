const autoprefixer = require("autoprefixer");

const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackSimpleIncludePlugin = require("html-webpack-simple-include-plugin");

// List of HTML Pages files
const htmlFiles = ["index"];

// List of partial files to include
const partialFiles = [
  "navbar",
  "preloader",
  "popup-video-modal",
  "scrollToTop",
  "all-faqs",
];

// Create HtmlWebpackPlugin instances for each HTML file
const htmlPlugins = htmlFiles.map(
  (file) =>
    new HtmlWebpackPlugin({
      template: `./src/${file}.html`,
      filename: `./${file}.html`,
    })
);

// Create HtmlWebpackSimpleIncludePlugin instance with partial files
const partialIncludePlugin = new HtmlWebpackSimpleIncludePlugin(
  partialFiles.map((file) => ({
    tag: `<include-${file} />`,
    content: fs.readFileSync(
      path.resolve(__dirname, `src/partials/${file}.html`)
    ),
  }))
);

module.exports = {
  entry: {
    main: "./src/assets/js/index.js",
  },
  mode: "development",
  devServer: {
    watchFiles: ["src/**/*"],
    hot: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: MiniCssExtractPlugin.loader,
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: "css-loader",
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/style.css",
    }),
    new CopyPlugin({
      patterns: [{ from: "src/assets", to: "assets" }],
    }),

    // other plugins...
    ...htmlPlugins,
    // Add multiple HtmlWebpackSimpleIncludePlugin instances using the array
    partialIncludePlugin,
  ],

  output: {
    filename: "assets/js/index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
