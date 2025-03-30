import path from 'path'
import webpack from 'webpack'
import { buildPlugins } from './buildPlugins'
import { buildRules } from './buildRules'
import { buildResolve } from './buildResolve'
import { BuildOptions } from './types/config'


export const buildWebpackConfig = (options: BuildOptions):webpack.Configuration => {
    const {mode, paths} = options

    return {
      mode,
      entry: paths.entry,
      plugins: buildPlugins({paths}),
      module: {
        rules: buildRules(),
      },
      resolve: buildResolve(),
      output: {
        filename: "[name].[contenthash].js",
        path: paths.output,
        clean: true,
      },
    }
}