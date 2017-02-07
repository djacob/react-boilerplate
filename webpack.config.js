require('es6-promise').polyfill();

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

// Gives us a predictable mapping between package.json and .babelrc
process.env.BABEL_ENV = TARGET;

const common = {
    // Entry accepts a path or an object of entries
    // The build chapter contains an example of the latter
    entry: PATHS.app,

    // Add resolve.extensions. '' is needed to allow imports
    // without an extension. Note the .'s before extensions!!!
    // The matching will fail without!
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: PATHS.build,
        filename: 'static/bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint'],
                include: PATHS.app
            }
        ],
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                include: PATHS.app
                // exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                include: PATHS.app
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                // Include accepts either a path or an array of paths
                // Any CSS files from node_modules that are imported in the app need to be added here
                include: PATHS.app
            },
            /* Font Awesome Loader */
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?&name=static/[name].[ext]&limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg|ico|pdf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=static/[name].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=static/[name].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(PATHS.app, 'index.html'),
            favicon: path.join(PATHS.app, 'assets/favicon.ico'),
            title: 'HelloWorld',
            appMountId: 'app'
        })
    ]
};

// Default configuration
if (!TARGET || TARGET.indexOf('start') !== -1) {
    module.exports = merge(common, {
        devtool: '#inline-source-map',
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,

            // Display only errors to reduce the amount of output
            stats: 'errors-only',

            // Parse host and port from env so this is easy to customize
            host: process.env.HOST,
            port: process.env.PORT,

            /*
            // Parse proxy host and proxy port from env         
            proxy: {
                '/api/*': {
                    target: 'http://' + process.env.PROXY_HOST + ':' + (process.env.PROXY_PORT || '8080'),
                    secure: false
                }
            }
            */
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });
} else if (TARGET.indexOf('production') !== -1) {
    module.exports = merge(common, {
        plugins: [
            new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
        ]
    });
} else {
    module.exports = merge(common, {
        plugins: []
    });
}
