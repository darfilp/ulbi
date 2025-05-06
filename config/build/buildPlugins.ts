import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import BundleAnalyzerPlugin from "webpack-bundle-analyzer";

export const buildPlugins = (
  options: BuildOptions
): webpack.WebpackPluginInstance[] => {
  return [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css",
    }),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: options.paths.html,
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: options.isDev,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin.BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ];
};
