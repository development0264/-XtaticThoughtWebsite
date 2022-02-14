// Ensure environment variables are read.
require("./config/env");

// using the same check as: node_modules\next\dist\build\webpack-config.js:88:257)
const envProps = Object.keys(process.env).reduce((acc, key) => {
    if (/^(?:NODE_.+)|^(?:__.+)$/i.test(key)) {
        return acc;
    }
    acc[key] = process.env[key];
    return acc;
}, {});

const withImages = require('next-images');

/* eslint-disable */
const babelConfig = JSON.parse(require('fs').readFileSync('.babelrc', 'utf8')); //require('./.babelrc');
const path = require('path');

const getBabelAlias = () => {
    const [_, { alias }] = babelConfig.plugins.find(([name]) => name === 'module-resolver');
    return Object.keys(alias)
        .reduce(
            (acc, key) => ({ ...acc, [key]: path.resolve(__dirname, alias[key]) }),
            {}
        );
};

module.exports = {
    typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
    resolve: {
        alias: {
            ...getBabelAlias()
        }
    },
    ...withImages(),
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
            config.node = {
                fs: 'empty'
            }
        }

        return config;
    },
    env: envProps
};
