/**
 * External dependencies.
 */
const babelJest = require('babel-jest');


const isWPGlobal           = /\/wp-includes\/js\/dist\/[^/]+\.js$/;
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
        const newline  = source.indexOf('\n');
        const name     = source.substring(0, newline).split('"')[7];
        source         = source.split('this["wp"]').join('global["wp"]');
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

    return babelJestTransformer.process(source, file, ...args);
  },
};
