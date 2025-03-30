export type BuildMode = 'development' | 'production'

export type BuildEnv = {
    mode: BuildMode,
    port: number
}

export type BuildPaths = {
    entry: string,
    html: string,
    output: string
}

export interface BuildOptions  {
    isDev: boolean,
    mode: BuildMode,
    paths: BuildPaths,
    port: number
}