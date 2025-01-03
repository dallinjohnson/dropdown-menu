const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // Set to 'production' for production builds
  entry: "./src/index.js", // Main entry point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true, // Clean the dist folder on every build
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Match CSS files
        use: ["style-loader", "css-loader"], // Inject CSS into the DOM
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Match image file extensions
        type: "asset/resource", // Built-in Webpack 5 asset handling
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Use a custom HTML file
    }),
  ],
  devServer: {
    static: "./src", // Serve content from the src folder
    hot: true, // Enable hot module replacement
    open: true, // Automatically open the browser
  },
};
