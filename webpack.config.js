const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackSimpleIncludePlugin = require("html-webpack-simple-include-plugin");

// Define the root directory containing the HTML files
const rootDirectory = path.resolve(__dirname, "src");

// Function to recursively find partials in a directory
function findPartials(directory) {
  const partials = [];
  // Read the directory
  const files = fs.readdirSync(directory);
  // Loop through the files
  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    // If it's a directory, recursively find partials in it
    if (stats.isDirectory()) {
      partials.push(...findPartials(filePath));
    } else {
      // If it's a file, add it as a partial
      partials.push({
        tag: `<include-${path.basename(file, path.extname(file))} />`,
        file: filePath,
      });
    }
  });
  return partials;
}

// Function to generate HtmlWebpackPlugin instances for each HTML file
function generateHtmlPlugins(rootDir) {
  const plugins = [];
  // Read the root directory
  const files = fs.readdirSync(rootDir);

  // Filter HTML Pages files
  const htmlPageFiles = files.filter((file) => path.extname(file) === ".html");
  // Loop through HTML files
  htmlPageFiles.forEach((file) => {
    plugins.push(
      new HtmlWebpackPlugin({
        filename: file,
        template: path.join(rootDir, file), // Fix: Change `directory` to `rootDir`
      })
    );
  });

  // Loop through the files
  files.forEach((file) => {
    const filePath = path.join(rootDir, file);
    const stats = fs.statSync(filePath);
    // If it's a directory, generate HtmlWebpackPlugins for HTML files in it
    if (stats.isDirectory()) {
      const htmlFiles = fs
        .readdirSync(filePath)
        .filter((f) => f.endsWith(".html"));
      htmlFiles.forEach((htmlFile) => {
        plugins.push(
          new HtmlWebpackPlugin({
            filename: path.join(filePath, htmlFile).replace(rootDir + "/", ""),
            template: path.join(filePath, htmlFile),
          })
        );
      });
    }
  });
  return plugins;
}

// Generate HtmlWebpackPlugin instances for each HTML file
const htmlPlugins = generateHtmlPlugins(rootDirectory);

// Generate partials dynamically for each directory containing HTML files
const partials = [];
htmlPlugins.forEach((plugin) => {
  const directory = path.dirname(plugin.options.template);
  const partialsInDirectory = findPartials(directory);
  partials.push(...partialsInDirectory);
});

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  mode: "development",
  devServer: {
    watchFiles: ["src/**/*"],
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new CopyPlugin({
      patterns: [{ from: "src/assets", to: "assets" }],
    }),

    // other plugins...
    ...htmlPlugins,
    // Add multiple HtmlWebpackSimpleIncludePlugin instances using the array
    ...partials.map(({ tag, file }) => {
      return new HtmlWebpackSimpleIncludePlugin({
        tag,
        content: fs.readFileSync(file, "utf-8"),
      });
    }),
  ],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
