const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

// const path = require('path');

// module.exports = {
//   projectRoot: path.resolve(__dirname),
//   watchFolders: [path.resolve(__dirname, 'src')],
// };
