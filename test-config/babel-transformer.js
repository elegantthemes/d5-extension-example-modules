/**
 * External dependencies.
 */
const babelJest = require('babel-jest');


const isWPGlobal           = /\/wp-includes\/js\/dist\/[^/]+\.js$/;
const isDiviGlobal         = /\/wp-content\/themes\/Divi\/includes\/builder-5\/visual-builder\/build\/[^/]+\.js$/;
const diviModuleName       = /\(window\.divi\s*=\s*window\.divi\s\|\|\s*\{\}\)\.([a-zA-Z]*)\s*=\s*__webpack_exports__;/;
const babelJestTransformer = babelJest.default.createTransformer({
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
  ],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
});


module.exports = {
  ...babelJestTransformer,
  process(source, file, ...args) {
    if (file.indexOf('/wp-includes/js/dist/') > 0) {
      if (file.match(isWPGlobal)) {
        const name = source.split('(window.wp = window.wp || {}).')[1].split(' =')[0].trim();

        source = source.split('this["wp"]').join('global["wp"]');

        const exporter = `;
        if ('object' === typeof global.wp.${name}) {
          Object.keys(global.wp.${name}).forEach((key) => {
            module.exports[key] = global.wp.${name}[key];
          });
        } else {
          module.exports = global.wp.${name};
        }`;
        return `${source}${exporter}`;
      }
      return source;
    }

    // TODO: This one will work with unminified code. But after production, we need to recheck.
    if (file.indexOf('/wp-content/themes/Divi/includes/builder-5/visual-builder/build/') > 0) {
      if (file.match(isDiviGlobal)) {
        const name = source.match(diviModuleName)[1];
        source = source.split('(window.divi = window.divi || {}).').join('(global.divi = global.divi || {}).');

        const exporter = `;
        if ('object' === typeof global.divi.${name}) {
          Object.keys(global.divi.${name}).forEach((key) => {
            module.exports[key] = global.divi.${name}[key];
          });
        } else {
          module.exports = global.divi.${name};
        }`;
        return `${source}${exporter}`;
      }
      return source;
    }

    return babelJestTransformer.process(source, file, ...args);
  },
};
