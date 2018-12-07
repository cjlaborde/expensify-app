 // entry -> output
 const path = require('path')
 // webpack plugins require you ro add extra settings in plugin array here as ExtractTextPlugin did
 const ExtractTextPlugin = require('extract-text-webpack-plugin')

 module.exports = (env) => {
     const isProduction = env === 'production'
     const CSSExtract = new ExtractTextPlugin('styles.css')

    return {
        mode: 'development',
        entry: './src/app.js',
        // entry: './src/playground/hoc.js',
        output: {
            path: path.join(__dirname, 'public'),
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
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
 }


// loader