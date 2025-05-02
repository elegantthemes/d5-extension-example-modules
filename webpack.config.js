export default {
  // Webpack starts bundling the assets from the following file.
  // @see https://webpack.js.org/concepts/#entry
  entry: {
    bundle: './src/index.ts',
  },

  // Divi Visual Builder use of scripts that is already enqueued by WordPress and available
  // in global scope so those scripts don't need to be included on the bundle. For webpack
  // to recognize those files, the global variable needs to be registered as externals.
  // These allows global variable listed below to be imported into the module.
  // @see https://webpack.js.org/configuration/externals/#externals
  externals: {
    // Divi dependencies.
    '@divi/conversion': ['divi', 'conversion'],
    '@divi/data': ['divi', 'data'],
    '@divi/field-library': ['divi', 'fieldLibrary'],
    '@divi/icon-library': ['divi', 'iconLibrary'],
    '@divi/modal': ['divi', 'modal'],
    '@divi/module': ['divi', 'module'],
    '@divi/module-utils': ['divi', 'moduleUtils'],
    '@divi/module-library': ['divi', 'moduleLibrary'],
    '@divi/rest': ['divi', 'rest'],
    '@divi/style-library': ['divi', 'styleLibrary'],
  },
};
