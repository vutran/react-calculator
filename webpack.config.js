var path = require("path");

module.exports = {
    entry: "./src/app/app.jsx",
    output: {
        path: __dirname,
        filename: "./src/app/build.js"
    },
    module: {
        loaders: [
            { 
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"] 
                }
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    watch: true
};
