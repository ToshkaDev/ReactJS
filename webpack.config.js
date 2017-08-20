var webpack = require("webpack");
var path = require("path");

//copy all my app files to "dist" directory from "src" directory
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

//entry is entry point to  bundle files and /app/index.js is entry file which starts the app
var config = {
    entry: SRC_DIR + "/app/index.js",
    //where to uotput bundled files
    output: {
        //the "/app" folder  will be created automatically
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        //Important for webpack development server, because we put everythiong in DIST_DIR + "/app"
        //but in real server we will deploy our app and this well be our public folder
        publicPath: "/app"
    },
    //Model to convert ES5 to ES6
    module: {
        loaders: [
            {
                //which files to 'test', to look at regarding this loader
                //all js files
                test: /\.js?/,
                //in SRC_DIR directory
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]

    }
};

//config object will be exported as a nodejs module. Webpack will pull this module
//and will read this configuration
module.exports = config;