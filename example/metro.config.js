const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '..');

const config = getDefaultConfig(projectRoot);

// Watch parent src folder
config.watchFolders = [workspaceRoot];

// Force all modules to resolve from example's node_modules
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
];

// Block parent's node_modules
config.resolver.blockList = [
  new RegExp(path.resolve(workspaceRoot, 'node_modules').replace(/[/\\]/g, '[/\\\\]') + '.*'),
];

// Explicitly resolve critical packages from example
config.resolver.extraNodeModules = {
  'react': path.resolve(projectRoot, 'node_modules/react'),
  'react-dom': path.resolve(projectRoot, 'node_modules/react-dom'),
  'react-native': path.resolve(projectRoot, 'node_modules/react-native'),
  'react-native-web': path.resolve(projectRoot, 'node_modules/react-native-web'),
  'react-native-reanimated': path.resolve(projectRoot, 'node_modules/react-native-reanimated'),
};

module.exports = config;
