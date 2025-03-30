export type BuildMode = 'development' | 'production'

export type BuildPaths = {
    entry: string,
    html: string,
    output: string
}

export interface BuildOptions  {
    isDev: boolean,
    mode: BuildMode,
    paths: BuildPaths
}