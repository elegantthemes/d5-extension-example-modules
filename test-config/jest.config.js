const glob                  = require('glob').sync;
const { resolve, basename } = require('path');

const pluginRootDirectory = resolve(__dirname, '..');
const { WPDIR } = process.env;
const wpDir     = WPDIR ? resolve(WPDIR) : resolve(pluginRootDirectory, '../../..');
const wpDist    = `${wpDir}/wp-includes/js/dist`;

const defaultDiviThemeRootPath = resolve(pluginRootDirectory, '../../themes/Divi');
const defaultDiviBuildPath     = `${defaultDiviThemeRootPath}/includes/builder-5/visual-builder/build`;

const { DIVIDIR } = process.env;
const diviDist    = DIVIDIR ? resolve(DIVIDIR) : defaultDiviBuildPath;

const wpPackages = glob(`${wpDist}/*.js`)
  .filter(name => 0 > name.indexOf('.min.js'))
  .map(name => basename(name, '.js'));

const diviPackages = glob(`${diviDist}/*.js`)
  .map(name => basename(name, '.js'));

module.exports = {
  rootDir:          pluginRootDirectory,
  moduleNameMapper: {
    [`@wordpress\\/(${wpPackages.join('|')})$`]: `${wpDist}/$1.js`,
    '^react$':                                   `${wpDist}/vendor/react.js`,
    '^react-dom$':                               `${wpDist}/vendor/react-dom.js`,
    [`@divi\\/(${diviPackages.join('|')})$`]:    `${diviDist}/$1.js`,
    '^lodash$':                                  `${wpDist}/vendor/lodash.js`,
  },
  setupFiles: [
    resolve(__dirname, 'global-mocks.js'),
  ],
  preset:     '@wordpress/jest-preset-default',
  snapshotSerializers: ['enzyme-to-json/serializer', '@emotion/jest/serializer'],
  transform: {
    '^.+\\.[jt]sx?$': resolve(__dirname, 'babel-transformer.js'),
  },
  setupFilesAfterEnv: [
    `${wpDist}/vendor/wp-polyfill`,
    `${wpDist}/vendor/wp-polyfill-fetch`,
    `${wpDist}/vendor/wp-polyfill-node-contains`,
    `${wpDist}/vendor/wp-polyfill-dom-rect`,
    `${wpDist}/vendor/wp-polyfill-url`,
    `${wpDist}/vendor/wp-polyfill-formdata`,
    `${wpDist}/vendor/wp-polyfill-element-closest`,
    `${wpDist}/dom-ready`,
    `${wpDist}/hooks`,
    `${wpDist}/i18n`,
    `${wpDist}/a11y`,
    `${wpDist}/escape-html`,
    resolve(__dirname, 'override-react-use-layout-effect.js'),
    `${wpDist}/element`,
    `${wpDist}/is-shallow-equal`,
    `${wpDist}/priority-queue`,
    `${wpDist}/compose`,
    `${wpDist}/deprecated`,
    `${wpDist}/dom`,
    `${wpDist}/keycodes`,
    `${wpDist}/primitives`,
    `${wpDist}/redux-routine`,
    `${wpDist}/data`,
    `${wpDist}/components`,
    `${wpDist}/block-serialization-default-parser`,
    `${wpDist}/shortcode`,
    `${wpDist}/blocks`,
    `${wpDist}/block-editor`,
    `${diviDist}/data`,
    `${diviDist}/middleware`,
    `${diviDist}/constant-library`,
    `${diviDist}/window`,
    `${diviDist}/error-boundary`,
    `${diviDist}/icon-library`,
    `${diviDist}/keyboard-shortcuts`,
    `${diviDist}/module-utils`,
    `${diviDist}/context-library`,
    `${diviDist}/sanitize`,
    `${diviDist}/style-library`,
    `${diviDist}/app-preferences`,
    `${diviDist}/settings`,
    `${diviDist}/module`,
    `${diviDist}/conversion`,
    `${diviDist}/module-library`,
    resolve(__dirname, 'jest-rtl-setup.js'),
  ],
  testPathIgnorePatterns: [
    '/.git/',
    '/node_modules/',
    '<rootDir>/wordpress/',
    '<rootDir>/.*/scripts/',
    '/__test-cases__',
    '/__mock-data__',
    '/test-config',
    '<rootDir>/src/components/static-module/__tests__/module-json.test.ts',
  ],
};
