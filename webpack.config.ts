import path from 'path'
import webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

const mode = 'development'

const isDev = mode === 'development'


const config: webpack.Configuration = buildWebpackConfig({
  isDev,
  mode: 'development',
  paths: {
    entry: path.resolve(__dirname, "src", "index.ts"),
    html: path.resolve(__dirname, "public", "index.html"),
    output: path.resolve(__dirname, "dist")
  }
})


export default config