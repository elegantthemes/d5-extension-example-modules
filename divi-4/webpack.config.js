const path = require('path');

module.exports = {
    // Webpack starts bundling the assets from the following file.
    // @see https://webpack.js.org/concepts/#entry
    entry: {
        bundle: './src/index.js',
    },

    // Divi Visual Builder use of scripts that is already enqueued by WordPress and available
    // in global scope so those scripts don't need to be included on the bundle. For webpack
    // to recognize those files, the global variable needs to be registered as externals.
    // These allows global variable listed below to be imported into the module.
    // @see https://webpack.js.org/configuration/externals/#externals
    externals: {
        // Third party dependencies.
        underscore: '_',
        react: 'React',
        'react-dom': 'ReactDOM',
        jquery: 'jQuery',
    },

    // This option determine how different types of module within the project will be treated.
    // @see https://webpack.js.org/configuration/module/
    module: {

        // This option sets up loaders for webpack configuration.
        // Loaders allow webpack to process various types because by default webpack only
        // understand JavaScript and JSON files.
        // @see https://webpack.js.org/concepts/#loaders
        rules: [
            // Handle `.jsx` files.
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [

                    // Spawns multiple processes and split work between them. This makes faster build.
                    // @see https://webpack.js.org/loaders/thread-loader/
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: -1,
                        },
                    },

                    // Transpile JavaScript files using Babel. Translates newer syntax with less support
                    // into older syntax with more support so the project can use newer syntax and have
                    // them automatically translated into older syntax for compatibility support.
                    // @see https://www.npmjs.com/package/babel-loader
                    // @see https://babeljs.io/
                    {
                        loader: 'babel-loader',
                        options: {
                            compact: false,
                            presets: [

                                // Preset that adds configuration for handling latest JavaScript syntax.
                                // @see https://babeljs.io/docs/en/babel-preset-env
                                ['@babel/preset-env', {
                                    modules: false,
                                    targets: '> 5%',
                                }],

                                // Preset that added configuration for handling react & JSX.
                                // @see https://babeljs.io/docs/en/babel-preset-react
                                '@babel/preset-react',
                            ],
                            cacheDirectory: false,
                        },
                    }
                ]
            },
        ]
    },

    // Determine how modules are resolved.
    // @see https://webpack.js.org/configuration/resolve/
    resolve: {
        // Allows extension to be leave off when importing.
        // @see https://webpack.js.org/configuration/resolve/#resolveextensions
        extensions: ['.js', '.jsx'],
    },

    // Determine where the created bundles will be outputted.
    // @see https://webpack.js.org/concepts/#output
    output: {
        filename: 'd5-extension-example-modules-divi4.js',
        path: path.resolve(__dirname, 'build'),
    },
};
