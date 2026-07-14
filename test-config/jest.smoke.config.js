const { resolve } = require('path');

const pluginRootDirectory = resolve(__dirname, '..');

module.exports = {
  rootDir:    pluginRootDirectory,
  preset:     '@wordpress/jest-preset-default',
  testMatch:  [
    '<rootDir>/src/components/static-module/__tests__/module-json.test.ts',
    '<rootDir>/src/components/dynamic-module/__tests__/metadata.test.ts',
    '<rootDir>/src/components/d4-module/__tests__/conversion.test.ts',
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
