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
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.node = {
                fs: "empty"
            };
        }
        return config;
    },
    env: envProps
};
