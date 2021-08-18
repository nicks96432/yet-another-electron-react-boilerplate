import path from "path";

export default {
    output: {
        path: path.join(__dirname, "../build/app"),
        filename: "js/[name].[contenthash].js",
        assetModuleFilename: "assets/[name].[hash][ext]"
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(?:ico|gif|png|jpe?g|svg|webp|woff2?|otf|ttf|eot)$/,
                type: "asset"
            }
        ]
    },

    resolve: { extensions: [".js", ".jsx", ".json", ".ts", ".tsx"] }
};
