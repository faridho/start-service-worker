module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src',
        open: true
    },
    mode: 'development'
}