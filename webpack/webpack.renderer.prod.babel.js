import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import TerserWebpackPlugin from "terser-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { merge } from "webpack-merge";
import baseConfig from "./webpack.base";

export default merge(baseConfig, {
    mode: "production",

    target: ["web", "electron-renderer"],

    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },

    optimization: {
        minimizer: [new TerserWebpackPlugin(), new CssMinimizerPlugin()]
    },

    plugins: [
        new BundleAnalyzerPlugin({ analyzerMode: "static" }),

        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../src/index.html"),
            minify: {
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin({ filename: "css/[name].[contenthash].css" })
    ]
});
