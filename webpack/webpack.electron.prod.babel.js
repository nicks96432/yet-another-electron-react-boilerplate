import path from "path";
import merge from "webpack-merge";
import baseConfig from "./webpack.base";

export default merge(baseConfig, {
    mode: "production",

    target: "electron-main",

    entry: {
        index: path.join(__dirname, "../electron/index.ts"),
        preload: path.join(__dirname, "../electron/preload.js")
    },

    output: {
        path: path.join(__dirname, "../build"),
        filename: "[name].js"
    }
});
