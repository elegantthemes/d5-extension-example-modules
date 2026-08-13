/**
 * External dependencies.
 */
const babelJest = require('babel-jest');


const isWPGlobal           = /\/wp-includes\/js\/dist\/[^/]+\.js$/;
const isDiviGlobal         = /\/wp-content\/themes\/Divi\/includes\/builder-5\/visual-builder\/build\/[^/]+\.js$/;
const diviModuleName       = /\(window\.divi\s*=\s*window\.divi\s\|\|\s*\{\}\)\.([a-zA-Z]*)\s*=\s*__webpack_exports__;/;
const babelJestTransformer = babelJest.createTransformer({
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


const buildTransformResult = (transformedSource) => ( { code: transformedSource } );


module.exports = {
  ...babelJestTransformer,
  process(source, file, ...args) {
    if (file.indexOf('/wp-includes/js/dist/') > 0) {
      if (file.match(isWPGlobal)) {
        const wpGlobalMarker = '(window.wp = window.wp || {}).';

        if (-1 === source.indexOf(wpGlobalMarker)) {
          return babelJestTransformer.process(source, file, ...args);
        }

        const name = source.split(wpGlobalMarker)[1].split(' =')[0].trim();

        source = source.split('this["wp"]').join('global["wp"]');

        const exporter = `;
        if ('object' === typeof global.wp.${name}) {
          Object.keys(global.wp.${name}).forEach((key) => {
            module.exports[key] = global.wp.${name}[key];
          });
        } else {
          module.exports = global.wp.${name};
        }`;
        return buildTransformResult( `${source}${exporter}` );
      }
      return buildTransformResult( source );
    }

    // TODO: This one will work with unminified code. But after production, we need to recheck.
    if (file.indexOf('/wp-content/themes/Divi/includes/builder-5/visual-builder/build/') > 0) {
      if (file.match(isDiviGlobal)) {
        const diviGlobalMatch = source.match(diviModuleName);

        if ( ! diviGlobalMatch) {
          return babelJestTransformer.process(source, file, ...args);
        }

        const name = diviGlobalMatch[1];
        source = source.split('(window.divi = window.divi || {}).').join('(global.divi = global.divi || {}).');

        const exporter = `;
        if ('object' === typeof global.divi.${name}) {
          Object.keys(global.divi.${name}).forEach((key) => {
            module.exports[key] = global.divi.${name}[key];
          });
        } else {
          module.exports = global.divi.${name};
        }`;
        return buildTransformResult( `${source}${exporter}` );
      }
      return buildTransformResult( source );
    }

    return babelJestTransformer.process(source, file, ...args);
  },
};
