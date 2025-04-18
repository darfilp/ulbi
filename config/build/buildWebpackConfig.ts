import { buildWebpackDevServer } from "./buildWebpackDevServer";
import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildRules } from "./buildRules";
import { buildResolve } from "./buildResolve";
import { BuildOptions } from "./types/config";

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    plugins: buildPlugins(options),
    module: {
      rules: buildRules(options),
    },
    resolve: buildResolve(options),
    output: {
      filename: "[name].[contenthash].js",
      path: paths.output,
      clean: true,
    },
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildWebpackDevServer(options) : undefined,
  };
};
