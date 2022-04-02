const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const SRC_DIR = path.join(__dirname, "client/src");
const PUBLIC_DIR = path.join(__dirname, "client/public/bundle");

module.exports = {
  mode: "development",
  entry: path.join(SRC_DIR, "index.jsx"),
  output: {
    filename: "bundle.js",
    path: PUBLIC_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        //  : "babel-jest",
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.png|svg|jpg|jpeg|gif$/,
        exclude: /node_modules/,
        use: "file-loader",
      },
    ],
  },
};

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     filename: "bundle.[hash].js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./src/index.html",
//     }),
//   ],
//   resolve: {
//     modules: [__dirname, "src", "node_modules"],
//     extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loader: require.resolve("babel-loader"),
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.png|svg|jpg|jpeg|gif$/,
//         use: ["file-loader"],
//       },
//     ],
//   },
// };
