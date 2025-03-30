import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path"
import webpack from "webpack"
import { BuildPaths } from "./types/config"

export const buildPlugins = ({paths}: {paths: BuildPaths}): webpack.WebpackPluginInstance[] => {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
          title: "Output Management",
          template: paths.html,
        }),
      ]
}