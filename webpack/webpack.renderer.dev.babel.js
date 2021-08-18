import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { spawn } from "child_process";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { resolve } from "path";
import { NoEmitOnErrorsPlugin } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { merge } from "webpack-merge";
import common from "./webpack.base";

export default merge(common, {
    mode: "development",

    devtool: "inline-source-map",

    target: ["web", "electron-renderer"],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    { loader: "css-loader", options: { sourceMap: true } }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    { loader: "css-loader", options: { sourceMap: true } },
                    "sass-loader"
                ]
            }
        ]
    },

    plugins: [
        new BundleAnalyzerPlugin({ openAnalyzer: false }),

        new NoEmitOnErrorsPlugin(),

        new ReactRefreshWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: resolve(__dirname, "../src/index.html")
        })
    ],

    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: {
            verbose: true,
            disableDotRule: false
        },
        onBeforeSetupMiddleware: devServer => {
            console.log("starting electron ...");
            spawn(
                /^win/.test(process.platform) ? "npm.cmd" : "npm",
                ["run", "start:electron"],
                {
                    env: process.env,
                    stdio: "inherit"
                }
            )
                .on("close", code => process.exit(code))
                .on("error", error => console.error(error));
        }
    }
});
