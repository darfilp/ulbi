import { Configuration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export const buildWebpackDevServer = (options: BuildOptions): Configuration => {
  return {
    open: true,
    port: options.port,
    historyApiFallback: true, // !Решает проблему при перезагрузке на относительном пути
  };
};
