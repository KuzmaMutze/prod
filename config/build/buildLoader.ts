export function buildLoader() {
    const tsLoader = [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ];

    return tsLoader;
}
