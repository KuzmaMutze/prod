import { BuildOptions } from './types/config';
import webpack from 'webpack';
import { buildLoader } from './buildLoader';
import { buildPlugins } from './buildPlugins';
import { buildResolver } from './buildResolver';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    return {
        mode: options.mode,
        entry: options.paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: options.paths.build,
            clean: true,
        },
        plugins: buildPlugins(options.paths.html),
        module: {
            rules: buildLoader(),
        },
        resolve: buildResolver(),
    };
}
