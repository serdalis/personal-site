const fs = require('fs');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const defaultPlugins = [
    new MiniCssExtractPlugin({
        filename: 'css/[name].css',
    }),
    new StylelintPlugin({
        configFile: '.stylelintrc',
        files: '**/*.scss',
    }),
    new ESLintPlugin(),
];

const defaultConfig = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, 'compiled'),
        filename: 'js/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(ts|tsx)$/i,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader'],
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    devServer: {
        devMiddleware: {
            writeToDisk: true,
        },
        static: path.join(__dirname, 'compiled'),
        compress: true,
        server: {
            type: 'http',
            options: {
                port: 9314,
            }
        },
    },
    watchOptions: {
        ignored: '**/node_modules',
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
};

module.exports = (env, argv) => {
    
    const devConfig = { devtool: 'eval-cheap-module-source-map' };
    const prodConfig = {};
    const envConfig = argv.mode === 'production' ? prodConfig : devConfig;

    return [
        {
            name: 'website',
            entry: './js/index.tsx',
            ...defaultConfig,
            ...envConfig,
            plugins: [
                ...defaultPlugins,
                new HtmlWebpackPlugin({
                    title: 'Serdalis',
                    filename: path.join(__dirname, 'compiled/serdalis.html'),
                    template: 'html/template.html',
                    hash: true,
                    inject: 'body'
                })
            ]
        },
    ]
};

module.exports.parallelism = 4;