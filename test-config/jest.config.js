const glob                  = require('glob').sync;
const { resolve, basename } = require('path');

const { WPDIR } = process.env;
const wpDir     = WPDIR ? resolve(WPDIR) : resolve(__dirname, '../../../..');
const wpDist    = `${wpDir}/wp-includes/js/dist`;

const { DIVIDIR } = process.env;
const diviDir     = DIVIDIR ? resolve(DIVIDIR) : resolve(__dirname, '../../../themes/Divi');
const diviDist    = `${diviDir}/includes/builder-5/visual-builder/build`;

const wpPackages = glob(`${wpDist}/*.js`)
  .filter(name => 0 > name.indexOf('.min.js'))
  .map(name => basename(name, '.js'));

const diviPackages = glob(`${diviDist}/*.js`)
  .map(name => basename(name, '.js'));

module.exports = {
  rootDir:          '../',
  moduleNameMapper: {
    [`@wordpress\\/(${wpPackages.join('|')})$`]: `${wpDist}/$1.js`,
    '^react$':                                   `${wpDist}/vendor/react.js`,
    '^react-dom$':                               `${wpDist}/vendor/react-dom.js`,
    [`@divi\\/(${diviPackages.join('|')})$`]:    `${diviDist}/$1.js`,
    '^lodash$':                                  `${wpDist}/vendor/lodash.js`,
  },
  setupFiles: [
    '<rootDir>/test-config/global-mocks.js',
  ],
  preset:     '@wordpress/jest-preset-default',
  snapshotSerializers: ['enzyme-to-json/serializer', '@emotion/jest/serializer'],
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/test-config/babel-transformer.js',
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

    // `${wpDist}/vendor/react`,
    // `${wpDist}/vendor/react-dom`,
    // `${wpDist}/vendor/lodash`,
    // `${wpDist}/vendor/moment`,

    `${wpDist}/escape-html`,
    '<rootDir>/test-config/override-react-use-layout-effect.js',
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

    // `${wpDist}/rich-text`,
    // `${wpDist}/warning`,
    `${wpDist}/components`,

    // `${wpDist}/autop`,
    // `${wpDist}/blob`,
    `${wpDist}/block-serialization-default-parser`,

    // `${wpDist}/html-entities`,
    `${wpDist}/shortcode`,
    `${wpDist}/blocks`,

    // `${wpDist}/keyboard-shortcuts`,
    // `${wpDist}/notices`,
    // `${wpDist}/token-list`,
    // `${wpDist}/url`,
    // `${wpDist}/viewport`,
    // `${wpDist}/wordcount`,
    `${wpDist}/block-editor`,

    // `${wpDist}/dom-ready`,
    
    
    `${diviDist}/data`,
    `${diviDist}/middleware`,
    // `${diviDist}/ajax`,
    `${diviDist}/constant-library`,
    // `${diviDist}/divider-library`,
    `${diviDist}/window`,
    // `${diviDist}/draggable`,
    `${diviDist}/error-boundary`,
    `${diviDist}/icon-library`,
    `${diviDist}/keyboard-shortcuts`,
    // `${diviDist}/mask-and-pattern-library`,
    `${diviDist}/module-utils`,
    // `${diviDist}/numbers`,
    `${diviDist}/context-library`,
    // `${diviDist}/seamless-immutable-extension`,
    // `${diviDist}/clipboard`,
    // `${diviDist}/right-click-options`,
    `${diviDist}/sanitize`,
    `${diviDist}/style-library`,
    // `${diviDist}/tooltip`,
    // `${diviDist}/url`,
    // `${diviDist}/ui-library`,
    // `${diviDist}/field-library`,
    // `${diviDist}/app-frame`,
    `${diviDist}/app-preferences`,
    // `${diviDist}/app-ui`,
    `${diviDist}/settings`,
    // `${diviDist}/colors`,
    // `${diviDist}/hooks`,
    // `${diviDist}/modal`,
    `${diviDist}/module`,
    `${diviDist}/conversion`,
    `${diviDist}/module-library`,
    // `${diviDist}/edit-post`,
    // `${diviDist}/events`,
    // `${diviDist}/fonts`,
    // `${diviDist}/history`,
    // `${diviDist}/page-settings-bar`,
    // `${diviDist}/modal-library`,
    // `${diviDist}/modal-snap-indicator`,
    // `${diviDist}/root`,
    // `${diviDist}/serialized-post`,
    // `${diviDist}/object-renderer`,
    // `${diviDist}/defaults`,
  ],
  testPathIgnorePatterns: [
    '/.git/',
    '/node_modules/',
    '<rootDir>/wordpress/',
    '<rootDir>/.*/scripts/',

    '/__test-cases__',
    '/__mock-data__',
    '/test-config',
  ],
}
