import webpack from "webpack";
import { BuildOptions } from "./types/config";

export const buildResolve = (options: BuildOptions): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    modules: [options.paths.src, "node_modules"],
    alias: {},
  };
};
