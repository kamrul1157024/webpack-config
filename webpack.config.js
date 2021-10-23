const path = require('path');
const mode = (process.env.NODE_ENV === 'production') ? 'production' : 'development';
const folder = 'public';
module.exports = {
    mode,
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, folder)
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    devtool: 'source-map',
    devServer: {
        static: `./${folder}`,
    }
};