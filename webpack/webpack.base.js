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
                test: /\.(jpe?g|png|gif|web[mp]|svg|eot|[ot]tf|woff2?|wav|mp[34]|m4a|aac|oga)$/,
                type: "asset"
            }
        ]
    },

    resolve: { extensions: [".js", ".jsx", ".json", ".ts", ".tsx"] }
};
