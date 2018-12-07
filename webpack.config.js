 // entry -> output
 const path = require('path')

 module.exports = {
    mode: 'development',
    entry: './src/app.js',
    // entry: './src/playground/destructuringArray.js',
    // entry: './src/playground/hoc.js',
    // entry: './src/playground/redux-expensify.js',
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
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
}

// loader