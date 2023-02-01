import { BuildOptions } from './types/config';
import webpack from 'webpack';
import { buildLoader } from './buildLoader';
import { buildPlugins } from './buildPlugins';
import { buildResolver } from './buildResolver';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(paths),
        module: {
            rules: buildLoader(options),
        },
        resolve: buildResolver(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
