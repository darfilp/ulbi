import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path"
import webpack from "webpack"
import { BuildOptions, BuildPaths } from "./types/config"

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
          title: "Output Management",
          template: options.paths.html,
        }),
      ]
}