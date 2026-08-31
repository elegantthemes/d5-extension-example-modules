const { resolve } = require('path');

const pluginRootDirectory = resolve(__dirname, '..');

module.exports = {
  rootDir:    pluginRootDirectory,
  preset:     '@wordpress/jest-preset-default',
  moduleNameMapper: {
    '^@divi/module$': resolve( __dirname, 'mocks/divi-module.js' ),
  },
  testMatch:  [
    '<rootDir>/src/components/static-module/__tests__/edit.test.tsx',
  ],
  transform: {
    '^.+\\.[jt]sx?$': resolve(__dirname, 'babel-transformer.js'),
  },
  setupFilesAfterEnv: [
    resolve(__dirname, 'jest-rtl-setup.js'),
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/test-config/',
  ],
};
