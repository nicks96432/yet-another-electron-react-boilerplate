import path from "path";
import merge from "webpack-merge";
import baseConfig from "./webpack.base";

export default merge(baseConfig, {
    mode: "production",

    target: "electron-main",

    entry: {
        main: path.join(__dirname, "../electron/index.ts")
    },

    output: {
        path: path.join(__dirname, "../build"),
        filename: "index.js"
    }
});
