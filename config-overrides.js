/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
const webpack = require('webpack')
const { configPaths } = require('react-app-rewire-alias')
const path = require('path')

// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    const aliasMapEntries = Object.entries(
        configPaths('./tsconfig.paths.json')
    ).map(([key, value]) => [key, path.resolve(__dirname, value)])

    const aliasMap = Object.fromEntries(aliasMapEntries)

    config.resolve.fallback = {
        url: require.resolve('url'),
        assert: require.resolve('assert'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        buffer: require.resolve('buffer'),
        stream: require.resolve('stream-browserify'),
    }
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        })
    )

    config.resolve.alias = {
        ...config.resolve.alias,
        ...aliasMap,
    }

    return config
}
