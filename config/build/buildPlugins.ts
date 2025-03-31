import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import { BuildOptions } from "./types/config"

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
          title: "Output Management",
          template: options.paths.html,
        }),
      ]
}