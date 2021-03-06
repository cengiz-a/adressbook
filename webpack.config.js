module.exports = {
    entry: './initialize.js',

    output: {
        path: './bin',
        filename: 'app.bundle.js',
    },

    module: {
            loaders: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

            },

            {
                test: /\.handlebars$/,
                loader: 'handlebars-loader',
            }

            ]
    }


};