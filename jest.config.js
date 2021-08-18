module.exports = {
    moduleNameMapper: {
        "\\.(c|le|s[ac])ss$": "identity-obj-proxy",
        "\\.(jpe?g|png|gif|web[mp]|svg|eot|[ot]tf|woff2?|wav|mp[34]|m4a|aac|oga)$":
            "<rootDir>/scripts/mock-asset.js"
    },
    preset: "ts-jest",
    setupFilesAfterEnv: ["./src/setupTests.ts"],
    testEnvironment: "jsdom",
    verbose: true
};
