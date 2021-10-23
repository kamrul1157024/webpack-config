const mode = (process.env.NODE_ENV === 'production') ? 'production' : 'development';
module.exports = {
    mode,
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
        static: "./dist",
    }
};