 // entry -> output
 const path = require('path')
 const webpack = require('webpack')
 // webpack plugins require you ro add extra settings in plugin array here as ExtractTextPlugin did
 const ExtractTextPlugin = require('extract-text-webpack-plugin')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'// enviroment variable store enviroment you are in

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test'  })
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development'  })
}

 module.exports = (env) => {
     const isProduction = env === 'production'
     const CSSExtract = new ExtractTextPlugin('styles.css')

    return {
        mode: 'development',
        entry: './src/app.js',
        // entry: './src/playground/hoc.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'main.js'
        },
        module: {
            rules: [{
            loader: 'babel-loader',
            // regular expression to search for files that ends$ with js
            test: /\.js$/,
            exclude: /node_modules/
            }, {
                // s?css means it allows both scss and css files
                test: /\.s?css$/,
                // use allow us to specify group of loaders
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }

                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            // https://webpack.js.org/configuration/dev-server/#devserver-publicpath-
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
}

// loader