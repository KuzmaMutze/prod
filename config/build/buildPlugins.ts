import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import { BuildOptions, BuildPaths } from './types/config';

export function buildPlugins(path: BuildPaths['html']) {
    return [
        new HtmlWebpackPlugin({
            title: 'Production Project',
            template: path,
        }),
        new webpack.ProgressPlugin(),
    ];
}
