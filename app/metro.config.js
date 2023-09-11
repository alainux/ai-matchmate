const blacklist = require('metro-config/src/defaults/exclusionList');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    blacklistRE: blacklist([/amplify\/#current-cloud-backend\/.*/]),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
