const { src, dest } = require( 'gulp' );
const gulpZip = require( 'gulp-zip' );
const package = require('./package.json');

const files = [
    '**/*',

    // Ignored folders.
    '!**/.*/**', // Hidden files/dirs on Mac/Linux
    '!**/__*/**', // Hidden dirs on Mac
    '!.yarn/**',
    '!node_modules/**',
    '!src/**',
    '!test-config/**',
    '!storybook-assets/**',

    // Ignored files.
    '!**/*.zip',
    '!**/*.map',
    '!.gitignore',
    '!.yarnrc.yml',
    '!gulpfile.js',
    '!package.json',
    '!tsconfig.json',
    '!webpack.config.js',
    '!yarn.lock',
    '!composer.json',
    '!composer.lock',
];

const zip = () => src( files ).pipe( gulpZip( package.name + '-v' + package.version + '.zip' ) ).pipe( dest( './' ) );

exports.zip = zip;